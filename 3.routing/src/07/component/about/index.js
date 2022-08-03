import React from 'react';
import {Outlet} from 'react-router';
import SiteLayout from "../../layout/SiteLayout";
import Navigation from './Navigation';

const index = () => {
    return (
        <SiteLayout>
            <Navigation />
            <Outlet />
        </SiteLayout>
        
    );
};

export default index;
