import style from "../../styles/dev.module.css";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Development = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };
  return (
    <>
    <div className={style.devArea} id="2">
      <Carousel responsive={responsive} style={{width: "100%"}}>
        <div className={style.front}>
          <span
            className={style.span}
            style={{ color: "#fff", background: "#7CD8EB" }}
          >
            <MdDashboard />
          </span>
          <h6 className={style.head}>Frontend Development</h6>
          <p className={style.para}>
            Master the basics of software development and be a part of the top
            1%. This is all you need to master HTML/CSS, JavaScript, React,
            Next.js, and a whole lot more. This, is a project-based bouquet that
            will land, you your dream job.
          </p>
          <button
            style={{ background: "#7CD8EB", color: "#fff" }}
            className={style.link}
          >
            Learn more
          </button>
        </div>
        <div className={style.back}>
          <span
            className={style.span}
            style={{ color: "#fff", background: "#965EDD" }}
          >
            <MdDashboard />
          </span>
          <h6 className={style.head}>Backend Development</h6>
          <p className={style.para}>
            Be the login boss. Create the architecture that powers the front
            end of any application. You’ll learn the standards. Best practices,
            and all you need to be a certified backend engineer.
          </p>
          <button
            style={{ background: "#965EDD", color: "#fff" }}
            className={style.link}
          >
            Learn more
          </button>
        </div>
        <div className={style.fullstack}>
          <span
            className={style.span}
            style={{ color: "#fff", background: "#F1C473" }}
          >
            <MdDashboard />
          </span>
          <h6 className={style.head}>Fullstack Development</h6>
          <p className={style.para}>
            The stack to make you ready to launch your startup, build your own
            product and apply for senior developer roles. You’ll learn all it
            takes to build the front end of any application, (Web and Mobile
            Application). On completion,<br/> you will be ready to be your own boss.
          </p>
          <button
            style={{ background: "#F1C473", color: "#fff" }}
            className={style.link}
          >
            Learn more
          </button>
        </div>
        <div className={style.fullstack}>
          <span
            className={style.span}
            style={{ color: "#fff", background: "#7CD8EB" }}
          >
            <MdDashboard />
          </span>
          <h6 className={style.head}>Mobile App Development</h6>
          <p className={style.para}>
            The stack to make you ready to launch your startup, build your own
            product and apply for senior developer roles. You’ll learn all it
            takes to build the front end of any application, (Web and Mobile
            Application). On completion, you will be ready to be your own boss.
          </p>
          <button
            style={{ background: "#7CD8EB", color: "#fff" }}
            className={style.link}
          >
            Learn more
          </button>
        </div>
      </Carousel>
    </div>
    </>
  );
};

export default Development;
