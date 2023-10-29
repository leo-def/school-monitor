import { Grade } from "@/grade/_types/grade";

export interface Homework {
  id: string;
  title: string;
  desc: string;
  status: string;
  date: Date;
  deadline: Date;
  deliveryDate: Date;
  grade: Grade;
}
