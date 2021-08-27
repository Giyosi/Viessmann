import styled from "styled-components";

const FooterWrapper = styled.div`
    background-color: #0a142d;
    color: white;
    padding: 100px 30px;
    .logo {
        height: 50px;
    }
    a {
        color: white;
        &:hover {
            color: red;
        }
    }
    ul {
        /* padding: 0 10px; */
        li {
            margin: 10px 0;
        }
    }
`;

export default FooterWrapper;