import { observer } from 'mobx-react-lite';
import React from 'react';
import productData from '../data/productData';
import ProductItem from './ProductItem';

const ProductList = (productStore) => {
  return (
    <div>
      {productData.map((product) => {
        return (
          <ProductItem 
            key={product.productId}
            id={product.productId}
            name={product.productName}
            price={product.productPrice}
            productStore={productStore}
        />
        )
      })}
    </div>
  );
};

export default observer(ProductList);