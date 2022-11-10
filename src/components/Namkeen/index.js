import React from 'react';
import Card from '../ItemBox/card';
import {Cards, FlexRow} from '../ItemBox/styles';
import Mixture from './mixture.jpg';
import AlooBhujia from './bhujia.jpg';
import Moongfali from './moongfali.jpg';
import RadheBhujia from './radheBhujia.jpg';
import Tasty from './tasty.jpg';
import ZeroNamkeen from './zeroNamkeen.jpg';
import RadheMixture from './radheMixture.jpg';
import ChanaDal from './chanaDal.jpg';
import Bhujia from './bhuji.jpg';
import Boondi from './sadaBoondi.jpg';
import MasalaBoondi from './masalaBoondi.jpg';
import PudinaBoondi from './pudinaBoondi.jpg';
import Katori from './katori.jpg';
import Pasta from './pasta.jpg';

export default function Namkeen(){
    return(
        <div style={{background: 'rgb(224, 219, 219)'}}>
            <FlexRow style={{height:"100px", background:"#ebbb1e", alignItems:"center"}}>
                Our Namkeens
            </FlexRow>
            <Cards>
            <Card productName="Madhu Mixture" discountPrice="88" Price="140" discount="43" image={Mixture}/>
            <Card productName="Aloo Bhujia" discountPrice="90" Price="100" discount="10" image={AlooBhujia}/>
            <Card productName="Bhujia" discountPrice="90" Price="100" discount="10" image ={Bhujia}/>
            <Card productName="Radhe-Radhe Bhujia" discountPrice="90" Price="100" discount="10" image ={RadheBhujia }/>
            <Card productName="Tasty Namkeen" discountPrice="90" Price="100" discount="10" image={Tasty}/>
            <Card productName="Radhe-Radhe Mixture" discountPrice="90" Price="100" discount="10" image={RadheMixture}/>
            <Card productName="Zero Sev Namkeen" discountPrice="90" Price="100" discount="10" image={ZeroNamkeen}/>
            <Card productName="Chana Dal" discountPrice="90" Price="100" discount="10" image={ChanaDal}/>
            <Card productName="Moongfali" discountPrice="90" Price="100" discount="10" image={Moongfali}/>
            <Card productName="Boondi"image={Boondi} />
            <Card productName="Masala Boondi" image ={MasalaBoondi}/>
            <Card productName="Pudina Boondi" image={PudinaBoondi}/>
            <Card productName="Pasta Snack" image ={Pasta}/>
            <Card productName="Katori Snack" image={Katori}/>
            
            
            
      
            </Cards>
        </div>
    )
};