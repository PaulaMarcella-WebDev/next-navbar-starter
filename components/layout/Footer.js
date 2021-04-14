import Link from "next/link";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  const copyrightText = `© ${new Date().getFullYear()} PaulaMarcella Web Development`;
  return (
    <footer className={styles.footer}>
      <p className={styles.link}>
        <Link href="#">Footer Link</Link>
      </p>
      <p className={styles.link}>
        <Link href="#">Footer Link</Link>
      </p>
      <p>{copyrightText}</p>
    </footer>
  );
};

export default Footer;
