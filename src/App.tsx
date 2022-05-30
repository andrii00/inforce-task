import React from 'react';
import AddModal from './components/addModal/AddModal';
import DeleteModal from './components/deleteModal/deleteModal';
import Header from './components/header/Header';
import { useAppSelector } from './hooks/redux';
import { RoutingConfig } from './routing/Routing';

function App() {
  return (
    <div>
      <Header />
      <DeleteModal />
      <AddModal />
      <RoutingConfig />
    </div>
  );
}

export default App;
