import style from "../../styles/footer.module.css";
import Data from "../footer-data";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.emailContainer}>
        <h3>Stay Informed. Sign up to our newsletter</h3>
        <p>Personalized newsletter. No spam. No BS!</p>
        <form className={style.form}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
          <button>Sign up</button>
        </form>
      </div>
      <div className={style.foot}>
        <div className={style.footInfo}>
          <div className={style.footLogo}>
            <img src="/images/logo.svg" />
          </div>
          <div className={style.footData} >
            {Data.map(({ header, home, contact, blog, faq }) => (
              <div className={style.list} id="1">
                <h3>{header}</h3>
                <p>{home === 'skillupbootcampng@gmail.com' ? <a href='mailto:skillupbootcampng@gmail.com' style={{color: "#000"}}> skillupbootcampng@gmail.com </a> : home}</p>
                <p>{contact === "08145405006" ? <a href='tel:+2348145405006' style={{color: "#000"}}>08145405006</a> : contact}</p>
                <p>{blog}</p>
                <p>{faq}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
