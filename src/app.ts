import express, { Application } from 'express';
import cors from 'cors';
import router from './routes';
// import router from './routes';
import cookieParser from 'cookie-parser';
const app: Application = express();

//parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// application routes
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.status(200).json({
    message: '✅ Welcome to the Job Portal Server running on port 5000!',
  });
});


export default app;
