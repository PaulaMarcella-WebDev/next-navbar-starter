import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/DesktopNavbar.module.scss";
import DesktopNav from "./DesktopNav.js";

const DesktopNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navcontainer}>
        <Link href="/">
          <a>
            <img className={styles.logo} src="/logo/logo.svg" alt="KVN Logo" />
          </a>
        </Link>
      </div>
      <DesktopNav />
    </nav>
  );
};

export default DesktopNavbar;
