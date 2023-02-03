import mysql from 'mysql2/promise';
import { ISigninModel } from '../@types/signinType';
//affiliate object create
export class signinModel {
   // otp: number;
    signin = async function (otp): Promise<ISigninModel[]> { 
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        console.log("SELECT * FROM users where otp=?", [otp])
        const [results] = await dbConn.query<ISigninModel[]>("SELECT * FROM users where otp=?", [otp]);
        console.log(results);
       return results;
    }
};