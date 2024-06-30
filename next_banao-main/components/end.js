import PropTypes from "prop-types";
import styles from "./end.module.css";

const End = ({ className = "" }) => {
  return (
    <div className={[styles.end, className].join(" ")}>
      <div className={styles.endChild} />
      <div className={styles.endContent}>
        <h1 className={styles.yourHobbyYourContainer}>
          <span>{`Your `}</span>
          <span className={styles.hobby}>Hobby</span>
          <span>{`, Your `}</span>
          <span className={styles.community}>Community...</span>
        </h1>
        <div className={styles.endButtonContainerParent}>
          <div className={styles.endButtonContainer}>
            <div className={styles.endCta}>
              <div className={styles.dividerTop}>
                <div className={styles.getStartedWrapper}>
                  <div className={styles.getStarted}>Get started</div>
                </div>
              </div>
              <div className={styles.wrapperGroup77}>
                <img
                  className={styles.wrapperGroup77Child}
                  loading="lazy"
                  alt=""
                  src="/group-77.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.goToTop}>Go to top (Ctrl+Home)</div>
          </div>
        </div>
      </div>
      <div className={styles.footerDivider}>
        <div className={styles.circleContainer}>
          <img
            className={styles.buttonIcon}
            loading="lazy"
            alt=""
            src="/5820098-1.svg"
          />
        </div>
        <img
          className={styles.dividerBottomIcon}
          loading="lazy"
          alt=""
          src="/5820000-1.svg"
        />
      </div>
    </div>
  );
};

End.propTypes = {
  className: PropTypes.string,
};

export default End;
