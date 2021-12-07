import React from 'react';
import com from "../image2/com@2x.png";
import net from "../image2/net@2x.png";
import store from "../image2/store@2x.png";
import online from "../image2/online@2x.png";
import backimg from "../image2/Hostikibg@2x.png"


import "../Css/Body.css"

const Body = () => {
    return (
        <div className="body">
            <div className="back_div">
                <img className="backdivimg" src={backimg} alt="res"></img>
            </div>
            <div className="altbody">
                <div className="inputdiv">
                    <input className="bodyInput" type="text" placeholder="Lütfen Alan Adınızı Giriniz!(Örnegin: Alanadı.com)" />
                    <select className="custon_select">
                        <option className="info" value=".info">.info</option>


                        <option value=".com">.com</option>


                        <option value=".net">.net</option>


                        <option className="store" value=".store">.store</option>

                    </select>
                    <button className="bodyButton">Domain Sorgula</button>
                </div>
            </div>





            <div className="adress_image">
                <div className="adresimage_div">
                    <div className="address_div">
                        <img className="icon_image" src={net} alt="resim" />
                    </div>
                    <div className="paragraf_div">
                        <p class="paragraf1">7,99$ <p className="slas">/</p></p>
                        <p className="paragraf2">4,99$</p>


                    </div>



                    <div className="address_div">
                        <img className="icon_image" src={online} alt="resim" />
                    </div>
                    <div className="paragraf_div">

                        <p class="paragraf1">7,99$<p className="slas">/</p></p>
                        {/* <img className="cizgi" src={cizgi} alt="resim" /> */}
                        <p className="paragraf2">0.99$</p>


                    </div>


                    <div className="address_div">
                        <img className="icon_image" src={com} alt="resim" />
                    </div>
                    <div className="paragraf_div" >
                        <p class="paragraf1">7,99$<p className="slas">/</p></p>
                        {/* <img className="cizgi" src={cizgi} alt="resim" /> */}
                        <p className="paragraf2">2.99$</p>

                    </div>


                    <div className="address_div">
                        <img className="icon_image" src={store} alt="resim" />

                    </div>
                    <div className="paragraf_div">
                        <p class="paragraf1">7,99$<p className="slas">/</p></p>
                        {/* <img className="cizgi" src={cizgi} alt="resim" /> */}
                        <p className="paragraf2">3.99$</p>

                    </div>



                </div >

            </div>



        </div >
    );
}

export default Body;
