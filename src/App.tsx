import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import WelcomeCard from "./Components/WelcomeCard/WelcomeCard";
import Background from "./Components/Background/Background";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/dashboard/page";
import Contact from './Components/contact/ContactCard';
import Questionnaires from './Components/Questionnaires/[id]/page';
import Result from './Components/results/page';


function App() { 
  
  return(
    <div>
      <Router>
        <div className="navbar-container">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <div className="container">
                <WelcomeCard />
              </div>
              <div className="background">
                <Background />
              </div>
            </>
            } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/questionnaires/:id" element={<Questionnaires />} />
          <Route path="/results" element={<Result />} />
        </Routes>

      <div className="footer">
        <Footer />
      </div>
      </Router>
  </div>
  )
}

function Home() {
  return <h1>Home Page</h1>;
}

export default App
