import React,{useEffect} from 'react';
import './scss/purpose.scss';
import Header from "./components/Header";
import SideNavMain from "./components/SideNavMain";
// import Footer from "./components/Footer";

import Layout from "./js/layout";

function App() {
    useEffect(() => {
        Layout();
    });

  return (
    <div className="wrapper">
        <Header />
        <SideNavMain/>

        <div className={"main-content"} style={{minHeight: 1000}}>

        </div>

        {/*<Footer/>*/}
    </div>
  );
}

export default App;
