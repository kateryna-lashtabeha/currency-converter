import React, { StrictMode, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { connect } from 'react-redux'

const Home = React.lazy(() => import('./pages/home'));
const Converter = React.lazy(() => import('./pages/converter'));
const Chart = React.lazy(() => import('./pages/chart'));
const PageNotFound = React.lazy(() => import('./pages/notFound'));

function App() {
  // console.log('connect', connect);
  return (
    <div className="App">
      <StrictMode>
        <Suspense fallback={<p>Loading...</p>}>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/convert-currency' element={<Converter />} />
              <Route exact path='/currency/:currencies' element={<Chart />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </StrictMode>
    </div>
  );
}

export default App;
