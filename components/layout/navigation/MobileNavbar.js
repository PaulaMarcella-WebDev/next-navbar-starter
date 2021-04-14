import styles from "../../../styles/MobileNavbar.module.scss";
import { useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav.js";
import { Squash as Hamburger } from "hamburger-react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navcontainer}>
        <Link href="/">
          <a>
            <img className={styles.logo} src="/logo/logo.svg" alt="KVN Logo" />
          </a>
        </Link>
        <div className={styles.hamburger}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} rounded />
        </div>
      </div>
      {isOpen && <MobileNav isOpen={isOpen} />}
    </nav>
  );
};

export default MobileNavbar;
