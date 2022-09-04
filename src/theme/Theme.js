import {createTheme} from "@material-ui/core/styles";

export const theme = createTheme({
    common: {
        mainFont: {
            fontFamily: "\"Segoe UI\", Arial, sans-serif",
        },
        mainColorText: {
            color: 'rgb(100,149,237)'
        },
        menuItemHover: {
            "& li": {
                "& a": {
                    "&:hover": {
                        color: 'rgba(100,149,237)',
                        cursor: 'pointer',
                    }
                },
            }
        },
        menuItemSelected: {
            borderBottom: '1px solid rgba(100,149,237)',
            color: 'rgba(100,149,237)',
        },
        hoverStyleLogo: {
            "&:hover": {
                color: 'rgba(229, 170, 10)',
            }
        },
        bodyStyle: {
            backgroundColor: 'whiteSmoke',
            fontFamily: "system-ui",
            color: 'rgba(112,128,144)',
        },
        greyHover: {
            "&:hover": {
                backgroundColor: '#F0F0F0'
            }
        },
        inputField: {
            backgroundColor: 'white',
            "& label.Mui-focused": {
                color: 'rgba(229, 170, 10)'
            },
            // "&:hover label": {
            //     color: 'rgb(26,179,148)',
            // },
            "& .MuiOutlinedInput-root": {
                '& fieldset': {
                    border: '1px solid #E8E8E8',
                },
                // "&:hover fieldset": {
                //     borderColor: `rgb(26,179,148)`,
                // },
                "&.Mui-focused fieldset": {
                    border: '1px solid rgba(229, 170, 10)',
                },
            }
        },
        errorText: {
            color: 'rgba(200,0,0, 0.7)',
            margin: '0',
            fontSize: '0.75rem',
            marginTop: '3px',
            textAlign: 'left',
            fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            fontWeight: '400',
            lineHeight: '1.66',
            letterSpacing: '0.03333em'
        },
        border: {
            border: '1px solid #F0F0F0'
        },

    }
})