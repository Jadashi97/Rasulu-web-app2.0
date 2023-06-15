import React, {useState} from 'react';
import tw from 'tailwind-styled-components';
import { Autocomplete, Grid, Skeleton, TextField } from "@mui/material";
import useAxios from "../hooks/useAxios";

const SelectCountry = (props) => {
  const { value, setValue, label } = props;
  const [data, loaded, error] = useAxios("https://restcountries.com/v3.1/all");
  console.log(data);

  if (loaded) {
    return (
      <Grid item xs={12} md={3}>
        <Skeleton variant="rounded" height={60} />
      </Grid>
    );
  }
  if (error) {
    return "something went wrong!";
  }

  const dataFilter = data.filter((item) => "currencies" in item);
  const dataCountries = dataFilter.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`;
  });

  return (
    <Wrapper>
      <Title>Choose Country to send money: </Title>
      <CountryContainer>
          <Autocomplete
            value={value}
            disableClearable
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            options={dataCountries}
            renderInput={(params) => <TextField {...params} label={label} />}
          />
      </CountryContainer>
    </Wrapper>
  );
};

export default SelectCountry;

const Wrapper = tw.div`
    flex flex-row 
`;

const CountryContainer = tw.div`
  flex-1 p-4 w-1/2
`;

const Title = tw.div`
  flex text-violet-400 font-bold pl-4 md:text-3xl self-center
`;