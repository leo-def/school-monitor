export interface LabelsFormat {
  formatNumberToHourLabel(num: number): string;
}

export const defaultLabelsFormat: LabelsFormat = {
  formatNumberToHourLabel(num: number) {
    return `${num.toString().padStart(2, "0")}:00`;
  },
};
