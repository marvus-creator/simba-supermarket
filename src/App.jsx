import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import { PRODUCTS } from './data/products'

function App() {
  const [showSpecial, setShowSpecial] = useState(false)

  function handleAddToCart(product) {
    console.log("Added:", product.name)
  }

  return (
    <>
      <Header />
      <Hero />
      <button onClick={() => setShowSpecial(!showSpecial)}>
        Show Today's Special
      </button>
      {showSpecial && (
        <ProductCard product={PRODUCTS[0]} onAddToCart={handleAddToCart} />
      )}
      <Footer />
    </>
  )
}

export default App