import Salon from "../../modules/salons";
import Position from "../../modules/positions";
import { Salons } from "./types";

const newSalon = async (request: Salons) => {
  try {
    const transaction = await Salon.sequelize?.transaction();
    const position = await Salon.create(request, {
      transaction,
    });
    await transaction?.commit();
    if (position !== null && position !== undefined) {
      return { result: position, status: "success" };
    } else {
      throw { message: "Failed to insert salon." };
    }
  } catch (error) {
    console.log(error);

    return { result: error.message, status: "error" };
  }
};

const updateSalon = async (request: Salons) => {
  try {
    const [resultNum] = await Salon.update(
      { ...request },
      { where: { id: request.id } }
    );
    if (resultNum === 1) {
      return { result: await Salon.findByPk(request.id), status: "success" };
    } else {
      throw { message: "Failed to update salon." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const deleteSalon = async (id: string) => {
  try {
    const resultNum = await Salon.destroy({ where: { id: id } });
    if (resultNum === 1) {
      return {
        result: "Salon was deleted successfully!",
        status: "success",
      };
    } else {
      throw { message: "Failed to delete salon." };
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

const getSalon = async (id: string) => {
  try {
    const position = await Salon.findByPk(id);
    if (position !== null && position !== undefined) {
      return { result: position, status: "success" };
    } else {
      throw { message: "Salon not found." };
    }
  } catch (error) {
    return { result: error.message, status: "error" };
  }
};

const allSalons = async (query: any) => {
  try {
    console.log(query, "tyk!!");

    const position = await Salon.findAll(
      Object.keys(query).length === 0
        ? {}
        : {
            include: [{ model: Position, required: true }],
            where: { ...query },
          }
    );

    if (position !== null && position !== undefined) {
      return { result: position, status: "success" };
    } else {
      throw { message: "no salon found." };
    }
  } catch (error) {
    console.log(error);

    return { result: error.message, status: "error" };
  }
};

export {
  newSalon,
  updateSalon,
  deleteSalon,
  //   recoverPosition,
  getSalon,
  allSalons,
};
