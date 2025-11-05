import { yupResolver } from "@hookform/resolvers/yup";
import {
  Email,
  Lock,
  LoginOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { object, string } from "yup";


const apiUrl = import.meta.env.VITE_APP_API_URL;
console.log(apiUrl);



const schema = object({
  email: string().email("כתובת אימייל לא חוקית").required("יש להזין אימייל"),
  password: string()
    .min(5, "הסיסמה חייבת להכיל לפחות 5 תווים")
    .required("יש להזין סיסמה"),
});

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const res = await axios.post(
        `${apiUrl}/api/Admin/login`,
        {
          Email: data.email,
          Password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      if (res.status === 200 && res.data && res.data.token) {
        sessionStorage.setItem("token", res.data.token);
        navigate("/adminProductPanel");
        reset();
      }
    } catch (e: any) {
      if (
        (e.response && e.response.status === 401) ||
        e.response.status === 400
      ) {
        alert("האימייל או הסיסמה שגויים");
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0fdfd",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          direction: "rtl",
          width: "100%",
          maxWidth: 440,
          borderRadius: 4,
          overflow: "hidden",
          outline: "none",
          background:
            "linear-gradient(135deg, #e0f5f5 0%, #ffffff 50%, #c2e8e8 100%)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.04)",
          border: `1px solid ${alpha("#2d7d7d", 0.15)}`,
          backdropFilter: "blur(16px)",
          position: "relative",
        }}
      >
        {/* Background Circles */}
        <Box
          sx={{
            position: "absolute",
            top: -64,
            right: -64,
            width: 128,
            height: 128,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #a8eaea 0%, #7fd3d3 100%)",
            opacity: 0.6,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -48,
            left: -48,
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #d4f4f4 0%, #b3e9e9 100%)",
            opacity: 0.4,
          }}
        />

        {/* Form Content */}
        <Box sx={{ position: "relative", p: 4 }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: 3,
                background: "linear-gradient(135deg, #2d7d7d 0%, #3ea3a3 100%)",
                boxShadow: "0 10px 25px -5px rgba(45, 125, 125, 0.3)",
                mb: 3,
              }}
            >
              <LoginOutlined sx={{ fontSize: 32, color: "white" }} />
            </Box>

            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #1c5e5e 0%, #397f7f 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
              }}
            >
              ברוך שובך
            </Typography>

            <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 500 }}>
              התחבר כדי להמשיך
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: "#374151",
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Email sx={{ fontSize: 16, color: "#6b7280" }} />
                כתובת אימייל
              </Typography>
              <TextField
                {...register("email")}
                fullWidth
                type="email"
                placeholder="הכנס כתובת אימייל"
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: alpha("#ffffff", 0.7),
                    backdropFilter: "blur(8px)",
                    transition: "all 0.2s ease-in-out",
                    "& fieldset": {
                      borderWidth: 2,
                      borderColor: errors.email ? "#ef4444" : "#c2e8e8",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.email ? "#ef4444" : "#a3dcdc",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.email ? "#ef4444" : "#2d7d7d",
                      boxShadow: errors.email
                        ? `0 0 0 3px ${alpha("#ef4444", 0.1)}`
                        : `0 0 0 3px ${alpha("#2d7d7d", 0.15)}`,
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    mt: 0.5,
                    "&::before": {
                      content: '"•"',
                      marginRight: "4px",
                    },
                  },
                }}
              />
            </Box>

            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  color: "#374151",
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Lock sx={{ fontSize: 16, color: "#6b7280" }} />
                סיסמה
              </Typography>
              <TextField
                {...register("password")}
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="הכנס סיסמה"
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={togglePasswordVisibility}
                        edge="end"
                        sx={{
                          color: "#6b7280",
                          "&:hover": {
                            backgroundColor: alpha("#f1f5f9", 0.8),
                          },
                        }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: alpha("#ffffff", 0.7),
                    backdropFilter: "blur(8px)",
                    transition: "all 0.2s ease-in-out",
                    "& fieldset": {
                      borderWidth: 2,
                      borderColor: errors.password ? "#ef4444" : "#a3dcdc",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.password ? "#ef4444" : "#2d7d7d",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.password ? "#ef4444" : "#2d7d7d",
                      boxShadow: errors.password
                        ? `0 0 0 3px ${alpha("#ef4444", 0.1)}`
                        : `0 0 0 3px ${alpha("#2d7d7d", 0.15)}`,
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    mt: 0.5,
                    "&::before": {
                      content: '"•"',
                      marginRight: "4px",
                    },
                  },
                }}
              />
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disableElevation
              sx={{
                height: 48,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                background: "linear-gradient(135deg, #2d7d7d 0%, #3ea3a3 100%)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #3ea3a3 0%, #2d7d7d 100%)",
                  boxShadow: "0 20px 40px -10px rgba(45, 125, 125, 0.3)",
                  transform: "translateY(-2px)",
                },
                "&:active": {
                  transform: "translateY(0)",
                },
              }}
            >
              התחברות
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
