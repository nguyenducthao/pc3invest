// import logo from './logo.svg';
import './App.scss';
// import './components/Header/Header.scss'
import Header from './components/Header/Header'
import ImageHeader from './components/Header/ImageHeader'
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <br />
          <ImageHeader />
          <Header />
          <AppRoutes />
        </div>
      </Router>
    </>

  );
}

export default App;
