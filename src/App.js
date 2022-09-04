import {theme} from "./theme/Theme";
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter} from "react-router-dom";
import AllRoutes from "./auth/AllRoutesConfig";
import {useStyles} from "./factory/StyleFactory";
import {appStyle} from "./views/style/appStyle";

function App() {
    // const classes = useStyles(coursesViewStyle);

    return (
      <ThemeProvider theme={theme}>
          <div className="App">
            <BrowserRouter>
                <AllRoutes/>
            </BrowserRouter>
          </div>
      </ThemeProvider>
  );
}

export default App;
