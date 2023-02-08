import style from "../../styles/hero.module.css";
import Link from "next/link";
const Hero = () => {
  return (
    <div className={style.heroBack}>
      <div className={style.texts}>
        <h2>Launch your software Development journey<br/> In <span style={{color: "#C36E54"}}>3 months</span></h2>
        <p className={style.para1}>
          Become a part of the top 1% companies are constantly on the lookout
          for.<br/> In this boot camp, we focus only on the important bits you need
          to<br/> Land your first job, launch your startup journey.
        </p>
        <p className={style.para2}>
          Become a part of the top 1% companies are constantly<br/> on the lookout
          for. In this boot camp, we focus only<br/> on the important bits you need
          to Land your first job,<br/> launch your startup journey.
        </p>
        <p className={style.para3}>
          Become a part of the top 1% companies are<br/> constantly on the lookout
          for. In this boot camp,<br/> we focus only on the important bits you need
          to<br/> Land your first job, launch your startup journey.
        </p>
        <div className={style.lines}>
        <img src="/images/line.png" />
        </div>
        <Link className={style.call} href="#" style={{color: "#fff"}}> Call Us</Link>
      </div>
      <div className={style.image}>
      <img src="/images/n.png"/>
      </div>
    </div>
  );
};
export default Hero;
