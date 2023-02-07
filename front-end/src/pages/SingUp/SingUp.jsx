import React, { useCallback, useContext, useState } from "react";
import { Alert, Box, Collapse, IconButton, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SendData from "../../apis/POST/CreateAccount";
import { AuthContext } from "../../context/Auth/Auth";
import Title from "../../helpers/ChangeTitleDocument";

function SingUp() {
  Title("Not Found");
  const [open, setOpen] = useState(true);
  const { isFetching, error, dispatch } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await SendData(data, dispatch);
    setOpen(false);
  };

  const alert = useCallback(() => {
    return (
      <Collapse in={!open}>
        <Alert
          variant="outlined"
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(true);
              }}
            >
              X
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {error}
        </Alert>
      </Collapse>
    );
  }, [open, error]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f4",
      }}
    >
      <Box
        sx={{
          padding: 2,
          border: "1px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <Box>{alert()}</Box>
        <Box>
          <Box
            component="h1"
            sx={{
              paddingTop: 1,
              paddingBottom: 2,
            }}
          >
            Create a new account
          </Box>
        </Box>
        <Box
          method="Post"
          className="form"
          autoComplete="off"
          encType="application/x-www-form-urlencoded"
          onSubmit={handleSubmit(onSubmit)}
          action="./kxxkkxkxkxkxkxx/x"
          component="form"
          sx={{ width: { xs: "300px", sm: "380px", md: "480px" } }}
        >
          <Box sx={{ py: 1 }}>
            <TextField
              fullWidth
              {...register("name", { required: true })}
              id="name"
              label="Full Name"
              variant="outlined"
              error={errors.name && true}
              type="text"
              required
            />
          </Box>
          <Box>
            <TextField
              fullWidth
              {...register("phone", { required: true })}
              id="phone"
              label="Number Phone"
              variant="outlined"
              error={errors.phone && true}
              type="text"
              required
              style={{}}
            />
          </Box>
          <Box sx={{ py: 1 }}>
            <TextField
              fullWidth
              {...register("email", { required: true })}
              id="email"
              label="Email address"
              variant="outlined"
              error={errors.email && true}
              type="email"
              required
            />
          </Box>
          <Box sx={{ py: 1 }}>
            <TextField
              fullWidth
              {...register("password", { required: true })}
              id="outlined-basic"
              label="password"
              variant="outlined"
              error={errors.password && true}
              type="password"
              required
            />
          </Box>
          <Box sx={{ py: 2 }}>
            <LoadingButton
              sx={{ py: 1 }}
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              loading={isFetching}
              disabled={isFetching}
              name="submit"
              id="submit"
            >
              <span>create account</span>
            </LoadingButton>
          </Box>
        </Box>
        <Box
          sx={{
            paddingTop: 1,
            paddingBottom: 2,
            marginTop: 4,
            borderTop: "1px solid #ddd",
          }}
        >
          <Link
            to="/account/login"
            style={{
              padding: "10px",
              marginTop: "10px",
              textDecoration: "none",
              textTransform: "capitalize",
              display: "block",
              border: "1px solid #1976d2",
              color: "#1976d2",
              textAlign: "center",
            }}
          >
            login
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default SingUp;
