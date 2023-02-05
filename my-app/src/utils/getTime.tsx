export const getCurrentTime = (): { hours: number, minutes: number, format: string } => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let format = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  return { hours, minutes, format };
};

export const getTime = (input: Date): { hours: number, minutes: number, format: string } => {
  let date = input;
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let format = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  return { hours, minutes, format };
};
