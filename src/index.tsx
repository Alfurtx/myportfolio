import "./index.css";
import ReactDOM from "react-dom/client";
const image = require('./images/crane.png')

const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
);

const background_image = {
        display: "flex",
        width: '100%',
        height: '100%',
        backgoundSize: "cover",
        backgoundPosition: "center",
}

// NOTE(fonsi): do background image instead of img, and add it when every piece is done

function setup_css_styles() {
    const html = document.getElementsByName('html')
    if(html != null && html.length === 1) {
        html[0].style.backgroundImage = `url(${image})`;
        html[0].style.backgroundRepeat = 'no-repeat';
        html[0].style.backgroundSize = 'cover';
    }
}

setup_css_styles();

root.render(
    <div></div>
);
