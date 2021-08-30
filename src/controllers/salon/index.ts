import { Request, Response } from "express";
import {
  newSalon,
  updateSalon,
  deleteSalon,
  getSalon,
  allSalons,
} from "../../database/operations/salons";
import { CustomRequest } from "./types";

const newSalonController = async (
  request: CustomRequest,
  response: Response
) => {
  if (request.body.salon) {
    const result = await newSalon(request.body.salon);
    if (result.status === "success") {
      response.json(result);
    } else {
      response.json(result);
    }
  }
};

const updateSalonController = async (
  request: CustomRequest,
  response: Response
) => {
  if (request.body.salon) {
    const result = await updateSalon(request.body.salon);
    if (result.status === "success") {
      response.json(result);
    } else {
      response.json(result);
    }
  }
};

const deleteSalonController = async (
  request: CustomRequest,
  response: Response
) => {
  if (request.body.id) {
    const result = await deleteSalon(request.body.id);
    if (result.status === "success") {
      response.json(result);
    } else {
      response.json(result);
    }
  }
};

const getSalonController = async (
  request: CustomRequest,
  response: Response
) => {
  if (request.params.id) {
    const result = await getSalon(request.params.id);
    if (result.status === "success") {
      response.json(result);
    } else {
      response.json(result);
    }
  }
};

const allSalonsController = async (
  request: CustomRequest,
  response: Response
) => {
  const result = await allSalons(request.query);
  if (result.status === "success") {
    response.json(result);
  } else {
    response.json(result);
  }
};

export {
  newSalonController,
  updateSalonController,
  deleteSalonController,
  getSalonController,
  allSalonsController,
};
