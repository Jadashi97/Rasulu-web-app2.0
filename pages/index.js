import React from 'react';
import tw from 'tailwind-styled-components';
import Header from '../components/Header';

const index = () => {
  return (
    <Wrapper>
      <Header/>
    </Wrapper>
  )
}

export default index;


const Wrapper = tw.div`
    flex flex-col h-screen
`;
