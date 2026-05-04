function Header({ cartCount, onCartClick }) {
  return (
    <header>
      <h2>Simba Supermarket</h2>
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
        <button
          onClick={onCartClick}
          style={{
            backgroundColor: '#f97316',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginLeft: '20px'
          }}
        >
          🛒 Cart ({cartCount})
        </button>
      </nav>
    </header>
  )
}

export default Header