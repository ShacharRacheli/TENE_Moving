// // import { Box, Typography, Button } from "@mui/material";
// // import { useNavigate } from "react-router";

// // export default function SendSuccess() {
// //   const navigate = useNavigate();

// //   return (
// //     <Box sx={{ textAlign: "center", mt: 10 }}>
// //       <Typography variant="h4" mb={2}>
// //         הפרטים נשמרו בהצלחה!
// //       </Typography>

// //       <Typography mb={4}>
// //         ניצור איתך קשר בהקדם
// //       </Typography>

// //       <Button variant="contained" onClick={() => navigate("/")}>
// //         חזרה לעמוד הבית
// //       </Button>
// //     </Box>
// //   );
// // }
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { object, string } from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Container, Paper, Typography, TextField, Button } from "@mui/material";
// import { useNavigate } from "react-router";

// interface CustomerInfoType {
//   fullName: string;
//   email: string;
//   phone: string;
// }

// const customerInfoSchema = object({
//   fullName: string()
//     .required("שם מלא הוא שדה חובה")
//     .min(2, "השם חייב להכיל לפחות 2 תווים"),
//   email: string()
//     .required("אימייל הוא שדה חובה")
//     .email("כתובת אימייל לא תקינה"),
//   phone: string()
//     .required("טלפון הוא שדה חובה")
//     .matches(/^(\+972|0)?5[0-9]{8}$/, "מספר טלפון ישראלי לא תקין"),
// });

// export default function CustomerInfoPage() {
//   const navigate = useNavigate();

//   const { register, handleSubmit, formState: { errors }, trigger } = useForm<CustomerInfoType>({
//     resolver: yupResolver(customerInfoSchema),
//     mode: "onChange",
//   });

//   const onSubmit = async (data: CustomerInfoType) => {
//     const valid = await trigger();
//     if (!valid) return;

//     // כאן אפשר לשלוח את הנתונים לשרת אם רוצים
//     // await axios.post("/api/...", data)

//     // מעבר לעמוד SendSuccess
//     navigate("/send-success");
//   };

//   return (
//     <Container maxWidth="sm" sx={{ py: 6 }}>
//       <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }} dir="rtl">
//         <Typography variant="h4" mb={3} textAlign="center">
//           פרטי לקוח
//         </Typography>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <TextField
//             label="שם מלא"
//             fullWidth
//             sx={{ mb: 2 }}
//             {...register("fullName")}
//             error={!!errors.fullName}
//             helperText={errors.fullName?.message}
//           />

//           <TextField
//             label="טלפון"
//             fullWidth
//             sx={{ mb: 2 }}
//             {...register("phone")}
//             error={!!errors.phone}
//             helperText={errors.phone?.message}
//           />

//           <TextField
//             label="אימייל"
//             fullWidth
//             sx={{ mb: 2 }}
//             {...register("email")}
//             error={!!errors.email}
//             helperText={errors.email?.message}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             sx={{ bgcolor: "#2d7d7d", "&:hover": { bgcolor: "#1a5a5a" }, py: 1.5 }}
//           >
//             שלח
//           </Button>
//         </form>
//       </Paper>
//     </Container>
//   );
// }
// SendSuccess.tsx
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function SendSuccess() {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", mt: 10, px: 2 }}>
      <Typography variant="h3" mb={2} color="#2d5555">
        הפרטים נשמרו בהצלחה!
      </Typography>

      <Typography variant="h6" mb={4} color="text.secondary">
        ניצור איתך קשר בהקדם
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/")}
        sx={{ bgcolor: "#2d7d7d", "&:hover": { bgcolor: "#1a5a5a" }, px: 4, py: 1.5 }}
      >
        חזרה לעמוד הבית
      </Button>
    </Box>
  );
}
