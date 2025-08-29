const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Set up handlebar and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//This is the static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) =>{
    res.render('index', {
        title: 'Weather App',
        fName: 'N Manning'
    })
})

app.get('/about', (req, res) =>{
    res.render('about', {
         title: 'About Page',
        fName: 'N Manning'
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        helpText: 'Help Page',
        title: 'Help',
        fName: 'N Manning'
    })
})


app.get('/weather', (req, res) =>{
    if(!req.query.address){
        return res.send({
            error: 'Provide a location'
        })
    }
    geocode(req.query.address,(error,{latitude, longitude, location} = {})=> {
                if(error){
                    return res.send({error})
                }
                forecast(latitude, longitude, (error, forecastData) => {
                    if(error){
                    return res.send({error})
                }
                res.send({
                    forecast: forecastData,
                    location,
                    address: req.query.address
                })
            })
        })

})
    // res.send({
    //     forecast: 'Snow',
    //     location: 'Buffalo',
    //     address: req.query.address
    // })

app.get('/help/*', (req, res) =>{
    // res.send('Help Article Not Found.')
    res.render('404.', {
        title: 404,
        fName: 'N Manning',
        errorMsg: 'Help Article Not Found.'

    })
})

app.get('*', (req, res) =>{
    res.render('404.', {
        title: 404,
        fName: 'N Manning',
        errorMsg: 'Page Not Found'

    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})