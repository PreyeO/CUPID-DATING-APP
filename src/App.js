
import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './Pages/About'; 
import Users from './Pages/Users';
import ErrorPage from './Components/Errors/404Error';
import SignUp from './Pages/SignUp';
import ErrorBoundary from './Components/Errors/ErrorBoundary';
import "react-toastify/dist/ReactToastify.css";




function App() {
  return (
    <>
    <ErrorBoundary >
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path= '/about' element={<About />} />
        <Route path= '/users' element={<Users />} />
        <Route path= '/signup' element={<SignUp />} />
        <Route path= '*' element={<ErrorPage/> } />
    </Routes>
    </Router>
    </ErrorBoundary>
    </>
  );
} 

export default App;
