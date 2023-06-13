import React from 'react';
import tw from 'tailwind-styled-components';

const Header = () => {
  return (
      <MainHeaderPage>
        <TitleImage src="https://cdn.pixabay.com/photo/2020/04/18/14/58/money-5059442_640.jpg"/>
        <Title>
            rasulu
        </Title>
      </MainHeaderPage>
  )
}

export default Header;

const MainHeaderPage = tw.div`
     flex flex-row h-scre
`;

const TitleImage = tw.img`
   flex-1 h-16 object-contain
`;

const Title = tw.div`
    text-4xl text-black p-4
`;