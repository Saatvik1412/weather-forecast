// Google geolocation key AIzaSyCCBx7iHEc8GC145pbrOu-KZJNMbJrXhTw
// OpenWeather API 

async function setWeather(latitude, longitude){
    try {
    //     latitude = parseInt(latitude)
    //     longitude = parseInt(longitude)
        // let request = "api.openweathermap.org/data/2.5/forecast/daily?lat="+latitude+"&lon="+longitude+"&appid=59af7b8b7dd66b0e4011dc66c1c29214"
        // let request = "api.openweathermap.org/data/2.5/forecast/daily?lat=88&lon=22&appid=6b4bfdf05d0816386e630c28378a9c3b"

        let request =   "https://api.weatherapi.com/v1/current.json?q="+latitude+","+longitude+"&key=ac07107c937c4f8388f92519222207"
        let weatherData = await (await fetch(request)).json()
        console.log(weatherData)
        document.getElementById("temp").innerText = weatherData.current.temp_c
    } catch (error) {
        console.log("could not set")
        console.log(longitude)
        console.log(latitude)
    }
}

async function getLocation(){
    try{
    let place = document.getElementById("place").value
    let request = "https://api.openweathermap.org/geo/1.0/direct?q="+place+"&appid=59af7b8b7dd66b0e4011dc66c1c29214"
    let location = await (await fetch (request)).json()
    
    let latitude = location[0].lat
    let longitude = location[0].lon
    
    setWeather(latitude, longitude)

    }
    catch(error){
        console.log("could not fetch")
    }
}
