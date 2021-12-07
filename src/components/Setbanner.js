import React from 'react';
import phn from "../image1/phn@2x.png"

import ucuzyemek from "../image1/ucuzyemektarifi_renkli@2x.png"
import gezivego from "../image1/gezivego_renkli@2x.png"

import teknopolis from "../image1/teknopolis_renkli@2x.png"
import icon from "../image1/hostiki@2x.png"

import "../Css/SetBanner.css"
const Setbanner = () => {
    return (
        <div className="setbag">
            
                <div className="safescroll">


                    
                        <img className="phn" src={phn} alt="phn"></img>
                   
                    <div className="setBanner">
                        <div className="headerlead">
                            <div className="paragrafs">
                                <div className="center">
                                    <h3 className="headerfont">Bizi Tercih Eden Sitelerin Hızını Test Et!</h3>
                                   <img className="mg" src={icon} alt="icon"></img>
                                </div>
                                
                                <p className="paragrafbox">
                                    Aşağıda bulunan referans sitelerimize tıklayarak
                                    sitelerin performansını 
                                </p>
                                <p className="prbox">şimdi test et, Hostiki'nin
                                    hızının farkına var!</p>
                            </div>
                          
                        </div>
                     
                        <div className="imges">
                            <img className="imageses" src={ucuzyemek} alt="mg"></img>
                            <img className="imageses" src={teknopolis} alt="mg"></img>
                            <img className="imageses" src={gezivego} alt="mg"></img>
                        </div>
                    </div>
                </div>

            </div>














    );
}

export default Setbanner;
