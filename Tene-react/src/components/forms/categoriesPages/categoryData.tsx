import {
  Chair  as SofaIcon,
  Bed as BedIcon,
  Bolt as ZapIcon,
  LocalShipping as PackageIcon,
  MusicNote as MusicIcon,
  Park as TreePineIcon,
  Restaurant as ChefHatIcon,
  Home as HomeIcon,
} from "@mui/icons-material"
import type { ReactNode } from "react"

export interface Product {
  id: string
  name: string
  description?: string
}

export interface Category {
  id: string
  name: string
  color: "blue" | "green"
  icon?: ReactNode
  products: Product[]
}

export const categories: Category[] = [
  {
    id: "living-room",
    name: "ריהוט סלון",
    color: "blue",
    icon: <SofaIcon sx={{ fontSize: 32 }} />,
    products: [
      { id: "sofa-3", name: "ספה 3 מושבים" },
      { id: "sofa-2", name: "ספה 2 מושבים" },
      { id: "armchair", name: "כורסא" },
      { id: "coffee-table", name: "שולחן סלון" },
      { id: "tv-stand", name: "מזנון טלוויזיה" },
      { id: "bookshelf", name: "ספרייה" },
    ],
  },
  {
    id: "bedroom",
    name: "ריהוט חדרים",
    color: "blue",
    icon: <BedIcon sx={{ fontSize: 32 }} />,
    products: [
      { id: "double-bed", name: "מיטה זוגית" },
      { id: "single-bed", name: "מיטה יחיד" },
      { id: "wardrobe", name: "ארון בגדים" },
      { id: "dresser", name: "שידת מגירות" },
      { id: "nightstand", name: "שידת לילה" },
      { id: "mattress", name: "מזרן" },
    ],
  },
  {
    id: "electronics",
    name: "מוצרי חשמל",
    color: "blue",
    icon: <ZapIcon sx={{ fontSize: 32 }} />,
    products: [
      { id: "refrigerator", name: "מקרר" },
      { id: "washing-machine", name: "מכונת כביסה" },
      { id: "dishwasher", name: "מדיח כלים" },
      { id: "oven", name: "תנור" },
      { id: "microwave", name: "מיקרוגל" },
      { id: "tv", name: "טלוויזיה" },
    ],
  },
  // Add more categories as needed...
]
