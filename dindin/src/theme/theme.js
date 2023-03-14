import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#7978D9',
            secondary: '#3A9FF1',
            valueEntry: '#645FFB',
            valueOutput: '#FA8C10',
            negativeButton: '#FF576B',
        },
        warning: {
            main: '#EF8F00',
            light: '#F5D9B0',
            dark: '#CC7800'
        },
        info: {
            main: '#5482F6',
            light: '#C3D4FE',
            dark: '#243F80'
        },
        grey: {
            100: '#F8F8F9',
            200: '#F0F0F5',
            300: '#DEDEE9',
            400: '#C8C8D7',
            500: '#9B9BB2',
            600: '#747488',
            700: '#3F3F55',
            800: '#343447',
            900: '#344054',
            1000: 'rgba(145, 154, 150, 0.3)',
            1100: '#667085',
            1200: '#D0D5DD'
        },
        background: {
            payed: '#EEF6F6',
            overdue: '#FFEFEF',
            planned: '#FCF6DC',
            payedAmount: '#1FA7AF',
            overdueAmount: '#971D1D',
            plannedAmount: '#C5A605'
        }
    },
    typography: {
        dindinLogo: {
            fontFamily: 'Rubik',
            fontSize: '36px',
            fontWeight: '700',
            lineHeight: '43px',
        },
        resumeValue: {
            fontFamily: 'Rubik',
            fontSize: '13px',
            fontWeight: '500',
            lineHeight: '15px',
        },
        resumeTitle: {
            fontFamily: 'Rubik',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '21px',
        },
        resumeText: {
            fontFamily: 'Rubik',
            fontSize: '13px',
            fontWeight: '500',
            lineHeight: '15px',
        },
        filterText: {
            fontFamily: 'Rubik',
            fontSize: '10px',
            fontWeight: '400',
            lineHeight: '12px',
        },
        filterTitle: {
            fontFamily: 'Lato',
            fontSize: '12px',
            fontWeight: '700',
            lineHeight: '14px',
        },
        tableText: {
            fontFamily: 'Lato',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '17px',
        },
        tableTitle: {
            fontFamily: 'Lato',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '17px',
        },
        tableValue: {
            fontFamily: 'Lato',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '17px',
        },
        loginTitle: {
            fontFamily: 'Rubik',
            fontSize: '52px',
            fontWeight: '700',
            lineHeight: '62px',
        },
        loginText: {
            fontFamily: 'Rubik',
            fontSize: '28px',
            fontWeight: '400',
            lineHeight: '33px',
        },
        loginFormTitle: {
            fontFamily: 'Rubik',
            fontSize: '28px',
            fontWeight: '500',
            lineHeight: '33px',
        },
        formLabel: {
            fontFamily: 'Rubik',
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '28px',
        },
        formTitle: {
            fontFamily: 'Rubik',
            fontSize: '36px',
            fontWeight: '700',
            lineHeight: '43px',
        },
        button: {
            fontFamily: 'Rubik',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '17px',
        }
    }
})
