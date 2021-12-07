import React from 'react';
import Logo from "../image5/hostiki@2x.png"

import Logogaranti from "../image5/garanti@2x.png"
import LogoCloud from "../image5/cloud-lock@2x.png"
import "../Css/Althead.css"
const Althead = () => {
    return (
        <div className="altcard">
            

            <div className="althead">
                
                    <div className="paragraf">
                        <img src={Logo} alt="resim" className="Logoalthead" />
                        Uzman ekibimiz sorularınızı yanıtlamaya ve çevrimiçi varlığınızı artırmanıza yardımcı olmak için her zaman hazır.
                    </div>
                

            </div>
            <div className="secondcard">

                <div className="twistcard1">
                    <img src={Logogaranti} alt="resim" className="paragraf_logo" />

                    <div className="paragraftag">

                        <h4 className="baslıkParagraf">15 Gün Para İade Garantisi</h4>
                        <p className="basparagrafhead">15 gün para iade garantisi, siz değerli  müşterilerimiz için düşünüldü. Eğer ki farklı sebeplerden dolayı 
                            memnun kalmazsanız  koşulsuz şartsız 15 gün para iade garantisi  sunuyoruz.</p>
                        <button className="paragrafButton" title="şimdi hostiki'len" >Şimdi hostiki'len</button>



                    </div>

                </div>
                <div className="twistcard2">
                    <img src={LogoCloud} alt="resim" className="paragraf_logo"/>
                    <div className="paragraftag">
                        <h4 className="baslıkParagraf">İşinizi Oluşturun ve Koruyun</h4>
                        <p className="basparagrafhead">Siz değerli müşterilerimiz adına  oluşturduğumuz bu ortamda güvenli şekilde işinizi oluşturabilirsiniz. İşinizi oluşturun ve koruyun, 
                            etiketiyle sizlere sunduğumuz  hizmetten gurur duyuyoruz.</p>
                        <button className="paragrafButton" title="şimdi hostiki'len" >Şimdi hostiki'len</button>

                    </div>

                </div>

            </div>
        </div >


    );
}

export default Althead;
