const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

const users = [];

app.get("/", (req, res) => {
    res.send("Hello from the backend");
});

app.post('/signUp', (req, res) => {
    const { username, email, password } = req.body;
    users.push({ username,email, password });
    console.log("Received data:", username, email, password);
    res.status(201).json({message: "User created successfully"});   
});

app.post("/logIn", (req,res) => {
    const {email, password} = req.body;
    const user = users.find((user) => user.email === email && user.password === password);
    if(user){
        res.json({message: "Login successful"});
    }else{
        res.status(401).json({message: "Invalid credentials"});
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});