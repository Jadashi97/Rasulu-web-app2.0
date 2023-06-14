import React from 'react';
import tw from 'tailwind-styled-components';

const Header = () => {
  return (
    <Wrapper>
        <HeaderBox>
            <HeaderLogo src='https://cdn.pixabay.com/photo/2020/04/18/14/58/money-5059442_640.jpg'/>
            <CompanyName>rasulu</CompanyName>
            <HeaderLogo src='https://cdn.pixabay.com/photo/2021/07/11/19/44/payment-6404790_640.jpg'/>
        </HeaderBox>
  </Wrapper>
  )
}

export default Header;

const Wrapper = tw.div`
 flex flex-col h-1/8 w-full md: w-auto bg-gray-100 p-4
`;

const HeaderBox = tw.div`
  flex flex-1 justify-between
`;

const HeaderLogo = tw.img`
  h-16 object-contain rounded-full m-4
`;

const CompanyName = tw.div`
  text-5xl text-black p-4 m-4 text-center rounded-full bg-gradient-to-r from-purple-400 md:from-yellow-500
`;