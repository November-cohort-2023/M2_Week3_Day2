import './App.css'
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Students from './pages/Students'
import StudentDetails from './pages/StudentDetails'

function App() {

  return (
    <>
      <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path="/students" element={<Students></Students>}></Route>
      <Route path="/students/:id" element={<StudentDetails></StudentDetails>}></Route>
     </Routes>
    </>
  )
}

export default App
