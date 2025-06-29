//Creating an http server by using express (First run this file on terminal then open browser and search localhost:3000)
const express = require ("express");

const app = express (); //This is our hospital

function sumTilln(n){
    let ans = 0;
    for (let i = 1; i <= n; i++){
        ans = ans + i;
    }
    return ans;
}

// Whenever we are calling an http end point we have to specifiy the request method and 
// when we are creating an http server then also we have to specify the request method (get req handeler or post req handler)    
// GET = going for a consultation/check up (asking something from the server)
// POST = to get a new kidney inserted (to put some data on the backend) 
// PUT = to get a kidney replaced (Upadte a data on a server)
// DELETE = To get kidney removed (Delete something)

// Status codes
// 200 = Everythings fine
// 404 = Doctor is not in the hospital rn (route is not given)
// 500 = Something went wrong 
// 411 = inputs were incorrect ()

// This is the route handeler
app.get("/" , function(req , res){ // ("/") means whatever is written after the / it will show on the website
    const n = req.query.n; 
    const ans = sumTilln(n);
    res.send("Hi your ans is " + ans)
})

app.listen(3000); //Docter is taking a room


