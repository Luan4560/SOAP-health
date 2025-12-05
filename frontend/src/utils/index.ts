export const selectedSize = (value: string) => {
  switch (value) {
    case "sm":
      return "Small";
    case "md":
      return "Medium";
    case "lg":
      return "Large";
    default:
      return "";
  }
};
