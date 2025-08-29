console.log('Starting')

setTimeout(() =>{
    console.log('2 Second Timer')
}, 2000)

setTimeout(() =>{
    console.log('0 Second Timer')
}, 0)

console.log('Stopping')

//Geo-coding
// const geocodeURL = 'https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=pk.eyJ1Ijoibm1hbm4yNDciLCJhIjoiY21ld3U3eWh5MHhqcDJscTJ1ZjRtZmt3byJ9.p7-9yg2sKjpmsbVgQ5MHqw&limit=1'

// request({url:geocodeURL, json: true}, (error,response) => {
//     if(error){
//         console.log('Unable to connect to location services') //if there is an error in connection
//     }else if(response.body.features.length === 0){
//         console.log('Unable to find location, please find another search.')
//     }
//     else {
//         const latitude = response.body.features[0].geometry.coordinates[1]
//         const longitude = response.body.features[0].geometry.coordinates[0]
//         console.log(latitude, longitude)
//     }
// })


// const geocode = (address, callback) =>{
//     const url = 'https://api.mapbox.com/search/geocode/v6/forward?q='+ encodeURIComponent(address)+'&access_token=pk.eyJ1Ijoibm1hbm4yNDciLCJhIjoiY21ld3U3eWh5MHhqcDJscTJ1ZjRtZmt3byJ9.p7-9yg2sKjpmsbVgQ5MHqw&limit=1'

//     request({url: url, json: true}, (error,response) => {
//         if(error){
//             callback('Unable to connect to location service!', undefined)
//         }else if (response.body.features.length === 0){
//             callback('Unable to find location. Try to find another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: response.body.features[0].geometry.coordinates[1],
//                 longitude: response.body.features[0].geometry.coordinates[0],
//                 location: response.body.features[0].properties.full_address
//             })
//         }
//     })
// }