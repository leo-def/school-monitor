import { EntityDto } from "@/commons/api/_types/entity.dto";

export interface SchoolGradeDto extends EntityDto {
  title: string;
  desc?: string;
  value: number;
  templateId?: string;
  appraiserId?: string;
  assessedId?: string;
}
