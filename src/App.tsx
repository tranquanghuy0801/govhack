import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Map } from "./component/Map/Map";

const Root = lazy(() => import('pages/index'))
const SearcherDashboard = lazy(() => import('pages/SearcherDashboard'))

const theme = createTheme()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <BrowserRouter>
          <Suspense fallback='loading...'>
            <Routes>
              <Route path='/' element={<Root />}>
                <Route path='searcher' element={<SearcherDashboard />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
export default App
