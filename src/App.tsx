import { HomePage } from './pages/homePage/view';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ArticlePage } from './pages/articlePage/view';

const router = createBrowserRouter([
  { path: 'articles-react-ts/', element: <HomePage/> },
  { path: '/articles/:articleId', element: <ArticlePage/> }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;
