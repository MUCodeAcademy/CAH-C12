//use Card from mui
// https://mui.com/material-ui/react-card/#basic-card

import React from "react";
import { Box, Card, CardContent, CardActions } from '@mui/material';

export default function CardDisplay() {
    const card = (
        <CardContent>
        json data goes here
            <CardActions>
            
            </CardActions>
        </CardContent>
    )
    return (
        <Box component="span" sx={{display: 'flex', minWidth: 275, }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    )
}