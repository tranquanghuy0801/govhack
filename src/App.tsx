import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
import Form from "components/Form";
import { SnackbarProvider } from "notistack";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Root = lazy(() => import("pages/index"));
const SearcherDashboard = lazy(() => import("pages/SearcherDashboard"));

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <BrowserRouter>
          <Suspense fallback="loading...">
            <Routes>
              <Route path="/" element={<Root />}>
                <Route path="searcher" element={<SearcherDashboard />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
export default App;
