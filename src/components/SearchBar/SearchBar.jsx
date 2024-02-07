import React, { useState, useContext} from 'react';
import { IoSearchSharp } from 'react-icons/io5';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';
function SearchBar() { 
  const { setProducts, setLoading} = useContext (AppContext);

  const [searchValue, setSearchValue] = useState('');


  const handleSearch = async (event) =>{
    event.preventDefault();

    setLoading(true);
    
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };


  return (     
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="search"
        value={searchValue}
        placeholder="Buscar Produtos"
        className="search_input"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />

      <button 
        type="submit"
        className="search_button"
      >
        <IoSearchSharp />
      </button>
    </form>
  );
  
}

export default SearchBar;
