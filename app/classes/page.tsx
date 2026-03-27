'use client';
import { useEffect, useState } from 'react';
import { getClassesByDay, registerClass } from '@/app/service/class.service';
import WeeklyClassTable from '@/app/components/classes/WeeklyClassTable';
import { Box, Typography, Alert } from '@mui/material';

export default function Page() {
  const [classes, setClasses] = useState<any[]>([]);
  const [message, setMessage] = useState('');

  useEffect(()=>{
    // load classes từ ngày 1 → backend hiện chỉ hỗ trợ day query, 
    // nên cần gọi 7 lần hoặc thay đổi backend trả tất cả
    const loadAll = async () => {
      try {
        const all: any[] = [];
        for(let day=1; day<=7; day++){
          const res = await getClassesByDay(day);
          all.push(...res.data);
        }
        setClasses(all);
      } catch(err){
        console.error(err);
        setMessage('Failed to load classes');
      }
    }
    loadAll();
  },[]);

  const handleRegister = async(classId:number) => {
    try {
      // studentId tạm hardcode = 1
      await registerClass(classId, 1);
      setMessage(`Registered to class ${classId} successfully`);
    } catch(err){
      console.error(err);
      setMessage('Failed to register');
    }
  }

  return (
    <Box sx={{maxWidth:1200,mx:'auto',mt:4,p:2}}>
      <Typography variant="h4" gutterBottom>Weekly Classes</Typography>
      {message && <Alert sx={{mb:2}}>{message}</Alert>}
      <WeeklyClassTable classes={classes} onRegister={handleRegister}/>
    </Box>
  );
}