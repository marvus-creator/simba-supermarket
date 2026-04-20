function SearchBar({ query, onSearch }) {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search products..."
      />
    </div>
  )
}

export default SearchBar