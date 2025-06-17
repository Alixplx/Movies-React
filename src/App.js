import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Components/Add';
import Header from './Components/Header';
import WatchList from "./Components/WatchList";
import Watched from "./Components/Watched"
import ContextProvider from './context/GlobalContext';


function App() {
  
  return (
    
    
    <BrowserRouter>

      <ContextProvider>

        <Header />
        
        <Routes>

          <Route path='/' element={ <WatchList /> } />
          <Route path='/watched' element={ <Watched /> } />
          <Route path='/add' element={ <Add /> } />
        </Routes>
      </ContextProvider>
      
    </BrowserRouter>
    
  )
}

export default App;
