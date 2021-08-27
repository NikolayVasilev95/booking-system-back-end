import { Request, Response} from "express";
import {newService, updateService, deleteService, getService, allServices } from "../../database/operations/services"
import { CustomRequest } from "./types";

const newServiceController =  async (request: CustomRequest, response: Response) => {
    if (request.body.service) {
      const result = await newService(request.body.service)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }   
    }
}

const updateServiceController =  async (request: CustomRequest, response: Response) => {
    if (request.body.service) {
    const result = await updateService(request.body.service)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
    }
}

const deleteServiceController =  async (request: CustomRequest, response: Response) => {
    if (request.body.id) {
    const result = await deleteService(request.body.id)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
    }
}

const getServiceController =  async (request: CustomRequest, response: Response) => {
    if (request.params.id) {
    const result = await getService(request.params.id)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
    }
}

const allServicesController =  async (request: CustomRequest, response: Response) => {
    const result = await allServices(request.query)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
}

export {
    newServiceController,
    updateServiceController,
    deleteServiceController,
    getServiceController,
    allServicesController
}