import {Request, Response} from "express";
import { Employees } from "../../database/operations/employees/types";


export interface CustomRequest extends Request {
    body: {
        employee?: Employees;
        id?: string
    },
    params: {
        id?: string;
    }
}