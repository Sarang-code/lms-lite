import { Routes, Route } from 'react-router-dom'

// Layouts
import AuthLayout from './layouts/AuthLayout.jsx'

// pages
import HomePage from './pages/HomePage.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'

// Components
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>

      <Routes>

        {/* Home page */}
        <Route path='/' element={ <HomePage navbar={<Navbar dP="Logo" name="LMSName" showLogout={false} />} /> } />

        {/* Authentication (Login and signup) */}
        <Route path='/auth' element={ <AuthLayout /> } >
          <Route path='login' element={ <Login /> } />
          <Route path='signup' element={ <Signup /> } />
        </Route>

      </Routes>

    </>
  )
}

export default App
