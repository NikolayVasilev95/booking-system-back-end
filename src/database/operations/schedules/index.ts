import Schedule from "../../modules/schedules";
import { Schedules } from "./types";

const newSchedule = async (request: Schedules) => {
  try {
    const transaction = await Schedule.sequelize?.transaction();
    const schedule = await Schedule.create(request, {
      transaction,
    });
    await transaction?.commit();
    if (schedule !== null && schedule !== undefined) {
      return { result: schedule, status: "success" };
    } else {
      throw { message: "Failed to insert employee." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const updateSchedule = async (request: Schedules) => {
  try {
    const [resultNum] = await Schedule.update(
      { ...request },
      { where: { id: request.id } }
    );
    if (resultNum === 1) {
      return { result: await Schedule.findByPk(request.id), status: "success" };
    } else {
      throw { message: "Failed to update schedule." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const deleteSchedule = async (id: string) => {
  try {
    const resultNum = await Schedule.destroy({ where: { id: id } });
    if (resultNum === 1) {
      return {
        result: "Schedule was deleted successfully!",
        status: "success",
      };
    } else {
      throw { message: "Failed to delete schedule." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

// const recoverUser = async (id: string) => {
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

const getSchedule = async (id: string) => {
  try {
    const schedule = await Schedule.findByPk(id);
    if (schedule !== null && schedule !== undefined) {
      return { result: schedule, status: "success" };
    } else {
      throw { message: "Schedule not found." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const allSchedules = async (query: any) => {
  try {
    const schedule = await Schedule.findAll({ where: { ...query } });
    if (schedule !== null && schedule !== undefined) {
      return { result: schedule, status: "success" };
    } else {
      throw { message: "no schedule found." };
    }
  } catch (error) {
    console.log(error);

    return { result: error.message, status: "error" };
  }
};

export {
  newSchedule,
  updateSchedule,
  deleteSchedule,
  //   recoverPosition,
  getSchedule,
  allSchedules,
};
