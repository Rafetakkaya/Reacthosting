import React from "react";

import host1 from "../image3/ssd@2x.png"
import host2 from "../image3/sinirsiz@2x.png"
import host3 from "../image3/ucretsizssl@2x.png"
import host4 from "../image3/tektiklakurulum@2x.png"
import host5 from "../image3/guvenlimail@2x.png"
import host6 from "../image3/memnuniyet@2x.png"

import "../Css/Host.css"
const Host = () => {
    return (
        <div className="host">
            
            <div className="hostheader">
            <div className="hostleadhead">
                <p className="firsthost">GÜÇLÜ WEB HOSTİNG</p>
                <p  className="secondhost">Hostiki.com tüm uygulamaları sorunsuz çalıştırabileceğiniz yedekli, güvenli ve kesintisiz bir hosting hizmeti sağlar.</p>

            </div>

                <div className="Althost">
                
                    <div className="host1">
                        <img src={host1} alt="img" className="img1" />
                        <h5 className="powerweb">100% SSD Disk</h5>
                        <p className="hostp">SSD Diskler, klasik disklere göre 10 Kata kadar daha fazla okuma/yazma hızı ve IOPS değerine sahiptirler. Bu sayede siteleriniz hızlı açılır.</p>
                        <p className="desc">Detaylı bilgi</p>
                    </div>
                    <div className="host2">
                        <img src={host2} alt="img" className="img1" />
                        <h5 className="powerweb">Sınırsız Özellik</h5>
                        <p className="hostp">Disk, Trafik, Mail Kutusu, Veritabanı, Subdomain, FTP Kullanıcısı gibi kaynaklar limitsizdir. Limit ve kota endişesi olmadan siteniz yayınlanır.</p>
                        <p className="desc">Detaylı bilgi</p>
                    </div>
                    <div className="host3">
                        <img src={host3} alt="img" className="img1" />
                        <h5 className="powerweb">Ücretsiz SSL</h5>
                        <p className="hostp">Ücretsiz SSL ile sitenizi arama motorlarında üst sıralara çıkarın. Google gibi arama motorları SSL kullanımını sıralama ölçütü sayar.</p>
                        <p className="desc">Detaylı bilgi</p>

                    </div>
                </div>
                <div className="Usthost">
                    <div className="host4">
                        <img src={host4} alt="img" className="img1" />
                        <h5 className="powerweb">Tek Tıkla Kurulum</h5>
                        <p className="hostp">WordPress, Opencart, Laravel gibi 300 kadar scripti otomatik kurabilir veya otomatik olarak güncellenir. Bu işlemler için FTP'ye gerek yoktur.</p>
                        <p className="desc">Detaylı bilgi</p>

                    </div>
                    <div className="host5">
                        <img src={host5} alt="img" className="img1" />
                        <h5 className="powerweb">Güvenli Mail Altyapısı</h5>
                        <p className="hostp">Tüm Mail sunucularımız Antispam Gateway arkasında çalışmaktadır. Bu sayede iletileriniz spam klasörüne asla düşmez.</p>
                        <p className="desc">Detaylı bilgi</p>

                    </div>
                    <div className="host6">
                        <img src={host6} alt="img" className="img1" />
                        <h5 className="powerweb">100% Memnuniyet</h5>
                        <p className="hostp">Tüm hosting paketlerimizden 100% memnun kalmanızı garanti ediyoruz. Memnun kalmazsanız ürün 15 gün içinde koşulsuz iade edilir.</p>
                        <p className="desc">Detaylı bilgi</p>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Host;