import React from "react";

import styles from "../styles";
import { ethereumLogo } from "../assets";

const Loader = ({ title }) => {
  return (
    <div className={styles.loader}>
      <img
        src={ethereumLogo}
        alt="ethereum logo"
        className={styles.loaderImg}
      />
      {/* <svg width="178" height="176" viewBox="0 0 178 176" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M160.41 104.843C136.516 143.145 95.9953 160.999 69.9055 144.723C43.8157 128.447 42.0362 84.2025 65.9309 45.9012C89.8256 7.59994 130.346 -10.2548 156.436 6.02165C182.526 22.2981 184.305 66.542 160.41 104.843Z" fill="#ffcf00"/>
<path d="M111.843 130.099C87.9479 168.4 47.4275 186.255 21.3377 169.978C-4.75212 153.702 -6.53161 109.458 17.3631 71.1567C41.2578 32.8554 81.7782 15.0007 107.868 31.2771C133.958 47.5535 135.737 91.7975 111.843 130.099Z" fill="#35D07F"/>
</svg> */}
      <p className={styles.loaderText}>{title}</p>
    </div>
  );
};

export default Loader;