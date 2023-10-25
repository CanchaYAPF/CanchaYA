import React from 'react';

const SearchContext = React.createContext({
  searchTerm: '',
  setSearchTerm: () => {},
});

export default SearchContext;