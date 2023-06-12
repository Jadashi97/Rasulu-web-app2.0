import React from 'react';
import tw from 'tailwind-styled-components';

const Header = () => {
  return (
    <Wrapper>
      <MainHeaderPage>
        <TitleImage src="https://cdn.pixabay.com/photo/2019/10/11/09/16/bank-4541449_640.jpg"/>
        <Title>
            rasulu
        </Title>
      </MainHeaderPage>
    </Wrapper>
  )
}

export default Header;

const Wrapper = tw.div`
flex flex-col h-screen w-full md: w-auto bg-white p-4
`;

const MainHeaderPage = tw.div`
     flex flex-1 flex-col justify-between
`;

const TitleImage = tw.img`
    h-32 object-contain
`;

const Title = tw.div`
    text-4xl text-black p-4 mt-8 text-center bg-gradient-to-r from-purple-400 md:from-yellow-500
`;