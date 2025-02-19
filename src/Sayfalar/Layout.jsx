import React from 'react';
import Header from './Header';
import Anasayfa from './Anasayfa';
import Footer from './Footer';


function Layout({ children }) {
    return (
        <div className=' bg-beyaz'>
            {/* Fixed Header */}
            <Header />

            {/* Content */}
            <div className=''> {/* Header yüksekliği kadar padding ekleyin */}
                {children}
            </div>
            <div className='hidden'>
                <Footer />
            </div>

        </div>
    );
}

export default Layout;