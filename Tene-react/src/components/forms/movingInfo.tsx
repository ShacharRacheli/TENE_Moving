
// import { useState,useRef } from "react";
// import { Autocomplete } from "@mui/material";
// import { Controller, type UseFormReturn } from "react-hook-form";
// import {
//   Box,
//   Grid,
//   TextField,
//   Typography,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";
// import type { MovingDetailsType } from "../../store/formSlice";
// import { useDispatch } from "react-redux";
// import { updateForm } from "../../store/formSlice";

// export default function MovingInfo({ form }: { form: UseFormReturn<MovingDetailsType> }) {
//   const dispatch = useDispatch();

//   const onBlur = () => {
//     const values = form.getValues();
//     dispatch(updateForm(values));
//   };
//     const [fromOptions, setFromOptions] = useState<string[]>([]);
//   const [toOptions, setToOptions] = useState<string[]>([]);
//   const fromTimeout = useRef<number | null>(null);
// const toTimeout = useRef<number | null>(null);

//     const fetchAddresses = async (input: string, setOptions: (opts: string[]) => void) => {
//     if (!input) return setOptions([]);
//     const res = await fetch(
//       `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&addressdetails=1&limit=8&countrycodes=il`
//     );
//     const data = await res.json();
//     const options = data.map((item: any) => {
//       const address = item.address;
//       const city =
//         address.city ||
//         address.town ||
//         address.village ||
//         address.hamlet ||
//         address.municipality ||
//         "";
//       const street = address.road || address.street || "";
//       if (city && street) return `${street}, ${city}`;
//       if (city) return city;
//       return item.display_name;
//     });
//     setOptions(Array.from(new Set(options)));
//   };
//    return (
//     <Box sx={{ mt: 3 }}>
//       <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#2d5555" }}>
//         מאיפה ולאן מובילים
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid size={{ xs: 12, md: 6 }}>
//           <Controller
//             name="fromAddress"
//             control={form.control}
//             render={({ field, fieldState: { error } }) => (
//               <Autocomplete
//                 freeSolo
//                 options={fromOptions}
//                 inputValue={field.value || ""}
//                 onInputChange={(_, value) => {
//                   field.onChange(value);
// if (fromTimeout.current) clearTimeout(fromTimeout.current);
//                   fromTimeout.current = setTimeout(() => {
//                     fetchAddresses(value, setFromOptions);
//                   }, 400); // debounce
//                 }}
//                 onChange={(_, value) => field.onChange(value || "")}
//                 openOnFocus
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     label="כתובת מוצא *"
//                     fullWidth
//                     error={!!error}
//                     helperText={error?.message}
//                   />
//                 )}
//               />
//             )}
//           />
//         </Grid>
//         <Grid size={{ xs: 12, md: 6 }}>
//           <Controller
//             name="toAddress"
//             control={form.control}
//             render={({ field, fieldState: { error } }) => (
//               <Autocomplete
//                 freeSolo
//                 options={toOptions}
//                 inputValue={field.value || ""}
//                 onInputChange={(_, value) => {
//                   field.onChange(value);
//                   if (toTimeout.current) clearTimeout(toTimeout.current);
//                   toTimeout.current = setTimeout(() => {
//                     fetchAddresses(value, setToOptions);
//                   }, 400); // debounce
//                 }}
//                 onChange={(_, value) => field.onChange(value || "")}
//                 openOnFocus
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     label="כתובת יעד *"
//                     fullWidth
//                     error={!!error}
//                     helperText={error?.message}
//                   />
//                 )}
//               />
//             )}
//           />
//         </Grid>
//         <Grid size={{xs:12,md:6}}>
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
//         <Grid size={{xs:12,md:6}}>
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
//         <Grid size={{xs:12,md:6}}>
//           <Controller
//             name="fromElevator"
//             control={form.control}
//             render={({ field }) => (
//               <FormControlLabel control={<Checkbox {...field} checked={field.value || false} />} label="יש מעלית בכתובת המוצא" />
//             )}
//           />
//         </Grid>
//         <Grid size={{xs:12,md:6}}>
//           <Controller
//             name="toElevator"
//             control={form.control}
//             render={({ field }) => (
//               <FormControlLabel control={<Checkbox {...field} checked={field.value || false} />} label="יש מעלית בכתובת היעד" />
//             )}
//           />
//         </Grid>
//         <Grid size={{xs:12}}>
//                   <Controller
//   name="moveDate"
//   control={form.control}
//   render={({ field, fieldState: { error } }) => (
//     <TextField
//       {...field}
//       fullWidth
//       type="date"
//       label="תאריך הובלה *"
//       InputLabelProps={{ shrink: true }}
//       error={!!error}
//       helperText={error?.message}
//       value={field.value || ""}
//       onChange={(e) => field.onChange(e.target.value)} // value is already in YYYY-MM-DD
//     />
//   )}
// />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

