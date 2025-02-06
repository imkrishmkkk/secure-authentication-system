import { configDotenv } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
configDotenv();

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO).then( ()=> {
    console.log("Mongodb Connected");
}).catch((err) => {
    console.log(err);
});

const __dirname = path.resolve();
const app = express();

app.use(express.static(path.join(__dirname,'/client/dist')));
app.get('*',(req,res) => { 
    res.sendFile(path.join(__dirname,'client' ,'dist','index.html'));
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(PORT,() => {
    console.log(`Server listening on port ${PORT}`);
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use(((err,req,res,next) => {
    const statusCode =err.statusCode || 500;
    const message =err.message || "Internal server error";
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })

}));