import { NextApiResponse } from "next";

const db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validate = require("../utils/validate");

async function register(res:NextApiResponse, user:any) {
  let token = "";
  const sqlSearch = await db.query(
    `SELECT * FROM users WHERE email = "${user?.email}"`
  );
  if (sqlSearch.length !== 0) {
    res.status(409).json({
      message: "User already exists in the database with the provided email",
    });
  } else if (
    validate.email(res, user?.email) &&
    validate.password(res, user?.password)
  ) {
    const bcryptPass = await bcrypt.hash(user?.password, 10);
    const result = await db.query(
      `INSERT INTO users
          (first_name, last_name, email, password, phone_num) 
          VALUES 
          ("${user?.first_name}", "${user?.last_name}", "${user?.email}", "${bcryptPass}", ${user?.phone_num})`
    );
    if (result.affectedRows) {
      const sqlSearch = await db.query(
        `SELECT * FROM users WHERE email = "${user?.email}"`
      );
      const data = sqlSearch[0];
      token = jwt.sign({ userId: data?.userId, email: data?.email }, "secret", {
        expiresIn: "1d",
      });
      data.jwt_token = token;
      res.status(201).json({
        message: "User registered successfully",
        data: data,
      });
    } else {
      res.status(500).json({
        message: "Error registering user in the database",
      });
    }
  }
}
async function login(res:NextApiResponse, user:any) {
  const sqlSearch = await db.query(
    `SELECT * FROM users WHERE email = "${user?.email}"`
  );
  if (sqlSearch.length === 0) {
    res.status(404).json({
      message: "User does not exist in the database with the provided email",
    });
  } else {
    validate.email(res, user?.email);
    const hashedPassword = sqlSearch[0].password;
    if (await bcrypt.compare(user?.password, hashedPassword)) {
      const data = sqlSearch[0];
     const token = jwt.sign({ userId: data?.userId, email: data?.email }, "secret", {
        expiresIn: "1d",
      });
      data.jwt_token = token;
      res.status(200).json({ message: "Login Successfull", data: data });
    } else {
      res.status(401).json({ message: "Provided password is incorrect" });
    }
  }
}
async function signup(res:NextApiResponse, user:any) {
  const sqlSearch = await db.query(
    `SELECT * FROM users WHERE email = "${user?.email}"`
  );
  if (sqlSearch.length === 0) {
    res.status(404).json({
      message: "User does not exist in the database with the provided email",
    });
  } else {
    validate.email(res, user?.email);
    const hashedPassword = sqlSearch[0].password;
    if (await bcrypt.compare(user?.password, hashedPassword)) {
      const data = sqlSearch[0];
     const token = jwt.sign({ userId: data?.userId, email: data?.email }, "secret", {
        expiresIn: "1d",
      });
      data.jwt_token = token;
      res.status(200).json({ message: "Signup Successful", data: data });
    } else {
      res.status(401).json({ message: "Provided password is incorrect" });
    }
  }
}
async function userInfo(res:NextApiResponse, id:number) {
  const sqlSearch = await db.query(
    `SELECT * FROM users WHERE userId = "${id}"`
  );
  if (sqlSearch.length === 0) {
    res.status(404).json({
      message: "User not found",
    });
  } else {
   const data = sqlSearch[0];
    res.status(200).json({ message: "User information founded", data: data });
  }
}

module.exports = {
  register,
  login,
  signup,
  userInfo,
};
