import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FullItem } from '../components/fullItem/FullItem';
import HomePage from '../components/homePage/HomePage';

export const RoutingConfig: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/full-item/:id" element={<FullItem />} />
      </Routes>
    </div>
  );
};
