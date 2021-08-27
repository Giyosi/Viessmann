import Footer from "../Footer/Footer";
import Header from "../Header";
import ContainerWrapper from "./ContainerWrapper";

const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            <Header />
            {children}
            <Footer/>
        </ContainerWrapper>
    )
}

export default Container;