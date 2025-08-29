// const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

console.log(process.argv)

if(!address){
    console.log('Please provide an address!')
} else{ 
    geocode(address, (error, {latitude, longitude, location} = {}) =>{
    if(error){
        return console.log(error)
    }
    // console.log('Error', error)
    // console.log('Data', data)
    forecast(latitude, longitude, (error, forecastData) => {
        if(error){
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
    // console.log('Error', error)
    // console.log('Data', data)
    })
})

}



// forecast(data.latitude, data.longitude, (error, data) => {
//   console.log('Error', error)
//   console.log('Data', data)
// })



// const url = 'https://api.weatherstack.com/current?access_key=b634ffbf65c64f93a579696d480dcecb&query=37.8267,-122.4233&units=f'

// request({url:url, json:true}, (error,response)=> {
//     // console.log(response)
//     // const data = JSON.parse(response.body)
//     // console.log(data.current)
//     //  console.log(response.body.current)

//     if(error){
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error){
//         console.log('Unable to find location')
//     }else{
//         console.log(response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degrees out. It feels like '+response.body.current.feelslike + " degrees out.")
//     }
// })

