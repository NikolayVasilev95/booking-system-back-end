// adding data in database for now

import sequelize from "../config/db_config";
import Calendars from "../database/modules/calendars";
import Employees from "../database/modules/employees";
import Positions from "../database/modules/positions";
import Salons from "../database/modules/salons";
import Schedules from "../database/modules/schedules";
import Services from "../database/modules/services";
import { randomString } from "../util/helpers";

const createDB = async () => {
  await sequelize.sync({ force: true });

  await Salons.create({
    name: randomString(),
    address: "reerge",
  });

  for (let index = 1; index <= 5; index++) {
    await Positions.create({
      name: randomString(),
      salonId: 1,
    });

    await Employees.create({
      firstName: randomString(),
      middleName: randomString(),
      lastName: randomString(),
      img: "http://hansel-and-gretel-nail-barber.com/img/4F34A2DF1-C821-4F00-B08A-F259BCEC2EF1.jpg",
      description: randomString(),
      positionId: index,
    });

    await Services.create({
      name: randomString(),
      description: randomString(),
      price: randomString(),
      positionId: index,
    });

    await Calendars.create({
      name: randomString(),
      employeeId: index,
    });
  }

  await Schedules.create({
    start: new Date().toISOString(),
    end: new Date().toISOString(),
    status: "reserve",
    calendarId: 1,
    email: "string@string.com",
    phone: "245245245452",
  });
};
export { createDB };
