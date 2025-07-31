// components/CategoryDialog.tsx
import {
  Dialog, DialogTitle, DialogContent, IconButton, Grid, Card, CardContent,
  Typography, Box, Button
} from "@mui/material"
import { Close as CloseIcon, Add, Remove } from "@mui/icons-material"

interface Product {
  id: number
  name: string
  description?: string
}

interface CategoryDialogProps {
  open: boolean
  onClose: () => void
  onReset: () => void
  categoryName: string
  products: Product[]
  productQuantities: Record<number, number>
  updateQuantity: (productId: number, change: number) => void
}

export default function CategoryDialog({
  open, onClose, onReset, categoryName, products,
  productQuantities, updateQuantity
}: CategoryDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle sx={{ textAlign: "center", position: "relative" }}>
        <Typography variant="h4" fontWeight="bold">{categoryName}</Typography>
        <IconButton onClick={onClose} sx={{ position: "absolute", left: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2} sx={{ p: 2 }}>
          {products.map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight="semibold">{product.name}</Typography>
                  <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
                    <IconButton onClick={() => updateQuantity(product.id, -1)} disabled={!productQuantities[product.id]}>
                      <Remove />
                    </IconButton>
                    <Typography>{productQuantities[product.id] || 0}</Typography>
                    <IconButton onClick={() => updateQuantity(product.id, 1)}>
                      <Add />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, p: 2 }}>
          <Button variant="contained" onClick={onClose}>אישור</Button>
          <Button variant="outlined" onClick={onReset}>איפוס</Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
