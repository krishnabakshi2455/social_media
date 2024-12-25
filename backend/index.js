import express from 'express';
const app = express()
import cors from 'cors';


// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Include credentials if needed
}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('this is the home')
})

app.post('/signup',(req,res)=>{
    // res.send('this is for signup')
    // res.status(200).json({ message: 'Signup successful!' });
    res.json(req.body)

})

app.listen(2455)