import React from 'react';
import BorderColorIcon from '@material-ui/icons/BorderColor';


import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';








import "../Css/Header.css"
import "../Css/Main.css"


const Header = () => {
    return (
        <div className="fixed">
            <div className="leadMain">



            </div>


            <div className="header">



                <div className="header_option">
                    <img className="header_logo" src="https://www.umutyasar.com/wp-content/uploads/2021/11/logo.png" alt="hostiki" />
                    <span className="header_option-LineOne">
                        Ana Sayfa
                    </span>
                    <span className="header_option-LineOne">
                        Hosting
                        <ArrowDropDownOutlinedIcon />
                    </span>
                    <button className="header_option-LineOne" title="yeni" id="yeni">
                        Yeni
                    </button>

                    <span className="header_option-LineOne">
                        Domain
                        <ArrowDropDownOutlinedIcon />
                    </span>
                    <span className="header_option-LineOne">
                        E-Posta
                    </span>

                    <span className="header_option-LineOne">
                        Server
                    </span >
                    <span className="header_option-LineOne">
                        SSL
                    </span >
                    <span className="header_option-LineOne">
                        Giriş Yap
                    </span>
                    <span className="header_option-LineOne">
                        <button className="kayıtol">Kayıt Ol</button>
                    </span>
                </div>
            </div>
        </div>


    );
}

export default Header;
