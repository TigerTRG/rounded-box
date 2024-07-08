import { Box } from "@mui/material";
import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const CustomBox = ({ className, children }: IProps) => (
  <Box
    height={360}
    width={356}
    ml={2}
    p={2}
    pb={4}
    display="flex"
    flexDirection="column"
    alignItems="center"
    textAlign="center"
    gap={2}
    className={className}
    sx={{ border: "2px solid grey", borderRadius: "30px", fontSize: "18px" }}
  >
    {children}
  </Box>
);

export default CustomBox;
