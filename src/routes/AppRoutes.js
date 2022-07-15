import { Route, Switch } from "react-router-dom"
import NhanSu from "../components/NhanSu/NhanSu"

const AppRoutes = (props) => {
    return (
        <>
            <Switch>
                <Route path="/nhansu">
                    <NhanSu />
                </Route>
                <Route path="/" exact>
                    home
                </Route>
                <Route path="*">
                    404 not found
                </Route>
            </Switch>
        </>
    )
}
export default AppRoutes