// service/class.service.ts
import { api } from './api';

export const getClassesByDay = (day: number) => api.get(`/classes?day=${day}`);

export const registerClass = (classId: number, studentId: number) =>
  api.post(`/classes/${classId}/register`, { student_id: studentId });