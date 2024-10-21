const person_data = require("./data.js");
const express = require('express');
const app = express();
const port = 7000;

app.use(express.static('public'));
app.set('views', (__dirname + "/views"));
app.set('view engine', 'ejs');



const error ={
    message:"Data is not Found",
    status : 404
}
app.get('/profile',(req,res) => {
    res.send('This is an Entry Page');
})
app.get('/profile/:n',(req,res) => {
    let n = Number(req.params.n);
    let data = person_data[n];
    console.log(data);
    if(!data){
        res.render('error.ejs',error)
    }
    else{
        res.render('bio.ejs',data)
    }

});
app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
});