import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import { NotFound } from '../components';
import RemoteComponent from './RemoteComponent';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<NxWelcome title="shell" />} />
      <Route path="/profile" element={<RemoteComponent scope="profile" />} />
      <Route path="/cart" element={<RemoteComponent scope="cart" />} />
      <Route path="/checkout" element={<RemoteComponent scope="checkout" />} />
      <Route path="/products" element={<RemoteComponent scope="products" />} />
      <Route path="/orders" element={<RemoteComponent scope="orders" />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
