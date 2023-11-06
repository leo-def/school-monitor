export interface Absence {
  id: string;
  desc: string;
  hasJustification: boolean;
  justification: string;
  start: Date;
  end: Date;
  fullDay: boolean;
}
