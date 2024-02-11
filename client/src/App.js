import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import DataProvider from './components/context/DataProvider';
import Login from './components/login/Login';

import Profile from './components/profile-creation/Profile';
import Jobs from './components/Jobs/Jobs';
function App() {
 
 
  
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
          
            <Route path="/"element={<Login  />} />
           
            <Route path="/profile/:_id"element={<Profile  />} />
            <Route path="/jobs/:_id"element={<Jobs  />} />
           
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
