import React from "react";
import { Box, capitalize, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ height: "min", p: 2 }}>
        <Typography variant="h1" align="center" component="h2">
          Error 404
        </Typography>
        <Typography
          component="p"
          align="center"
          textTransform="capitalize"
          fontSize={20}
          paragraph={true}
        >
          opps ! ): This page could not be found
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            a: {
              width: "100%",
            },
          }}
        >
          <Link to="/" align="center">
            Go to homepage
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Error404;
