import React,{useContext, useState} from 'react';
import tw from 'tailwind-styled-components';
import Header from '../components/Header';
import SelectCounty from '../components/SelectCounty';
import RecipientName from '../components/RecipientName';
import InputAmount from '../components/InputAmount';
import SwitchCurrency from '../components/SwitchCurrency';

const Index = () => {
    return (
      <Wrapper> 
          <Header/>
          <SelectCounty/>
          <RecipientName/>
          <ConversionContainer>
            <InputAmount/>
            {/* <SwitchCurrency/> */}
          </ConversionContainer>
      </Wrapper>
    )
}

export default Index;


const Wrapper = tw.div`
 flex flex-col h-screen w-full md: w-auto bg-white p-4 
`;

const ConversionContainer = tw.div`
  flex flex-row 
  justify-between
  mt-10
  text-center
  text-222
  min-h-20rem
  rounded-md
  p-8
  shadow-md
  ring-1 ring-gray-200 opacity-80
`;