import * as React from 'react';
import { Grid, Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

const crane_image = require('../images/crane.png');

const text: string = `
Hi, my name is Alfonso Amorós, I'm a 3rd year student at UPV (Universidad Politecnica de Valencia) and hobby programmer.
I'm very interested in programming, especially graphics programming.
Some of the technologies/languages I know and used are OpenGL, C, C++,
JavaScript, React, TypeScript, Python, Git, NodeJS, Java, Docker, Linux

My main hobby is to write entertaining programs for the future bored me.
You can checkout some of them at my github or at the home page
`;

const ProfilePic = () => {
    return(
        <Card sx={{ height: '90%' }}>
        <CardMedia component="img" sx={{ height: '100%', objectFit: 'cover'}} image={crane_image}/>
        </Card>
    );
}

const ProfileText = () => {
    return(
        <Card sx={{ height: '90%' }}>
        <CardContent sx={{ display: 'flex', 
                           flexDirection: 'column',
                           justifyContent: 'center',
                           height: '100%',
                           objectFit: 'cover'
                           }} >
            <Typography paragraph gutterBottom>
            Hi, my name is Alfonso Amorós Cubells, I'm a 3rd year student at UPV (Universidad Politecnica de Valencia) and hobby programmer.
            </Typography>
            <Typography paragraph gutterBottom>
            I'm very interested in programming, especially graphics programming.
            Some of the technologies/languages I know and used are OpenGL, C, C++,
            JavaScript, React, TypeScript, Python, Lua, Git, NodeJS, Java, Docker, Linux
            </Typography>
            <Typography paragraph gutterBottom>
            My main hobby is to write entertaining programs for the future bored me, like this website!
            You can checkout some of them at my Github or at the home page.
            </Typography>
        </CardContent>
        </Card>
    );
}

const AboutMe = () => {
    return(
        <Box sx={{ m: 2, height: '100vh', display: 'flex', flexGrow: 1, alignItems: 'stretch' }}>
            <Grid container 
                  direction='row'
                  justifyContent='space-evenly'
                  alignItems='stretch'
                  spacing={2}>

                <Grid item xs> <ProfilePic/> </Grid>
                <Grid item xs> <ProfileText/> </Grid>

            </Grid>
        </Box>
    );
}

export default AboutMe;
