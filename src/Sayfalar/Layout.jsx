import React from 'react';
import Header from './Header';
import Anasayfa from './Anasayfa';
import Footer from './Footer';

function Layout() {
    return (
        <div className='h-[100vh]'>
            {/* Fixed Header */}
            <Header />

            {/* Content */}
            <div className='pt-[15vh] h-screen'> {/* Header yüksekliği kadar padding ekleyin */}
                <Anasayfa />
            </div>

            <Footer />
        </div>
    );
}

export default Layout;