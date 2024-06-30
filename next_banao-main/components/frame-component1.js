import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const exploreRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = (event) => {
    if (exploreRef.current && !exploreRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className={[styles.navbarWrapper, className].join(" ")}>
      <header className={styles.navbar}>
        <div className={styles.navbarBackground} />
        <div className={styles.logoSearch}>
          <img
            className={styles.hobbycueLogoIcon}
            loading="lazy"
            alt=""
            src="/hobbycue-logo@2x.png"
          />
          <div className={styles.search}>
            <div className={styles.searchbox}>
              <div className={styles.searchInput} />
              <div className={styles.searchHint}>
                <a className={styles.searchHere}>Search here...</a>
              </div>
              <div className={styles.searchIconBgParent}>
                <div className={styles.searchIconBg} />
                <img
                  className={styles.icons8Search1}
                  alt=""
                  src="/icons8-search-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.userActions}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div
                className={styles.exploreParent}
                ref={exploreRef}
                onClick={toggleDropdown}
              >
                <img
                  className={styles.exploreIcon}
                  alt=""
                  src="/explore.svg"
                />
                <div className={styles.exploreName}>
                  <a className={styles.explore}>Explore</a>
                </div>
                <img
                  className={styles.icons8ExpandArrow1}
                  alt=""
                  src="/icons8-expand-arrow-1.svg"
                />
                {dropdownVisible && (
                  <div className={styles.dropdown}>
                    <ul>
                      <li>People-Community</li>
                      <li>Places-Venues</li>
                      <li>Product-Events</li>
                      <li>Product-Store</li>
                      <li>Blogs</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.hobbiesLabelParent}>
                <div className={styles.hobbiesLabel}>
                  <img
                    className={styles.hobbiesIcon}
                    alt=""
                    src="/hobbies.svg"
                  />
                  <div className={styles.hobbies}>
                    <img
                      className={styles.hobbiesChild}
                      alt=""
                      src="/polygon-3.svg"
                    />
                    <img
                      className={styles.hobbiesStarIcon}
                      alt=""
                      src="/hobbies-star.svg"
                    />
                  </div>
                </div>
                <div className={styles.hobbiesName}>
                  <a className={styles.hobbies1}>Hobbies</a>
                </div>
                <img
                  className={styles.icons8ExpandArrow11}
                  alt=""
                  src="/icons8-expand-arrow-1.svg"
                />
              </div>
            </div>
            <div className={styles.authExplore}>
              <img
                className={styles.bookmarkBlack24dp1Icon}
                loading="lazy"
                alt=""
                src="/bookmark-black-24dp-1.svg"
              />
            </div>
            <div className={styles.authExplore1}>
              <img
                className={styles.notificationsBlack24dp1Icon}
                loading="lazy"
                alt=""
                src="/notifications-black-24dp-1.svg"
              />
            </div>
            <div className={styles.authExplore2}>
              <img
                className={styles.product3Icon}
                alt=""
                src="/product-3.svg"
              />
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.signInBgParent}>
                <div className={styles.signInBg} />
                <a className={styles.signIn}>Sign In</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
