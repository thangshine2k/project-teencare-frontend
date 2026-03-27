import { api } from './api';
export type CreateStudentDto = {
  name: string;
  
  dob?: string;    

  gender?: string; 

  currentGrade: string;

  parentId?: number;
  
  age?: number;    
}

export const createStudent = (data: CreateStudentDto) =>
  api.post('/students', data);

export const getStudent = (id: number) =>
  api.get(`/students/${id}`);
export const createParent = (data: any) => api.post('/parents', data);
export const getParents = () => api.get('/parents');