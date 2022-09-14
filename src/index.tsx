import React from 'react'
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import ContentCard from "./components/content_card";
import { Grid, Box, Stack } from "@mui/material";
import "./index.css";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/aboutme";
const image = require('./images/crane.png');
const curriculum_image = require('./images/curriculum-test.jpg');

document.title = "myportfolio";
document.body.style.overflow = 'hidden';

const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
);

function setup_css_styles() {
    const html = document.getElementsByName('html')
    if(html != null && html.length === 1) {
        html[0].style.backgroundImage = `url(${image})`;
        html[0].style.backgroundRepeat = 'no-repeat';
        html[0].style.backgroundSize = 'cover';
    }
}

setup_css_styles();

interface CardData {
    name: string,
    link: string,
    image_url: string,
}

const card_data: CardData[] = [
    { name: "Minecraft OpenGL", link: "https://github.com/Alfurtx/minecraft_opengl", image_url: curriculum_image },
    { name: "Yet Another Window Manager", link: "https://github.com/Alfurtx/yawm", image_url: curriculum_image },
    { name: "Homedrive", link: "https://github.com/Alfurtx/homedrive", image_url: curriculum_image },
];

const ProjectCard = () => {
    return <Stack spacing={2} maxHeight='90%'>
        {
            card_data.map( (proj) => (
                <ContentCard
                    {...proj}
                    height={String(100 / card_data.length) + "%"}
                />
            ))
        }
    </Stack>
}

const Home = () => {
    return(
        <Box sx={{ height: '100vh',
                   display: 'flex',
                   m: 2,
                   }}>
        <Stack spacing={2} style={{ height: '100%'}}>
            <Grid
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                style={{
                        paddingLeft: '1%',
                        paddingRight: '1%',
                    }}
                container>
                <Grid container spacing={2} direction="row" wrap="nowrap" style={{height: '100vh'}}>
                    <Grid item xs>
                        <ContentCard name="Curriculum" link="" image_url={curriculum_image}/>
                    </Grid>
                    <Grid item xs>
                        <ProjectCard/>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
        </Box>
    );
}

const App = () => {
    return(
        <div className="App">
            <Header/>
            <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/aboutme" element={<AboutMe />}/>
            </Routes>
            </HashRouter>
        </div>
    );
}

root.render(
    <App/>
);
