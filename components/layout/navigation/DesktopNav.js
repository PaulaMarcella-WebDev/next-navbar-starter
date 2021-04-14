import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/DesktopNavbar.module.scss";
import NavLinks from "../../../data/nav-links";
import iconSet from "../../../icons/selection.json";
import DropdownLinks from "./DropdownLinks";

import IcomoonReact from "icomoon-react"; // remove iconlist for production

const DesktopNav = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.nav}>
      {NavLinks.map((link) => {
        if (link.type === "dropdown") {
          return (
            <div key={link.title} className={styles.dropdown}>
              <span className={styles.dropdowntitle}>
                {link.title}
                <IcomoonReact
                  iconSet={iconSet}
                  color="#111"
                  size={13}
                  icon="chevron-down"
                />
              </span>
              <DropdownLinks sublinks={link.sublinks} styles={styles} />
            </div>
          );
        } else {
          return (
            <div className={styles.dropdown} key={link.title}>
              <Link href={`/${link.href}`}>{link.title}</Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default DesktopNav;
