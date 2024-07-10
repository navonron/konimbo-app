import './App.css';
import FCProducts from "./FunctionalComponents/Products/FCProducts";
import productsData from './assets/products.json';
import FCHeader from "./FunctionalComponents/FCHeader/FCHeader";

const App = () => {
    return (
        <div className="App">
            <FCHeader />
            <FCProducts products={productsData} />
        </div>
    );
};

export default App;
