import  { useEffect, useState } from "react";
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

  const { register,
     handleSubmit,
     reset, 
    setValue } = useForm<Product>();


const loadProducts = async () => {
    try {
    const res = await axios.get<Product[]>(`${apiUrl}/api/Admin`);
      setProducts(Array.isArray(res.data) ? res.data : []);

    } catch (err) {
      console.error("Failed to load products", err);
      setProducts([]);
    }
  };

  const loadCategories = async () => {
    try {
  const res = await axios.get<Category[]>(`${apiUrl}/api/Admin/categories`);
    console.log("Categories from API:", res.data);
  
      setCategories(Array.isArray(res.data) ? res.data : []);
    // setCategories(Array.isArray(res.data.Categories) ? res.data.Categories : []);

  console.log(categories);

    } catch (err) {
      console.error("Failed to load categories", err);
      setCategories([]);
    }
  };
  const onSubmit = async (data: Product) => {
    console.log(data);
     const parsedData = {
    ...data,
    cob: parseFloat(String(data.cob)),
    categoryId: Number(data.categoryId)
  };

  console.log("Submitting parsed product:", parsedData);

    if (editingId!== null) {
      await axios.put(`${apiUrl}/api/Admin/${editingId}`, parsedData);
  console.log("Updated existing product:", parsedData);

      setEditingId(null);

    } else {
      await axios.post(`${apiUrl}/api/Admin`, parsedData);
     console.log("Created new product:", parsedData);

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

    alert('Category added!');
    setNewCategory('');
    // optionally refresh categories list here
  } catch (err) {
    alert('Failed to add category');
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
    console.log(categories.map(c=>{console.log(c.categoryName,c.id);}
    ));
  }, []);
const groupedProducts = categories.map((category) => ({
  category,
  products: products.filter(p => p.categoryId === category.id)
}));

  return (
    <Paper sx={{ p: 4, m: 4 }}>
<Box sx={{ mt: 4 }}>
  <Typography variant="h6" gutterBottom>Add New Category</Typography>
  <Box sx={{ display: 'flex', gap: 2 }}>
    <TextField
      label="Category Name"
      value={newCategory}
      onChange={(e) => setNewCategory(e.target.value)}
    />
    <Button
      variant="contained"
      onClick={handleAddCategory}
      disabled={!newCategory.trim()}
    >
      Add
    </Button>
  </Box>
</Box>

      <Typography variant="h5" gutterBottom>
        Admin Product Panel
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", gap: 16, marginBottom: 32 }}>
        <TextField label="Product Name" {...register("productName")} required />
        <TextField label="COB" type="number"
  slotProps={{ input: { step: "0.01" }as any }}
        {...register("cob")} required />

        <TextField select 
        label="Category" 
          defaultValue=""
          required
{...register("categoryId",{ required: true })}
 >
   <MenuItem value=''>
    <em>Select Category</em>
  </MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.categoryName}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained">
          {editingId !== null ? "Update" : "Add"}
        </Button>
        {editingId !== null && (
  <Button onClick={() => { reset(); setEditingId(null); }} variant="outlined" color="secondary">
    Cancel
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
          <TableCell>Name</TableCell>
          <TableCell>COB</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((prod) => (
          <TableRow key={prod.id}>
            <TableCell>{prod.productName}</TableCell>
            <TableCell>{prod.cob}</TableCell>
            <TableCell>
              <Button onClick={() => startEdit(prod)} variant="outlined">
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Box>
))}

      {/* <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>COB</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((prod) => (
            <TableRow key={prod.id}>
              <TableCell>{prod.productName}</TableCell>
              <TableCell>{prod.cob}</TableCell>
              <TableCell>{prod.categoryName}</TableCell>
              <TableCell>
                <Button onClick={() => startEdit(prod)} variant="outlined">
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </Paper>
  );
};

export default AdminProductPanel;
