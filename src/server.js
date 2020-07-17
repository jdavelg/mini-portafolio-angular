const express = require('express')
const app = express();
const path = require('path');

app.use(express.static('./dist/blog-angular'));
app.get('/*',function(req,res){
    res.sendFile('index.html', {root: 'dist/blog-angular/'}
    );
});

app.listen(process.env.PORT || 8080);