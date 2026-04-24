import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export default function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert(`Namn: ${formData.name}\nE-post: ${formData.email}`);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 6,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <TextField
        label="Namn"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
      />

      <TextField
        label="E-post"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
      />

      <Button type="submit" variant="contained">
        Skicka
      </Button>
    </Box>
  );
}
