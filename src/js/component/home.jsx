import React from "react";
import Semaforo from "./Semaforo.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component



const Home = () => {
    return (
        <>
        
      <div className='container  bag-dark'>
		<Semaforo className/>
        </div>
        
        </>
    );

	};
    export default Home;
