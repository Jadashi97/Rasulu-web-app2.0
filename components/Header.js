import React from 'react';
import tw from 'tailwind-styled-components';

const Header = () => {
  return (
    <Wrapper>
      <MainHeaderPage>
            rasulu
      </MainHeaderPage>
    </Wrapper>
  )
}

export default Header;

const Wrapper = tw.div`
    flex
`;

const MainHeaderPage = tw.div`
    flex p-6 
`;
