import { Grade } from "@/grade/_types/grade";

export interface Appraisal {
  id: string;
  title: string;
  desc: string;
  date: Date;
  grade: Grade;
}
