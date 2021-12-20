import React, { useEffect } from "react";
import { Grid } from "@mui/material";

import { setTitle } from "../../redux/layout/layout.slice";
import { useDispatch } from "react-redux";

const CurrencyPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        console.log('dispatch')
        dispatch(setTitle("Currency"));

    }, []);

    return (
        <Grid container spacing={3}>
            <h1>Currency</h1>
        </Grid>
    )
}

export default CurrencyPage;