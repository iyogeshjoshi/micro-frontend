import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import { NotFound } from '../components';
import RemoteComponent from './RemoteComponent';

// const Profile = React.lazy(() => import('profile/Module'));
// const Products = React.lazy(() => import('products/Module'));
// const Cart = React.lazy(() => import('cart/Module'));
// const Checkout = React.lazy(() => import('checkout/Module'));
// const Orders = React.lazy(() => import('orders/Module'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<NxWelcome title="shell" />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route path="/profile" element={<RemoteComponent scope="profile" />} />
      <Route path="/cart" element={<RemoteComponent scope="cart" />} />
      <Route path="/checkout" element={<RemoteComponent scope="checkout" />} />
      <Route path="/orders" element={<RemoteComponent scope="orders" />} />
      <Route path="/*" element={<NotFound />} />
      {/* <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Router;
