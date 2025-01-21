import { colors } from "./colors";

const theme = {
  container: {
    center: true,
    padding: "2rem",
  },
  extend: {
    colors: {
      ...colors,
    },
  },
};

export default theme;
