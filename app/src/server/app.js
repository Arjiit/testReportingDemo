// Initialize the express framework
var express 	 	= require('express'),
	path            = require('path'),
	mongoose       = require('mongoose'),
	bodyParser		= require('body-parser')
	databaseName        =  'testData';

// Express setup 
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client')));

// Routes set up
var router 	= express.Router();
var test = require('./controllers/api/test');


// Get all products
router.get('/api/tests', test.getAll);

// Create a test
router.post('/api/test', test.create);

// Get one product, update one product, delete one product
router.route('/api/test/:id')
	.get(test.read)
	.put(test.update)
	.delete(test.delete);

// Register the routing
app.use('/', router);

mongoose.connect('mongodb://localhost/' + databaseName);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', startServer);

function startServer() {
	// Start up the server
	var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Listening on port ' + port);

	})
}



