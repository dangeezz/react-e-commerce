import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { IndexPage } from '@/pages/home';
import { ProductPage } from '@/pages/products';
import { SearchPage } from '@/pages/search';

export const Router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<IndexPage />} />
    <Route path='product/:productId' element={<ProductPage />} />
    <Route path='search' element={<SearchPage />} />
  </>
));

export { RouterProvider } from "react-router-dom";
