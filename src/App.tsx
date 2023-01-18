import { HomePage } from './pages/homePage/view';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { ArticlePage } from './pages/articlePage/view';

const router = createHashRouter([
  { path: 'articles-react-ts/', element: <HomePage/> },
  { path: 'articles-react-ts//articles/:articleId', element: <ArticlePage/> }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
