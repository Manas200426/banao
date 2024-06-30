import PropTypes from "prop-types";
import styles from "./testimonials.module.css";

const Testimonials = ({ className = "" }) => {
  return (
    <section className={[styles.testimonials, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.areYouA}>
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </div>
        <div className={styles.addYourOwn}>Add your own</div>
        <img className={styles.addIcon} alt="" src="/add.svg" />
        <div className={styles.addNewWrapper}>
          <div className={styles.addNew}>Add new</div>
        </div>
      </div>
      <div className={styles.testimonials1}>
        <div className={styles.addCardBackgroundParent}>
          <div className={styles.addCardBackground} />
          <div className={styles.addCardContent}>
            <div className={styles.addParent}>
              <img className={styles.addIcon1} alt="" src="/add-1.svg" />
              <div className={styles.addYourOwnWrapper}>
                <h2 className={styles.addYourOwn1}>Add your own</h2>
              </div>
            </div>
            <div className={styles.areYouA1}>
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </div>
            <div className={styles.addNewButton}>
              <div className={styles.addNew1}>Add new</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
