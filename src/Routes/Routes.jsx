import { BrowserRouter, Routes as Routers, Route } from "react-router-dom"
import MainPage from "../Pages/MainPage"

const Routes = () => {
    return (
        <BrowserRouter>
            <Routers>
                <Route path="/">
                    <Route exact path="" element={ <MainPage/> } />
                </Route>
            </Routers>
        </BrowserRouter>
    )
}

export default Routes