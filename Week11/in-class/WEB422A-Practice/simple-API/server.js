const express = require("express");
const cors = require("cors");
const dataService = require("./data-service.js");
const userService = require("./user-service.js");

const jwt = require("jsonwebtoken");
const passport = require("passport");
const passportJWT = require("passport-JWT");
const app = express();

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
    jwtFromRequest:  ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: "YVj#%hwiAjS82$kRdbkOK9D&#^6v"
}

let strategy = new JwtStrategy(jwtOptions, (jwt_payload, next)=>{
    if (jwt_payload) {
        // The following will ensure that all routes using 
        // passport.authenticate have a req.user._id, req.user.userName, req.user.fullName & req.user.role values 
        // that matches the request payload data
        next(null, { _id: jwt_payload._id, 
            userName: jwt_payload.userName, 
            fullName: jwt_payload.fullName, 
            role: jwt_payload.role }); 
    } else {
        next(null, false);
    }
});

passport.use(strategy);
app.use(passport.initialize());


app.use(cors());
app.use(express.json());

const HTTP_PORT = process.env.PORT || 8080;

app.get("/api/vehicles", passport.authenticate('jwt', { session: false }) ,(req,res)=>{
    dataService.getAllVehicles().then((data)=>{
        res.json(data);
    }).catch(()=>{
        res.status(500).end();
    });
});

app.post("/api/register", (req,res)=>{
    userService.registerUser(req.body).then(msg=>{
        res.json({message: msg});
    }).catch(err=>{
        res.status(422).json({message: err});
    });
});

app.post("/api/login", (req,res)=>{
    userService.checkUser(req.body).then(user=>{
        let payload = {
            _id: user._id,
            userName: user.userName,
            fullName: user.fullName,
            role: user.role
        };

        let token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({message: "user logged in", token: token});
    }).catch(err=>{
        res.status(422).json({message: err});
    });
});

app.use((req, res) => {
    res.status(404).end();
});


userService.connect().then(()=>{
    app.listen(HTTP_PORT, ()=>{
        console.log("App listening on: " + HTTP_PORT);
    });
}).catch(err=>{
    console.log(err);
});
