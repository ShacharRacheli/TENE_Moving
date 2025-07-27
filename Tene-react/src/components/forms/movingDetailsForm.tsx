import { useEffect, useState } from "react"
import { object, string, number, boolean, date, type InferType } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, Controller } from "react-hook-form"
import {
  Box,
  Button,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Container,
  FormControlLabel,
  Checkbox,
  Grid,
  Paper,
  MenuItem,
} from "@mui/material"
import { Person, LocationOn, CheckCircle, ArrowBack, ArrowForward } from "@mui/icons-material"

import type { CustomerInfoType, MovingDetailsType } from "../../store/formSlice"
import CustomerInfo from "./customerInfo"
import MovingInfo from "./movingInfo"
import CategoriesInfo from "./categoriesInfo"
import SummaryPage from "./summaryPage"
import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_URL;


// Validation schemas for each step
const customerInfoSchema = object({
  fullName: string().min(2, "השם חייב להכיל לפחות 2 תווים").required("שם מלא הוא שדה חובה"),
  email: string().email("כתובת אימייל לא תקינה").required("אימייל הוא שדה חובה"),
  phone: string()
    .matches(/^(\+972|0)?5[0-9]{8}$/, "מספר טלפון ישראלי לא תקין")
    .required("מספר טלפון הוא שדה חובה"),
})

const movingDetailsSchema = object({
  fromAddress: string().min(3, "כתובת מוצא חייבת להכיל לפחות 3 תווים").required("כתובת מוצא היא שדה חובה"),
  toAddress: string().min(3, "כתובת יעד חייבת להכיל לפחות 3 תווים").required("כתובת יעד היא שדה חובה"),
  fromFloor: number().min(-4, "מינימום -4").max(30, "מקסימום 30").required("קומת מוצא היא שדה חובה"),
  toFloor: number().min(-4, "מינימום -4").max(30, "מקסימום 30").required("קומת יעד היא שדה חובה"),
  fromElevator: boolean().default(false),
  toElevator: boolean().default(false),
  moveDate: string().required("תאריך ההובלה הוא שדה חובה"),
})

const steps = [
  { label: "פרטי לקוח", icon: <Person /> },
  { label: "מאיפה ולאן מובילים", icon: <LocationOn /> },
  { label: "מה מובילים ", icon: <CheckCircle /> },
  { label: "סיכום", icon: <CheckCircle /> },
]
export default function MovingDetailsForm() {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState<Partial<FormData>>({})
const [selectedProducts, setSelectedProducts] = useState<Record<string, number>>({});

const sendFormData = async (data: { products: { productName: string; amount: number }[]; fromAddress: string; toAddress: string; fromFloor: number; toFloor: number; fromElevator: boolean; toElevator: boolean; moveDate: string; append?: { (name: string, value: string | Blob): void; (name: string, value: string): void; (name: string, blobValue: Blob, filename?: string): void } | undefined; delete?: ((name: string) => void) | undefined; get?: ((name: string) => FormDataEntryValue | null) | undefined; getAll?: ((name: string) => FormDataEntryValue[]) | undefined; has?: ((name: string) => boolean) | undefined; set?: { (name: string, value: string | Blob): void; (name: string, value: string): void; (name: string, blobValue: Blob, filename?: string): void } | undefined; forEach?: ((callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any) => void) | undefined; entries?: (() => FormDataIterator<[string, FormDataEntryValue]>) | undefined; keys?: (() => FormDataIterator<string>) | undefined; values?: (() => FormDataIterator<FormDataEntryValue>) | undefined;[Symbol.iterator]?: (() => FormDataIterator<[string, FormDataEntryValue]>) | undefined } | { products: { productName: string; amount: number }[]; fullName: string; email: string; phone: string; append?: { (name: string, value: string | Blob): void; (name: string, value: string): void; (name: string, blobValue: Blob, filename?: string): void } | undefined; delete?: ((name: string) => void) | undefined; get?: ((name: string) => FormDataEntryValue | null) | undefined; getAll?: ((name: string) => FormDataEntryValue[]) | undefined; has?: ((name: string) => boolean) | undefined; set?: { (name: string, value: string | Blob): void; (name: string, value: string): void; (name: string, blobValue: Blob, filename?: string): void } | undefined; forEach?: ((callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any) => void) | undefined; entries?: (() => FormDataIterator<[string, FormDataEntryValue]>) | undefined; keys?: (() => FormDataIterator<string>) | undefined; values?: (() => FormDataIterator<FormDataEntryValue>) | undefined;[Symbol.iterator]?: (() => FormDataIterator<[string, FormDataEntryValue]>) | undefined }) => {
  try {
    const response = await axios.post("http://localhost:5180/api/Request", data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error sending form data:");
    // throw error;
  }
};

  useEffect(() => {
    console.log("Step changed to:", activeStep);
  }, [activeStep]);
  // Step 1: Customer Info
  const customerForm = useForm<CustomerInfoType>({
    resolver: yupResolver(customerInfoSchema),
    defaultValues: formData as CustomerInfoType,
  })
const defaultValues: MovingDetailsType = {
  fromAddress: '',
  toAddress: '',
  fromFloor: 0,
  toFloor: 0,
  fromElevator: false,
  toElevator: false,
  moveDate: '',
}
  // Step 2: Moving Details
  const movingForm = useForm<MovingDetailsType>({
    resolver: yupResolver(movingDetailsSchema),
  defaultValues,
  })

  const getCurrentForm = () => {
    switch (activeStep) {
      case 0:
        return customerForm
      case 1:
        return movingForm
      // case 2:
      //   return customerForm
      default:
        return customerForm
    }
  }
const prepareProductsArray = () => {
  return Object.entries(selectedProducts).map(([productName, amount]) => ({
    productName,
    amount,
  }));
};

  const handleNext = async () => {
    const currentForm = getCurrentForm()
    const isValid = await currentForm.trigger()

    if (isValid) {
      const currentData = currentForm.getValues()
      setFormData((prev) => ({ ...prev, ...currentData }))

      if (activeStep < steps.length - 1) {
        setActiveStep((prev) => prev + 1)
      } else {
        // Final submission
        const finalData = { ...formData, 
          ...currentData,
            products: prepareProductsArray() 
         }
        // alert("הטופס נשלח בהצלחה! הפרטים נשמרו במערכת.")
       try {
        // Send data to the server
        await sendFormData(finalData);
        alert("הטופס נשלח בהצלחה! הפרטים נשמרו במערכת.");
      } catch (error) {
        alert("שגיאה בשליחת הטופס. נסו שוב מאוחר יותר.");
      }
      }
    }
  }

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1)
    }
  }

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <CustomerInfo form={customerForm} />;
      case 1:
        return <MovingInfo form={movingForm} />;
      case 2:
        return <CategoriesInfo onProductsChange={setSelectedProducts} />;
      case 3:
        return <SummaryPage data={{ formData, selectedProducts }}/>
         
      default:
        return null
    }
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1, color: "#2d5555" }}>
            בקשת הובלה חדשה
          </Typography>
          <Typography variant="body1" color="text.secondary">
            בואו נתכנן את ההובלה המושלמת שלכם
          </Typography>
        </Box>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                StepIconComponent={({ active, completed }) => (
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: active || completed ? "#2d7d7d" : "#e0e0e0",
                      color: active || completed ? "white" : "#666",
                    }}
                  >
                    {step.icon}
                  </Box>
                )}
              >
                <Typography sx={{ fontWeight: activeStep === index ? "bold" : "normal" }}>{step.label}</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Card sx={{ minHeight: 400, bgcolor: "#fafafa" }}>
          <CardContent sx={{ p: 4 }}>{renderStepContent()}</CardContent>
        </Card>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            onClick={handleNext}
            variant="contained"
            startIcon={<ArrowBack />}
            sx={{
              bgcolor: "#2d7d7d",
              "&:hover": { bgcolor: "#1a5a5a" },
              px: 4,
              py: 1.5,
              borderRadius: 25,
            }}
          >
            {activeStep === steps.length - 1 ? "שלח בקשה" : "המשך"}
          </Button>

          <Button
            onClick={handleBack}
            variant="contained"
            endIcon={<ArrowForward />}
            disabled={activeStep === 0}
            sx={{
              bgcolor: "#2d7d7d",
              "&:hover": { bgcolor: "#1a5a5a" },
              px: 4,
              py: 1.5,
              borderRadius: 25,
              visibility: activeStep === 0 ? "hidden" : "visible",
            }}
          >
            חזור
          </Button>
        </Box>

      </Paper>
    </Container>
  )
}
// import { boolean, date, number, object, string } from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";

