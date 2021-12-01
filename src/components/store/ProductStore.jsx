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

  selectProduct = (item) => {
    const selectedProduct = this.productList.find(product => item.productName === product.productName);

   if (!selectedProduct) {
     this.productList.push({
      productId: item.productId,
      productName: item.productName,
      productPrice: item.productName,
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
