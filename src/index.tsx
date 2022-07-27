import ReactDOM from "react-dom/client";
import Header from "./components/header";
import ContentCard from "./components/content_card";
import { Grid, Stack, Box } from "@mui/material";
import "./index.css";
const image = require('./images/crane.png');
const curriculum_image = require('./images/curriculum-test.jpg');

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
    { name: "TESTESTEST2", link: "test", image_url: curriculum_image },
    { name: "TESTESTEST2", link: "test", image_url: curriculum_image },
    { name: "TESTESTEST2", link: "test", image_url: curriculum_image },
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

root.render(
    <Stack spacing={2} style={{height: '100vh'}}>
        <Header/>
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
                    <ContentCard name="CURRICULUM" link="test" image_url={curriculum_image}/>
                </Grid>
                <Grid item xs>
                    <ProjectCard/>
                </Grid>
            </Grid>
        </Grid>
    </Stack>
);
