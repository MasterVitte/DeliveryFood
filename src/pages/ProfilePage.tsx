import React from 'react'
import {Grid, Typography} from "@mui/material";

export const ProfilePage = () => {
    return (
        <Grid container justifyContent="space-between">
            <Grid container>
                <Typography variant="h4" fontWeight={600}>Профиль</Typography>
                <Grid container style={{marginTop: '16px'}}>
                    <Typography>ФИО: Artem Vitte</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}