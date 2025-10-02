import React from 'react';
import Profile from './Profile';
import Header from './Header';

const Layout = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row'>
            <main className='flex-1 order-2 lg:order-1 overflow-auto'>
                <Header />
            </main>
            <aside className='lg:w-96 bg-card border-l place-content-center border-border order-1 lg:order-2 lg:sticky lg:top-0 lg:h-screen flex flex-col'>
                <Profile />
            </aside>
        </div>
    );
};

export default Layout;