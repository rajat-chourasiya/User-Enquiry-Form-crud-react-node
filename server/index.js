let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
const enquiryRouter = require('./App/routes/web/enquiryRoutes');
require('dotenv').config();
let app = express();

app.use(cors())  //used to manage ports of frontend nd backend
app.use(express.json());

//Routes
app.use('/api/website/enquiry',enquiryRouter);


mongoose.connect(process.env.DBURL).then(()=>{
    console.log('connected to MongoDB');
    app.listen(process.env.PORT || 3000,()=>{
        console.log('Server is Running');
    })
}).catch((err)=>{console.log(err)})