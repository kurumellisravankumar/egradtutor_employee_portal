import react from "react";
import {BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import "./App.css";
import EmployeePortalHomepage from "./EmployeePortalHomepage/EmployeePortalHomepage";

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<EmployeePortalHomepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
