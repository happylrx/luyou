var express=require('express')
var app=express()

app.use(express.static('build'));

app.get('*',function(req,res){
  res.sendFile('index.html',{root:'build'})
})

app.listen(8080,function(err){
  console.log('Listening at http://localhost:8080');
})
