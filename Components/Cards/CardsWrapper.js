import styled from "styled-components";
const CardsWrapper = styled.div`
.cards {
    position: relative;
    .cardsText {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        padding-bottom: 40px ; 
        background-color: rgba(0 0 0 / 0.4);
        text-align: center;
        transition: 0.5s;
        &:hover {
            box-shadow: inset 0 0 0 400px rgba(0 0 0 / 0.5);
            transform: translateY(-10px);
        }
    }
}

`;

export default CardsWrapper;