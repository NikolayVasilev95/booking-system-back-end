import {Request, Response} from "express";
import { Calendars } from "../../database/operations/calendars/types";


export interface CustomRequest extends Request {
    body: {
        calendars?: Calendars;
        id?: string
    },
    params: {
        id?: string;
    }
}