import Employees from "../../modules/employees";
import Position from "../../modules/positions";
import Services from "../../modules/services";
import { Positions } from "./types";

const newPosition = async (request: Positions) => {
  try {
    const transaction = await Position.sequelize?.transaction();
    const position = await Position.create(request, {
      transaction,
    });
    await transaction?.commit();
    if (position !== null && position !== undefined) {
      return { result: position, status: "success" };
    } else {
      throw { message: "Failed to insert position." };
    }
  } catch (error) {
    console.log(error);

    return { result: error.message, status: "error" };
  }
};

const updatePosition = async (request: Positions) => {
  try {
    const [resultNum] = await Position.update(
      { ...request },
      { where: { id: request.id } }
    );
    if (resultNum === 1) {
      return { result: await Position.findByPk(request.id), status: "success" };
    } else {
      throw { message: "Failed to update position." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const deletePosition = async (id: string) => {
  try {
    const resultNum = await Position.destroy({ where: { id: id } });
    if (resultNum === 1) {
      return {
        result: "Position was deleted successfully!",
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

const getPosition = async (id: string) => {
  try {
    const position = await Position.findByPk(id);
    if (position !== null && position !== undefined) {
      return { result: position, status: "success" };
    } else {
      throw { message: "Position not found." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const allPositions = async (query: any) => {
  try {
    console.log(query, "tyk!!");

    const position = await Position.findAll(
      Object.keys(query).length === 0
        ? {}
        : {
            include: [
              { model: Employees, required: true },
              { model: Services, required: true },
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
    if (position !== null && position !== undefined) {
      return { result: position, status: "success" };
    } else {
      throw { message: "no position found." };
    }
  } catch (error) {
    console.log(error);

    return { result: error.message, status: "error" };
  }
};

export {
  newPosition,
  updatePosition,
  deletePosition,
  //   recoverPosition,
  getPosition,
  allPositions,
};
