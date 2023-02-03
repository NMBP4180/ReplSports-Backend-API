import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';  
import bodyParser from 'body-parser';
import SplashscreenRouter from './routes/Splashscreen.route.js';
import signupRouter from './routes/signup.route.js';
import signinRouter from './routes/signin.route.js';
import otpRouter from './routes/otp.route.js';
const app = express();
//cors policy
app.use(cors())
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/splashscreen', SplashscreenRouter);
app.use('/api/signup', signupRouter);
app.use('/api/signin', signinRouter);
app.use('/api/otp',otpRouter);
app.use('*',(req, res) =>{
  res.status(404).send('Route Not found');
});

app.listen(process.env.PORT || 5000, () => {
    console.log('backend running')
   })
// app.listen(port, () => {
//   console.log(`Server is running on port https://localhost:${port}`);
// });
