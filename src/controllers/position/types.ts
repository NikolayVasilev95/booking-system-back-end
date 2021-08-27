import {Request, Response} from "express";
import { Positions } from "../../database/operations/positions/types";


export interface CustomRequest extends Request {
    body: {
        positions?: Positions;
        id?: string
    },
    params: {
        id?: string;
    }
}