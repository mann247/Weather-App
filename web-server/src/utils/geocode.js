const request = require('postman-request')

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q='+ encodeURIComponent(address)+'&access_token=pk.eyJ1Ijoibm1hbm4yNDciLCJhIjoiY21ld3U3eWh5MHhqcDJscTJ1ZjRtZmt3byJ9.p7-9yg2sKjpmsbVgQ5MHqw&limit=1'

    request({url: url, json: true}, (error,response) => {
        if(error){
            callback('Unable to connect to location service!', undefined)
        }else if (response.body.features.length === 0){
            callback('Unable to find location. Try to find another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].geometry.coordinates[1],
                longitude: response.body.features[0].geometry.coordinates[0],
                location: response.body.features[0].properties.full_address
            })
        }
    })
}

module.exports = geocode