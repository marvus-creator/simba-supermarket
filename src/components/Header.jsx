function Header({ name}) {
  return (
    <header>
      <h2>Simba Supermarket {name}</h2>
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  )
}

export default Header