export const getCurrentDate = (): { year: string, month: string, day: string } => {
  let dateObj = new Date();
  let year = dateObj.getFullYear().toString();
  let month = (dateObj.getMonth() + 1).toString();
  let day = dateObj.getDate().toString();
  if (day.length === 1) day = "0" + day;
  if (month.length === 1) month = "0" + month;
  return { year, month, day };
};

export const getDate = (input: Date): { year: string, month: string, day: string } => {
  let dateObj = input;
  let year = dateObj.getFullYear().toString();
  let month = (dateObj.getMonth() + 1).toString();
  let day = dateObj.getDate().toString();
  if (day.length === 1) day = "0" + day;
  if (month.length === 1) month = "0" + month;
  return { year, month, day };
};