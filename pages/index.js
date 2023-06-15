import React from 'react';
import tw from 'tailwind-styled-components';
import Header from '../components/Header';
import SelectCounty from '../components/SelectCounty';
import RecipientName from '../components/RecipientName';

const index = () => {
  return (
    <Wrapper>
        <Header/>
        <SelectCounty/>
        <RecipientName/>
    </Wrapper>
  )
}

export default index;


const Wrapper = tw.div`
 flex flex-col h-screen w-full md: w-auto bg-white p-4
`;