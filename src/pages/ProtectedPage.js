import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { checkUserAsync } from '../features/product-list/productListSlice';

const ProtectedPage = ({ children }) => {

    const loginUser = useSelector(state => state.product.loggedInUser);
    const dispatch = useDispatch();

    console.log(loginUser?.length)

    return (
        <>

                {loginUser[0]?.email ? children
                : <Navigate to={'/login'} ></Navigate>}

        </>
    );
}

export default ProtectedPage;