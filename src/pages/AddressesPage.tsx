import React from 'react'
import {Grid, Typography} from "@mui/material";

export const AddressesPage = () => {
    return (
        <Grid container justifyContent="space-between">
            <Grid container>
                <Typography variant="h4" fontWeight={600}>Мои адреса</Typography>
                <Grid container style={{marginTop: '16px'}}>
                    <Typography>ул. Пушкина дом Колотушкина 5</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}