
"use client"

import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  IconButton,
  Typography,
} from "@mui/material"
import {
  Add as PlusIcon,
  Close as CloseIcon,
  Remove as MinusIcon,
} from "@mui/icons-material"

import type { UseFormReturn } from "react-hook-form"
import type { MovingDetailsType } from "../../store/formSlice"
import { categories, type Category, type Product } from "./categoriesPages/categoryData"

export default function CategoriesInfo({
  onProductsChange,
}: {
  onProductsChange: (products: Record<string, number>) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [productQuantities, setProductQuantities] = useState<Record<string, number>>({})
useEffect(() => {
  onProductsChange(productQuantities);
}, [productQuantities]);
  const updateQuantity = (productId: string, change: number) => {
    setProductQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change),
    }))
  }

//   const getTotalItems = () => {
//     return Object.values(productQuantities).reduce((sum, qty) => sum + qty, 0)
//   }

  const handleCloseDialog = () => {
    setSelectedCategory(null)
  }

  const handleResetCategory = () => {
    const categoryProductIds = selectedCategory?.products.map((p) => p.id) || []
    setProductQuantities((prev) => {
      const newQuantities = { ...prev }
      categoryProductIds.forEach((id) => {
        delete newQuantities[id]
      })
      return newQuantities
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
          {categories.map((category) => (
              <Grid size={{ xs: 12, sm: 6, md:3} } key={category.id}>
              <Card
                sx={{
                  cursor: "pointer",
                  transition: "all 0.2s",
                  backgroundColor: category.color === "green" ? "#16a085" : "#3498db",
                  color: "white",
                  border: `2px solid ${category.color === "green" ? "#16a085" : "#2980b9"}`,
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
                    {category.name}
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
              {selectedCategory?.name}
            </Typography>
            <IconButton onClick={handleCloseDialog} sx={{ position: "absolute", left: 8, top: 8 }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <Grid container spacing={2} sx={{ p: 2 }}>
              {selectedCategory?.products.map((product: Product) => (
                  <Grid size={{ xs: 12, sm:6 ,md: 4} } key={product.id}>
                  <Card
                    sx={{
                      height: "100%",
                      transition: "box-shadow 0.2s",
                      "&:hover": { boxShadow: 2 },
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h6" sx={{ mb: 2 }}>
                        {product.name}
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
                          onClick={() => updateQuantity(product.id, -1)}
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
                          onClick={() => updateQuantity(product.id, 1)}
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

// "use client"

// import type React from "react"
// import { useState } from "react"
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   IconButton,
//   Grid,
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Fab,
//   Container,
// } from "@mui/material"
// import {
//   Close as CloseIcon,
//   LocalShipping as PackageIcon,
//   Add as PlusIcon,
//   Remove as MinusIcon,
//   Chair as SofaIcon,
//   Bed as BedIcon,
//   Bolt as ZapIcon,
//   MusicNote as MusicIcon,
//   Park as TreePineIcon,
//   Restaurant as ChefHatIcon,
//   Home as HomeIcon,
// } from "@mui/icons-material"
// import type { UseFormReturn } from "react-hook-form"
// import type { MovingDetailsType } from "../../store/formSlice"

// interface Product {
//   id: string
//   name: string
//   description?: string
// }

// interface Category {
//   id: string
//   name: string
//   color: "blue" | "green"
//   icon?: React.ReactNode
//   products: Product[]
// }

// const categories: Category[] = [
//   {
//     id: "living-room",
//     name: "ריהוט סלון",
//     color: "blue",
//     icon: <SofaIcon sx={{ fontSize: 32 }} />,
//     products: [
//       { id: "sofa-3", name: "ספה 3 מושבים" },
//       { id: "sofa-2", name: "ספה 2 מושבים" },
//       { id: "armchair", name: "כורסא" },
//       { id: "coffee-table", name: "שולחן סלון" },
//       { id: "tv-stand", name: "מזנון טלוויזיה" },
//       { id: "bookshelf", name: "ספרייה" },
//     ],
//   },
//   {
//     id: "bedroom",
//     name: "ריהוט חדרים",
//     color: "blue",
//     icon: <BedIcon sx={{ fontSize: 32 }} />,
//     products: [
//       { id: "double-bed", name: "מיטה זוגית" },
//       { id: "single-bed", name: "מיטה יחיד" },
//       { id: "wardrobe", name: "ארון בגדים" },
//       { id: "dresser", name: "שידת מגירות" },
//       { id: "nightstand", name: "שידת לילה" },
//       { id: "mattress", name: "מזרן" },
//     ],
//   },
//   {
//     id: "electronics",
//     name: "מוצרי חשמל",
//     color: "blue",
//     icon: <ZapIcon sx={{ fontSize: 32 }} />,
//     products: [
//       { id: "refrigerator", name: "מקרר" },
//       { id: "washing-machine", name: "מכונת כביסה" },
//       { id: "dishwasher", name: "מדיח כלים" },
//       { id: "oven", name: "תנור" },
//       { id: "microwave", name: "מיקרוגל" },
//       { id: "tv", name: "טלוויזיה" },
//     ],
//   },
//   {
//     id: "boxes-others",
//     name: "קרטונים-אחרים",
//     color: "green",
//     icon: <PackageIcon sx={{ fontSize: 32 }} />,
//     products: [
//       { id: "small-box", name: "קרטון קטן" },
//       { id: "medium-box", name: "קרטון בינוני" },
//       { id: "large-box", name: "קרטון גדול" },
//       { id: "wardrobe-box", name: "קרטון ארון" },
//       { id: "bubble-wrap", name: "ניילון בועות" },
//       { id: "tape", name: "סרט דבק" },
//     ],
//   },
//   {
//     id: "everything",
//     name: "כל מיני",
//     color: "blue",
//     icon: <HomeIcon sx={{ fontSize: 32 }} />,
//     products: [
//       { id: "plants", name: "צמחים" },
//       { id: "artwork", name: "יצירות אמנות" },
//       { id: "mirrors", name: "מראות" },
//       { id: "lamps", name: "מנורות" },
//       { id: "rugs", name: "שטיחים" },
//       { id: "curtains", name: "וילונות" },
//     ],
//   },
//   {
//     id: "music-sports",
//     name: "נגינה ספורט ושחק",
//     color: "blue",
//     icon: <MusicIcon sx={{ fontSize: 32 }} />,
//     products: [
//       { id: "piano", name: "פסנתר" },
//       { id: "guitar", name: "גיטרה" },
//       { id: "drums", name: "תופים" },
//       { id: "exercise-bike", name: "אופני כושר" },
//       { id: "treadmill", name: "הליכון" },
//       { id: "pool-table", name: "שולחן ביליארד" },
//     ],
//   },
//   {
//     id: "garden-roof",
//     name: "ריהוט גן וגג",
//     color: "blue",
//     icon: <TreePineIcon sx={{ fontSize: 32 }} />,
//     products: [
//       { id: "garden-table", name: "שולחן גן" },
//       { id: "garden-chairs", name: "כיסאות גן" },
//       { id: "umbrella", name: "שמשייה" },
//       { id: "bbq", name: "מנגל" },
//       { id: "planters", name: "עציצים" },
//       { id: "garden-tools", name: "כלי גינה" },
//     ],
//   },
//   {
//     id: "food-development",
//     name: "פיתוח אוכל",
//     color: "blue",
//     icon: <ChefHatIcon sx={{ fontSize: 32 }} />,
//     products: [
//       { id: "mixer", name: "מיקסר" },
//       { id: "food-processor", name: "מעבד מזון" },
//       { id: "blender", name: "בלנדר" },
//       { id: "coffee-machine", name: "מכונת קפה" },
//       { id: "stand-mixer", name: "מיקסר עמידה" },
//       { id: "bread-maker", name: "מכונת לחם" },
//     ],
//   },
// ]

// export default function CategoriesInfo({ form }: { form: UseFormReturn<MovingDetailsType> }) {
//   const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
//   const [productQuantities, setProductQuantities] = useState<Record<string, number>>({})

//   const updateQuantity = (productId: string, change: number) => {
//     setProductQuantities((prev) => ({
//       ...prev,
//       [productId]: Math.max(0, (prev[productId] || 0) + change),
//     }))
//   }

//   const getTotalItems = () => {
//     return Object.values(productQuantities).reduce((sum, qty) => sum + qty, 0)
//   }

//   const handleCloseDialog = () => {
//     setSelectedCategory(null)
//   }

//   const handleResetCategory = () => {
//     const categoryProductIds = selectedCategory?.products.map((p) => p.id) || []
//     setProductQuantities((prev) => {
//       const newQuantities = { ...prev }
//       categoryProductIds.forEach((id) => {
//         delete newQuantities[id]
//       })
//       return newQuantities
//     })
//   }

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: "white",
//         padding: 2,
//         direction: "rtl",
//       }}
//     >
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
//           {categories.map((category) => (
//             <Grid size={{ xs: 12, sm: 6, md: 3 }}key={category.id}>
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

//         {getTotalItems() > 0 && (
//           <Fab
//             sx={{
//               position: "fixed",
//               bottom: 16,
//               right: 16,
//               backgroundColor: "#16a085",
//               color: "white",
//               "&:hover": {
//                 backgroundColor: "#138d75",
//               },
//             }}
//           >
//             <Typography variant="body2" fontWeight="semibold">
//               {`סה"כ: ${getTotalItems()}`}
//             </Typography>
//           </Fab>
//         )}

//         <Dialog
//           open={!!selectedCategory}
//           onClose={handleCloseDialog}
//           maxWidth="lg"
//           fullWidth
//           PaperProps={{
//             sx: { direction: "rtl", maxHeight: "80vh" },
//           }}
//         >
//           <DialogTitle sx={{ textAlign: "center", position: "relative" }}>
//             <Typography variant="h4" component="div" fontWeight="bold">
//               {selectedCategory?.name}
//             </Typography>
//             <IconButton
//               onClick={handleCloseDialog}
//               sx={{
//                 position: "absolute",
//                 left: 8,
//                 top: 8,
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//           </DialogTitle>

//           <DialogContent>
//             <Grid container spacing={2} sx={{ p: 2 }}>
//               {selectedCategory?.products.map((product) => (
//                   <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
//                   <Card
//                     sx={{
//                       height: "100%",
//                       transition: "box-shadow 0.2s",
//                       "&:hover": {
//                         boxShadow: 2,
//                       },
//                     }}
//                   >
//                     <CardContent sx={{ textAlign: "center" }}>
//                       <Typography variant="h6" component="h3" fontWeight="semibold" sx={{ mb: 2 }}>
//                         {product.name}
//                       </Typography>
//                       {product.description && (
//                         <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                           {product.description}
//                         </Typography>
//                       )}

//                       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mb: 2 }}>
//                         <IconButton
//                           size="small"
//                           onClick={() => updateQuantity(product.id, -1)}
//                           disabled={!productQuantities[product.id]}
//                           sx={{ border: "1px solid #ccc" }}
//                         >
//                           <MinusIcon />
//                         </IconButton>

//                         <Typography variant="h6" sx={{ minWidth: 48, textAlign: "center", fontWeight: "semibold" }}>
//                           {productQuantities[product.id] || 0}
//                         </Typography>

//                         <IconButton
//                           size="small"
//                           onClick={() => updateQuantity(product.id, 1)}
//                           sx={{ border: "1px solid #ccc" }}
//                         >
//                           <PlusIcon />
//                         </IconButton>
//                       </Box>

//                       <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
//                         <Typography variant="caption" color="text.secondary">
//                           פירוק
//                         </Typography>
//                         <Typography variant="caption" color="text.secondary">
//                           הרכבה
//                         </Typography>
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
