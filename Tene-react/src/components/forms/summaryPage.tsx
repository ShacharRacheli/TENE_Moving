import { Box, Typography, Divider } from "@mui/material"
import type { Category } from "./categoriesInfo"
// import { categories, type Category } from "./categoriesPages/categoryData"

interface SummaryPageProps {
  data: {
    formData?: Record<string, any>
    selectedProducts?: Record<number, number>
        categoriesFromServer?: Category[]

  }
}

export default function SummaryPage({ data }: SummaryPageProps) {
  // const { formData = {}, selectedProducts = {} } = data
  // const allProducts = categories.flatMap(category => category.products)
const { formData = {}, selectedProducts = {}, categoriesFromServer = [] } = data

const allProducts = categoriesFromServer.flatMap(category => category.products)

  return (
    <Box sx={{ p: 3, direction: "rtl", maxWidth: 600, margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom>
        סיכום הטופס
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        פרטי טופס:
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography><strong>שם מלא:</strong> {formData.fullName || "לא הוזן"}</Typography>
        <Typography><strong>טלפון:</strong> {formData.phone || "לא הוזן"}</Typography>
        <Typography><strong>מייל:</strong> {formData.email || "לא הוזן"}</Typography>
        <Typography><strong>כתובת מוצא:</strong> {formData.fromAddress || "לא הוזן"}</Typography>
        <Typography><strong>כתובת יעד:</strong> {formData.toAddress || "לא הוזן"}</Typography>
        <Typography><strong>קומת מוצא:</strong> {formData.fromFloor ? formData.fromFloor : 0}</Typography>
        <Typography><strong>קומת יעד:</strong> {formData.toFloor ? formData.toFloor : 0}</Typography>
  <Typography>
    <strong>מעלית מוצא:</strong> {formData.fromElevator ? "קיים" : "לא קיים"}
  </Typography>
  <Typography>
    <strong>מעלית יעד:</strong> {formData.toElevator ? "קיים" : "לא קיים"}
  </Typography>
        <Typography><strong>תאריך מעבר:</strong> {formData.moveDate || "לא הוזן"}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        מוצרים שנבחרו:
      </Typography>
{/* 
      {Object.keys(selectedProducts).length === 0 ? (
        <Typography>לא נבחרו מוצרים</Typography>
      ) : (
        <ul style={{ paddingRight: '20px' }}>
          {Object.entries(selectedProducts).map(([productId, quantity]) => {
            const product = allProducts.find(p => p.id === productId)
            return (
              <li key={productId}>
                {product?.name || productId}: {quantity}
              </li>
            )
          })}
        </ul>
      )} */}
      {Object.keys(selectedProducts).length === 0 ? (
  <Typography>לא נבחרו מוצרים</Typography>
) : (
  <ul style={{ paddingRight: '20px' }}>
    {Object.entries(selectedProducts).map(([productId, quantity]) => {
      const product = allProducts.find(p => String(p.id) === String(productId))
      return (
        <li key={productId}>
          {product?.productName || `מוצר (${productId})`}: {quantity}
        </li>
      )
    })}
  </ul>
)}
    </Box>
  )
}
