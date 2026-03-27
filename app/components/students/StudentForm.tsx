'use client';
import { useState, useEffect } from 'react';
import { createStudent, getParents } from '@/app/service/student.service';
import { Box, TextField, Button, Typography, Alert, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function StudentForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [gender, setGender] = useState('male');
  const [currentGrade, setCurrentGrade] = useState('1');
  const [parentId, setParentId] = useState<number>(0);
  const [parents, setParents] = useState<{id:number,name:string}[]>([]);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getParents().then(res => setParents(res.data)).catch(() => console.log('Failed to fetch parents'));
  }, []);

  const handleSubmit = async () => {
    setError('');
    setSuccess('');
    if (!name || !age || !parentId) return setError('Please fill all fields');

    try {
      await createStudent({ name, age, gender, currentGrade: currentGrade, parentId });
      setSuccess('Student created successfully!');
      setName(''); setAge(''); setGender('male'); setCurrentGrade('1'); setParentId(0);
    } catch (err) {
      console.error(err);
      setError('Failed to create student');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 3, border: '1px solid #ddd', borderRadius: 2, boxShadow: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h5" textAlign="center">Create Student</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <TextField label="Student Name" value={name} onChange={e=>setName(e.target.value)} required />
      <TextField label="Age" type="number" value={age} onChange={e=>setAge(e.target.value?Number(e.target.value):'')} required />
      
      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select value={gender} onChange={e=>setGender(e.target.value)}>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="unknown">Unknown</MenuItem>
        </Select>
      </FormControl>

      <TextField label="Current Grade" value={currentGrade} onChange={e=>setCurrentGrade(e.target.value)} />

      <FormControl fullWidth>
        <InputLabel>Parent</InputLabel>
        <Select value={parentId} onChange={e=>setParentId(Number(e.target.value))}>
          <MenuItem value={0} disabled>Select Parent</MenuItem>
          {parents.map(p=><MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>)}
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleSubmit}>Create Student</Button>
    </Box>
  );
}