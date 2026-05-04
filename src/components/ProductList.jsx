import ProductCard from './ProductCard'

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p style={{ textAlign: 'center', margin: '32px', color: '#666' }}>No products match your search</p>
  }

  return (
    <div className="product-grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}

export default ProductList