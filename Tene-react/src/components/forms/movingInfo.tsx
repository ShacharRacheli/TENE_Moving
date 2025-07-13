// // components/MovingDetailsStep.tsx
// import { Controller, type UseFormReturn } from "react-hook-form";
// import {
//   Box,
//   Grid,
//   TextField,
//   Typography,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";
// import type { MovingInfo } from "../../types";
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState } from "../../store/store";
// // { form }: { form: UseFormReturn<MovingDetails> }
// export default function MovingInfo() {

  
//   return (
//     <Box component="form" sx={{ mt: 3 }}>
//       <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#2d5555" }}>
//         מאיפה ולאן מובילים
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid  size={{xs:12, md:6}}>
//           <Controller
//             name="fromAddress"
//             control={form.control}
//             render={({ field, fieldState: { error } }) => (
//               <TextField {...field} fullWidth label="כתובת מוצא *" error={!!error} helperText={error?.message} />
//             )}
//           />
//         </Grid>
//         <Grid  size={{xs:12, md:6}}>
//           <Controller
//             name="toAddress"
//             control={form.control}
//             render={({ field, fieldState: { error } }) => (
//               <TextField {...field} fullWidth label="כתובת יעד *" error={!!error} helperText={error?.message} />
//             )}
//           />
//         </Grid>
//         <Grid  size={{xs:12, md:6}}>
//           <Controller
//             name="fromFloor"
//             control={form.control}
//             render={({ field, fieldState: { error } }) => (
//               <TextField
//                 {...field}
//                 fullWidth
//                 type="number"
//                 label="קומת מוצא *"
//                 error={!!error}
//                 helperText={error?.message}
//                 onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
//               />
//             )}
//           />
//         </Grid>
//         <Grid  size={{xs:12, md:6}}>
//           <Controller
//             name="toFloor"
//             control={form.control}
//             render={({ field, fieldState: { error } }) => (
//               <TextField
//                 {...field}
//                 fullWidth
//                 type="number"
//                 label="קומת יעד *"
//                 error={!!error}
//                 helperText={error?.message}
//                 onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
//               />
//             )}
//           />
//         </Grid>
//         <Grid  size={{xs:12, md:6}}>
//           <Controller
//             name="fromElevator"
//             control={form.control}
//             render={({ field }) => (
//               <FormControlLabel control={<Checkbox {...field} checked={field.value || false} />} label="יש מעלית בכתובת המוצא" />
//             )}
//           />
//         </Grid>
//         <Grid size={{xs:12, md:6}} >
//           <Controller
//             name="toElevator"
//             control={form.control}
//             render={({ field }) => (
//               <FormControlLabel control={<Checkbox {...field} checked={field.value || false} />} label="יש מעלית בכתובת היעד" />
//             )}
//           />
//         </Grid>
//         <Grid size={{xs:12}}>
//           <Controller
//             name="moveDate"
//             control={form.control}
//             render={({ field, fieldState: { error } }) => (
//               <TextField
//                 {...field}
//                 fullWidth
//                 type="date"
//                 label="תאריך הובלה *"
//                 InputLabelProps={{ shrink: true }}
//                 error={!!error}
//                 helperText={error?.message}
//                 value={field.value ? new Date(field.value).toISOString().split("T")[0] : ""}
//                 onChange={(e) => field.onChange(new Date(e.target.value))}
//               />
//             )}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }



import { Controller, type UseFormReturn } from "react-hook-form";
import {
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import type { MovingDetailsType } from "../../store/formSlice";
import { useDispatch } from "react-redux";
import { updateForm } from "../../store/formSlice";

export default function MovingInfo({ form }: { form: UseFormReturn<MovingDetailsType> }) {
  const dispatch = useDispatch();

  const onBlur = () => {
    const values = form.getValues();
    dispatch(updateForm(values));
  };

  return (
    <Box sx={{ mt: 3 }} onBlur={onBlur}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#2d5555" }}>
        מאיפה ולאן מובילים
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{xs:12,md:6}}>
          <Controller
            name="fromAddress"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField {...field} fullWidth label="כתובת מוצא *" error={!!error} helperText={error?.message} />
            )}
          />
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <Controller
            name="toAddress"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField {...field} fullWidth label="כתובת יעד *" error={!!error} helperText={error?.message} />
            )}
          />
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <Controller
            name="fromFloor"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                type="number"
                label="קומת מוצא *"
                error={!!error}
                helperText={error?.message}
                onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
              />
            )}
          />
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <Controller
            name="toFloor"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                type="number"
                label="קומת יעד *"
                error={!!error}
                helperText={error?.message}
                onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
              />
            )}
          />
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <Controller
            name="fromElevator"
            control={form.control}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} checked={field.value || false} />} label="יש מעלית בכתובת המוצא" />
            )}
          />
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <Controller
            name="toElevator"
            control={form.control}
            render={({ field }) => (
              <FormControlLabel control={<Checkbox {...field} checked={field.value || false} />} label="יש מעלית בכתובת היעד" />
            )}
          />
        </Grid>
        <Grid size={{xs:12}}>
          {/* <Controller
            name="moveDate"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                type="date"
                label="תאריך הובלה *"
                InputLabelProps={{ shrink: true }}
                error={!!error}
                helperText={error?.message}
                value={field.value ? new Date(field.value).toISOString().split("T")[0] : ""}
                onChange={(e) => field.onChange(new Date(e.target.value))}
              />
            )}
          /> */}
          <Controller
  name="moveDate"
  control={form.control}
  render={({ field, fieldState: { error } }) => (
    <TextField
      {...field}
      fullWidth
      type="date"
      label="תאריך הובלה *"
      InputLabelProps={{ shrink: true }}
      error={!!error}
      helperText={error?.message}
      value={field.value || ""}
      onChange={(e) => field.onChange(e.target.value)} // value is already in YYYY-MM-DD
    />
  )}
/>
        </Grid>
      </Grid>
    </Box>
  );
}

