var express = require("express");
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./../db/comments.db');
var bodyParser = require ('body-parser');

app.use(express.static('./../../Tutorials'));
app.use(bodyParser.urlencoded({extended:false}));

//routes
app.get('/', function(request,response){
    response.send('hello user');
});

app.post('/', function(request,response){
    response.send('hello user');
});

app.get('/comments',function(request,response){
    console.log('Get request recieved at /comments');
    db.all('SELECT * FROM comments',function(err,rows)
    {
        if(err)
        {
            console.log("Error: " +  err);
        }
        else if(rows)
        {
            console.log("recieved data: ");
        /*    for(var i = 0;i<rows.length;i++)
            {
                console.log(rows[i].name);
            }
            console.log(rows.length); 
        */
            response.send(rows);
        }
    });
});

app.post('/comments',function(request,response){
    console.log('POST request recieved at /comments');
    db.run('INSERT INTO comments VALUES(?,?)',
    [request.body.ip_name,request.body.ip_cmt],function(err){
        if(err)
        {
            console.log('Error: '+ err);
        }
        else
        {
            response.status(200).redirect('sample.htm');
        }
    });
});

app.listen(3000,function()
{
    console.log("server is running on port 3000");
});