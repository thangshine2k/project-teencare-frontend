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

export default function WeeklyClassTable({ classes, onRegister }: Props) {
  // nhóm theo ngày
  const days = [1,2,3,4,5,6,7]; // Mon-Sun
  const classesByDay: Record<number, ClassType[]> = {};
  days.forEach(day => classesByDay[day] = []);
  classes.forEach(c => {
    classesByDay[c.day_of_week]?.push(c);
  });

  return (
    <Box sx={{ display:'flex', flexDirection:'row', gap:2, overflowX:'auto' }}>
      {days.map(day => (
        <Box key={day} sx={{ minWidth:200, border:'1px solid #ccc', borderRadius:2, p:2 }}>
          <Typography variant="h6" textAlign="center">Day {day}</Typography>
          {classesByDay[day].length === 0 && <Typography>No classes</Typography>}
          {classesByDay[day].map(c => (
            <Box key={c.id} sx={{ mt:1, p:1, border:'1px solid #ddd', borderRadius:1 }}>
              <Typography variant="subtitle2">{c.name}</Typography>
              <Typography variant="body2">{c.time_slot || ''} | Teacher: {c.teacher_name}</Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ mt:1 }}
                onClick={() => onRegister(c.id)}
              >
                Register
              </Button>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}