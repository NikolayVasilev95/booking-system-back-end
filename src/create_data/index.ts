// adding data in database for now

import sequelize from "../config/db_config";
import Calendars from "../database/modules/calendars";
import Employees from "../database/modules/employees";
import Positions from "../database/modules/positions";
import Schedules from "../database/modules/schedules";
import Services from "../database/modules/services";

const createDB = async () => {
    // sequelize.sync({ force: true });
    await Positions.create({
        name: "string12",
        employeeId: 1,
        serviceId: 1
    });
    
    await Employees.create({
        firstName: "asdad",
        middleName: "asdad",
        lastName: "qwerw",
        img: "http://hansel-and-gretel-nail-barber.com/img/4F34A2DF1-C821-4F00-B08A-F259BCEC2EF1.jpg",
        description: "wergwergw",
        positionId: 1,
    });

    await Services.create({
        name: "stringqwergq",
        description: "isugrgs",
        price: "2342",
        positionId: 1
    });

    await Calendars.create({
        name: "test",
        employeeId: 1,
    })

    await Schedules.create({
        name: "stringqwergq",
        start: new Date().toISOString(),
        end: new Date().toISOString(),
        status: "reserve",
      calendarId: 1
    })
};
export {createDB}