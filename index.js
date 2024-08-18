console.log('hello jee');

const API_KEY= "d1845658f92b31c64bd94f06f7188c9c";

function renderWeatherInfo(data){
    let newPara=document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
    
        document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){
    try{
        let city="goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data= await response.json();

        console.log("Weather Data:->",data);

        renderWeatherInfo(data);
    }
    catch(err){
        //handle error here
    }
   

}

async function getCustomWeatherDetails() {
    try{
        let latitude = 17.6333;
        let longitude = 18.3333;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?
                                lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    
        let data = await result.json();
    
        console.log(data);
        renderWeatherInfo(data);
    }
    catch(err) {
        console.log("Errror Found" , err);
    }

}