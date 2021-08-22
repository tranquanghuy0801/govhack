import { Suspense } from 'react' // lazy, 

import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import { theme } from 'providers/theme'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from 'pages/App'
import UserProfile from 'pages/UserProfile'
import Search from 'pages/Search'

// const App = lazy(() => import('pages/App'))
// const UserProfile = lazy(() => import('pages/UserProfile'))
// const Search = lazy(() => import('pages/Search'))

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
