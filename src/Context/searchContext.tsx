import React, { ReactNode, useState, createContext } from 'react';

// Define the context type
interface SearchContextType {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with a default value of type SearchContextType or undefined
export const SearchData = createContext<SearchContextType>({
    searchQuery: '',
    setSearchQuery: () => {} 
});

interface SearchProviderProps {
  children: ReactNode;
}

export default function SearchContextProvider({ children }: SearchProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SearchData.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchData.Provider>
  );
}
