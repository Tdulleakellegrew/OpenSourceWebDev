const express = require('express');
const app = express();
const fs = require('fs');

app.get('/todo',function(req, res){
    //header = fs.readFileSync('html/header.html', 'utf-8');
    json = fs.readFileSync('todo.json', 'utf-8');
    //footer = fs.readFileSync('html/footer.html', 'utf-8');
    data = JSON.parse(json);
    res.status(200).send(data);
})

app.get('/', function(req,res){
    header = fs.readFileSync('html/header.html', 'utf-8');
    data = fs.readFileSync('html/index.html', 'utf-8');
    footer = fs.readFileSync('html/footer.html', 'utf-8');
    res.status(200).send(header + data + footer);
})

app.get('/read-todo', function(req,res){
    header = fs.readFileSync('html/header.html', 'utf-8');
    data = fs.readFileSync('html/read-todo.html', 'utf-8');
    footer = fs.readFileSync('html/footer.html', 'utf-8');
    res.status(200).send(header + data + footer);
})

app.use(function (req, res, next) {
	const header = fs.readFileSync('html/header.html', 'utf-8');
	const doc = fs.readFileSync('html/index.html', 'utf-8');
	const footer = fs.readFileSync('html/footer.html', 'utf-8');
	res.status(404).send(header + doc + footer)
})
app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})