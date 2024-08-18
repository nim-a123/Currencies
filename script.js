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


let key =  'freebFVFFim5UWlAHnJpXKZCAdNpABh2'

let time_shower =  document.getElementById('time_shower');

 fetchData()

async function fetchData(){

    try{
        const response = await fetch(`https://api.navasan.tech/latest/?api_key=${key}`);
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        
      
        
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

        time_shower.innerHTML = new Date().toLocaleDateString('fa-IR-u-nu-latn');

    }
    catch(error){
        console.error(error);
    }
}





