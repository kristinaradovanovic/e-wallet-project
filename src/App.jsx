import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Root } from './routes/Root';
import { Home } from './routes/Home';
import {NewCard} from './routes/NewCard';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home/>}/>
        <Route path='/new' element={<NewCard/>}/>
       
        
      </Route>
    )
  );
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
