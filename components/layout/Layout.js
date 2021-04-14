import styles from "../../styles/Layout.module.scss";
import MobileNavbar from "./navigation/MobileNavbar";
import DesktopNavbar from "./navigation/DesktopNavbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
