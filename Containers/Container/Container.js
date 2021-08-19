import Header from "../Header";
import { ContainerWrapper } from "./ContainerWrapper";

const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            <Header />
            {children}
        </ContainerWrapper>
    )
}

export default Container;