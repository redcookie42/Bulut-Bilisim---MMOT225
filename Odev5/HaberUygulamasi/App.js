import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  ImageBackground
} from 'react-native';


import NewsItem from './NewsItem.js';

import Background from './wallpaper.jpg';

const App = () => {
  return (
    <SafeAreaView>
      <ImageBackground source={Background} style={{ resizeMode: 'cover' }}>
        <ScrollView>
          <NewsItem type='Technology' title="Epic Games" description="GTA5, Epic Games tarafından ücretsiz olarak mağazadaki yerini aldı." />
          <NewsItem type='Technology' title="Apple" description="İphone 12 Türkiye satışları başladı." />
          <NewsItem type='Technology' title="Monster" description="Monster çıkardığı yeni seri bilgisayarlarla piyasada devrim yarattı." />
          <NewsItem type='Magazine' title="Wonder Women" description="Gal Gadot 2021'de yeni filmiyle ortaya çıkıyor." />
          <NewsItem type='Magazine' title="Aşıkların İlk Fotoğrafı" description="Oyuncu Gonca Vuslateri, bir süre önce şarkıcı Hakan Altun ile hakkında çıkan aşk iddialarını doğruladı." />
          <NewsItem type='Magazine' title="Spotify" description="Spotify, 2020'nin en çok dinlenen şarkıları gösteren yeni bir özellik getirdi." />
          <NewsItem type='Politics' title="Yapay Başkan" description="Putin "Yapay zeka devlet başkanı olur mu?" sorusunu yanıtladı." />
          <NewsItem type='Politics' title="Hasat" description="Bakan Pakdemirli, mısır hasadı ve buğday ekimi yaptı." />
          <NewsItem type='Politics' title="Konuşma" description="Şentop, TBBM'nin açılışının 100.yılında milli egemenlik ve temsil uluslararası sempozyumu'nda konuştu." />
          <NewsItem type='Sports' title="Yenilgi" description="Sivasspor, evinde Villareal'e yenilmesine rağmen tur umutlarını son maça taşıdı." />
          <NewsItem type='Sports' title="Kavga" description="Ateşi Hakan Çalhanoğlu yaktı! Milan iki farklı geriden gelip Celtic'i parçaladı." />
          <NewsItem type='Sports' title="Talihsizlik" description="Talihsizlikler Çağlar Söyüncü'nün yakasını bırakmıyor! Geri döndüğü maçta sakatlandı." />
          <NewsItem type='Health' title="Arap Ülkeleri" description="Arap ülkelerinde Kovid-19 kaynaklı can kayıpları arttı." />
          <NewsItem type='Health' title="Son Dakika" description="Sağlık Bakanlığı: "Yoğun bakıma yandaş torpili, başlıklı haberler tümüyle gerçek dışıdır"." />
          <NewsItem type='Health' title="Sahte İlaç" description="Sağlık Bakanlığı'ndan 'kan sulandırıcı ilaç' haberlerine yalanlama." />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};



export default App;
