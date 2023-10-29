export interface Absence {
  id: string;
  desc: string;
  hasJustification: boolean;
  justification: string;
  start: Date;
  date: Date;
  fullDay: boolean;
}
