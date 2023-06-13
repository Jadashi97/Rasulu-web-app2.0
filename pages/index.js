import React from 'react';
import tw from 'tailwind-styled-components';

const index = () => {
  return (
    <Wrapper>
      <ActionItems>
         <HeaderBox>
            <HeaderLogo src='https://cdn.pixabay.com/photo/2020/04/18/14/58/money-5059442_640.jpg'/>
            <CompanyName>rasulu</CompanyName>
         </HeaderBox>

      </ActionItems>
    </Wrapper>
  )
}

export default index;


const Wrapper = tw.div`
 flex flex-col h-screen w-full md: w-auto bg-white p-4
`;

const ActionItems = tw.div`
  flex flex-1 p-4
`;

const HeaderBox = tw.div`
  flex flex-1 justify-between
`;


const HeaderLogo = tw.img`
  h-28 w-20
`;

const CompanyName = tw.div`
  h-28
`;