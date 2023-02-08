import Hero from "@/public/components/hero";
import style from "../styles/homepage.module.css";
import Info from "@/public/components/info";
import Sign from "@/public/components/sign";
import Layout from "@/public/components/layout";

const HomePage = () => {
  return (
    <Layout>
      <div className={style.background}>
        <Hero />
      </div>
      <Info />
      <Sign/>
    </Layout>
  );
};
export default HomePage;
