const express = require("express");
const path = require("path");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

let names = [
    {fName: "Bob", lName: "Belcher"},
    {fName: "Lynda", lName: "Belcher"},
    {fName: "Rick", lName: "Sanchez"}
];

app.use(express.json());
app.use(express.static("public"));

// READ

app.get("/api/names", (req,res)=>{
    let result = [];
    if(req.query.lName){
        result = names.filter(name=>name.lName == req.query.lName);
    }else{
        result = names;
    }

    if(result.length > 0){
        res.json(result);
    }else{
        res.status(404).json({message: "no names returned"})
    }
});

app.get("/api/names/:index", (req,res)=>{
    let result = names[req.params.index];

    if(result){
        res.json(result)
    }else{
        res.status(404).json({message: "no name returned"})
    }
});

// CREATE

app.post("/api/names", (req,res)=>{
    names.push(req.body)
    //var student1 = {fName: "Lisa", lName: "Lin"};
    var student1js = JSON.stringify(req.body);
    res.status(201).json({message: `name added ${student1js}`});
});

// UPDATE

app.put("/api/names/:index", (req,res)=>{
    names[req.params.index] = req.body
    res.json({message: `name at index ${req.params.index} updated`});
});

// DELETE

app.delete("/api/names/:index", (req,res)=>{
    names.splice(req.params.index, 1);
    res.status(204).end();
});

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.listen(HTTP_PORT, ()=>{
    console.log(`server listening on: ${HTTP_PORT}`);
});