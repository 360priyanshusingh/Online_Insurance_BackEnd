import sequelize, { DataTypes } from '../config/database';
import HttpStatus from 'http-status-codes';
import bcrypt  from 'bcrypt' ;
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
const Admin = require('../models/admin')(sequelize, DataTypes);

//get all Admins
export const getAllAdmins = async () => {
  const data = await Admin.findAll();
  if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Admin not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Admin successfully retrieved'

}

};

//create new Admin
export const newAdmin = async (body) => {
  const data = await Admin.findOne({where:{userName:body.userName , email:body.email}});
  if (data) {
    return {
      code: HttpStatus.CONFLICT, // 409 status code
      data: [],
      message: "User already exists"
    };
  } else {
    const hashedPassword = await bcrypt.hash(body.password, 4);
    body.password = hashedPassword;
    const user = await Admin.create(body);

    return {
      code: HttpStatus.CREATED, // 201 status code
      data: user,
      message: "User successfully created"
    };
  }

};


export const adminLogin = async (body) => {
  const data = await Admin.findOne({ where: { email: body.email } });
  if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: "Admin not found"
    };
  }

  const passwordMatch = await bcrypt.compare(body.password, data.password);

  if (!passwordMatch) {
    return {
      code: HttpStatus.UNAUTHORIZED, // 401 status code
      data: null,
      message: "User password is wrong!"
    };
  }

  const token = jwt.sign(
    {
      userId: data.id,
      email: data.email,
      role: data.role
    },
    process.env.JWT_SECRET
  );

  return {
    code: HttpStatus.ACCEPTED, // 202 status code (Accepted for processing)
    data: token,
    message: "User successfully logged in"
  };
};


export const updateAdmin = async (id, body) => {

  const data = await Admin.findOne({where:{userName:body.userName , email:body.email}});

  if (data) {
    return {
      code: HttpStatus.NOT_FOUND, // 409 status code
      data: [],
      message: "User Not Found!"
    };
  }
  else{
    
  const admin = await Admin.update(body, {
      where: { id: id }
    });

    return {
      code: HttpStatus.OK,
      data: body,
      message: "User successfully updated"
    };

  }

};

//delete single Admin
export const deleteAdmin = async (id) => {
 const data = await Admin.destroy({ where: { id: id } });

 if (!data) {
  return {
    code: HttpStatus.NOT_FOUND, // 404 status code
    data: null,
    message: 'Admin not found'
  };
}
return {
  code: HttpStatus.OK, // 200 status code
  data:data,
  message: 'Admin successfully retrieved'

}
  return data ;
};

//get single Admin
export const getAdmin = async (id) => {
  const data = await Admin.findByPk(id);

 if (!data) {
    return {
      code: HttpStatus.NOT_FOUND, // 404 status code
      data: null,
      message: 'Admin not found'
    };
  }
  return {
    code: HttpStatus.OK, // 200 status code
    data:data,
    message: 'Admin successfully retrieved'

}

}
