import { Request, Response } from "express";
import {
  newSchedule,
  updateSchedule,
  deleteSchedule,
  getSchedule,
  allSchedules,
} from "../../database/operations/schedules";
import { CustomRequest } from "./types";

const newScheduleController = async (
  request: CustomRequest,
  response: Response
) => {
  if (request.body.schedule) {
    const result = await newSchedule(request.body.schedule);
    if (result.status === "success") {
      response.json(result);
    } else {
      response.json(result);
    }
  }
};

const updateScheduleController = async (
  request: CustomRequest,
  response: Response
) => {
  if (request.body.schedule) {
    const result = await updateSchedule(request.body.schedule);
    if (result.status === "success") {
      response.json(result);
    } else {
      response.json(result);
    }
  }
};

const deleteScheduleController = async (
  request: CustomRequest,
  response: Response
) => {
  if (request.body.id) {
    const result = await deleteSchedule(request.body.id);
    if (result.status === "success") {
      response.json(result);
    } else {
      response.json(result);
    }
  }
};

const getScheduleController = async (
  request: CustomRequest,
  response: Response
) => {
  if (request.params.id) {
    const result = await getSchedule(request.params.id);
    if (result.status === "success") {
      response.json(result);
    } else {
      response.json(result);
    }
  }
};

const allSchedulesController = async (
  request: CustomRequest,
  response: Response
) => {
  const result = await allSchedules(request.query);
  if (result.status === "success") {
    response.json(result);
  } else {
    response.json(result);
  }
};

export {
  newScheduleController,
  updateScheduleController,
  deleteScheduleController,
  getScheduleController,
  allSchedulesController,
};
