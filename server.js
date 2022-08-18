import express  from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import  Cors from "cors";


// App config 
const app = express();
const port = process.env.port || 8001
const connection_url= 'mongodb+srv://siddharthgangone:Apple600@cluster0.n0njppf.mongodb.net/tinderdb?retryWrites=true&w=majority'




// middleware

app.use(express.json())
app.use(Cors())

//dbconfig
mongoose.connect(connection_url, {
    
    useNewUrlParser: true
   // useCreateIndex: true,
    //useUnifiedTopology: true,
  });
//API endpoints

app.get('/',(req,res) => res.status(200).send('its our firts express class'))

///get tinder cards api

app.get('/tinder/cards',(req,res) =>{

Cards.find ((err,data)=>{

                    if(err){
        
                    res.status(500).send(err)
        
                     }
                    else{
        
                        res.status(200).send(data)
        
                                }}
        
    
    )
            }
                            )

//post tinder card api

app.post('/tinder/card',(req, res)=>{

const dbcard= req.body;


Cards.create (dbcard ,(err,data)=>{

if(err){

    res.status(500).send(err)

}
else{

    res.status(201).send(data)

}

})


} )


//listener

app.listen(port ,()=> console.log(`listening on localhost: ${port}` ))

