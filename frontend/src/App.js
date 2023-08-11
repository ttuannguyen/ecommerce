// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered")
    async function fetchProducts() {
      const { data } = await axios.get('/api/products/')
      setProducts(data)
    }
    fetchProducts()
  }, [])
  console.log(products)

  // useEffect(() => {
  //   console.log("useEffect triggered")
  //   fetch("http://localhost:8000/api/products/")
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  // }, [])
  const productsToDisplay = products.map(product => <p>{product.name}</p>)

  return (
    <div className="App">
      <h2>Hello World</h2>
      {productsToDisplay}
    </div>
  );
}

export default App;
