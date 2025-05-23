import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEOHelmet from './SEOHelmet';
import Logo from '../assets/Logo1.png';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-beyaz text-center px-4">
            <SEOHelmet
                title="Sayfa Bulunamadı (404) | Sultan Düğün Salonları Bursa"
                description="Aradığınız sayfa bulunamadı. Sultan Düğün Salonları Bursa ana sayfasına dönebilirsiniz. Sultan Düğün Salonu Bursa, Bursa'nın en çok tercih edilen düğün salonu."
                keywords="Sultan Düğün Salonları, Sultan Düğün Salonu, Sultan Düğün Salonu Bursa, Sultan Düğün Salonları Bursa, 404, sayfa bulunamadı, bursa düğün salonu"
            />
            <img src={Logo} alt="Sultan Düğün Salonları Logo" className="h-32 mb-8 opacity-80" />
            <h1 className="text-7xl font-bold text-sertaltin mb-4">404</h1>
            <h2 className="text-3xl font-cormorant mb-2">Sayfa Bulunamadı</h2>
            <p className="mb-8 text-lg text-gray-600">Üzgünüz, aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
            <button
                onClick={() => navigate('/')}
                className="px-8 py-3 bg-sertaltin text-white rounded-lg shadow hover:bg-altin transition-all font-cormorant text-xl"
            >
                Ana Sayfaya Dön
            </button>
        </div>
    );
} 