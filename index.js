//Stock Market Portfolio App by Anthony T. Cool

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

//Set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "Hellewwow ther, this is otherr stuff, you dick me!!"

//Set handlebars Routes
app.get('/', function(req,res){
  res.render('home', {
    stuff: otherstuff
  });
})

//Create about page route
app.get('/about.html', function (req, res) {
  res.render('about');
})

//Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT, ()=> console.log('Sever Listening on port' + PORT));