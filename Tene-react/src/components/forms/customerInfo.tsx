// import { Controller, useForm, type UseFormReturn } from "react-hook-form";
// import { Box, Grid, TextField, Typography } from "@mui/material";
// import type { CustomerInfo } from "../../types"
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState } from "../../store/store";
// import { updateForm } from "../../store/formSlice";
// export default function CustomerInfo() {
//    const dispatch = useDispatch();
//   const customerInfo = useSelector((state: RootState) => state.form);

//   const form = useForm<CustomerInfo>({
//     defaultValues: {
//       fullName: customerInfo.fullName || "",
//       email: customerInfo.email || "",
//       phone: customerInfo.phone || "",
//     },
//   });
//    const onSubmit = (data: CustomerInfo) => {
//     dispatch(updateForm(data));
//   };
//   return (
//     <Box component="form" sx={{ mt: 3 }}>
//       <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#2d5555" }}>
//         פרטי לקוח
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid size={{xs:12}}>
//           <Controller
//             name="fullName"
//             control={form.control}
//             render={({ field, fieldState: { error } }) => (
//               <TextField
//                 {...field}
//                 fullWidth
//                 label="שם מלא *"
//                 placeholder="הכנס שם מלא"
//                 error={!!error}
//                 helperText={error?.message}
//                 sx={{ mb: 2 }}
//               />
//             )}
//           />
//         </Grid>
//         <Grid size={{xs:12}}>
//           <Controller
//             name="phone"
//             control={form.control}
//             render={({ field, fieldState: { error } }) => (
//               <TextField
//                 {...field}
//                 fullWidth
//                 label="מספר טלפון *"
//                 placeholder="הכנס מספר טלפון"
//                 error={!!error}
//                 helperText={error?.message}
//                 sx={{ mb: 2 }}
//               />
//             )}
//           />
//         </Grid>
//         <Grid size={{xs:12}}>
//           <Controller
//             name="email"
//             control={form.control}
//             render={({ field, fieldState: { error } }) => (
//               <TextField
//                 {...field}
//                 fullWidth
//                 type="email"
//                 label="כתובת אימייל *"
//                 placeholder="הכנס כתובת אימייל"
//                 error={!!error}
//                 helperText={error?.message}
//               />
//             )}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
import { Controller, type UseFormReturn } from "react-hook-form";
import { Box, Grid, TextField, Typography } from "@mui/material";
import type { CustomerInfoType } from "../../store/formSlice";
import { useDispatch } from "react-redux";
import { updateForm } from "../../store/formSlice";
const rtlTextFieldStyles = {
  '& .MuiInputLabel-root': {
    right: 28,
    left: 'auto',
    transformOrigin: 'right',
  },
  '& .MuiInputLabel-shrink': {
    transformOrigin: 'right',
  },
  '& .MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-notchedOutline legend': {
      textAlign: 'right',
    },
  },
};
export default function CustomerInfo({ form }: { form: UseFormReturn<CustomerInfoType> }) {
  const dispatch = useDispatch();

  const onBlur = () => {
    const values = form.getValues();
    dispatch(updateForm(values));
  };

  return (
    <Box sx={{ mt: 3 }} onBlur={onBlur}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#2d5555" }}>
        פרטי לקוח
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12 }}>
          <Controller
            name="fullName"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="* שם מלא"
                placeholder="הכנס שם מלא"
                error={!!error}
                helperText={error?.message}
                sx={rtlTextFieldStyles}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="* מספר טלפון"
                placeholder="הכנס מספר טלפון"
                error={!!error}
                helperText={error?.message}
                sx={rtlTextFieldStyles}
              />
            )}
          />
        </Grid>
        <Grid size={{ xs: 12 }} >
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                type="email"
                label="* כתובת אימייל"
                placeholder="הכנס כתובת אימייל"
                error={!!error}
                helperText={error?.message}
                sx={rtlTextFieldStyles}
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
