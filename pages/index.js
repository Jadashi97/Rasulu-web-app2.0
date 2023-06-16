import React from 'react';
import tw from 'tailwind-styled-components';
import Header from '../components/Header';
import SelectCounty from '../components/SelectCounty';
import RecipientName from '../components/RecipientName';
import InputAmount from '../components/InputAmount';

const index = () => {

  return (
    <Wrapper>
        <Header/>
        <SelectCounty/>
        <RecipientName/>
        <ConversionContainer>
          <InputAmount/>
          {/* <InputAmount/> */}
        </ConversionContainer>
    </Wrapper>
  )
}

export default index;


const Wrapper = tw.div`
 flex flex-col h-screen w-full md: w-auto bg-white p-4 
`;

const ConversionContainer = tw.div`
  flex flex-1 flex-row 
  m-8 justify-between 
  bg-fdfdfd
  mt-10
  text-center
  text-222
  min-h-20rem
  rounded-md
  p-8
  shadow-md
  shadow-sm ring-1 ring-gray-200 opacity-80
`;