import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { AffiliateModel } from '../models/affiliate.model.js';
import { IAffiliateModelLogin } from '../@types/affiliateTypes.js';
import sha1 from 'sha1';

export class AuthenticationController {
    static async authenticate(req:Request, res: Response) {
        const affiliate = new AffiliateModel();
        const returnValue: IAffiliateModelLogin[] = await affiliate.affiliateLogin(req.body.otp);
       
        if (returnValue.length > 0 )
        {
            const token = generateAccessToken({ otp: req.body.otp });
            res.send({'token': token });
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