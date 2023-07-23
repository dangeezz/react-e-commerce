import { IndexPage } from '@/pages/home';
import { ProductPage } from '@/pages/products';
import { SearchPage } from '@/pages/search';

export const routes = [
  {
    path: "/",
    element: <IndexPage />
  },
  {
    path: "product/:productId",
    element: <ProductPage />
  },
  {
    path: "search",
    element: <SearchPage />
  }
]