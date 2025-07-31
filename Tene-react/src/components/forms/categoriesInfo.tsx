// import  { useEffect, useState } from "react"
// import {
//   Box, Button, Card, CardContent, Container, Dialog,
//   DialogContent, DialogTitle, Grid, IconButton, Typography
// } from "@mui/material"
// import {
//   Add as PlusIcon,
//   Close as CloseIcon,
//   Remove as MinusIcon
// } from "@mui/icons-material"

// import { useDispatch, useSelector } from "react-redux"
// import {
//   updateProduct,
//   removeProduct,
//   type ProductSelection
// } from "../../store/formSlice"

// import { categories, type Category, type Product } from "./categoriesPages/categoryData"
// import type { RootState } from "../../store/store"

// export default function CategoriesInfo({
//   onProductsChange,
// }: {
//   onProductsChange: (products: Record<string, number>) => void;
//   }) {
//   const dispatch = useDispatch()
//   const formState = useSelector((state: RootState) => state.form)
//   const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
//   const getInitialQuantities = (): Record<string, number> => {
//     const map: Record<string, number> = {}
//     formState.categories?.forEach(category => {
//       category.products.forEach(product => {
//         map[product.productId] = product.quantity
//       })
//     })
//     return map
//   }

  
  
//   const [productQuantities, setProductQuantities] = useState<Record<string, number>>(getInitialQuantities())

//     useEffect(() => {
//     onProductsChange(productQuantities)
//     }, [productQuantities, onProductsChange])
  
//   const updateQuantity = (product: Product, change: number) => {
//     const newQuantity = Math.max(0, (productQuantities[product.id] || 0) + change)

//     setProductQuantities(prev => ({
//       ...prev,
//       [product.id]: newQuantity
//     }))
//      if (!selectedCategory) return

//     if (newQuantity === 0) {
//       dispatch(removeProduct({ categoryId: selectedCategory.id, productId: product.id }))
//     } else {
//       dispatch(updateProduct({
//         categoryId: selectedCategory.id,
//         product: {
//           productId: product.id,
//           quantity: newQuantity
//         }
//       }))
//     }
//   }
  
//   const handleCloseDialog = () => setSelectedCategory(null)

//   const handleResetCategory = () => {
//     if (!selectedCategory) return
//     const productIds = selectedCategory.products.map(p => p.id)

//     setProductQuantities(prev => {
//       const copy = { ...prev }
//       productIds.forEach(id => delete copy[id])
//       return copy
//     })

//     productIds.forEach(productId => {
//       dispatch(removeProduct({ categoryId: selectedCategory.id, productId }))
//     })
//   }


//   return (
//     <Box sx={{ minHeight: "100vh", backgroundColor: "white", padding: 2, direction: "rtl" }}>
//       <Container maxWidth="xl">
//         <Typography
//           variant="h3"
//           component="h1"
//           textAlign="center"
//           sx={{ mb: 4, fontWeight: "bold", color: "gray.800" }}
//         >
//           בחר קטגוריה
//         </Typography>

//         <Grid container spacing={2} sx={{ mb: 4 }}>
//           {categories.map((category:Category) => (
//               <Grid size={{ xs: 12, sm: 6, md:3} } key={category.id}>
//               <Card
//                 sx={{
//                   cursor: "pointer",
//                   transition: "all 0.2s",
//                   backgroundColor: category.color === "green" ? "#16a085" : "#3498db",
//                   color: "white",
//                   border: `2px solid ${category.color === "green" ? "#16a085" : "#2980b9"}`,
//                   "&:hover": {
//                     transform: "scale(1.05)",
//                     boxShadow: 3,
//                     opacity: 0.9,
//                   },
//                 }}
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 <CardContent sx={{ textAlign: "center", py: 3 }}>
//                   <Box sx={{ mb: 2 }}>{category.icon}</Box>
//                   <Typography variant="h6" component="span" fontWeight="semibold">
//                     {category.name}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>


