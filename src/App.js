import './App.css';
import { Header, Main } from './components';
import {BrowserRouter} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  

  return (
    <BrowserRouter className="container">
      <Header/>
      <Main/>

      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
