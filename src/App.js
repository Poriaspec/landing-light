import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreditCard from "./components/CreditCard";

const App=()=>{
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<CreditCard/>} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
