import { Route, Switch } from "react-router-dom"
import Home from "../components/Home/Home"
import Login from "../components/Login/Login"
import NhanSu from "../components/NhanSu/NhanSu"
import BoardAmin from '../components/BoardAdmin'
import BoardUser from '../components/BoardUser'
const AppRoutes = (props) => {
    return (
        <>
            <Switch>
                <Route path="/dang-nhap">
                    <Login />
                </Route>
                <Route path="/admin" component={BoardAmin} />
                <Route path="/nhansu">
                    <NhanSu />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="*">
                    404 not found
                </Route>
            </Switch>
        </>
    )
}
export default AppRoutes