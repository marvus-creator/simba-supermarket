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
  const [products, setProducts] = useState(PRODUCTS)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    localStorage.setItem('simba-cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    setLoading(true)
    fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(() => {
        setProducts(PRODUCTS)
        setLoading(false)
      })
      .catch(() => {
        setProducts(PRODUCTS)
        setError(null)
        setLoading(false)
      })
  }, [])

  const visible = products.filter(p =>
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
      {loading ? (
        <p style={{ textAlign: 'center', margin: '32px', color: '#666' }}>Loading products...</p>
      ) : error ? (
        <p style={{ textAlign: 'center', margin: '32px', color: 'red' }}>{error}</p>
      ) : (
        <ProductList products={visible} onAddToCart={handleAddToCart} />
      )}
      <Footer />
      {showCart && <CartModal cart={cart} onClose={() => setShowCart(false)} />}
    </>
  )
}

export default App