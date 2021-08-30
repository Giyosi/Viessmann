import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
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

    footer {
        min-height: 300px;
    }

    #nprogress{
  height: 100vh !important;
  .spinner{
    top:0;
    right: 0;
    width: 100% !important;
    height: 100vh !important;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #33333333;
    .spinner-icon{
      width: 60px !important;
      height: 60px !important;
    }
  }
}
`;

export default GlobalStyle;
