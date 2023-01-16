import React from 'react';

function Layout({children}) {
    return (
        <div className='container mx-auto px-4 pb-10'>
            <div className='flex justify-center'>
            {children}
            </div>
        </div>
    );
}

export default Layout;