// const schema = object({
//   fromAddress: string().min(3, 'From address must be at least 3 characters').required('From address is required'),
//   toAddress: string().min(3, 'To address must be at least 3 characters').required('To address is required'),
//   fromFloor: number().min(-4, 'Min -4').max(30, 'Max 30').required('From floor is required'),
//   toFloor: number().min(-4, 'Min -4').max(30, 'Max 30').required('To floor is required'),
//   fromElevator: boolean(),
//   toElevator: boolean(),
//   date: date().required('Date is required'),
// });



// const CustomerForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit =async (data: {fromAddress:string,toAddress:string,fromFloor:number,toFloor:number,fromElevator?:boolean,toElevator?:boolean,date:Date }) => {
//     console.log('Form Submitted:', data);
//   };

//     return (
//       <>
//      {/* <form style={{ maxWidth: 500, margin: "auto", display: "flex", flexDirection: "column", gap: 16 }}> */}
//       <Typography variant="h6">Moving Details</Typography>

//       <TextField
//         {...register("fromAddress")}
//         label="From Address"
//         fullWidth
//         error={!!errors.fromAddress}
//         helperText={errors.fromAddress?.message}
//       />

//       <TextField
//         {...register("toAddress")}
//         label="To Address"
//         fullWidth
//         error={!!errors.toAddress}
//         helperText={errors.toAddress?.message}
//       />

//       <TextField
//         {...register("fromFloor")}
//         label="From Floor"
//         type="number"
//         fullWidth
//         error={!!errors.fromFloor}
//         helperText={errors.fromFloor?.message}
//       />

//       <TextField
//         {...register("toFloor")}
//         label="To Floor"
//         type="number"
//         fullWidth
//         error={!!errors.toFloor}
//         helperText={errors.toFloor?.message}
//       />

//       <FormControlLabel
//         control={<Checkbox {...register("fromElevator")} />}
//         label="Elevator at From Address"
//       />

//       <FormControlLabel
//         control={<Checkbox {...register("toElevator")} />}
//         label="Elevator at To Address"
//       />

//       <TextField
//         {...register("date")}
//         label="Move Date"
//         type="date"
//         fullWidth
//         error={!!errors.date}
//         helperText={errors.date?.message}
//       />

//       <Button type="submit" onSubmit={handleSubmit(onSubmit)} variant="contained" color="primary">
//         Submit
//       </Button>
//        {/* </form> */}
//       </>
//   );
// };

// export default CustomerForm;
