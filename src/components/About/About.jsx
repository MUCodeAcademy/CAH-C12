import React from "react";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Trevor from './Trevor.png';

function About() {
    return (
        <Grid
            container
            rowSpacing={4}
            columnSpacing={6}
            style={{
                textAlign: "center",
                padding: "20px",
                marginLeft: "0px",
                width: "100%",
            }}
            className="center padding-20"
        >
            <Grid item xs={12}>
                <Typography variant="h4">About The Dev Team</Typography>
            </Grid>
            <Grid container item xs={12} sm={6}>
                <Grid item xs={12} md={3} justifyContent="center" display="flex">
                    <Avatar alt="Andrew" sx={{ width: 100, height: 100 }} />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box className="padding-10">
                        <Typography variant="h5"> Andrew Anzalone</Typography>
                        <Typography
                            variant="body2"
                            style={{ margin:"10px", textAlign: "left", textIndent: "20px" }}
                        >
                            Placeholder paragraph
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
            <Grid container item xs={12} sm={6}>
                <Grid item xs={12} md={3} justifyContent="center" display="flex">
                    <Avatar alt="James" sx={{ width: 100, height: 100 }} />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box className="padding-10">
                        <Typography variant="h5"> James (or Jay if you prefer) Jacobson</Typography>
                        <Typography
                            variant="body2"
                            style={{ margin:"10px", textAlign: "left", textIndent: "20px" }}
                        >
                            Placeholder Paragraph
                        </Typography>
                        <IconButton
                            color="secondary"
                            href="https://github.com/corewitz"
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
            <Grid container item xs={12} sm={6}>
                <Grid item xs={12} md={3} justifyContent="center" display="flex">
                    <Avatar alt="Madison" sx={{ width: 100, height: 100 }} />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box className="padding-10">
                        <Typography variant="h5">Madison (or Maddie if you prefer) Keiffer-Rose</Typography>
                        <Typography
                            variant="body2"
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
            <Grid container item xs={12} sm={6}>
                <Grid item xs={12} md={3} justifyContent="center" display="flex">
                    <Avatar alt="Shawn" sx={{ width: 100, height: 100 }} />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box className="padding-10">
                        <Typography variant="h5">Shawn Wagoner</Typography>
                        <Typography
                            variant="body2"
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
            <Grid container item xs={12} sm={6}>
                <Grid item xs={12} md={3} justifyContent="center" display="flex">
                    <Avatar alt="Trevor" src={Trevor} sx={{ width: 100, height: 100 }} />
                </Grid>
                <Grid item xs={12} md={9}>
                    <Box className="padding-10">
                        <Typography variant="h5">Trevor Parks</Typography>
                        <Typography
                            variant="body2"
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
    );
}

export default About;