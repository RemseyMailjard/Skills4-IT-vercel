import { query } from "@/service/db";
import { validateEmail, validatePassword } from "@/utils/validate";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export default async(req)=> {
  const body = req.json();
  console.log("request body", req?.body);

  const sqlSearch = await query(
    `SELECT * FROM Users WHERE email = "${user?.email}"`
  );
  if (sqlSearch.length !== 0) {
    return new NextResponse(
      "User already exists in the database with the provided email",
      {
        status: 409,
      }
    ).json({
      message: "User already exists in the database with the provided email",
    });
  } else if (validateEmail(user?.email) && validatePassword(user?.password)) {
    // const bcryptPass = await bcrypt.hash(user?.password, 10);
    const result = await query(
      `INSERT INTO users
          (FirstName, LastName, Email, Password , PhoneNumber, DateOfBirth) 
          VALUES 
          ("${user?.first_name}", "${user?.last_name}", "${user?.email}", "${user?.password}", ${user?.phone_num}, ${user?.dob})`
    );
    if (result.affectedRows) {
      const sqlSearch = await query(
        `SELECT * FROM users WHERE email = "${user?.email}"`
      );
      const data = sqlSearch[0];
      // token = jwt.sign({ userId: data?.userId, email: data?.email }, "secret", {
      //   expiresIn: "1d",
      // });
      // data.jwt_token = token;
      return new NextResponse("User registered successfully", {
        status: 201,
      }).json({
        message: "User registered successfully",
        data: data,
      });
    } else {
      return new NextResponse("Error registering user in the database", {
        status: 500,
      }).json({
        message: "Error registering user in the database",
      });
    }
  }
}
