function ProductCard({ product, onAddToCart }) {
  const { name, priceRwf, image } = product

  const formattedPrice = new Intl.NumberFormat('en-RW', {
    style: 'currency',
    currency: 'RWF'
  }).format(priceRwf)

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{formattedPrice}</p>
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </div>
  )
}

export default ProductCard