import React from 'react';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Login from './Pages/Login/Login';
import New from './Pages/New/New';
import Single from './Pages/Single/Single';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { UserInputs } from './FormSource/UserInput';
import { ProductInputs } from './FormSource/ProductInput';
import './Style/Dark.scss';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={UserInputs} title='Add New User'/>} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={ProductInputs} title='Add New Product'/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
