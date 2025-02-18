import React from 'react'
import Header from './Header'
import Anasayfa from './Anasayfa'
import Footer from './Footer'


function Layout() {
    return (
        <div className='h-[100vh]'>
            <div className=''>
                <div className='absolute'>
                    <Header />
                </div>
            </div>


            <div className='h-screen mt-[15vh]'>

                <Anasayfa />
            </div>

            <Footer />



        </div>
    )
}

export default Layout