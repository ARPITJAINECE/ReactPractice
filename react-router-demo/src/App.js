import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin'
import React from 'react';
import { Profile } from './components/Profile'
import { AuthProvider } from './components/auth';
import { Login } from './components/Login';
// import { About } from './components/About';
//below one is used for the dynamic import of About.js and that too in the Lazy loading pattern
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* below one is used for the normal loading of the About.js */}
        {/* <Route path='about' element={<About></About>}></Route> */}

        {/* so now, below we are using the lazy loading of the About.js */}
        <Route path='about' element={
          <React.Suspense fallback='Loading...'>
            <LazyAbout></LazyAbout>
          </React.Suspense>
        }></Route>

        <Route path='order-summary' element={<OrderSummary></OrderSummary>}></Route>

        <Route path='products' element={<Products></Products>}>
          <Route index element={<FeaturedProducts></FeaturedProducts>}></Route>
          <Route path='featured' element={<FeaturedProducts></FeaturedProducts>}></Route>
          <Route path='new' element={<NewProducts></NewProducts>}></Route>
        </Route>

        <Route path='users' element={<Users></Users>}>
          <Route path=':userId' element={<UserDetails></UserDetails>}></Route>
          <Route path='admin' element={<Admin></Admin>}></Route>
        </Route>


        <Route path='profile' element={<Profile></Profile>}></Route>

        <Route path='login' element={<Login></Login>}></Route>

        <Route path='*' element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
