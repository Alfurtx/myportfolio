import * as React from 'react';
import { Container, Divider, Box, Button, Toolbar, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';

const pages = ['home', 'about me'];

const Header = () => {
    // const [anchor_nav, set_anchor_nav] = React.useState<null | HTMLElement>(null);

    // const handle_open_nav = (event: React.MouseEvent<HTMLElement>) => {
    //     set_anchor_nav(event.currentTarget);
    // }

    // const handle_close_nav = () => {
    //     set_anchor_nav(null);
    // }

    return(
        <AppBar
            position="static"
            sx={{ display: 'flex', alignItems: 'center' }}
            style={{ background: '#0091a7'}}>
            <Container
                sx={{display: 'flex', justifyContent: 'center'}}
                maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            page === pages[pages.length - 1] ?
                            <Button
                              href={'#/' + page.replace(/\s/g, "")}
                              key={page}
                              sx={{
                                  color: 'white',
                                  display: 'block',
                                  textTransform: 'lowercase',
                                  fontSize: 20,
                                  fontWeight: 'bold' }}
                            > { page }
                            </Button> :
                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                <Button
                                  href={'#/' + page.replace(/\s/g, "")}
                                  key={page}
                                  sx={{
                                      color: 'white',
                                      display: 'block',
                                      textTransform: 'lowercase',
                                      fontSize: 20,
                                      fontWeight: 'bold' }}
                                > { page }
                                </Button>
                                <Divider
                                    orientation='vertical'
                                    flexItem
                                    style={{
                                        background: 'white',
                                        borderColor: 'white'
                                    }}
                                    variant='middle'/>
                            </Box>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
