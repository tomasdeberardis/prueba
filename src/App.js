import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Login from './Pages/login';
import UsersAll from './Pages/UsersAll';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/usersall" element={<UsersAll />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
