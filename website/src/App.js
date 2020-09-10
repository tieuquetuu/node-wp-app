import React,{useEffect} from 'react';
import Skeleton from "react-loading-skeleton";
import './scss/purpose.scss';
// import './libs/@fontawesome/fontawesome-pro/css/all.min.css';

import OffsetTop from "./js/offset-top";
import $ from "jquery";

import Header from "./components/Header";
import SideNavMain from "./components/SideNavMain";
// import Footer from "./components/Footer";

function App() {
    useEffect(() => {
        OffsetTop("#shop-products");
    });

  return (
    <div className="wrapper">
        <Header />

        <SideNavMain/>

        <div className={"main-content"} >
            <div id={"shop-products"} data-offset-top={"#header-main"}>
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        {[1,2,3,4,5,6,7,8,9,10,11,12].map((count)=>
                            <div key={count} className={"col col-md-3 col-lg-3 col-xl-3"}>
                                <Skeleton height={300}/>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>

        {/*<Footer/>*/}
    </div>
  );
}

export default App;
