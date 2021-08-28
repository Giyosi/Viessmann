import Main from '../Components/Main';
import Footer from '../Containers/Footer/Footer';
import Header from '../Containers/Header';
import ProductsWrapper from '../Wrappers/ProductsWrapper';

const Products = () => {
    return (
        <ProductsWrapper>
            <Header />
            <Main/>
            <Footer/>
        </ProductsWrapper>
    )
}

export default Products;
