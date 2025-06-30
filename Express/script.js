const express = require("express");
const app = express();
var users = [{
    name: "Jhon",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

//To run post
app.use(express.json());


// How to send et req = go to localhost:3000 and add / 
app.get("/" , function(req , res){
    const jhonKidneys = users[0].kidneys;
    const numberofKidneys = jhonKidneys.length;
    let numberofHealthyKidneys = 0;
    for(let i = 0; i < jhonKidneys.length; i++){
        if (jhonKidneys[i].healthy){
            numberofHealthyKidneys = numberofHealthyKidneys + 1;
        }
    }
    const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;
    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    })
})


app.post("/" , function(req , res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })   
    res.json({
        msg: "Done"
    })
})


app.put("/" , function(req , res){
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[1].healthy = true;
    }    
    res.json({

    })
})
app.delete("/" , function(req , res){
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg : "done"})
})
app.listen(3000);
