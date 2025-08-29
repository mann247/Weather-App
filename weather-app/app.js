const request = require('postman-request')
const url = 'https://api.weatherstack.com/current?access_key=b634ffbf65c64f93a579696d480dcecb&query=37.8267,-122.4233&units=f'

request({url:url, json:true}, (error,response)=> {
    // console.log(response)
    // const data = JSON.parse(response.body)
    // console.log(data.current)
    //  console.log(response.body.current)

    if(error){
        console.log('Unable to connect to weather service!')
    } else if (response.body.error){
        console.log('Unable to find location')
    }else{
        console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out. It feels like '+response.body.current.feelslike + " degrees out.")
    }
})



//Geo-coding
const geocodeURL = 'https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=pk.eyJ1Ijoibm1hbm4yNDciLCJhIjoiY21ld3U3eWh5MHhqcDJscTJ1ZjRtZmt3byJ9.p7-9yg2sKjpmsbVgQ5MHqw&limit=1'

request({url:geocodeURL, json: true}, (error,response) => {
    if(error){
        console.log('Unable to connect to location services') //if there is an error in connection
    }else if(response.body.features.length === 0){
        console.log('Unable to find location, please find another search.')
    }
    else {
        const latitude = response.body.features[0].geometry.coordinates[1]
        const longitude = response.body.features[0].geometry.coordinates[0]
        console.log(latitude, longitude)
    }
})