//         <Dialog
//           open={!!selectedCategory}
//           onClose={handleCloseDialog}
//           maxWidth="lg"
//           fullWidth
//           PaperProps={{ sx: { direction: "rtl", maxHeight: "80vh" } }}
//         >
//           <DialogTitle sx={{ textAlign: "center", position: "relative" }}>
//             <Typography variant="h4" fontWeight="bold">
//               {selectedCategory?.name}
//             </Typography>
//             <IconButton onClick={handleCloseDialog} sx={{ position: "absolute", left: 8, top: 8 }}>
//               <CloseIcon />
//             </IconButton>
//           </DialogTitle>

//           <DialogContent>
//             <Grid container spacing={2} sx={{ p: 2 }}>
//               {selectedCategory?.products.map((product: Product) => (
//                   <Grid size={{ xs: 12, sm:6 ,md: 4} } key={product.id}>
//                   <Card
//                     sx={{
//                       height: "100%",
//                       transition: "box-shadow 0.2s",
//                       "&:hover": { boxShadow: 2 },
//                     }}
//                   >
//                     <CardContent sx={{ textAlign: "center" }}>
//                       <Typography variant="h6" sx={{ mb: 2 }}>
//                         {product.name}
//                       </Typography>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           gap: 2,
//                           mb: 2,
//                         }}
//                       >
//                         <IconButton
//                           size="small"
//                           onClick={() => updateQuantity(product, -1)}
//                           disabled={!productQuantities[product.id]}
//                           sx={{ border: "1px solid #ccc" }}
//                         >
//                           <MinusIcon />
//                         </IconButton>

//                         <Typography variant="h6" sx={{ minWidth: 48, textAlign: "center" }}>
//                           {productQuantities[product.id] || 0}
//                         </Typography>

//                         <IconButton
//                           size="small"
//                           onClick={() => updateQuantity(product, 1)}
//                           sx={{ border: "1px solid #ccc" }}
//                         >
//                           <PlusIcon />
//                         </IconButton>
//                       </Box>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>

//             <Box sx={{ display: "flex", justifyContent: "center", gap: 2, p: 2, borderTop: "1px solid #e0e0e0" }}>
//               <Button variant="contained" onClick={handleCloseDialog} sx={{ px: 4, py: 1 }}>
//                 אישור
//               </Button>
//               <Button variant="outlined" onClick={handleResetCategory} sx={{ px: 4, py: 1 }}>
//                 איפוס
//               </Button>
//             </Box>
//           </DialogContent>
//         </Dialog>
//       </Container>
//     </Box>
//   )
// }
import { useEffect, useState } from "react"
import {
  Box, Button, Card, CardContent, Container, Dialog,
  DialogContent, DialogTitle, Grid, IconButton, Typography
} from "@mui/material"
import {
  Add as PlusIcon,
  Close as CloseIcon,
  Remove as MinusIcon
} from "@mui/icons-material"

import { useDispatch, useSelector } from "react-redux"
import {
  updateProduct,
  removeProduct
} from "../../store/formSlice"

import type { RootState } from "../../store/store"

interface Product {
  id: number
  productName: string
}

export interface Category {
  id: number
  categoryName: string
  icon?: React.ReactNode
  products: Product[]
}

