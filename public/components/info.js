import style from "../../styles/info.module.css"
import Development from "./development";
import {BiLeftArrowAlt} from "react-icons/bi";
import {BiRightArrowAlt} from "react-icons/bi"

const Info = () => {
    return(
        <div className={style.infoBack}>
        <div className={style.textBtn}>
        <h2>The best platform to learn<br/> software development</h2>
        <div className={style.btns}>
        <span className={style.span1}><BiLeftArrowAlt/></span>
        <span className={style.span}><BiRightArrowAlt style={{fontWeight: "900"}}/></span>
        </div>
        </div>
        <Development/>
        </div>
    )
}
export default Info;