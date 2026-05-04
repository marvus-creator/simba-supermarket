import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import CartModal from './components/CartModal'
import { PRODUCTS } from './data/products'

function App() {
  const [showSpecial, setShowSpecial] = useState(false)
  const [query, setQuery] = useState('')
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('simba-cart')
    return saved ? JSON.parse(saved) : []
  })
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    localStorage.setItem('simba-cart', JSON.stringify(cart))
  }, [cart])

  const visible = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  function handleAddToCart(product) {
    setCart(prev => [...prev, product])
  }

  return (
    <>
      <Header cartCount={cart.length} onCartClick={() => setShowCart(true)} />
      <Hero />
      <button className="special-btn" onClick={() => setShowSpecial(!showSpecial)}>
        {showSpecial ? "Hide Today's Special" : "Show Today's Special"}
      </button>
      {showSpecial && (
        <ProductCard product={PRODUCTS[0]} onAddToCart={handleAddToCart} />
      )}
      <SearchBar query={query} onSearch={setQuery} />
      <ProductList products={visible} onAddToCart={handleAddToCart} />
      <Footer />
      {showCart && <CartModal cart={cart} onClose={() => setShowCart(false)} />}
    </>
  )
}

export default App