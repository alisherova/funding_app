export const getLeftDate = (lastDay = "") => {
  let currentDate = new Date();
  let splittedDate = lastDay.split("T")[0];
  let pureDate = new Date(splittedDate);
  const timeDifference = Math.abs(pureDate - currentDate);
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysRemaining;
};
