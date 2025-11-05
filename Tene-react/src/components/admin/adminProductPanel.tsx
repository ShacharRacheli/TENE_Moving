import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useForm } from "react-hook-form";

const apiUrl = "http://localhost:5180";

interface Product {
  id: number;
  productName: string;
  cob: number;
  categoryId: number;
  categoryName: string;
}

interface Category {
  id: number;
  categoryName: string;
}

const AdminProductPanel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newCategory, setNewCategory] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setValue
  } = useForm<Product>();

  const loadProducts = async () => {
    try {
      const res = await axios.get<Product[]>(`${apiUrl}/api/Admin`);
      setProducts(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("שגיאה בטעינת מוצרים", err);
      setProducts([]);
    }
  };

  const loadCategories = async () => {
    try {
      const res = await axios.get<Category[]>(`${apiUrl}/api/Admin/categories`);
      setCategories(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("שגיאה בטעינת קטגוריות", err);
      setCategories([]);
    }
  };

  const onSubmit = async (data: Product) => {
    const parsedData = {
      ...data,
      cob: parseFloat(String(data.cob)),
      categoryId: Number(data.categoryId),
    };

    if (editingId !== null) {
      await axios.put(`${apiUrl}/api/Admin/${editingId}`, parsedData);
      setEditingId(null);
    } else {
      await axios.post(`${apiUrl}/api/Admin`, parsedData);
    }

    reset();
    loadProducts();
  };

  const handleAddCategory = async () => {
    try {
      const token = sessionStorage.getItem('token');
      await axios.post(`${apiUrl}/api/Admin/addCategory`, newCategory, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      alert('קטגוריה נוספה בהצלחה!');
      setNewCategory('');
      loadCategories();
    } catch (err) {
      alert('הוספת הקטגוריה נכשלה');
    }
  };

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setValue("productName", product.productName);
    setValue("cob", product.cob);
    setValue("categoryId", product.categoryId);
  };

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  const groupedProducts = categories.map((category) => ({
    category,
    products: products.filter(p => p.categoryId === category.id)
  }));

  return (
    <Paper sx={{ p: 4, m: 4, direction: 'rtl' }}>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>הוסף קטגוריה חדשה</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="שם הקטגוריה"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleAddCategory}
            disabled={!newCategory.trim()}
          >
            הוסף
          </Button>
        </Box>
      </Box>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        ממשק ניהול מוצרים
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", gap: 16, marginBottom: 32 }}>
        <TextField label="שם מוצר" {...register("productName")} required />
        <TextField
          label="מחיר (COB)"
          type="number"
          // slotProps={{ input: { step: "0.01" } as any }}
          slotProps={{
            input: {
              inputProps: {
                step: 0.01, // מאפשר ערכים עשרוניים
              },
            },
          }}
          {...register("cob")}
          required
        />

        <TextField
          select
          label="קטגוריה"
          defaultValue=""
          required
          {...register("categoryId", { required: true })}
        >
          <MenuItem value=''>
            <em>בחר קטגוריה</em>
          </MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.categoryName}
            </MenuItem>
          ))}
        </TextField>

        <Button type="submit" variant="contained">
          {editingId !== null ? "עדכן" : "הוסף"}
        </Button>

        {editingId !== null && (
          <Button onClick={() => { reset(); setEditingId(null); }} variant="outlined" color="secondary">
            ביטול
          </Button>
        )}
      </form>

      {groupedProducts.map(({ category, products }) => (
        <Box key={category.id} sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: "bold", color: "#333" }}>
            {category.categoryName}
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>שם מוצר</TableCell>
                <TableCell>מחיר (COB)</TableCell>
                <TableCell>פעולות</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((prod) => (
                <TableRow key={prod.id}>
                  <TableCell>{prod.productName}</TableCell>
                  <TableCell>{prod.cob}</TableCell>
                  <TableCell>
                    <Button onClick={() => startEdit(prod)} variant="outlined">
                      ערוך
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      ))}
    </Paper>
  );
};

export default AdminProductPanel;