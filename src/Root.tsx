import { lazy, Suspense } from 'react'

import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import { theme } from 'providers/theme'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = lazy(() => import('pages/App'))
const UserProfile = lazy(() => import('pages/UserProfile'))
const Search = lazy(() => import('pages/Search'))

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <BrowserRouter>
          <Suspense fallback='loading...'>
            <Routes>
              <Route path='/' element={<App />}>
                <Route path='/user-profile' element={<UserProfile />} />
                  {/* /asset */}
                  {/* /explore */}
                <Route path='/search' element={<Search />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
export default Root
