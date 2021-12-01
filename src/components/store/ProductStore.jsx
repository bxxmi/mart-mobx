import { makeObservable, observable, action, computed } from 'mobx';

class ProductStore {
  // 구매한 상품들이 담길 배열
  productList = [];

  constructor() {
    makeObservable(this, {
      productList: observable,
      selectProduct: action,
      totalPrice: computed
    });
  };

  selectProduct = ({ productId, productName, productPrice }) => {
   const selectedProduct = this.productList.find(product => productId === product.productId);

   if (!selectedProduct) {
     this.productList.push({
      productId,
      productName,
      productPrice,
      count: 1
     });
    } else {
      selectedProduct.count++;
    }
  }

  get totalPrice() {
    return this.productList.reduce((prev, curr) => {
      return prev + curr.productPrice * curr.count;
    }, 0);
  }
}

export default ProductStore;
