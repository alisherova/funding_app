export const getLeftPercent = (funded = "", total = "") => {
  let totalLiabilites = String(funded);
  let toalAssets = String(total);
  let pattern = /[^0-9.-]+/g;

  let result =
    parseFloat(toalAssets.replace(pattern, "")) /
    parseFloat(totalLiabilites.replace(pattern, ""));
  return Math.ceil(Number(result) * 100);
};
