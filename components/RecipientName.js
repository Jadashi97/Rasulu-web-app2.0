import React from 'react';
import { Grid, InputAdornment, TextField } from "@mui/material";
import {FcContacts} from 'react-icons/fc';
import Link from 'next/link';

const RecipientName = () => {
  return (
    <Link href="/contacts">
        <Grid item xs={12} md>
            <TextField
            placeholder='Recipient Number'
            onChange={(e) => setFirstAmount(e.target.value)}
            label="Recipient"
            fullWidth
            InputProps={{
                type: "number",
                startAdornment: <InputAdornment position="end">
                    <FcContacts/>
                </InputAdornment>,
            }}
            />
        </Grid>
    </Link>
  )
}

export default RecipientName;
