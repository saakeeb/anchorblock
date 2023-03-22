import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './Component/Layout/Layout';
import Dashboard from './Component/Dashboard/Dashboard';
import Users from './Component/Users/Users';
import Sales from './Component/Sales/Sales';
import Signin from './Component/Login/Signin';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import SignUp from './Component/Login/SignUp';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/Users" element={<PrivateRoute />}>
          <Route path="" element={<Users />} />
        </Route>
        <Route path="sales" element={<Sales />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path='/sign-in' element={<Signin />} ></Route>
      <Route path='/sign-up' element={<SignUp />} ></Route>
    </Routes>
  )
}

export default App;
