import Link from "next/link";
const DropdownLinks = ({ sublinks, styles }) => {
  return (
    <ul className={styles.navlinks}>
      {sublinks &&
        sublinks.map((sublink) => (
          <li className={styles.navlink} key={sublink.title}>
            <Link href={`/${sublink.href}`}>{sublink.title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default DropdownLinks;
