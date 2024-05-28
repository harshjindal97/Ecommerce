import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter , Routes , Route} from "react-router-dom"
import Header from './components/headers';
import Home from './pages/home';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/home' exact={true} element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
