import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer, Loading } from './components';
import ScrollToTop from './components/ScrollToTop';
import OurWorkPage from './pages/OurWorkPage';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-185663515-1');

const Home = lazy(() => import('./pages/HomePage'));
const SingleProduct = lazy(() => import('./pages/SingleProductPage'));
const Error = lazy(() => import('./pages/ErrorPage'));
const About = lazy(() => import('./pages/AboutPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const Products = lazy(() => import('./pages/ProductsPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));


function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

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
          <Route exact path='/contact-us'>
            <ContactUsPage />
          </Route>
          <Route exact path='/privacy'>
            <PrivacyPolicyPage />
          </Route>
          <Route exact path='/legal/terms-of-use'>
            <DisclaimerPage />
          </Route>
          <Route exact path='/our-work'>
            <OurWorkPage />
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
