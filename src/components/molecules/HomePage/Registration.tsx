import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Registration = () => {
  return (
    <div className="grid gap-12">
      <div className="w-full h-[150px] bg-dark-blue flex flex-row items-center justify-center">
        <span className="!text-white !text-[30px]">Register Layout</span>
      </div>
      <Box className="grid gap-4 w-[50%] m-10 mr-0 mt-2">
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="First Name / ชื่อ"
            sx={{
              input: { color: "#000" },
            }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Last Name / นามสกุล"
            sx={{
              input: { color: "#000" },
            }}
            InputLabelProps={{ shrink: true }}
          />
        </div>
        <div className="grid">
          <TextField
            label="Address / ที่อยู่"
            sx={{
              input: { color: "#000" },
            }}
            InputLabelProps={{ shrink: true }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="Sub-district / แขวง/ตำบล"
            sx={{
              input: { color: "#000" },
            }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="District / เขต/อำเภอ"
            sx={{
              input: { color: "#000" },
            }}
            InputLabelProps={{ shrink: true }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="Province/City/State / จังหวัด"
            sx={{
              input: { color: "#000" },
            }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Postcode / รหัสไปรษณีย์"
            sx={{
              input: { color: "#000" },
            }}
            InputLabelProps={{ shrink: true }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="Email / อีเมล"
            sx={{
              input: { color: "#000" },
            }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Phone number / เบอร์โทรศัพท์"
            sx={{
              input: { color: "#000" },
            }}
            InputLabelProps={{ shrink: true }}
          />
        </div>
        <Button
          className="grid w-full h-[62px] border-[1px] rounded-[5px] bg-dark-blue justify-center items-center"
          sx={{ "&.MuiButton-root:hover": { bgcolor: "transparent" } }}
        >
          <span className="text-white">Submit</span>
        </Button>
      </Box>
    </div>
  );
};

export default Registration;
