import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { myContext } from '../../AuthProvider/AuthProvider';
import login1 from '../../img/login1.png'
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';



const Login = () => {
    const [error, setError] = useState('')
    const {logIn,googleSignIn,githubSignIn} = useContext(myContext)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';



    const handelSubmit = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log( email, password);
        logIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from,{replace:true})

        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
           })

    }
    const handelGoogleSignIn = () =>{

        googleSignIn(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
           
    
        })
        .catch(error=>{
             console.error(error)
             setError(error.message)
            })
    }
    
    const handelGithubSignIn = () =>{
        githubSignIn(githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
           
    
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
           })
    }

    return (
        <div className='mx-12 mt-5 '>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
            <div className="block p-8 md:p-20 rounded-lg    border ">
<form onSubmit={handelSubmit}>

<div className="form-group mb-6">
  <label for="exampleInputEmail1" className="form-label inline-block mb-2 font-bold">Email address</label>
  <input name='email' type="email" className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-black
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
    aria-describedby="emailHelp" placeholder="Enter email"/>

</div>
<div className="form-group mb-6">
  <label for="exampleInputPassword1" className="form-label inline-block mb-2 font-bold">Password</label>
  <input name='password' type="password" className="form-control block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-black
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
    placeholder="Password" />
</div>
<h1 className='font-bold text-xs mb-10'>New in this page? <Link className='text-blue-600' to='/register'>Create an account</Link></h1>
<h1 className='my-2 text-red-600 font-bold'>{error}</h1>
<button type="submit" className="
 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
</form>
 <div className='grid grid-cols-3'>
    <div className='mt-2'><hr /><hr /></div>
    <div className='text-center'>Or</div>
    <div className='mt-2'><hr /><hr /></div>
 </div>
 <div>

 </div>
 <div onClick={handelGoogleSignIn} className='flex gap-2  border  rounded-xl'>
 <button className='flex font-bold mt-2  py-2 '> <FaGoogle className='w-10 h-8 mx-5  text-center'></FaGoogle> <h1 className='mt-1'> Sign in with Google  </h1></button>
  </div>
<br />

  <div  onClick={handelGithubSignIn} className='flex gap-2 border rounded-xl '>
 <button className='flex font-bold mt-2 py-2  '> <FaGithub className='w-10 h-8 mx-5'></FaGithub> <h1 className='mt-1'> Sign in with Github</h1></button>
  </div>
   

</div>
 
        <div className='flex justify-center items-center'>
            <img className='w-[29rem] rounded-2xl' src={login1} alt="" />
        </div>

       




 </div>
 



        </div>
    );
};

export default Login;