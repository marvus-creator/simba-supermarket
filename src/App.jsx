import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import { PRODUCTS } from './data/products'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductCard product={PRODUCTS[0]} />
      <Footer />
    </>
  )
}

export default App