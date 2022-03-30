/*********************************************************************************
* WEB422 – Assignment 1 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students. 
* 
* Name: Ting-Yeh Lin Student ID: 141726182 Date: 01/22/2021
* Heroku Link: https://dry-inlet-62094.herokuapp.com/ 
* ********************************************************************************/

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config({path:"./config/keys.env"});

const HTTP_PORT = process.env.PORT || 8080;

const RestaurantDB = require("./modules/restaurantDB.js"); 
const db = new RestaurantDB(`mongodb+srv://${process.env.user}:${process.env.password}@cluster0.b215x.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`);



app.use(cors());
app.use(bodyParser.json());

app.post("/api/restaurants",(req,res)=>{
    db.addNewRestaurant(req.body)
    .then((result)=>{
        res.status(201).json(result);
    })
    .catch((err) => {
        res.status(400).json(err);
    });        
});


app.get("/api/restaurants",(req,res)=>{    
    db.getAllRestaurants(req.query.page, req.query.perPage,req.query.borough)
    .then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{
        res.status(400).json({massage:"page and perPage query parameters must be present"});
    });
    
});

app.get("/api/restaurants/:id",(req,res)=>{
    db.getRestaurantById(req.params.id)
    .then((restaurant)=>{
        res.status(201).json(restaurant);
    })
    .catch((err) => {
        res.status(400).json(err);
    });  
});

app.put("/api/restaurants/:id",(req,res)=>{
    db.updateRestaurantById(req.body, req.params.id)
    .then((restaurant)=>{
        res.status(200).json(restaurant);
    })
    .catch((err) => {
        res.status(404).json(err);
    });
});

app.delete("/api/restaurants/:id",(req,res)=>{
    db.deleteRestaurantById(req.params.id)
    .then((restaurant) => {
        res.status(200).json(restaurant);
    })
    .catch((err) => {
        res.status(404).json(err);
    });    
});

app.get("/",(req,res)=>{    
    res.json({message: "API Listening"});
});

db.initialize().then(()=>{
    app.listen(HTTP_PORT, ()=>{
        console.log(`server listening on: ${HTTP_PORT}`);
    });
}).catch((err)=>{
    console.log(err);
});
