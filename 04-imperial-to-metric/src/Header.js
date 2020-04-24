import React from "react";
import styles from "./Header.module.css";

const Header = function Header() {
  return (
    <header className={styles.Header}>
      <h1>Unit Converter</h1>
    </header>
  );
};

export default Header;
