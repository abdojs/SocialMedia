import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Settings from "../../components/Account/Settings/Settings";
import { AuthContext } from "../../context/Auth/Auth";
import Title from "../../helpers/ChangeTitleDocument";

const Profile = () => {
  Title("Profile");
  const { user } = useContext(AuthContext);
  const { nameUser } = useParams();
  return (
    <Box>
      <Box>
        <Box>
          <Box className="test"></Box>
        </Box>
        <Box>
          <Settings />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
