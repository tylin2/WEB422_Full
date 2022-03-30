const express = require("express");
/*
Check package.json, after "express": "^4.16.1",
we don't need the following code:
const bodyParser=require('body-parser');
app.use(bodyParser.urlEncoded({extended: true}));
*/
const app = express();

const HTTP_PORT = process.env.PORT || 8080;


let names =[
    {fName:"Bob",lName:"Belcher"},
    {fName:"Lynda",lName:"Belcher"},
    {fName:"Ricd",lName:"Sanchez"}
];

app.use(express.json());

//READ

app.get("/api/names",(req,res)=>{
    let result=[];
    if(req.query.lName){
        result=names.filter(name=>name.lName==req.query.lName);
    }else{
        result=names;
    }
    if(result.length>0){
        res.json(result);
    }else{
        res.status(404).json({message: "no names returned"})
    }
    
});

app.get("/api/names/:index",(req,res)=>{
    let result=names[req.params.index];

    if(result){
        res.json(result)
    }else{
        res.status(404).json({message: "no name returned"})
    }
});

/*
app.use((req,res,next)=>{
    res.status(404).render("my404page");
})
*/

//CREATE

app.post("/api/names",(req,res)=>{
    names.push(req.body)
    res.status(201).json({message: "name added"});
});

// UPDATE

app.put("/api/names/:index",(req,res)=>{
    names[req.params.index]=req.body
    res.json({message: `name at index ${req.params.index} updated`});
});

//DELETE

app.delete("/api/names/:index",(req,res)=>{
    names.splice(req.params.index,1);
    res.status(204).end();
});



app.get("/",(req,res)=>{
    res.send("Holle Word!");
});

app.listen(HTTP_PORT,()=>{
    console.log(`server listening on:${HTTP_PORT}`);
});

