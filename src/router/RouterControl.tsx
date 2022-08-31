import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import useTheme from '../hook/useTheme'
import { styled } from "@mui/material/styles";


const ThemeProvider = styled('div')({
})

const RouterControl = () => {
  const [ theme, switchTheme ] = useTheme()
  return(
    <>
      <ThemeProvider data-theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home switchTheme={switchTheme} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default RouterControl;