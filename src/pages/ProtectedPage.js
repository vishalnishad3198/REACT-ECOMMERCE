import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { checkUserAsync } from '../features/product-list/productListSlice';

const ProtectedPage = ({ children }) => {

    const user = useSelector(statu => statu.product.user);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(checkUserAsync());
    },[dispatch])
    console.log(user)

    return (
        <>
            {user ? children :  <Navigate to={'/login'} replace={true}></Navigate>}
        </>
    );
}

export default ProtectedPage;