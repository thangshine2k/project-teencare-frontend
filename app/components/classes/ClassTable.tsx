'use client';
import { Box, Typography, Button } from '@mui/material';

interface ClassType {
  id: number;
  name: string;
  subject: string;
  day_of_week: number;
  time_slot: string;
  teacher_name: string;
  max_students: number;
}

interface Props {
  classes: ClassType[];
  onRegister: (classId: number) => void;
}

export default function ClassTable({ classes, onRegister }: Props) {
  return (
    <Box sx={{ display:'flex', flexDirection:'column', gap:2 }}>
      {classes.map(c=>(
        <Box key={c.id} sx={{ p:2, border:'1px solid #ddd', borderRadius:1, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Box>
            <Typography variant="subtitle1">{c.name} ({c.time_slot || 'N/A'})</Typography>
            <Typography variant="body2">Subject: {c.subject}, Teacher: {c.teacher_name}, Max: {c.max_students}</Typography>
          </Box>
          <Button variant="contained" onClick={()=>onRegister(c.id)}>Register</Button>
        </Box>
      ))}
    </Box>
  );
}