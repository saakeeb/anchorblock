import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './Component/Layout/Layout';
import Dashboard from './Component/Dashboard/Dashboard';
import Users from './Component/Users/Users';
import Sales from './Component/Sales/Sales';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="sales" element={<Sales />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}

export default App;
