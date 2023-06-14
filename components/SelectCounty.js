import React from 'react';
import tw from 'tailwind-styled-components';

const SelectCounty = () => {
  return (
        <CountryContainer>
            <Title>Send send money to</Title>
            <CountryInput>
                <Input/>
            </CountryInput>
        </CountryContainer>
  )
}

export default SelectCounty;

const CountryContainer = tw.div`
  flex-1 p-4
`;

const Title = tw.div`
  flex-1  text-violet-500 font-bold pl-4
`;

const CountryInput = tw.div`

`;

const Input = tw.div`

`;