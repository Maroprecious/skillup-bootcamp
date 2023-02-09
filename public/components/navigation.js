import style from "../../styles/nav.module.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from "next/link";
import SmallNav from "./smallnav";
import TemporaryDrawer from "./drawer"
import { useModal } from "../context/openmodal.context";
import BasicModal from "./modal";

const Navigation = () => {
  const matches = useMediaQuery('(min-width: 801px)')
  const {isModalOpen, setIsModalOpen} = useModal()
  return (
    <>
    <BasicModal open={isModalOpen} setOpen={setIsModalOpen}/>
     <SmallNav/>
    {!matches ? <TemporaryDrawer /> : <>
    <div className={style.nav}>
    <div className= {style.navItems}>
      <div className={style.logo}>
       <Link href="/"> <img src="/images/logo.svg" /></Link>
      </div>
      <div className={style.navList}>
        <p className={style.navlink}>
          <Link href="#1" style={{color: "#000", fontWeight: "300"}}> Contact Us</Link>
        </p>
        <p className={style.navlink}>
          <Link href="#2" style={{color: "#000", fontWeight: "300"}}> Courses</Link>
        </p>
        <p className={style.navlink}>
          <Link href="#3" style={{color: "#000", fontWeight: "300"}}> Sign In</Link>
        </p>
      </div>
      <button className={style.regBtn} onClick={() => setIsModalOpen(true)}>Register</button>
    </div>
  </div>
    </>}
    </>
  );
};
export default Navigation;
