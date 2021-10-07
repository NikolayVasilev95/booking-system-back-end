import { Router } from "express";
import bodyParser from "body-parser";
import {
  newPositionController,
  updatePositionController,
  deletePositionController,
  getPositionController,
  allPositionsController,
} from "./controllers/position";
import {
  newEmployeeController,
  updateEmployeeController,
  deleteEmployeeController,
  getEmployeeController,
  allEmployeesController,
} from "./controllers/employee";
import {
  newServiceController,
  updateServiceController,
  deleteServiceController,
  getServiceController,
  allServicesController,
} from "./controllers/services";
import {
  allSchedulesController,
  deleteScheduleController,
  getScheduleController,
  newScheduleController,
  updateScheduleController,
} from "./controllers/schedule";
import {
  allSalonsController,
  deleteSalonController,
  getSalonController,
  newSalonController,
  updateSalonController,
} from "./controllers/salon";
import { allCalendarsController, deleteCalendarController, getCalendarController, newCalendarController, updateCalendarController } from "./controllers/calendar";
// import aut from "./handlers/auth-middleware";
// import captcha from "./handlers/google-captcha-middleware";
// import apiValidation from "./helpers/api_validation";
// import register from "./controllers/auth/register";

const router = Router();
router.use(bodyParser.json());
// router.use(apiValidation);

// router.post("/register", captcha, register);

router.post("/position", newPositionController);
router.patch("/position", updatePositionController);
router.delete("/position", deletePositionController);
router.get("/position/:id", getPositionController);
router.get("/positions/query", allPositionsController);

router.post("/employee", newEmployeeController);
router.patch("/employee", updateEmployeeController);
router.delete("/employee", deleteEmployeeController);
router.get("/employee/:id", getEmployeeController);
router.get("/employees/query", allEmployeesController);

router.post("/service", newServiceController);
router.patch("/service", updateServiceController);
router.delete("/service", deleteServiceController);
router.get("/service/:id", getServiceController);
router.get("/services/query", allServicesController);

router.post("/schedule", newScheduleController);
router.patch("/schedule", updateScheduleController);
router.delete("/schedule", deleteScheduleController);
router.get("/schedule/:id", getScheduleController);
router.get("/schedules/query", allSchedulesController);

router.post("/salon", newSalonController);
router.patch("/salon", updateSalonController);
router.delete("/salon", deleteSalonController);
router.get("/salon/:id", getSalonController);
router.get("/salons/query", allSalonsController);

router.post("/calendar", newCalendarController);
router.patch("/calendar", updateCalendarController);
router.delete("/calendar", deleteCalendarController);
router.get("/calendar/:id", getCalendarController);
router.get("/calendars/query", allCalendarsController);

export default router;
