import { Request, Response} from "express";
import {newPosition, updatePosition, deletePosition, getPosition, allPositions } from "../../database/operations/positions"
import { CustomRequest } from "./types";

const newPositionController =  async (request: CustomRequest, response: Response) => {
    if (request.body.positions) {
      const result = await newPosition(request.body.positions)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }   
    }
}

const updatePositionController =  async (request: CustomRequest, response: Response) => {
    if (request.body.positions) {
    const result = await updatePosition(request.body.positions)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
    }
}

const deletePositionController =  async (request: CustomRequest, response: Response) => {
    if (request.body.id) {
    const result = await deletePosition(request.body.id)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
    }
}

const getPositionController =  async (request: CustomRequest, response: Response) => {
    if (request.params.id) {
    const result = await getPosition(request.params.id)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
    }
}

const allPositionsController =  async (request: CustomRequest, response: Response) => {
    const result = await allPositions(request.query)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
}

export {
    newPositionController,
    updatePositionController,
    deletePositionController,
    getPositionController,
    allPositionsController
}