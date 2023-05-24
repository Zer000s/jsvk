var express = require('express')
var app = express()
var path = require('path');
var sqlite = require('sqlite-sync');

app.use(express.static(path.resolve(__dirname,'main')));
app.use(express.json());

app.get('/', (req,res) => {
    res.sendFile(__dirname,'main','index.html');
});

app.post('/api/createuser',(req,res)=>
{
    try
    {
        var log = req.body.log;
        var pas = req.body.pas;
        console.log(log);
        console.log(pas);
        sqlite.connect('./db/db.sqlite3');
        var result = sqlite.run(`insert into users values('${log}','${pas}','ww','ww')`);
        sqlite.close();
        res.json(result);
    }
    catch
    {
        res.json("fail");
    }
});

app.listen(8080, "127.1.1.1", () =>
{
    console.log('Server start!');
});