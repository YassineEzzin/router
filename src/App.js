
import './App.css';
import {createBrowserRouter ,
  createRoutesFromElements, 
 
   Route ,
   
    RouterProvider
   } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import RootLayout from './layouts/RootLayout';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'  element={<RootLayout/>} >
        
      <Route index element={ <Home/> }   />
      <Route path='/About' element={ <About/> }   />
      </Route>  
    )
  )
   


  return (
    <div className="App">

     <RouterProvider router = {router} />

     
    </div>
  );
}

export default App;
