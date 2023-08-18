import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App'
import HelpPage from './components/HelpPage'
import NavBar from './components/NavBar'

const Main = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/help' element={<HelpPage />}></Route>
                <Route path='*' element={<App />} ></Route>
            </Routes>
        </Router>
    )
}
export default Main