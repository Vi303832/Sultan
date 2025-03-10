import * as React from 'react';
import Gl from "../assets/Gl.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Logo from "../assets/Logo1.png"

const content = [
    {
        header: 'Seda Hanım',
        info: 'Rüya gibi bir mekan herşey gayet güzeldi, ilgi ve alaka çok iyi garson ve yetkili kişiler den çok memnun kaldım. Kapalı bir mekan, havalandırma, klima mevcut yeterliydi, görsellik açısından masa düzeni, süslemeler çok güzeldi, sandalyeler giydirme değil döşemeydi.. yemekli bir organizasyondu yemekleri gayet güzel ve lezzetli, orkestra ve ışıklandırma muhteşemdi, tercih sebebim yeni bir salondu ve görselliği çok iyiydi, fiyat olarak gayet normal hizmetine göre.',
    },
    {
        header: 'Rahime Hanım ',
        info: '15 Eylül 2024 Valide Sultan Teras katta düğünüm vardı öncelikle Salon İşletmecileri Kenan Bey başta olmak üzere tüm ekibe çok teşekkür ederim, fotoğraf konusunda Foto Yusuf özellikle Gülcan hanım her anınızı ölümsüzleştirmek için tüm gece yanınız da en iyi nedimeniz oluyor resmen❤️ Şeflerden İsmail şef gözümüzün içine bakıp her şeyi istediğimiz yönde ilerletmek için çalışıyordu iyi ki Sultan Ailesi dedirttiğiniz ve bu özel günümü en güzel şekilde tamamladığınız için teşekkürler Sultan Ailesi ve Foto Yusuf Gülcan Hanım🙏👍',
    },
    {
        header: 'Burcu Hanım',
        info: '24 Ağustos Mihrimah salonda sünnet yaptık açikcasi yorumlara bakarak biraz cekindik ama o kadar çok memnun kaldık ki insanlar kötü yorumlari neye göre yapmislar bilemiyorum yemekleri mükemmeldi misafirlerimiz çok beğendi herkes övgüyle bahsetti yemeklerden garsonlari vızır vızır calisiyor hiçbir bir masanın hizmeti aksamadi salon seflerimiz olsun hepsi kusursuz hizmet sağladılar bize ozellikle kuaför Sibel abla, mudurlerden Velat bey,organizasyondan Kübra hanim çok ama çok yardımcı oldular kusursuz bir sünnet yaptık sayelerinde Sultan Düğün Salonlarına teşekkür ediyoruz...',
    },
    {
        header: 'Gamze & Gökçe',
        info: 'Sultan Düğün Salonları, klasik düğün salonlarının ötesine geçerek tamamen otel konseptini benimsemiş; hizmet kalitesi ve ilgisiyle fark yaratan bir mekân. Gökçe ve Gamze çifti olarak düğünümüzü burada gerçekleştirdik. Anlaşma yaptığımız ilk günden itibaren bizimle son derece detaylı ve samimi bir şekilde ilgilendiler. Özellikle düğün günü, gelin odasından çıkış anına kadar ve düğün sırasında her an yanımızda olan Şaban Bey’e teşekkürlerimizi sunarız.Düğün sonunda ise arabaya binmeden hemen önce sizleri küçük ve hoş bir sürpriz karşılıyor, bu incelik gerçekten unutulmazdı. Benimle birlikte ağustos ayında evlenecek kız kardeşim ve yakın arkadaşım da burada anlaşma yaptı. Bu özel deneyimden dolayı Sultan Düğün Salonları ekibine teşekkür ederiz. ',
    },
    {
        header: 'Ozcan Bey',
        info: 'Mekan genişlik açısından oldukça etkileyiciydi. Masalar yuvarlak şekilde düzenlenmişti ve genel düzenleme göze hitap ediyordu. Renklerin uyumu oldukça hoştu. Konuklarda mekanı beğendi. Kent merkezinde yer aldığı için toplu taşıma araçlarıyla ulaşım son derece kolaydı. Kapalı bir alan olmasına rağmen klima sistemi yeterli seviyedeydi. Organizasyon ve atmosfer genel olarak tatmin ediciydi. 600 kişilik, ikramlı bir düğün gerçekleştirdik. Salonda kolon problemi yaşamadık çünkü mekan oldukça ferah bir alana sahipti. En dikkat çeken detaylardan biri, gelin arabamızın bir asansör yardımıyla doğrudan 3. kata çıkarılması oldu. Bu mekânı herkese gönül rahatlığıyla tavsiye ederim.',
    },
    {
        header: 'Barış Bey',
        info: 'İlgi alaka gayet güzel konuklarım çok memnun kaldı. Ulaşımı rahat bir mekan, toplu taşıma, otoparkı mevcut, havalandırma, klima mevcuttu yeterliydi. Masa düzeni ve süslemeler iyiydi, ikramlı bir organizasyondu, lezzetleri gayet güzel ve tazeydi. Tercih sebebim hizmet kalitesine göre fiyatı uygundu. Pist alanı geniş rahat ve kolonsuz garson ve yetkili kişilerden çok memnun kaldım.',
    },



];

export default function YorumSlider() {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-3'>
                <div className='text-5xl text-center font-cormorant' >Müşteri Yorumları</div>
                <img src={Gl} className='h-[10vh]' />
            </div>

            <Swiper
                modules={[Navigation]}
                loop={true}
                spaceBetween={30}
                navigation
                className="rewind   "
            >
                {content.map((p, index) => {
                    return (
                        <SwiperSlide className="p-7 max-xs:p-0  pb-16  relative max-sm:right-1   " key={index}>
                            <div className=' flex justify-center'>
                                <div className='flex flex-col items-center gap-3 w-[70%]  '>
                                    <h1 className="font-bold">{p.header}</h1>
                                    <p className='text-center text-sm'>{p.info}</p>
                                    <div><img src={Logo} className='h-[100px]' /></div>
                                </div>
                            </div>


                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
