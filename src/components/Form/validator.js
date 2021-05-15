import {emailReg, phoneReg} from "../../contants/regex";

export const isRequiredValidator = value => value !== '';
export const userMaxLengthValidator =  value => value.length < 10;
export const emailValidator =  value => emailReg.test(value);
export const phoneValidator =  value => phoneReg.test(value);