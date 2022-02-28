import { query } from "express";
import Employee from "../../modules/employees";
import Positions from "../../modules/positions";
import Salons from "../../modules/salons";
import { Employees } from "./types";

const newEmployee = async (request: Employees) => {
  try {
    const transaction = await Employee.sequelize?.transaction();
    const employee = await Employee.create(request, {
      transaction,
    });
    await transaction?.commit();
    if (employee !== null && employee !== undefined) {
      return { result: employee, status: "success" };
    } else {
      throw { message: "Failed to insert employee." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const updateEmployee = async (request: Employees) => {
  try {
    const [resultNum] = await Employee.update(
      { ...request },
      { where: { id: request.id } }
    );
    if (resultNum === 1) {
      return { result: await Employee.findByPk(request.id), status: "success" };
    } else {
      throw { message: "Failed to update employee." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const deleteEmployee = async (id: string) => {
  try {
    const resultNum = await Employee.destroy({ where: { id: id } });
    if (resultNum === 1) {
      return {
        result: "Employee was deleted successfully!",
        status: "success",
      };
    } else {
      throw { message: "Failed to delete position." };
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

const getEmployee = async (id: string) => {
  try {
    const employee = await Employee.findByPk(id);
    if (employee !== null && employee !== undefined) {
      return { result: employee, status: "success" };
    } else {
      throw { message: "Employee not found." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const allEmployees = async (query: any) => {
  try {
    console.log("NALI!!", query);

    const employee = await Employee.findAll(
      // include: [
      //   {
      //     association: "positions",
      //     include: [
      //       {
      //         model: Positions,
      //         required: true,
      //       },
      //     ],
      //   },
      // ],
      // where: { ...query },
      Object.keys(query).length === 0
        ? {}
        : {
            // where: {
            //   "$Salons.salonId": query["salonId"],
            //   "$Positions.positionId": query["positionId"],
            // },
            include: [
              {
                model: Salons,
                as: "salons",
                ...whereFnc(query, "salonId"),
                required: true,
                attributes: [],
              },
              {
                model: Positions,
                as: "positions",
                ...whereFnc(query, "positionId"),
                required: true,
                attributes: [],
              },
            ],
            attributes: {
              // include: [
              //   "id",
              //   "firstName",
              //   "middleName",
              //   "lastName",
              //   "img",
              //   "description",
              // ],
              exclude: ["positionId", "salonId"],
            },
            // where: { ...query },
          }
    );
    // const employee = await Employee.findAll({ where: { ...query } });
    if (employee !== null && employee !== undefined) {
      return { result: employee, status: "success" };
    } else {
      throw { message: "no employee found." };
    }
  } catch (error) {
    console.log(error);

    return { result: error.message, status: "error" };
  }
};

const whereFnc = (query: any, entityId: string) =>
  entityId ? { where: { id: query[entityId] } } : {};

export {
  newEmployee,
  updateEmployee,
  deleteEmployee,
  //   recoverPosition,
  getEmployee,
  allEmployees,
};
