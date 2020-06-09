# Punk-Express-Json-Api

## Getting Started
This API is deployed live on Heroku! Check it out with the following URL!
```https://punk-api-beers.herokuapp.com/beers```

## Install Dependencies
``` 
npm install express mongoose
```

## Seed the data
```node seed.js```

## Run the app
```node index.js```

## Get list of Beers
```GET /beers```
Ex on localhost ```http://localhost:3000/beers/```
Ex on deployed site ```https://punk-api-beers.herokuapp.com/beers/```

## Filter by name
```GET /beers/:name```
Ex on localhost ```http://localhost:3000/beers/Buzz```
Ex on deployed site ```https://punk-api-beers.herokuapp.com/beers/Buzz```
Please note that the search in case sensitive

## Filter by ID
```GET /beers/id/:id```
Ex on localhost ```http://localhost:3000/beers/id/5ed6f141fa8b193fb49b58e3```
Ex on deployed site ```https://punk-api-beers.herokuapp.com/beers/id/5ed8553e4d82610004b17492```

## Creator
```Leonardo Silva```



