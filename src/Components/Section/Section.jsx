import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Buttons from './Buttons/Buttons';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item lg={4} md={6} xs={12}>
                    <Item style={{marginLeft:"90%",marginTop:"50px", width:"600px", height:"400px", marginBottom:"100px", fontSize:"x-large"}}>
                        <h1>Album layout</h1>
                        <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                      <button style={{backgroundColor:"blue", color:"white", border:"1px solid gray", borderRadius:"3px", padding:"8px 25px", marginRight:"15px"}}>Main call to action</button>
                      <button style={{backgroundColor:"white", color:"blue", border:"1px solid blue", borderRadius:"3px", padding:"8px 25px"}}>Secondary action</button>
                      {/* <Buttons/> */}
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
