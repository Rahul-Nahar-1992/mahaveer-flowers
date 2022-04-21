import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer, Loading } from './components';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/HomePage'));
const SingleProduct = lazy(() => import('./pages/SingleProductPage'));
const Error = lazy(() => import('./pages/ErrorPage'));
const About = lazy(() => import('./pages/AboutPage'));
const Products = lazy(() => import('./pages/ProductsPage'));

function App() {
  return (
    <Router>

      {/* Navbar & Sidebar */}
      <ScrollToTop />
      <Suspense fallback={<Loading />}>

        <Navbar />
        <Sidebar />

        {/* Page */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>

          <Route exact path='/products/:id' children={<SingleProduct />} />

          <Route path='*'>
            <Error />
          </Route>
        </Switch>

        {/* Footer */}
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
