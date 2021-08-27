import { Request, Response} from "express";
import {newEmployee, updateEmployee, deleteEmployee, getEmployee, allEmployees } from "../../database/operations/employees"
import { CustomRequest } from "./types";

const newEmployeeController =  async (request: CustomRequest, response: Response) => {
    if (request.body.employee) {
      const result = await newEmployee(request.body.employee)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }   
    }
}

const updateEmployeeController =  async (request: CustomRequest, response: Response) => {
    if (request.body.employee) {
    const result = await updateEmployee(request.body.employee)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
    }
}

const deleteEmployeeController =  async (request: CustomRequest, response: Response) => {
    if (request.body.id) {
    const result = await deleteEmployee(request.body.id)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
    }
}

const getEmployeeController =  async (request: CustomRequest, response: Response) => {
    if (request.params.id) {
    const result = await getEmployee(request.params.id)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
    }
}

const allEmployeesController =  async (request: CustomRequest, response: Response) => {
    const result = await allEmployees(request.query)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
}

export {
    newEmployeeController,
    updateEmployeeController,
    deleteEmployeeController,
    getEmployeeController,
    allEmployeesController
}