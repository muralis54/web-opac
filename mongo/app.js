const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const books = [{
        bookName: "Rudest Book Ever",
        bookAuthor: "Shwetabh Gangwar",
        bookRating: 8,
        bookPrice: 240,
        bookState: "Available"
    },
    {
        bookName: "Do Epic Shit",
        bookAuthor: "Ankur Wariko",
        bookRating: 9,
        bookPrice: 240,
        bookState: "Available"
    }
]

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/opac',(err)=>{
    if(!err){
        console.log("Mongodb Connection succeeded");
    }
    else{
        console.log("Mongodb Connection failed");
    }
});

const bookschema = mongoose.Schema({
    bookName:String,
    bookAuthor:String,
    bookRating:Number,
    bookPrice:Number,
    bookState:String
})

const postSchema = mongoose.model('books', bookschema)
  
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
  
app.get("/", function (req, res) {
    res.render("home", {
        data: books
    })
})
  
app.post("/", (req, res) => {
    const inputBookName = req.body.bookName
    const inputBookAuthor = req.body.bookAuthor
    const inputBookRating = req.body.bookRating
    const inputBookPrice = req.body.bookPrice
  
    books.push({
        bookName: inputBookName,
        bookAuthor: inputBookAuthor,
        bookRating: inputBookRating,
        bookPrice: inputBookPrice,
        bookState: "Available"
    })

    const book = new postSchema({
        bookName: inputBookName,
        bookAuthor: inputBookAuthor,
        bookRating: inputBookRating,
        bookPrice: inputBookPrice,
        bookState: "Available"
    })

    book.save();
  
    res.render("home", {
        data: books
    })
})
  
app.post('/issue', (req, res) => {
    var requestedBookName = req.body.bookName;
    books.forEach(book => {
        if (book.bookName == requestedBookName) {
            book.bookState = "Issued";
        }
    })

    const query = {bookName: requestedBookName};
    const updateval = {$set: {bookState: "Issued"}};
    postSchema.updateOne(query, updateval, function(err, res){
        if(err) throw err;
        else console.log(res);
    }); 
    res.render("home", {
        data: books
    })
})
  
app.post('/return', (req, res) => {
    var requestedBookName = req.body.bookName;
    books.forEach(book => {
        if (book.bookName == requestedBookName) {
            book.bookState = "Available";
        }
    })

    const query = {bookName: requestedBookName};
    const updateval = {$set: {bookState: "Available"}};
    postSchema.updateOne(query, updateval, function(err, res){
        if(err) throw err;
        else console.log(res);
    }); 

    res.render("home", {
        data: books
    })
})
  
app.post('/delete', (req, res) => {
    var requestedBookName = req.body.bookName;
    var j = 0;
    books.forEach(book => {
        j = j + 1;
        if (book.bookName == requestedBookName) {
            books.splice((j - 1), 1)
        }
    })

    const query = {bookName: requestedBookName};
    postSchema.deleteOne(query, function(err, res){
        if(err) throw err;
        else console.log(res);
    }); 

    res.render("home", {
        data: books
    })


})
  


app.listen(3000, (req, res) => {
    console.log("App is running on port 3000")
})