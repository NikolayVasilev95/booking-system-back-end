import Calendar from "../../modules/calendars";
import Schedules from "../../modules/schedules";
import { Calendars } from "./types";

const newCalendar = async (request: Calendars) => {
  try {
    const transaction = await Calendar.sequelize?.transaction();
    const position = await Calendar.create(request, {
      transaction,
    });
    await transaction?.commit();
    if (position !== null && position !== undefined) {
      return { result: position, status: "success" };
    } else {
      throw { message: "Failed to insert calendar." };
    }
  } catch (error) {
    console.log(error);

    return { result: error.message, status: "error" };
  }
};

const updateCalendar = async (request: Calendars) => {
  try {
    const [resultNum] = await Calendar.update(
      { ...request },
      { where: { id: request.id } }
    );
    if (resultNum === 1) {
      return { result: await Calendar.findByPk(request.id), status: "success" };
    } else {
      throw { message: "Failed to update calendar." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const deleteCalendar = async (id: string) => {
  try {
    const resultNum = await Calendar.destroy({ where: { id: id } });
    if (resultNum === 1) {
      return {
        result: "Calendar was deleted successfully!",
        status: "success",
      };
    } else {
      throw { message: "Failed to delete calendar." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

// const recoverCalendar = async (id: string) => {
//   try {
//     const query = await User.findOneAndUpdate(
//       { _id: id },
//       { $set: { deleted: false } },
//       { new: true }
//     );
//     if (query !== null && query !== undefined) {
//       return { result: query, status: "success" };
//     } else {
//       throw { message: "Failed to recover user." };
//     }
//   } catch (error) {
//     return { result: error.message, status: "error" };
//   }
// };

const getCalendar = async (id: string) => {
  try {
    const position = await Calendar.findByPk(id);
    if (position !== null && position !== undefined) {
      return { result: position, status: "success" };
    } else {
      throw { message: "Calendar not found." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const allCalendars = async (query: any) => {
  try {
    console.log(query, "tyk!!");

    const position = await Calendar.findAll(
      Object.keys(query).length === 0
        ? {}
        : {
            include: [
              { model: Schedules, required: true },
            ],
            where: { ...query },
          }
    );
    // const position = await Position.findAll({
    //   include: [
    //     { model: Employees, required: true },
    //     { model: Services, required: true },
    //   ],
    //   where: { ...query },
    // });
    console.log(position);
    
    if (position !== null && position !== undefined) {
      return { result: position, status: "success" };
    } else {
      throw { message: "no calendar found." };
    }
  } catch (error) {
    console.log(error);

    return { result: error.message, status: "error" };
  }
};

export {
  newCalendar,
  updateCalendar,
  deleteCalendar,
  //   recoverCalendar,
  getCalendar,
  allCalendars,
};
