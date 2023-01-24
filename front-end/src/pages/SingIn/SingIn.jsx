import React from "react";
import { Box, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";

function SingIn() {
  const [loading, setLoading] = React.useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setLoading(false);
  };

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
        <Box>
          <Box
            component="h1"
            sx={{
              paddingTop: 1,
              paddingBottom: 2,
            }}
          >
            login
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
              {...register("email", { required: true })}
              id="outlined-basic"
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
              label="Password"
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
              loading={!loading}
              disabled={!loading}
              name="submit"
              id="submit"
            >
              <span>login</span>
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
          sing up
        </Box>
      </Box>
    </Box>
  );
}

export default SingIn;
