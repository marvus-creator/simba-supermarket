import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar'
import { PRODUCTS } from './data/products'

function App() {
  const [showSpecial, setShowSpecial] = useState(false)
  const [query, setQuery] = useState('')

  const visible = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

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
      <SearchBar query={query} onSearch={setQuery} />
      <div>
        {visible.map(p => (
          <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App