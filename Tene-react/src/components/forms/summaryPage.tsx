import { Box, Typography } from "@mui/material"
import { categories } from "./categoriesPages/categoryData"

interface SummaryPageProps {
  data: {
    formData?: Record<string, any>
    selectedProducts?: Record<string, number>
  }
}

export default function SummaryPage({ data }: SummaryPageProps) {
    const { formData = {}, selectedProducts = {} } = data
    const allProducts = categories.flatMap(category => category.products)

  return (
    <Box sx={{ p: 3, direction: "rtl" }}>
      <Typography variant="h5" gutterBottom>
        סיכום הטופס
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>
        פרטי טופס:
      </Typography>
      <pre>{JSON.stringify(formData, null, 2)}</pre>

      <Typography variant="h6" sx={{ mt: 3 }}>
        מוצרים שנבחרו:
      </Typography>

      {Object.keys(selectedProducts).length === 0 ? (
        <Typography>לא נבחרו מוצרים</Typography>
      ) : (
        <ul>
                       {Object.entries(selectedProducts).map(([productId, quantity]) => {
            const product = allProducts.find(p => p.id === productId)
            return (
              <li key={productId}>
                {product?.name || productId}: {quantity}
              </li>
            )
          })}
        </ul>
      )}
    </Box>
  )
}
