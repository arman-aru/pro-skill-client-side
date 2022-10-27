import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { myContext } from '../../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(myContext)
    const location = useLocation()



    if(loading){
        return <div className='text-4xl text-blue-500 font-bold'>Loading....</div>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>

    }
    return children;



};

export default PrivateRoute;