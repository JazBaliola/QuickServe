const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const multer = require('multer');
const path = require('path');
const cors = require("cors");
const mysql = require("mysql");

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ticketingsytem',
  });
  
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get("/adminTickets", (req, res) => {
    const sql = "SELECT * FROM ticket;";
    connection.query(sql, (err,data) => {
        if(err)  return res.json('Error: ' + err.message);
         return res.json(data);
    })
})

app.listen(3001, () => {
    console.log("listening");
})

let transporter = nodemailer.createTransport({
service: "gmail",
    auth: {
         user: "prospectissuedticket@gmail.com",
       pass: "mqqbblfvqbrezdfx"
        },
     tls :{
         rejectUnauthorized: false
     },
 })

 let mailOptions = {
     form: "prospectissuedticket@gmail.com",
   to: "anmol.bhangoo2002@gmail.com",
     subject: "Ticket",
     text: "Your Ticket Has been Issued!"
 }

 const sendEmail = function() {
    transporter.sendMail(mailOptions , function(err, succ){
     if(err){
         console.log(err)
     }
          else{
         console.log("Email Sent")
     }
 })
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads' )
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})


app.use(express.json());
app.post('/createTicket', upload.single('image'), (req, res) => {
    const sql = "INSERT INTO `ticketingsytem`.`ticket` (`Subject`, `Category`, `Description`, `Priority`, `fileName`)  VALUES (?);"
    const values = [
        req.body.subject,
        req.body.category,
        req.body.description,
        req.body.priority,
        req.file.filename
    ]
    console.log(req.body.subject);
    console.log(req.file);
    connection.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        else 
        sendEmail();
        return res.json(data);
    })
})

var filePath;

app.post('/upload', upload.single('image'), (req, res) => {
    // console.log(req.file);
    filePath = req.file;
})


