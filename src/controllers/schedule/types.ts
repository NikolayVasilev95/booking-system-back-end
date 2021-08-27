import { Request, Response } from "express";
import { Schedules } from "../../database/operations/schedules/types";

export interface CustomRequest extends Request {
  body: {
    schedule?: Schedules;
    id?: string;
  };
  params: {
    id?: string;
  };
}
