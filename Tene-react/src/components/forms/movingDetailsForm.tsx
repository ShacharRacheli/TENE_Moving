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
import { useLocation, useNavigate } from "react-router"

// const apiUrl = import.meta.env.VITE_APP_API_URL;


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
const stepRoutes = ["customer", "moving", "categories", "summary"];
const steps = [
  { label: "פרטי לקוח", icon: <Person /> },
  { label: "מאיפה ולאן מובילים", icon: <LocationOn /> },
  { label: "מה מובילים ", icon: <CheckCircle /> },
  { label: "סיכום", icon: <CheckCircle /> },
]

export default function MovingDetailsForm() {
   const location = useLocation();
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState<Partial<FormData>>({})
  const [selectedProducts, setSelectedProducts] = useState<Record<number, number>>({});

  const goToStep = (stepIndex: number) => {
    navigate(`/sendRequest/${stepRoutes[stepIndex]}`);
  };
  const sendFormData = async (data: {
  products: { productId: number; amount: number }[];
  fromAddress: string;
  toAddress: string;
  fromFloor: number;
  toFloor: number;
  moveDate: string;
}) => {
  // const sendFormData = async (data: { products: { productId: number; amount: number }[]; fromAddress: string; toAddress: string; fromFloor: number; toFloor: number; fromElevator: boolean; toElevator: boolean; moveDate: string; append?: { (name: string, value: string | Blob): void; (name: string, value: string): void; (name: string, blobValue: Blob, filename?: string): void } | undefined; delete?: ((name: string) => void) | undefined; get?: ((name: string) => FormDataEntryValue | null) | undefined; getAll?: ((name: string) => FormDataEntryValue[]) | undefined; has?: ((name: string) => boolean) | undefined; set?: { (name: string, value: string | Blob): void; (name: string, value: string): void; (name: string, blobValue: Blob, filename?: string): void } | undefined; forEach?: ((callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any) => void) | undefined; entries?: (() => FormDataIterator<[string, FormDataEntryValue]>) | undefined; keys?: (() => FormDataIterator<string>) | undefined; values?: (() => FormDataIterator<FormDataEntryValue>) | undefined;[Symbol.iterator]?: (() => FormDataIterator<[string, FormDataEntryValue]>) | undefined } | { products: { productId: number; amount: number }[]; fullName: string; email: string; phone: string; append?: { (name: string, value: string | Blob): void; (name: string, value: string): void; (name: string, blobValue: Blob, filename?: string): void } | undefined; delete?: ((name: string) => void) | undefined; get?: ((name: string) => FormDataEntryValue | null) | undefined; getAll?: ((name: string) => FormDataEntryValue[]) | undefined; has?: ((name: string) => boolean) | undefined; set?: { (name: string, value: string | Blob): void; (name: string, value: string): void; (name: string, blobValue: Blob, filename?: string): void } | undefined; forEach?: ((callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any) => void) | undefined; entries?: (() => FormDataIterator<[string, FormDataEntryValue]>) | undefined; keys?: (() => FormDataIterator<string>) | undefined; values?: (() => FormDataIterator<FormDataEntryValue>) | undefined;[Symbol.iterator]?: (() => FormDataIterator<[string, FormDataEntryValue]>) | undefined }) => {
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
  const currentStep = location.pathname.split("/").pop(); // לדוגמה 'moving'
  const stepIndex = stepRoutes.indexOf(currentStep || "customer");
  setActiveStep(stepIndex >= 0 ? stepIndex : 0);
}, [location.pathname]);

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
    ...formData
  }
  // Step 2: Moving Details
  const movingForm = useForm<MovingDetailsType>({
    resolver: yupResolver(movingDetailsSchema),
    defaultValues:formData as MovingDetailsType || defaultValues,
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
    return Object.entries(selectedProducts).map(([productId, amount]) => ({
      productId: Number(productId),
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
          goToStep(activeStep + 1);

        // setActiveStep((prev) => prev + 1)
      } else {
        // Final submission
        const finalData = {
          ...formData,
          ...currentData,
          products: prepareProductsArray()
        }
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
       goToStep(activeStep - 1)
      // setActiveStep((prev) => prev - 1)
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
        return <SummaryPage data={{ formData, selectedProducts }} />

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
                StepIconComponent={() => (
                  <Box
                    component="button"
                    type="button"
                    onClick={() => {
                      if (index < activeStep) goToStep(index);
                    }}
                    disabled={index >= activeStep}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: activeStep === index ? "#2d7d7d" : "#e0e0e0",
                      color: activeStep === index ? "white" : "#666",
                      border: "none",
                      cursor: "pointer",
                      p: 0,
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
