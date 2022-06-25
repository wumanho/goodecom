import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {UserProvider} from "./context/user.context";
import reportWebVitals from './reportWebVitals';
import {store} from "./store/store";
import CartProvider from "./context/cart.context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <App/>
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
