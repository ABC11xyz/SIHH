import dotenv from 'dotenv';
import express from 'express';
import connectDB from './DB/db.js';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cookieParser());
app.use(express.json()); 

app.use(cors({
    origin : ["https://pmsss-rv-2.netlify.app"],
    methods : ["POST" , "GET"],
    credentials : true
}));

app.use("/api/auth/user", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at - http://localhost:{PORT}`);
    connectDB();
});
