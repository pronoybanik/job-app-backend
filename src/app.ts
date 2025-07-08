import express, { Application } from 'express';
import cors from 'cors';
// import router from './routes';
const app: Application = express();


//parsers
// app.use(cors({ origin: ['https://tutor-frontend-khaki.vercel.app', 'http://localhost:3000'], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// application routes
// app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.status(200).json({
    message: '✅ Welcome to the Job Portal Server running on port 5000!',
  });
});


export default app;
