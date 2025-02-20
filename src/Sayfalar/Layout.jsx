import React from 'react';
import Header from './Header';
import Anasayfa from './Anasayfa';
import Footer from './Footer';


function Layout({ children }) {
    return (
        <div className=' '>
            {/* Fixed Header */}
            <Header />

            {/* Content */}
            <div className=''> {/* Header yüksekliği kadar padding ekleyin */}
                {children}
            </div>
            <div className=''>
                <Footer />
            </div>

        </div>
    );
}

export default Layout;