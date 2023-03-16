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
            100: '#FAFAFA',
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
            fontSize: '2.25rem',
            fontWeight: '700',
            lineHeight: '2.6875rem',
        },
        resumeValue: {
            fontFamily: 'Rubik',
            fontSize: '0.8125rem',
            fontWeight: '500',
            lineHeight: '0.9375rem',
        },
        resumeTitle: {
            fontFamily: 'Rubik',
            fontSize: '1.125rem',
            fontWeight: '700',
            lineHeight: '1.3125rem',
        },
        resumeText: {
            fontFamily: 'Rubik',
            fontSize: '0.8125rem',
            fontWeight: '500',
            lineHeight: '0.9375rem',
        },
        filterText: {
            fontFamily: 'Rubik',
            fontSize: '0.625rem',
            fontWeight: '400',
            lineHeight: '0.75rem',
        },
        filterTitle: {
            fontFamily: 'Lato',
            fontSize: '0.9375rem',
            fontWeight: '700',
            lineHeight: '0.875rem',
        },
        tableText: {
            fontFamily: 'Lato',
            fontSize: '0.875rem',
            fontWeight: '400',
            lineHeight: '1.0625rem',
        },
        tableTitle: {
            fontFamily: 'Lato',
            fontSize: '0.875rem',
            fontWeight: '700',
            lineHeight: '1.0625rem',
        },
        loginTitle: {
            fontFamily: 'Rubik',
            fontSize: '3.25rem',
            fontWeight: '700',
            lineHeight: '3.875rem',
        },
        loginText: {
            fontFamily: 'Rubik',
            fontSize: '1.75rem',
            fontWeight: '400',
            lineHeight: '2.0625rem',
        },
        loginFormTitle: {
            fontFamily: 'Rubik',
            fontSize: '1.75rem',
            fontWeight: '500',
            lineHeight: '2.0625rem',
        },
        formLabel: {
            fontFamily: 'Rubik',
            fontSize: '1.125rem',
            fontWeight: '500',
            lineHeight: '1.3125rem',
        },
        formTitle: {
            fontFamily: 'Rubik',
            fontSize: '2.25rem',
            fontWeight: '700',
            lineHeight: '2.6875rem',
        },
        button: {
            fontFamily: 'Rubik',
            fontSize: '0.875rem',
            fontWeight: '700',
            lineHeight: '1.0625rem',
        },
        deleteText: {
            fontFamily: 'Rubik',
            fontSize: '0.625rem',
            fontWeight: '300',
            lineHeight: '0.75rem',
        },
        deleteButton: {
            fontFamily: 'Rubik',
            fontSize: '0.5625rem',
            fontWeight: '500',
            lineHeight: '0.6875rem',
        }
    }
})
