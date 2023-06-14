import React from 'react';
import tw from 'tailwind-styled-components';
import Header from '../components/Header';
import SelectCounty from '../components/SelectCounty';

const index = () => {
  return (
    <Wrapper>
        <Header/>
        <SelectCounty/>
    </Wrapper>
  )
}

export default index;


const Wrapper = tw.div`
 flex flex-col h-screen w-full md: w-auto bg-white p-4
`;