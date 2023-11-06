import { LabelsFormat } from "../_types/labelsFormat";

export function useGetLabelsFormat(): LabelsFormat {
  return {
    formatNumberToHourLabel(num: number) {
      return `${num.toString().padStart(2, "0")}:00`;
    },
  } as LabelsFormat;
}
