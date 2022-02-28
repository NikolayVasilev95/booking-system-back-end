import Positions from "../../modules/positions";
import Service from "../../modules/services";
import { Services } from "./types";

const newService = async (request: Services) => {
  try {
    const transaction = await Service.sequelize?.transaction();
    const service = await Service.create(request, {
      transaction,
    });
    await transaction?.commit();
    if (service !== null && service !== undefined) {
      return { result: service, status: "success" };
    } else {
      throw { message: "Failed to insert service." };
    }
  } catch (error) {
    console.log(error);

    return { result: error.message, status: "error" };
  }
};

const updateService = async (request: Services) => {
  try {
    const [resultNum] = await Service.update(
      { ...request },
      { where: { id: request.id } }
    );
    if (resultNum === 1) {
      return { result: await Service.findByPk(request.id), status: "success" };
    } else {
      throw { message: "Failed to update service." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const deleteService = async (id: string) => {
  try {
    const resultNum = await Service.destroy({ where: { id: id } });
    if (resultNum === 1) {
      return { result: "Service was deleted successfully!", status: "success" };
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

const getService = async (id: string) => {
  try {
    const position = await Service.findByPk(id);
    if (position !== null && position !== undefined) {
      return { result: position, status: "success" };
    } else {
      throw { message: "Service not found." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const allServices = async (query: any) => {
  try {
    const position = await Service.findAll(
      Object.keys(query).length === 0
        ? {}
        : {
            include: [
              {
                model: Positions,
                as: "positions",
                where: { id: query["positionId"] },
                required: true,
                attributes: [],
              },
            ],
            attributes: {
              exclude: ["positionId"],
            },
          }
    );
    // const position = await Service.findAll({ where: { ...query } });
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
  newService,
  updateService,
  deleteService,
  //   recoverPosition,
  getService,
  allServices,
};
