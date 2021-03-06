const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const myLiffId = process.env.MY_LIFF_ID;

app.use(express.static('public'));

app.get('/send-id', function(req, res) {
    res.json({id: myLiffId});
});
console.log("test")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',(req,res)=> getUserInfo(req,res))

const getUserInfo = (req,res) => {
    const data = req.body;
    console.log('id_token:',data.id_token);
   }

app.listen(port, () => console.log(`app listening on port ${port}!`));

