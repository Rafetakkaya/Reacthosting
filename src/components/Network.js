import React from 'react';
import "../Css/Network.css"
import flame from "../image1/1@2x.png"
import wordpress from "../image1/2@2x.png"
import seo from "../image1/3@2x.png"
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
const Network = () => {
    return (
        <div className="network">
            <p className="son">SON YAZILAR</p>
            <div className="cardbody">
           
                <div className="cardhd">
                    <img src={flame}></img>
                    <div className="imagecard">
                        <div className="minibox">
                            <h6 className="opac">İŞ HAYATI</h6>
                            <p className="baslıkmet">İhracat Nedir, Nasıl Yapılır?</p>
                            <p className="metin">İhracat basitçe ifade etmek gerekirse <br></br> bir ülkede üretilen bir mal veya hizmetin, başka bir ülke tarafından satın alınmasıdır.</p>
                            <button className="paper">Devamını Oku <AiOutlineArrowRight /></button>

                        </div>
                    </div>
                </div>
                <div className="cardhd">
                    <img src={wordpress}></img>
                    <div className="imagecard">
                        <div className="minibox">
                            <h6 className="opac">NETWORK</h6>
                            <p className="baslıkmet">Content Delivery Network Nedir?</p>
                            <p className="metin">İçerik dağıtım ağı anlamına gelen Content Delivery Network (CDN); bir web sitesine erişmek isteyen kullanıcıları...</p>
                            <button className="paper">Devamını Oku <AiOutlineArrowRight /></button>

                        </div>



                    </div>
                </div>
                <div className="cardhd">
                    <img src={seo}></img>
                    <div className="imagecard">
                        <div className="minibox">
                            <h6 className="opac">SEO</h6>
                            <p className="baslıkmet">SEO Analizi Nasıl Yapılır</p>
                            <p className="metin">Çevrimiçi bir işletme sahibiyseniz, bir WordPress sitesine sahip olmak işinizi büyütmek için en önemli adımlardan biridir.</p>
                            <button className="paper">Devamını Oku <AiOutlineArrowRight /></button>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
}

export default Network;
