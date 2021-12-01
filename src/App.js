import React from 'react';
import Mart from './components/Mart';
import ProductStore from './components/store/ProductStore';

const productStore = new ProductStore();

function App() {
  return (
    <div className="App">
      <Mart productStore={productStore} />
    </div>
  );
}

export default App;
