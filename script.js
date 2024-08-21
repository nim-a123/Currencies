let USA = document.getElementById('USA');
let Euro = document.getElementById('Euro');
let london = document.getElementById('london');
let UAE = document.getElementById('UAE');
let AUD = document.getElementById('AUD');
let CHF = document.getElementById('CHF');
let CAD = document.getElementById('CAD');
let RUB = document.getElementById('RUB');
let TRY = document.getElementById('TRY');
let CNY = document.getElementById('CNY');
let INR = document.getElementById('INR');
let SAR = document.getElementById('SAR');
let DKK = document.getElementById('DKK');
let PKR = document.getElementById('PKR');
let NGN = document.getElementById('NGN');
let RSD = document.getElementById('RSD');
let PAB = document.getElementById('PAB');
let PHP = document.getElementById('PHP');


// crypto

let BTC = document.getElementById('BTC');
let ETH = document.getElementById('ETH');
let USDT = document.getElementById('USDT');
let BNB = document.getElementById('BNB');
let SOL = document.getElementById('SOL');
let USDC = document.getElementById('USDC');
let XRP = document.getElementById('XRP');
let TON = document.getElementById('TON');
let DOGE = document.getElementById('DOGE');
let TRX = document.getElementById('TRX');
let ADA = document.getElementById('ADA');
let AVAX = document.getElementById('AVAX');

////

let c1 ;
let c2 ;
let c3 ;
let c4 ;
let c5 ;

let m1 ;
let m2 ;
let m3 ;
let m4 ;
let m5 ;

let key =  'freely1v3yGeJgj8BrmsN6nQA30Jifs6'

let key_crypto =  '1481282cbeff5f6fec4294b1493b1d628c57a27b1fb3bacbe7159221e784db34'

let time_shower =  document.getElementById('time_shower');
let time_shower_en = document.getElementById('time_shower_en')

let xchengenumb = document.getElementById('xchengenumb');
let x_crpyto = document.getElementById('x_crpyto');
let x_currency = document.getElementById('x_currency');
let Result_exchange = document.getElementById('Result_exchange')

 fetchData()

async function fetchData(){

    try{
        const response = await fetch(`https://api.navasan.tech/latest/?api_key=${key} `);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
            


        time_shower.innerHTML = new Date().toLocaleDateString('fa-IR-u-nu-latn');
        time_shower_en.innerHTML = new Date().toLocaleDateString();

         m1 =  data.usd_buy.value ;
         m2 =  data.eur.value ;
         m3 =  data.gbp.value ;
         m4 =  data.aud.value ;
         m5 =  data.chf.value ;

        USA.innerHTML = parseInt(data.usd_buy.value).toLocaleString()
        Euro.innerHTML = parseInt(data.eur.value).toLocaleString()
        london.innerHTML= parseInt(data.gbp.value).toLocaleString()
        UAE.innerHTML = parseInt(data.aed.value).toLocaleString()
        AUD.innerHTML = parseInt(data.aud.value).toLocaleString()
        CHF.innerHTML = parseInt(data.chf.value).toLocaleString()
        CAD.innerHTML = parseInt(data.cad.value).toLocaleString()
        RUB.innerHTML = parseInt(data.rub.value).toLocaleString()
        TRY.innerHTML = parseInt(data.try.value).toLocaleString()
        CNY.innerHTML = parseInt(data.cny.value).toLocaleString()
        INR.innerHTML = parseInt(data.cny.value).toLocaleString()
        SAR.innerHTML =  parseInt(data.sar.value).toLocaleString()
        DKK.innerHTML = parseInt(data.dkk.value).toLocaleString()
        PKR.innerHTML = parseInt(data.pkr.value).toLocaleString()
        NGN.innerHTML = parseInt(data.ngn.value).toLocaleString()
        RSD.innerHTML = parseInt(data.rsd.value).toLocaleString()
        PAB.innerHTML = parseInt(data.pab.value).toLocaleString()
        PHP.innerHTML = parseInt(data.php.value).toLocaleString()

       
        

    }
    catch(error){
        console.error(error);
    }
}




crypto()

async function crypto(){

    try{
        const response = await fetch(`https://api.coincap.io/v2/assets`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();

        console.log(data)

        time_shower.innerHTML = new Date().toLocaleDateString('fa-IR-u-nu-latn');
        time_shower_en.innerHTML = new Date().toLocaleDateString();

        BTC.innerHTML = parseInt(data.data[0].priceUsd).toLocaleString() + ' ' + '$'
        ETH.innerHTML = parseInt(data.data[1].priceUsd).toLocaleString() + ' ' + '$'
        USDT.innerHTML= parseInt(data.data[2].priceUsd).toLocaleString() + ' ' + '$'
        BNB.innerHTML = parseInt(data.data[3].priceUsd).toLocaleString() + ' ' + '$'
        SOL.innerHTML = parseInt(data.data[4].priceUsd).toLocaleString() + ' ' + '$'
        USDC.innerHTML= parseFloat(data.data[5].priceUsd).toLocaleString() + ' ' + '$'
        XRP.innerHTML = parseFloat(data.data[6].priceUsd).toLocaleString() + ' ' + '$'
        TON.innerHTML = parseFloat(data.data[7].priceUsd).toLocaleString() + ' ' + '$'
        DOGE.innerHTML= parseFloat(data.data[8].priceUsd).toLocaleString() + ' ' + '$'
        TRX.innerHTML = parseFloat(data.data[9].priceUsd).toLocaleString() + ' ' + '$'
        ADA.innerHTML = parseInt(data.data[10].priceUsd).toLocaleString() + ' ' + '$'
        AVAX.innerHTML= parseInt(data.data[11].priceUsd).toLocaleString() + ' ' + '$'
         //  console.log(data.data[6])

         c1 =  data.data[0].priceUsd ;
         c2 =  data.data[1].priceUsd ;
         c3 =  data.data[2].priceUsd ;
         c4 =  data.aud.value ;
         c5 =  data.chf.value ;



    }
    catch(error){
        console.error(error);
    }
}





function test(){
amounth = xchengenumb.value ;
crypto =  x_crpyto.value; ;
money  = x_currency.value;
xcehnge_handeler()

x3 = parseInt(amounth) * (crypto * money) ;

Result_exchange.value  = parseInt(x3)

alert(amounth)
alert(crypto)
alert(money)
}


function xcehnge_handeler(){


if(money === 'USD'){ 
    money = m1
 }
if(money === 'EUR'){
    money = m2
}
if(money === 'GBP'){
    money = m3
}
if(money === 'AED'){
    money = m4
}
if(money === 'AUD'){
    money = m5
}

if(crypto === 'BTC'){ 
    crypto = c1
 }
if(crypto === 'ETH'){
    crypto = c2
}
if(crypto === 'USDT'){
    crypto = c3
}



}
