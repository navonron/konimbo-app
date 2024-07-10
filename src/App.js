import './App.css';
import FCProducts from "./FunctionalComponents/Products/FCProducts";

const productsData = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' },
];

const App = () => {
    return (
        <div className="App">
            <FCProducts products={productsData} />
        </div>
    );
};

export default App;
