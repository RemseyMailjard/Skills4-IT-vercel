import { NextResponse } from "next/server";

export function validateEmail(text) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValidEmail = emailRegex.test(text);

  if (!isValidEmail) {
    return new NextResponse("Enter a valid email address", {
      status: 400,
    }).json({ message: "Enter a valid email address" });
    return false;
  } else {
    return true;
  }
}

export function validatePassword(text) {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,20}$/;
  const isValidPassword = passwordRegex.test(text);

  if (!isValidPassword) {
    return new NextResponse("Enter a valid password", {
      status: 400,
    }).json({
      message:
        "Password should be at least 6 characters long containing one uppercase, one lowercase, and one special character",
    });
    return false;
  } else {
    return true;
  }
}
