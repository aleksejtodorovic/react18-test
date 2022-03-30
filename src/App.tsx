// @ts-ignore
import React, { useState, useTransition } from 'react';
import './App.scss';
import ProductList, { Product } from './components/ProductList';

function generateProducts() {
    const products: Array<Product> = [];

    for (let i = 0; i < 10000; ++i) {
        products.push({
            name: `Product ${i}`
        });
    }

    return products;
}

const dummyProducts = generateProducts();

function filterProducts(filterTerm?: string) {
    if (!filterTerm) {
        return dummyProducts;
    }

    return dummyProducts.filter((product) =>
        product.name.toLowerCase().includes(filterTerm.toLocaleLowerCase())
    );
}

function App() {
    // const [isPending, startTransition] = useTransition();
    const [filter, setFilter] = useState('');

    const filteredProducts = filterProducts(filter);

    function handleInputChange(evt: React.ChangeEvent<HTMLInputElement>) {
        // startTransition(() => {
        //     setFilter(evt.target.value);
        // });

        setFilter(evt.target.value);
    }

    return (
        <div className='app'>
            {/* {isPending && <p>Updating the list ...</p>} */}
            <input
                type='text'
                onChange={handleInputChange}
                className='app__search'
                placeholder='Enter product number'
            />
            <ProductList products={filteredProducts} />
        </div>
    );
}

export default App;
