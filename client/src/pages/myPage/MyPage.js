import React from 'react';
import {Outlet} from 'react-router-dom'


const MyPage = () => {
    return (
        <>
            <Outlet/>
        </>
    );
};

export default MyPage;