export default function CategoriesInfo({
  categories,          // <--- from parent
  onProductsChange,
}: {
  categories: Category[]
  onProductsChange: (products: Record<string, number>) => void
})  {
  const dispatch = useDispatch()
  const formState = useSelector((state: RootState) => state.form)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  // const [categories, setCategories] = useState<Category[]>([])

  // Initialize quantities from Redux form state
  const getInitialQuantities = (): Record<string, number> => {
    const map: Record<string, number> = {}
    formState.categories?.forEach(category => {
      category.products.forEach(product => {
        map[product.productId] = product.amount
      })
    })
    return map
  }

  const [productQuantities, setProductQuantities] = useState<Record<string, number>>(getInitialQuantities())

  // Fetch categories + products from backend on mount
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5180/api/Product/products-by-category")
  //       const data = await response.json()
  //       setCategories(data)
  //     } catch (error) {
  //       console.error("Failed to fetch categories:", error)
  //     }
  //   }

  //   fetchCategories()
  // }, [])

  // Update parent with product quantities
  useEffect(() => {
    onProductsChange(productQuantities)
  }, [productQuantities, onProductsChange])

  // Update quantity (and dispatch to redux)
  const updateQuantity = (product: Product, change: number) => {
    const newQuantity = Math.max(0, (productQuantities[product.id] || 0) + change)
    setProductQuantities(prev => ({
      ...prev,
      [product.id]: newQuantity
    }))

    if (!selectedCategory) return

    if (newQuantity === 0) {
      dispatch(removeProduct({ categoryId: selectedCategory.id.toString(), productId: product.id }))
    } else {
      dispatch(updateProduct({
        categoryId: selectedCategory.id.toString(),
        product: {
          productId: Number(product.id),
          amount: newQuantity
        }
      }))
    }
  }

  const handleCloseDialog = () => setSelectedCategory(null)

  const handleResetCategory = () => {
    if (!selectedCategory) return
    const productIds = selectedCategory.products.map(p => p.id)

    setProductQuantities(prev => {
      const copy = { ...prev }
      productIds.forEach(id => delete copy[id])
      return copy
    })

    productIds.forEach(productId => {
      dispatch(removeProduct({ categoryId: selectedCategory.id.toString(), productId }))
    })
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "white", padding: 2, direction: "rtl" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h1"
          textAlign="center"
          sx={{ mb: 4, fontWeight: "bold", color: "gray.800" }}
        >
          בחר קטגוריה
        </Typography>

        <Grid container spacing={2} sx={{ mb: 4 }}>
          {categories.map((category: Category) => (
                <Grid size={{xs:12, sm:6 ,md:4 }} key={category.id}>
              <Card
                sx={{
                  cursor: "pointer",
                  transition: "all 0.2s",
                  backgroundColor:  "#16a085" ,//: "#3498db",
                  color: "white",
                  border: `2px solid  "#16a085"`,
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 3,
                    opacity: 0.9,
                  },
                }}
                onClick={() => setSelectedCategory(category)}
              >
                <CardContent sx={{ textAlign: "center", py: 3 }}>
                  <Box sx={{ mb: 2 }}>{category.icon}</Box>
                  <Typography variant="h6" component="span" fontWeight="semibold">
                    {category.categoryName}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={!!selectedCategory}
          onClose={handleCloseDialog}
          maxWidth="lg"
          fullWidth
          PaperProps={{ sx: { direction: "rtl", maxHeight: "80vh" } }}
        >
          <DialogTitle sx={{ textAlign: "center", position: "relative" }}>
            <Typography variant="h4" fontWeight="bold">
              {selectedCategory?.categoryName}
            </Typography>
            <IconButton onClick={handleCloseDialog} sx={{ position: "absolute", left: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <Grid container spacing={2} sx={{ p: 2 }}>
              {selectedCategory?.products.map((product: Product) => (
                <Grid size={{xs:12, sm:6 ,md:4 }} key={product.id}>
                  <Card
                    sx={{
                      height: "100%",
                      transition: "box-shadow 0.2s",
                      "&:hover": { boxShadow: 2 },
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h6" sx={{ mb: 2 }}>
                        {product.productName}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(product, -1)}
                          disabled={!productQuantities[product.id]}
                          sx={{ border: "1px solid #ccc" }}
                        >
                          <MinusIcon />
                        </IconButton>

                        <Typography variant="h6" sx={{ minWidth: 48, textAlign: "center" }}>
                          {productQuantities[product.id] || 0}
                        </Typography>

                        <IconButton
                          size="small"
                          onClick={() => updateQuantity(product, 1)}
                          sx={{ border: "1px solid #ccc" }}
                        >
                          <PlusIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, p: 2, borderTop: "1px solid #e0e0e0" }}>
              <Button variant="contained" onClick={handleCloseDialog} sx={{ px: 4, py: 1 }}>
                אישור
              </Button>
              <Button variant="outlined" onClick={handleResetCategory} sx={{ px: 4, py: 1 }}>
                איפוס
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  )
}
