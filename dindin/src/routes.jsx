import { ThemeProvider } from '@mui/system'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import MainPage from './pages/main'
import RegisterPage from './pages/register'
import { GlobalStyles } from './styles/globalStyled'
import { theme } from './theme/theme'
import { getItem } from './utils/storage'

function ProtectedRoutes({ redirectTo }) {
  const isAuth = getItem('token')

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />
}

export default function RoutesPage() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="*" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoutes redirectTo="/login" />}>
          <Route path="/main" element={<MainPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
