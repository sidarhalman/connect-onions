import SearchBar from "material-ui-search-bar";
import React from 'react'


const Searchbar = () => {
 // show Searchbar only in the component Products 
 // it should look for products - functionality 

  
return (
     <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 400,
        
      }}
    />
)}

export default Searchbar;