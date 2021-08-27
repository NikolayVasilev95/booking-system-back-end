import {Request, Response} from "express";;
import { Services } from "../../database/operations/services/types";


export interface CustomRequest extends Request {
    body: {
        service?: Services;
        id?: string
    },
    params: {
        id?: string;
    }
}