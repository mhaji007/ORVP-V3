import { createTheme } from "@material-ui/core";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: '#1597C6',
    },
    secondary: {
      main: '#F2F2F2',
    },
    borderColor: {
      default: "#F2F2F2"
    },
  },
  typography: {
    fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
  },

  shape: {
    borderRadius: 6,
  },
  props: {
    MuiGrid: {
      style: {
        fontFamily: 'Montserrat',
      }
    },
    MuiSelect: {
      inputProps: {
        style: {
          background: "#F2F2F2",
          borderRadius: 6,
        }
      },
      style: {
        borderRadius: 6,
      }
    },
    MuiTextField: {
      inputProps: {
        style: {
          background: "#F2F2F2",
          borderRadius: 6,
        }
      },
      style: {
        borderRadius: 6,
        marginTop: 10
      }
    },
    MuiFormHelperText: {
      style: {
        textAlign: "right",
        fontFamily: 'Montserrat',
        fontWeight: 500,
        fontSize: 14,
        color: "red"
      }
    },
    MuiInputLabel: {
      style: {
        color: '#000',
        margin: 5,
        marginBottom: 10,
        fontFamily: 'Montserrat',
        fontSize: 18,
        marginRight: 10,
        [breakpoints.down("xs")]: {
          fontSize: 14
        }
      },
      asterisk: {
        color: '#db3131',
        '&$error': {
          color: '#db3131'
        }
      }
    },
    MuiDivider: {
      style: {
        marginBottom: 20,
        marginTop: 20
      }
    },
    MuiTypography: {
      h1: {
        fontSize: "18px",
        [breakpoints.down("xs")]: {
          fontSize: "14px"
        }
      }
    }
  },
  overrides: {
    MuiInputLabel: {
      asterisk: {
        color: '#db3131',
        verticalAlign: "top",
        position: "absolute",
        '&$error': {
          color: '#db3131'
        }
      }
    },
    MuiOutlinedInput: {
      multiline: {
        // '&$multiline': {
          background: "#F2F2F2",
        // }
        
      }
    }
  }

});