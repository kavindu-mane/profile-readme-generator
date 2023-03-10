import Header from "./components/Header";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";


const linkedObject = {
  "/":<Home/> ,
  "/create": <Create/>
}

function App() {
  return (
    <React.Fragment>
      <Header/>
        <Router>
          <Routes>
            {Object.keys(linkedObject).map(key => (
              <Route key = {key} path = {key} element = {linkedObject[key]}/>
            ))}
            {<Route path = "*" element = {<Error/>}/>}
          </Routes>
        </Router>
      <Footer/>
    </React.Fragment>
  )
}

window.addEventListener("scroll" , () =>{
  const element = document.querySelector(".header-bg")
  if(window.scrollY > 50){
    element.style.backgroundColor = "var(--background-color)"
    element.style.boxShadow = "0 5px 20px var(--shadow-color)"
  }else{
    element.style.backgroundColor = "transparent"
    element.style.boxShadow = "none"
  }
});

export default App;
