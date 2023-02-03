import { RowDataPacket } from "mysql2";
interface ISigninModel extends RowDataPacket {
  otp:number,
  fullName:string,
  mobileNo:string,
  userEmail:string,
  createdDate:string

}


export type {
  ISigninModel
}