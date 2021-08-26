import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
    greenColor : "#888"
}

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
    greenColor : "rgba(0,49,255,1)"
}
export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: ${({ theme }) => theme.body};
    }
    *{
        box-sizing: border-box;
    }
    ul, li {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    a, a:hover {
        text-decoration: none;
        color: black    ;
    }
    .homeBlack {
        background-color: "#000000";
        .homeBg {
            z-index: -100;
            height: 600px;
            background-image: url("https://viessmann.vercel.app/images/viessman.jpg");
            background-position-x: center;
            background-position-y: top;
            background-size: initial;
            background-attachment: fixed;
            opacity: 0.8;
            .card {
                border-radius: 10px;
                margin-top: 20%;
                color: ${({theme}) => theme.text};
                background: #00000099;
                .button{
                    width: 120px;
                    padding: 15px;
                    background-color: red;
                }   
            }
        }
    }
    .cards {
        width: 255px;
        height: 350px !important;
        position: relative;
        img {
            object-fit: cover;

        }
        .cardsText {
            position: absolute;
            bottom: 10px;
            left: 10px;
        }
    }
    .section2 {
        background-color: #efe7ee;
    }
    .section3 {
        img {
            object-fit: cover;
            width: 250px;
            height: 200px;
            overflow: hidden;
        }
    }
.card_title {
    color: ${({theme}) => theme.greenColor};
}

    footer {
        min-height: 300px;
    }
`;


