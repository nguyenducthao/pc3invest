// import logo from './logo.svg';
import './App.scss';
// import './components/Header/Header.scss'
import Header from './components/Header/Header'
import ImageHeader from './components/Header/ImageHeader'
import AppRoutes from './routes/AppRoutes';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { history } from "./helpers/history";

function App() {
  return (
    <>
      <Router history={history}>
        {/* <Router> */}
        <div className='container'>
          <br />
          <ImageHeader />
          <Header />
          <AppRoutes />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </>

  );
}

export default App;