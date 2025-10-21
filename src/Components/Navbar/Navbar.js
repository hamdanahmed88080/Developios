import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.bold}>DEVEL</span>
          <span className={styles.logoIcon}>✔️</span>
          <span className={styles.bold}>OPIOS</span>
        </div>

        <ul className={styles.navLinks}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>

          <li className={styles.dropdown}>
            <a href="#">
              Solutions <span className={styles.arrow}>▼</span>
            </a>
            <ul className={styles.dropdownMenu}>
              <li>
                <a href="#">Solution 1</a>
              </li>
              <li>
                <a href="#">Solution 2</a>
              </li>
              <li>
                <a href="#">Solution 3</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className={styles.ctaButton}>
          <a href="#">FREE CRO AUDIT</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
