import { createContext, useReducer } from 'react';
import '../styles/globals.css';

export const StoreContext = createContext();
const inicialState = { Save: [], Search: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'Search':
      return { ...state, Search: action.payload };

    case 'Save':
      return { ...state, Save: action.payload };

    default:
      return state;
  }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inicialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
