import { observer } from 'mobx-react';
import React from 'react';
import BuyItem from './BuyItem';

const BuyList = ({ productStore }) => {
  return (
    <div>
      {productStore.productList && 
        productStore.productList.map(product => {
          return (
            <BuyItem 
              key={product.productId}
              id={product.productId}
              name={product.productName}
              price={product.productPrice}
              count={product.count}
            />
          )
        })}
    </div>
  );
};

export default observer(BuyList);