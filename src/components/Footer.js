import React from 'react';
import { FaCcMastercard } from "@react-icons/all-files/fa/FaCcMastercard";
import { FaCcVisa } from "@react-icons/all-files/fa/FaCcVisa";
import { FaPhoneSquareAlt } from "@react-icons/all-files/fa/FaPhoneSquareAlt";
import { BiMap } from "@react-icons/all-files/bi/BiMap";
import { FaCcPaypal } from "@react-icons/all-files/fa/FaCcPaypal";
import { MdLocalPostOffice } from "@react-icons/all-files/md/MdLocalPostOffice";








import Logo from "../image5/hostiki@2x.png"


import "../Css/Footer.css"

const Footer = () => {
    return (

        <div class="main">
            <div className="lead">

                <div className="footer">
                    <div className="altFooter">


                        <div className="card1">
                            <img src={Logo} alt="img" className="image" />
                            <h4 className="head">hostiki</h4>
                            <p className="fontag">Web siteniz yerel dükkanınız kadar değerli olabilir.Dükkanınız için nasıl en iyiyi ve
                                en güvenliyi istiyorsanız,Web siteniz içinde en iyisini istemelisiniz </p>
                            <p className="fontag">  <FaPhoneSquareAlt className="footericon"  />0(212) 539 3995 </p>
                            <p className="fontag">  <BiMap className="footericon"  />Atatkent mah.241 sokak Terrace Tema Residance A Blok daire 4</p>
                            <p className="fontag">  <MdLocalPostOffice className="footericon"  />info @hostiki.com</p>

                        </div>
                        <div className="card3">
                            <h4 className="yukarıdan">Hosting</h4>
                            <p className="fontag">Sınırsız Web Hosting</p>
                            <p className="fontag">Wordpress Hosting</p>
                            <p className="fontag">Ucuz Hosting</p>
                            <p className="fontag">Hosting Fiyatları</p>
                            <p className="fontag">Linux Hosting</p>
                            <p className="fontag">Windows Hositng</p>
                            <p className="fontag">Ucretsiz Web Sitesi</p>

                        </div>
                        <div className="card2">
                            <h4 className="yukarıdan">Sunucu</h4>
                            <p className="fontag">XColud Server</p>
                            <p className="fontag">XServer Eco</p>
                            <p className="fontag">Dedicated Server</p>
                            <p className="fontag">Xtreme Server</p>


                        </div>
                        <div className="card2">
                            <h4 className="yukarıdan">SLL</h4>
                            <p className="fontag">SLL Sertifikası</p>
                            <p className="fontag">Hızlı Kurulum SSL</p>
                            <p className="fontag">Şirket SSl</p>
                            <p className="fontag">Kurumsal SSL</p>


                        </div>
                        <div className="card4">
                            <h4 className="yukarıdan">Diğer</h4>
                            <p className="fontag">Marke Tescil</p>
                            <p className="fontag">Hakkımızda</p>
                            <p className="fontag">İletişim</p>

                        </div>
                    </div>
                </div >
                <div className="bank">
                    <div className="banked">

                        <div className="bank1">
                            Copyright @ 1999-2021 hostiki.com Tüm hakları saklıdır


                        </div>
                        <div className="bank2">
                            <FaCcVisa className="res1" />
                            <FaCcMastercard className="res1" />
                            <FaCcPaypal className="res1" />



                        </div>
                    </div>

                </div>


            </div>


        </div >

    );
}

export default Footer;
