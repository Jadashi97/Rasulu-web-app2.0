import React, {useEffect} from 'react';
import tw from 'tailwind-styled-components';

const SelectContact = () => {

        useEffect(() => {
            requestContactAccess();
        }, []);
    
      const requestContactAccess = () => {
        if ('contacts' in navigator) {
          navigator.contacts.requestPermission().then(permissionState => {
            if (permissionState === 'granted') {
              fetchContacts();
            } else {
              console.log('Permission denied');
            }
          });
        } else {
          console.log('Contacts API not supported in this browser');
        }
      };
    
      const fetchContacts = () => {
        if ('contacts' in navigator) {
          navigator.contacts.select(['name', 'phoneNumbers']).then(contacts => {
            // Process contacts array
            console.log(contacts);
          });
        } else {
          console.log('Contacts API not supported in this browser');
        }
      };
    
      return (
        <Container>
          <Button onClick={fetchContacts}>Fetch Contacts</Button>
        </Container>
      );
}

export default SelectContact;

const Button = tw.button`
  bg-blue-500
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded
`;

const Container = tw.div`
  mt-8
  flex
  justify-center
`;