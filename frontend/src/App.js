// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './containers/HomePage';


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
  // console.log(products)

  // const productsToDisplay = products.map(product => <p>Product: {product.name} | Price: {product.price}</p>)


  // useEffect(() => {
  //   console.log("useEffect triggered")
  //   fetch("http://localhost:8000/api/products/")
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  // }, [])

  return (
    <div className="App">
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome</h1>
        </Container>
        <HomePage products={products}/>
      </main>
      <Footer />

    </div>
  );
}

export default App;
