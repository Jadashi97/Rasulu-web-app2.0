import { useEffect, useState, useContext } from "react";
// import "./App.css";
import InputAmount from "./components/InputAmount";
import SwitchCurrency from "./components/SwitchCurrency.jsx";
import SelectRegion from "./components/SelectRegion";
// import Home from "./components/Home";
import { Container, Typography, Grid, Box, Link } from "@mui/material";
import { CurrencyContext } from "./context/CurrencyContext";
import axios from "axios";

function MainApp() {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFristAmount,
  } = useContext(CurrencyContext);

  const [resultCurrency, setResultCurrency] = useState(0);
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];
  console.log(resultCurrency);

  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10%",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgb(0, 0, 0, 0.1)",
    position: "relative",
  };

  return (
    <div>
      <Container maxWidth="md" sx={boxStyles}>
        <Typography
          variant="h4"
          sx={{ marginBottom: "2rem", fontWeight: "bold" }}
        >
          Rasulu Coming Soon!!!!
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
          We dont need Dahabshill/Western Union/Remitly
        </Typography>
        <Grid container spacing={2}>
          <InputAmount />
          <SelectRegion
            value={fromCurrency}
            setValue={setFromCurrency}
            label="From"
          />
          <SwitchCurrency />
          <SelectRegion
            value={toCurrency}
            setValue={setToCurrency}
            label="To"
          />
        </Grid>

        {firstAmount ? (
          <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
            <Typography>
              {firstAmount} {fromCurrency} =
            </Typography>
            <Typography
              variant="h5"
              sx={{ marginTop: "5px", fontWeight: "bold" }}
            >
              {resultCurrency * firstAmount} {toCurrency}
            </Typography>
          </Box>
        ) : (
          " "
        )}
        <Typography
          fontSize="10px"
          sx={{ position: "absolute", bottom: "1rem", right: "1rem" }}
        >
          <Link>Lets Get in Touch!</Link>
        </Typography>
      </Container>
    </div>
  );
}

export default MainApp;
