import express, { Application } from 'express';
import cors from 'cors';
import router from './routes';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './middlewares/globalErrorhandler';
import NotFound from './middlewares/notFound';
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

// Global error handling
app.use(globalErrorHandler);

app.use(NotFound);

export default app;
