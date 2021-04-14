import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/MobileNavbar.module.scss";
import NavLinks from "../../../data/nav-links";
import iconSet from "../../../icons/selection.json";
import DropdownLinks from "./DropdownLinks";
import IcomoonReact from "icomoon-react";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = ({ isOpen }) => {
  const variants = {
    hidden: {
      height: 0,
      transition: {
        duration: 0.4
      }
    },
    visible: {
      height: "70vh",
      transition: {
        duration: 0.4,
        when: "beforeChildren"
      }
    }
  };
  const childVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  };

  const [dropdownOpen, setDropdownOpen] = useState({});
  const toggleDropdown = (title) => {
    setDropdownOpen({ [title]: !dropdownOpen[title] });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobilenav"
          className={styles.nav}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
        >
          {NavLinks.map((link) => {
            if (link.type === "dropdown") {
              return (
                <motion.div
                  key={link.title}
                  className={styles.dropdown}
                  variants={childVariants}
                >
                  <span
                    className={styles.dropdowntitle}
                    onClick={() => toggleDropdown(link.title)}
                  >
                    {link.title}
                    <IcomoonReact
                      iconSet={iconSet}
                      color="#111"
                      size={13}
                      icon="chevron-down"
                    />
                  </span>
                  {dropdownOpen[link.title] && (
                    <DropdownLinks sublinks={link.sublinks} styles={styles} />
                  )}
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  className={styles.dropdown}
                  key={link.title}
                  variants={childVariants}
                >
                  <Link href={`/${link.href}`}>{link.title}</Link>
                </motion.div>
              );
            }
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
