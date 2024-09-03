export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0182FE",
          error: "#C30000",
          success: "#00966D",
          warning: "#A9791C",
        },

        secondary: {
          DEFAULT: "#FE3E01",
          blue: {
            1: "#0172DE",
            2: "#60B1FE",
            3: "#DFEFFF",
          },
          orange: {
            1: "#DE3601",
            2: "#FE8660",
            3: "#FFE7DF",
          },
          black: {
            1: "#171F26",
            2: "#414A51",
            3: "#CBCBCB",
          },
          white: {
            1: "#EDEDED",
            2: "#F2F2F2",
            3: "#FFFFFF",
          },
          error: {
            1: "#ED2E2E",
          },
          success: {
            1: "#00BA88",
          },
          warning: {
            1: "#F4B740",
          },
        },

        background: {
          black: "#171F26",
          white: "#FFFFFF",
          color: {
            1: "#FFF2F2",
            2: "#F3FDFA",
            3: "#FFF8E1",
          },
          error: {
            1: "#FFF2F2",
          },
          success: {
            1: "#F3FDFA",
          },
          warning: {
            1: "#FFF8E1",
          },
        },
      },
    },
  },
  plugins: [],
};