import { useState, useRef } from "react";
import { Autocomplete } from "@mui/material";
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

export default function MovingInfo({ form }: { form: UseFormReturn<MovingDetailsType> }) {
  const dispatch = useDispatch();

  const onBlur = () => {
    const values = form.getValues();
    dispatch(updateForm(values));
  };

  const [fromOptions, setFromOptions] = useState<string[]>([]);
  const [toOptions, setToOptions] = useState<string[]>([]);
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const fromTimeout = useRef<number | null>(null);
  const toTimeout = useRef<number | null>(null);

  const fetchAddresses = async (input: string, setOptions: (opts: string[]) => void) => {
    if (!input) return setOptions([]);
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&addressdetails=1&limit=8&countrycodes=il`
    );
    const data = await res.json();
    const options = data.map((item: any) => {
      const address = item.address;
      const city =
        address.city ||
        address.town ||
        address.village ||
        address.hamlet ||
        address.municipality ||
        "";
      const street = address.road || address.street || "";
      if (city && street) return `${street}, ${city}`;
      if (city) return city;
      return item.display_name;
    });
    setOptions(Array.from(new Set(options)));
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "#2d5555" }}>
        מאיפה ולאן מובילים
      </Typography>
      <Grid container spacing={3}>
    <Grid size={{xs:12,md:6}}>
          <Controller
            name="fromAddress"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <Autocomplete
                freeSolo
                options={fromOptions}
                inputValue={field.value || ""}
                open={fromOpen && fromOptions.length > 0}
                onOpen={() => setFromOpen(true)}
                onClose={() => setFromOpen(false)}
                filterOptions={(x) => x}
                onInputChange={(_, value, reason) => {
                  field.onChange(value);
                  if (reason === "input") {
                    setFromOpen(!!value);
                    if (fromTimeout.current) clearTimeout(fromTimeout.current);
                    fromTimeout.current = window.setTimeout(() => {
                      fetchAddresses(value, setFromOptions);
                    }, 400);
                  }
                }}
                onChange={(_, value) => field.onChange(value || "")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="* כתובת מוצא"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
sx={rtlTextFieldStyles}

                  />
                )}
              />
            )}
          />
        </Grid>
    <Grid size={{xs:12,md:6}}>
          <Controller
            name="toAddress"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <Autocomplete
                freeSolo
                options={toOptions}
                inputValue={field.value || ""}
                open={toOpen && toOptions.length > 0}
                onOpen={() => setToOpen(true)}
                onClose={() => setToOpen(false)}
                filterOptions={(x) => x}
                onInputChange={(_, value, reason) => {
                  field.onChange(value);
                  if (reason === "input") {
                    setToOpen(!!value);
                    if (toTimeout.current) clearTimeout(toTimeout.current);
                    toTimeout.current = window.setTimeout(() => {
                      fetchAddresses(value, setToOptions);
                    }, 400);
                  }
                }}
                onChange={(_, value) => field.onChange(value || "")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="* כתובת יעד"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
sx={rtlTextFieldStyles}

                  />
                )}
              />
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
                label="* קומת מוצא"
                error={!!error}
                helperText={error?.message}
                onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
sx={rtlTextFieldStyles}
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
                label="* קומת יעד"
                error={!!error}
                helperText={error?.message}
                onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
sx={rtlTextFieldStyles}
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
          <Controller
            name="moveDate"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                type="date"
                label="* תאריך הובלה"
                InputLabelProps={{ shrink: true }}
                error={!!error}
                helperText={error?.message}
                value={field.value || ""}
                onChange={(e) => field.onChange(e.target.value)}
sx={rtlTextFieldStyles}
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>

  );
 }
