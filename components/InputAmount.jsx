import React from "react";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyConverter";

const InputAmount = () => {
  // const { firstAmount, setFirstAmount } = useContext(CurrencyContext);

  return (
    <Grid>
      <TextField
        // value={firstAmount}
        onChange={(e) => setFirstAmount(e.target.value)}
        label="You send"
        fullWidth
        inputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default InputAmount;
