// @ts-ignore
import { FC, useDeferredValue } from 'react';
import './ProductList.scss';

export interface Product {
    name: string;
}

interface ProductListProps {
    products: Array<Product>;
}

const ProductItem: FC<Product> = ({ name }) => {
    return <li className='product-list__item'>{name}</li>;
};

const ProductList: FC<ProductListProps> = ({ products }) => {
    const deferredProducts = useDeferredValue(products) as Array<Product>;

    return (
        <ul className='product-list'>
            {deferredProducts.map((product) => (
                <ProductItem {...product} />
            ))}
        </ul>
    );
};

export default ProductList;
