import { usersService } from "../services/index.js"
import CustomError from '../utils/customError.js'
import { Errors } from '../utils/errors-enum.js'
import { generateUserErrorInfo } from '../utils/errorCauses.js'

const getAllUsers = async(req,res)=>{
    const users = await usersService.getAll();
    res.send({status:"success",payload:users})
}

const getUser = async (req, res, next) => {
  const userId = req.params.uid;
  const numericId = Number(userId);

  if (!userId || isNaN(numericId) || numericId <= 0) {
    return next(CustomError.createError({
      name: 'User param error',
      cause: generateUserErrorInfo(userId),
      message: 'Parámetro UID inválido',
      code: Errors.INVALID_PARAM
    }));
  }

  const user = await usersService.getUserById(userId);
  if (!user) return res.status(404).send({ status: "error", error: "User not found" });
  res.send({ status: "success", payload: user });
};


const updateUser =async(req,res)=>{
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error", error:"User not found"})
    const result = await usersService.update(userId,updateBody);
    res.send({status:"success",message:"User updated"})
}

const deleteUser = async(req,res) =>{
    const userId = req.params.uid;
    const result = await usersService.getUserById(userId);
    res.send({status:"success",message:"User deleted"})
}

export default {
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
}