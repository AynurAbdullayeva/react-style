import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {

const Modal=()=>{
    const [open, setOpen]=useState(false);
}
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item style={{ width: "200px", height: "400px", textAlign: 'left', marginLeft: "100px", marginRight: "100px" }}>
                            <img src="https://source.unsplash.com/random" alt="ramdom-image" style={{ width: "200px", height: "200px", marginTop: "60px" }} />
                            <h3>Heading</h3>
                            <p>This is a media card. You can use this section to describe the content.</p>
                            <button style={{ color: "blue", marginRight: "40px", backgroundColor: "white", border: "none" }}>View</button>
                            <button onClick={()=> setOpen(true)} style={{ color: "blue", marginRight: "40px", backgroundColor: "white", border: "none" }}>Edit</button>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
