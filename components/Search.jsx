import React, { useState } from "react";

const Search = () => {
  // List of 20 items with prices
  const products = [
    { name: "Apple", price: "$1.50" },
    { name: "Banana", price: "$0.50" },
    { name: "Cherry", price: "$2.00" },
    { name: "Date", price: "$3.00" },
    { name: "Elderberry", price: "$4.00" },
    { name: "Fig", price: "$2.50" },
    { name: "Grapes", price: "$2.20" },
    { name: "Honeydew", price: "$3.80" },
    { name: "Indian Fig", price: "$4.50" },
    { name: "Jackfruit", price: "$5.00" },
    { name: "Kiwi", price: "$1.80" },
    { name: "Lemon", price: "$1.20" },
    { name: "Mango", price: "$2.80" },
    { name: "Nectarine", price: "$2.90" },
    { name: "Orange", price: "$1.70" },
    { name: "Papaya", price: "$3.10" },
    { name: "Quince", price: "$4.20" },
    { name: "Raspberry", price: "$5.50" },
    { name: "Strawberry", price: "$3.50" },
    { name: "Tomato", price: "$1.60" }
  ];

  // State for search term and filtered results
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle input change
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const filtered = products.filter((product) =>
        product.name.toLowerCase() === searchTerm.toLowerCase()
      );
      setFilteredProducts(filtered.length > 0 ? filtered : []);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Search Products</h2>
      <input
        type="text"
        placeholder="Type item name and press Enter..."
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        style={{ padding: "8px", width: "250px", marginBottom: "20px" }}
      />
      
      <table border="1" style={{ margin: "auto", width: "50%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "10px" }}>Product Name</th>
            <th style={{ padding: "10px" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <tr key={index}>
                <td style={{ padding: "10px" }}>{product.name}</td>
                <td style={{ padding: "10px" }}>{product.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={{ padding: "10px", color: "red" }}>No results found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Search;