import * as React from "react";
import { Card, CardMedia, CardActionArea, Typography, Fade } from "@mui/material";
const curriculum = require("../images/curriculum-test.jpg");

interface ContentCardProps {
    name: string,
    link: string,
    image_url: string,
    height?: string
}

interface ContentCardState {
    mouse_hover: string,
    hovering: boolean
}

class ContentCard extends React.Component<ContentCardProps, ContentCardState> {
    constructor(props: ContentCardProps) {
        super(props);
        this.state = {
            mouse_hover: '4px',
            hovering: false
        }
    }

    onMouseOver = () => this.setState({mouse_hover: '0px', hovering: true})
    onMouseOut = () => this.setState({mouse_hover: '4px', hovering: false})

    render() {
        return(
            <Card style={{
                position: 'relative',
                display: 'flex',
                height: this.props.height !== undefined ? this.props.height : '90%'
            }}>
                <CardActionArea href={this.props.link}>
                    <div>
                        <CardMedia
                            image={
                                this.props.image_url !== "" ?
                                this.props.image_url :
                                curriculum
                            }
                            onMouseOver={this.onMouseOver}
                            onMouseOut={this.onMouseOut}
                            style={{
                                transition: 'all .23s ease-in',
                                filter: `blur(${this.state.mouse_hover})`
                            }}
                            component="img">
                        </CardMedia>
                        <Fade in={!this.state.hovering}>
                            <Typography style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translateX(-50%) translateY(-50%)',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>
                                {this.props.name}
                            </Typography>
                        </Fade>
                    </div>
                </CardActionArea>
            </Card>
        );
    }
}

export default ContentCard;
