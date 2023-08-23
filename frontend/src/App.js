// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './screens/HomePage';
import { listProductsAsync } from './features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetails from './screens/ProductDetails';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductsAsync())
  }, [dispatch])

  const products = useSelector(state => state.products.entities)
  // console.log(products)

  // useEffect(() => {
  //   console.log("useEffect triggered")
  //   async function fetchProducts() {
  //     const { data } = await axios.get('/api/products/')
  //     setProducts(data)
  //   }
  //   fetchProducts()
  // }, [])
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
      <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
              <Route exact path='/' element={<HomePage />}/>
              <Route path='/product/:id' element={<ProductDetails products={products}/>}/>
          </Routes>
        </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
