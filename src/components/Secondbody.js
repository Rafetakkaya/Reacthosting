import React from 'react';
import linux from "../image4/linux@2x.png"
import windows from "../image4/windows@2x.png"
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import Advanced from "../image1/baslangic@2x.png"
import set from "../image1/performans2@2x.png"
import web from "../image4/webhosting@2x.png"

import "../Css/Second.css"
const Secondbody = () => {
    return (
        <div className="bluebox">
            <div className="boxinside">
                <p className="withostiki">HOSTİKİ İLE TANIŞIN</p>
                <h4 className="meethostiki">HOSTİKİ İLE TANIŞMA ZAMANI</h4>

            </div>

            <div className="cardhead">
                <div className="first">
                    <div className="spn">
                        <div className="ptag">
                            <p className="p">Yeni Başlangıç</p>

                        </div>
                        <div className="images">
                            <img className="linux" src={linux} alt="linux"></img>
                            <p className="slash">/</p>

                            <img className="windows" src={windows} alt="windows"></img>

                        </div>

                    </div>
                    <div className="advancedimage">
                        <img src={Advanced}></img>

                    </div>
                    <div className="price">
                        <h4 className="headForza">Starter Paketi +</h4>
                        <p className="fontsm">Yeni hosting Deneyimi</p>
                        <p className="textdec">7,99$<p className="transform"></p></p>
                        <h2 className="dlex">$12,99<h6 className="halt">/ay</h6></h2>
                        <p className="fontsm">$290 Yıllık Ödeme </p>





                    </div>
                    <div className="butonmenu">
                        <button className="sepeteEkle">Sepete Ekle<AiOutlineArrowRight className="arrow" /></button>
                        <p className="strong"><strong>1 Site </strong> Barındırma</p>
                        <p className="strongtwo"><strong>1 GB SSD </strong>Disk</p>
                        <p><strong>5 Adet </strong>E-Posta</p>


                    </div>

                </div>
                <div className="second">
                    <div className="spn">
                        <div className="ptag">
                            <p className="p">Orta Seviye</p>

                        </div>
                        <div className="images">
                            <img className="linux" src={linux} alt="linux"></img>
                            <p className="slash">/</p>

                            <img className="windows" src={windows} alt="windows"></img>

                        </div>

                    </div>
                    <div className="advancedimage">
                        <img src={set}></img>

                    </div>
                    <div className="price">
                        <h4 className="headForza">Performance ++</h4>
                        <p  className="fontsm" >Sınırsız hosting Deneyimi</p>
                        <p className="textdec">7,99$<p className="transform"></p></p>
                        <h2 className="dlex">$15,34<h6 className="halt">/ay</h6></h2>
                        <p className="fontsm">$350 Yıllık Ödeme </p>





                    </div>
                    <div className="butonmenu">
                        <button className="sepeteEkle">Sepete Ekle<AiOutlineArrowRight className="arrow" /></button>
                        <p className="strong"><strong>Sınırsız Site</strong> Barındırma</p>
                        <p className="strongtwo"><strong>Sınırsız SSD </strong>Disk</p>
                        <p><strong>Sınırsız </strong>E-Posta</p>


                    </div>

                </div>
                <div className="third">
                    <div className="spn">
                        <div className="ptag">
                            <p className="p">Profesyonel</p>

                        </div>
                        <div className="images">
                            <img className="linux" src={linux} alt="linux"></img>
                            <p className="slash">/</p>

                            <img className="windows" src={windows} alt="windows"></img>

                        </div>

                    </div>
                    <div className="advancedimages">
                        <img className="bigfoto" src={web}></img>

                    </div>
                    <div className="price">
                        <h4 className="headForza">Advanced +++</h4>
                        <p  className="fontsm">Sınırsız hosting Deneyimi</p>
                        <p className="textdec">7,99$<p className="transform"></p></p>
                        <h2 className="dlex">$16,00<h6 className="halt">/ay</h6></h2>
                        <p  className="fontsm">$400 Yıllık Ödeme </p>





                    </div>
                    <div className="butonmenu">
                        <button className="sepeteEkle">Sepete Ekle<AiOutlineArrowRight className="arrow" /></button>
                        <p className="strong"><strong>Sınırsız Site</strong> Barındırma</p>
                        <p className="strongtwo"><strong>Sınırsız SSD </strong>Disk</p>
                        <p><strong>Sınırsız </strong>E-Posta</p>


                    </div>



                </div>

            </div>
        </div>
    );
}

export default Secondbody;
