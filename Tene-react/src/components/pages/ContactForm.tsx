
// import { useForm } from "react-hook-form";
// import { object, string } from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import {
//     Container, Paper, Typography, TextField,
//     Button
// } from "@mui/material";
// import { useNavigate } from "react-router";
// import SendSuccess from "./SendSuccess";

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

//   const { register, handleSubmit, formState: { errors } } = useForm<CustomerInfoType>({
//     resolver: yupResolver(customerInfoSchema),
//     mode: "onChange",
//   });

//   const onSubmit = (data: CustomerInfoType) => {
//     // כאן אפשר לשלוח את הנתונים לשרת אם רוצים
//     // await axios.post("/api/...", data)

//     // מעבר לדף SendSuccess
//     navigate("/sendSuccess");
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
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container, Paper, Typography, TextField,
  Button
} from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";

interface CustomerInfoType {
  fullName: string;
  email: string;
  phone: string;
}

const customerInfoSchema = object({
  fullName: string()
    .required("שם מלא הוא שדה חובה")
    .min(2, "השם חייב להכיל לפחות 2 תווים"),
  email: string()
    .required("אימייל הוא שדה חובה")
    .email("כתובת אימייל לא תקינה"),
  phone: string()
    .required("טלפון הוא שדה חובה")
    .matches(/^(\+972|0)?5[0-9]{8}$/, "מספר טלפון ישראלי לא תקין"),
});

export default function CustomerInfoPage() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<CustomerInfoType>({
    resolver: yupResolver(customerInfoSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: CustomerInfoType) => {
    try {
      // שולח את כל השדות שהשרת מצפה להם, עם ערכים ריקים ברירת מחדל
      const payload = {
  fullName: data.fullName,
  email: data.email,
  phone: data.phone,
  // fromAddress: "N/A",
  // toAddress: "N/A",
  // fromFloor: 0,
  // toFloor: 0,
  // fromElevator: false,
  // toElevator: false,
  // moveDate: new Date().toISOString().split("T")[0], // או תאריך רלוונטי
  // products: [{ productId: 1, amount: 1 }], // לפחות מוצר אחד או ריק אם API מאפשר
};

      await axios.post("https://tene-moving-server.onrender.com/api/Request/ContactUs", payload, {
        headers: { "Content-Type": "application/json" },
      });

      // מעבר לדף הצלחה
      navigate("/sendSuccess");
    } catch (error: any) {
      console.error("Error sending customer data:", error.response?.data || error.message);
      alert("שגיאה בשליחת הטופס. נסו שוב מאוחר יותר.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }} dir="rtl">
        <Typography variant="h4" mb={3} textAlign="center">
          פרטי לקוח
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="שם מלא"
            fullWidth
            sx={{ mb: 2 }}
            {...register("fullName")}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />

          <TextField
            label="טלפון"
            fullWidth
            sx={{ mb: 2 }}
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />

          <TextField
            label="אימייל"
            fullWidth
            sx={{ mb: 2 }}
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ bgcolor: "#2d7d7d", "&:hover": { bgcolor: "#1a5a5a" }, py: 1.5 }}
          >
            שלח
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
