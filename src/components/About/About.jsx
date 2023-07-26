import React from "react";
import { Avatar, Box, Grid, IconButton, Typography, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Trevor from './Trevor.png';
import James from './James.jpeg';
import Andrew from './Andrew.png';

function About() {
    return (
        <Container maxWidth={false} disableGutters>
            <Grid container rowSpacing={4} columnSpacing={6} textAlign="center">
                <Grid item xs={12}>
                    <Typography 
                        variant="h3"
                        sx={{
                            backgroundColor: "black", 
                            color: "white",
                            width: "100%",
                            margin: 0,
                            padding: '20px'
                        }}
                    >
                    About The Dev Team
                    </Typography>
                </Grid>
            <Grid container item xs={12} sm={6}>
            <Grid item xs={12} md={3} justifyContent="center" display="flex" sx={{ padding: '0 20px' }}>
                    <Avatar alt="Andrew" src={Andrew} sx={{ 
                        width: 150, 
                        height: 150,
                        '& img': {
                            objectFit: 'cover',
                            objectPosition: 'center',
                            backgroundColor: 'black'
                        }
                         }} />
                </Grid>
                <Grid container item xs={12} md={9} sx={{ padding: '0 20px' }}>
                    <Box>
                        <Typography variant="h4"> Andrew Anzalone</Typography>
                        <Typography
                            variant="body1"
                            style={{ margin:"10px", textAlign: "left", textIndent: "20px" }}
                        >
                            Part time Creative who loves technology. This is a great way to describe Andrew. 
                            With some experience with Java and Web Dev, he brought a unique perspective to the team. 
                            Check out his socials for more info on him.
                        </Typography>
                        <IconButton
                            color="secondary"
                            href="https://github.com/aanzalone356"
                            target="_blank"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            color="secondary"
                            href="https://www.linkedin.com/in/andrew-anzalone-812980250"
                            target="_blank"
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} sx={{ padding: '0 20px' }}>
                <Grid item xs={12} md={3} justifyContent="center" display="flex">
                    <Avatar alt="James" src={James} sx={{ 
                        width: 150, 
                        height: 150, 
                        // This & img selector zooms out of the picture a bit.
                        // You can remove this if you want,
                        // or change objectFit: 'contain' to
                        // objectFit: 'cover'
                        '& img': {
                            objectFit: 'contain',
                            objectPosition: 'center',
                            backgroundColor: 'black'
                        } }} />
                </Grid>
                <Grid item xs={12} md={9} sx={{ padding: '0 20px' }}>
                    <Box>
                        <Typography variant="h4"> James Jacobson</Typography>
                        <Typography
                            variant="body1"
                            style={{ margin:"10px", textAlign: "left", textIndent: "20px" }}
                        >
                            I come from a background in automotive technology and my experience with controller area networks, 
                            aftermarket diagnostic software, cloud based OEM software, 
                            as well as cloud based service information has inspired me to expand my skillset 
                            and change careers into a more general computer science role. 
                            I believe that one day I will be able to solve many problems in the automotive industry and beyond.
                        </Typography>
                        <IconButton
                            color="secondary"
                            href="https://github.com/corewitz"
                            target="_blank"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            color="secondary"
                            href="https://www.linkedin.com/in/james-jacobson-490ba2262"
                            target="_blank"
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} sx={{ padding: '0 20px' }}>
                <Grid item xs={12} md={3} justifyContent="center" display="flex">
                    <Avatar alt="Madison" sx={{ width: 150, height: 150 }} />
                </Grid>
                <Grid item xs={12} md={9} sx={{ padding: '0 20px' }}>
                    <Box>
                        <Typography variant="h4">Madison (or Maddie if you prefer) Keiffer-Rose</Typography>
                        <Typography
                            variant="body1"
                            style={{ margin:"10px", textAlign: "left", textIndent: "20px" }}
                        >
                            Placeholder Text
                        </Typography>
                        <IconButton
                            color="secondary"
                            href="https://github.com/maddiekeiffer"
                            target="_blank"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            color="secondary"
                            href="https://www.linkedin.com/in/maddie-keiffer"
                            target="_blank"
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} sx={{ padding: '0 20px' }}>
                <Grid item xs={12} md={3} justifyContent="center" display="flex">
                    <Avatar alt="Shawn" sx={{ width: 150, height: 150 }} />
                </Grid>
                <Grid item xs={12} md={9} sx={{ padding: '0 20px' }}>
                    <Box>
                        <Typography variant="h4">Shawn Wagoner</Typography>
                        <Typography
                            variant="body1"
                            style={{ margin:"10px", textAlign: "left", textIndent: "20px" }}
                        >
                            Placeholder Paragraph
                        </Typography>
                        <IconButton
                            color="secondary"
                            href="https://github.com/shawnwagoner"
                            target="_blank"
                        >
                            <GitHubIcon />
                        </IconButton>
                        {/* <IconButton
                            color="secondary"
                            href="https://www.linkedin.com"
                            target="_blank"
                        >
                            <LinkedInIcon />
                        </IconButton> */}
                    </Box>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={6} sx={{ padding: '0 20px' }}>
                <Grid item xs={12} md={3} justifyContent="center" display="flex">
                    <Avatar alt="Trevor" src={Trevor} sx={{ width: 150, height: 150 }} />
                </Grid>
                <Grid item xs={12} md={9} sx={{ padding: '0 20px' }}>
                    <Box>
                        <Typography variant="h4">Trevor Parks</Typography>
                        <Typography
                            variant="body1"
                            style={{ margin:"10px", textAlign: "left", textIndent: "20px" }}
                        >
                            Hello, I'm Trevor Parks, I joined the Midland Code Academy to give me the skills to create full-stack applications. 
                            I'm interested in business, finance, and cryptocurrency in relation to web development. 
                            I am grateful for the code academy program for teaching me a million little things about what it 
                            means to be a developer, and I never want to stop learning!
                        </Typography>
                        <IconButton
                            color="secondary"
                            href="https://github.com/trevorparks"
                            target="_blank"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            color="secondary"
                            href="https://www.linkedin.com/in/trevor-parks1"
                            target="_blank"
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Container>
    );
}

export default About;