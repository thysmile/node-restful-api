const express = require('express');
const shopRoutes = require('./routes/shop-routes');

const app = express();

app.use('/api/products',shopRoutes);
app.use((req,res,next)=>{
    return res.status(404).json({message : 'route not found'})
})

app.listen(5000);