const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://OussemaNijewi:Wess1234@nodetutorial.9hs1i0t.mongodb.net/node-tuts?appName=NodeTutorial';

mongoose.connect(dbURI)
    .then((result) => app.listen(3000)) //listen for requests only after db connection complete
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

// respond to get request
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

//blog routes
app.get('/about', (req, res) => {
    res.render('about',{title: 'About'});
});

app.use(blogRoutes);

//404 page should be at end of the code
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});