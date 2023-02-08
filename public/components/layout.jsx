import style from "../../styles/layout.module.css"
import Navigation from "./navigation";
import Footer from "./footer";
const Layout = ({children}) => {
    return(
        <div className={style.layoutContainer}>
        <Navigation/>
        <div>{children}</div>
        <Footer/>
        </div>
    )
}
export default Layout;