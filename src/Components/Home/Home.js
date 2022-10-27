import React from 'react';
import { Link } from 'react-router-dom';
import brand1 from '../../img/brand1.png'
import brand2 from '../../img/brand2.png'
import brand3 from '../../img/brand3.png'
import brand4 from '../../img/brand4.png'
import brand5 from '../../img/brand5.png'
import brand6 from '../../img/brand6.png'
import about from '../../img/about.jpg'





const Home = () => {
   
    
    return (
        <div  className="px-8 md:px-12">


        <div className='grid grid-cols-1 md:grid-cols-2'>

           <div className=" flex flex-col items-center  mt-14  md:mt-52">
            <center>

            <h1 className='lg:text-6xl font-bold md:text-4xl text-5xl tracking-wider opacity-82 mb-8 '>Find Your  the <span className='lg:text-5xl md:text-3xl text-5xl  text-cyan-400 '> PreferredLet</span> career begin with the confidence of competence</h1>
            </center>
            
            
            <Link to='/login'>
            <button type="button" className="items-start    text-white bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-400 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-14 py-4 text-center mr-2 mb-2">Log In</button>
            </Link>
         </div>
           
        
          
          <div className=" flex justify-center items-center">
          <img className=' md:w-80 md:h-96 lg:h-max lg:w-max' src={about} alt="" />
          </div>
    </div>


         
            <h2 className='text-center text-2xl font-bold'>Trusted by the world’s best Brand</h2>
        <div className='flex justify-center '>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-10 mt-8 mx-4 F'>
                <img className='h-8' src={brand2} alt="" />
                <img className='h-8' src={brand3} alt="" />
                <img className='h-8' src={brand4} alt="" />
                <img className='h-8' src={brand1} alt="" />
                <img className='h-8' src={brand5} alt="" />
                <img className='h-8' src={brand6} alt="" />
            </div>
        </div>


        </div>
    );
};

export default Home;