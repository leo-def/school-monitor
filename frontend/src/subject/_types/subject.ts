import { Teacher } from "@/teacher/_types/teacher";

export interface Subject {
  id: string;
  title: string;
  teacher: Teacher;
}
