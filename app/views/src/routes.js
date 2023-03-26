import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Medicines from "./pages/Medicines";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
​
function Routes() {
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                //Layout and sidebar can now receive props
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/medicines" component={Medicines} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/add" element={<AddMedicine />} />
                        <Route path="/medicines/:id" element={<Medicine />} />
                    </Switch>
             </Layout>
            )}/>
        </BrowserRouter>
    )
}
​
export default Routes;