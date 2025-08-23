import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './layouts/Dashboard.jsx'
import HomePage from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {
  return (
    <>

      <HomePage navbar={<Navbar dP="Logo" name="LMSName" />} />

      <DashboardLayout
      mainHeader = {<Header />}
      navbar = {<Navbar dP="displayPicture" name="userName" />} 
      sidebar = {<Sidebar />}
      >
      
      </DashboardLayout>

      {/* <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes> */}

    </>
  )
}

export default App
