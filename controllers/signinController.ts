import { Request, Response, NextFunction } from 'express';
import { ISigninModel } from '../@types/signinType.js';
import { signinModel } from '../models/signin.model.js';
import jwt from 'jsonwebtoken';
export class signinController {
    static async signin(req:Request, res: Response) {
        const signin = new signinModel();
        const returnValue: ISigninModel[] = await signin.signin(req.body.otp);

        if (returnValue.length >0)
        {
            const token = generateAccessToken({ otp: req.body.otp });
            res.send({'token': token});
        }
        else
        {
            res.send({'token': '', 'error': 'Incorrect OTP'});
        }
    }
    
}
function generateAccessToken(otp) {
    return (jwt.sign(otp, process.env.SECRET_KEY, { expiresIn: '1d' }));
  }