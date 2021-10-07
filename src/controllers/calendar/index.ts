import { Request, Response} from "express";
import {newCalendar, updateCalendar, deleteCalendar, getCalendar, allCalendars } from "../../database/operations/calendars"
import { CustomRequest } from "./types";

const newCalendarController =  async (request: CustomRequest, response: Response) => {
    if (request.body.calendars) {
      const result = await newCalendar(request.body.calendars)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }   
    }
}

const updateCalendarController =  async (request: CustomRequest, response: Response) => {
    if (request.body.calendars) {
    const result = await updateCalendar(request.body.calendars)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
    }
}

const deleteCalendarController =  async (request: CustomRequest, response: Response) => {
    if (request.body.id) {
    const result = await deleteCalendar(request.body.id)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
    }
}

const getCalendarController =  async (request: CustomRequest, response: Response) => {
    if (request.params.id) {
    const result = await getCalendar(request.params.id)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
    }
}

const allCalendarsController =  async (request: CustomRequest, response: Response) => {
    const result = await allCalendars(request.query)
     if (result.status === "success") {
         response.json(result)
     } else {
         response.json(result)
     }
}

export {
    newCalendarController,
    updateCalendarController,
    deleteCalendarController,
    getCalendarController,
    allCalendarsController
}