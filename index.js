const person_data = require("./data.js");
const express = require('express');
const app = express();
const port = 7000;

app.use(express.static('public'));
app.set('views', (__dirname + "/views"));
app.set('view engine', 'ejs');

// app.get('/',(req,res)=>{
//     const names=['Amit','Aman','Anikesh','Ajay','Arun','Arjun','Abhijit','Akhil','Anmol','Ankit'];
//     let data=[];
//     for (let i = 0; i<10; i++){
//         data.push({id:`${i+1}`,name: names[i],jourseyNo:`${i+1}${i}`,completionTime:Number(Math.random().toFixed(2))+10})
//     }
//     console.log(data);
//     res.render('home',{rows: data});    
// });

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
// app.get('/profile/:n',(req,res) => {
//     const names = ['Amit Yadav','Aman Kumar','Anikesh Singh','Ajay Prajapati','Arun Lola','Arjun Chohaun','Abhijit Singh','Akhil Rajawat','Anmol Khurana','Ankit'];
//     let data = [];
//     let n = Number(req.params.n);
//     for (let i = 0; i < 10; i++) {
//         data.push({ name: names[i]});
//     }
//     res.render('profile.ejs',data[n]);
// });



app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
});