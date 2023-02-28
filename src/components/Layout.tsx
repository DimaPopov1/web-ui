import {Outlet} from "react-router-dom"
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = () => {
    return (
        <main >
            <Header />
            <div className="App">
                <Outlet  />
            </div>
            <Footer/>
        </main>
    )
}
export default Layout