import Loading from "@/app/loading";
import { CustomInput, CustomLoadingButton } from "@/components/common";
import { AlertTitle, Box, Modal, Snackbar, Typography } from "@mui/material";
import React, { FormEvent, useState } from "react";
import axios from "axios"; // Import Axios
import axiosInstance from "@/utils/api";
import { setCookie } from "cookies-next";
import Alert from "@mui/material/Alert";
interface EnrollScreenProps {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  width: "50%",
  borderRadius: "10px",
};

const EnrollScreen: React.FC<EnrollScreenProps> = ({ open, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleName = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event?.target?.value)
  };
  const handleEmail = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target?.value)
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
const enrollData = new FormData(event.currentTarget)
const userData = {
  users: enrollData.get("email"), 
  
  courseData: {
    user_name : enrollData.get("name"),
    course_date : enrollData.get(""),
  }
};

    try {
      const response = await axiosInstance.post("/email/sendEmails", JSON.stringify(userData));
      setCookie("userData", response)
      if (response.status === 200) {
        setSnackbarOpen(true);
        console.log("Email sent successfully!");
        console.log("Submitted Name:", name);
        console.log("Submitted Email:", email);
      } else {
        console.error("Failed to send email:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while sending email:", error);
    } finally {
      setIsLoading(false);
      handleClose();
    }
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="text-center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Personal Information
          </Typography>
          <form onSubmit={onSubmit} className="flex flex-col gap-2">
            <CustomInput
              name="name"
              label="Name"
              type="text"
              value={name}
              onChange={handleName}
              required
            />
            <CustomInput
              name="email"
              label="Email"
              onChange={handleEmail}
              type="email"
              value={email}
              required
            />
            <CustomLoadingButton
              className="login-button"
              type="submit"
              loading={isLoading}
            >
              Submit
            </CustomLoadingButton>
          </form>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Enrolled successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default EnrollScreen;
