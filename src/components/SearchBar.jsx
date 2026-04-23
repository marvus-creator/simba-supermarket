function SearchBar({ query, onSearch }) {
  return (
    <div className="search-bar">
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