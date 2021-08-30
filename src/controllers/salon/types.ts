import { Request, Response } from "express";
import { Salons } from "../../database/operations/salons/types";

export interface CustomRequest extends Request {
  body: {
    salon?: Salons;
    id?: string;
  };
  params: {
    id?: string;
  };
}
