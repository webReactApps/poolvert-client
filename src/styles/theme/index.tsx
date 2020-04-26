import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export default createMuiTheme({
    direction: "rtl",
    palette: {
        type: "light",
        primary: {
            light: "#6002ee",
            main: "#3d00e0",
            dark: "#0000d6",
            contrastText: "#FFF"
        },
        secondary: {
            light: "#ef0078",
            main: "#c7006e",
            dark: "#880061",
            contrastText: "#FFF"
        },
        success: {
            light: "#75e900",
            main: "#41c300",
            dark: "#008b00",
            contrastText: "#FFF"
        },
        warning: {
            light: "#ff8d00",
            main: "#f47100",
            dark: "#e54304",
            contrastText: "#FFF"
        }
    },
    typography: {
        fontFamily: ["iranyekan"].join(",")
    }
});
