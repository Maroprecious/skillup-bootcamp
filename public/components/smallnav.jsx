import style from "../../styles/mobilenav.module.css"
const SmallNav = () => {
    return(
        <div className={style.SmallNavContainer}>
        <div className={style.logo}>
        <img src="/images/logo.svg"/>
        </div>
        </div>
    )
}
export default SmallNav;