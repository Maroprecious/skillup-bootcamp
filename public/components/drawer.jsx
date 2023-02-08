import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Link from 'next/link';
import {FcMenu} from "react-icons/fc"
import style from "../../styles/drawer.module.css"
import { useModal } from '../context/openmodal.context';
import BasicModal from "./modal";

export default function TemporaryDrawer() {
  const {isModalOpen, setIsModalOpen} = useModal()
  const [state, setState] = React.useState({
    
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <div className= {style.navItems}>
    <div className={style.logo}>
      <img src="/images/logo.svg" />
    </div>
    <div className={style.navList}>
      <p className={style.navlink}>
        <Link href="#1" style={{color: "#000", fontWeight: "300"}}> Contact Us</Link>
      </p>
      <p className={style.navlink}>
        <Link href="#2" style={{color: "#000", fontWeight: "300"}}> Courses</Link>
      </p>
      <p className={style.navlink}>
        <Link href="#" style={{color: "#000", fontWeight: "300"}}> Sign In</Link>
      </p>
    </div>
    <p className={style.navlink} onClick={() => setIsModalOpen(true)} style={{color: "#000", fontWeight: "300"}}>Register</p>
  </div>
    </Box>
  );

  return (
    <>
    <BasicModal open={isModalOpen} setOpen={setIsModalOpen}/>
    <div className={style.menuContainer}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{ minWidth: "0px" }}><FcMenu className={style.menu}/></Button>
          <Drawer
          style={{position: "absolute",top:" 20%"}}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </>
  );
}