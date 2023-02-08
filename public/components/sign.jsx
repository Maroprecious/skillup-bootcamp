import style from "../../styles/sign.module.css";
import { BsCheck} from "react-icons/bs";
import { useModal } from "../context/openmodal.context";
import BasicModal from "./modal";
const Sign = () => {
  const {isModalOpen, setIsModalOpen} = useModal()
  return (
    <>
    <BasicModal open={isModalOpen} setOpen={setIsModalOpen}/>
    <div className={style.signContainer}>
      <div className={style.imgContainer}>
        <img src="/images/boy.jpeg" />
      </div>
      <div className={style.text}>
        <h3 className={style.head}>
          Why you would want to
          <br /> Sign up now.
        </h3>
        <h3 className={style.head2}>
          Why you would want to Sign up now.
        </h3>
        <p style={{marginTop: "-.05rem"}}>
          We provide support and have built a set of tools to
          <br /> Ensure you have a seamless learning experience.
          <br />
          On registration, what do you get?
        </p>
        <div className={style.check}>
          <BsCheck className={style.checked} />
          <p>A class Gmail is created for you</p>
        </div>
        <div className={style.check}>
          <BsCheck className={style.checked} />
          <p>Access to our closed student dashboard</p>
        </div>
        <div className={style.check}>
          <BsCheck className={style.checked} />
          <p>24hours support for questions and inquiries</p>
        </div>
        <div className={style.check}>
          <BsCheck className={style.checked} />
          <p>Access to our slack and discord channels</p>
        </div>
        <button className={style.signBtn} onClick={() => setIsModalOpen(true)}>Sign up now</button>
      </div>
    </div>
    </>
  );
};
export default Sign;
