import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import { GlobalStyles } from './styles/globalStyled'
import { theme } from './theme/theme'
import { ThemeProvider } from '@mui/system'

export default function RoutesPage() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes>
                <Route path='*' element={<LoginPage />} />
            </Routes>
        </ThemeProvider>
    )
}