import PropTypes from "prop-types";
import styles from "./testimonials1.module.css";

const Testimonials1 = ({ className = "" }) => {
  return (
    <section className={[styles.testimonials, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.quoteParent}>
          <img
            className={styles.quoteIcon}
            loading="lazy"
            alt=""
            src="/quote@2x.png"
          />
          <div className={styles.testimonialsWrapper}>
            <h2 className={styles.testimonials1}>Testimonials</h2>
          </div>
        </div>
        <div className={styles.testimonialDescription}>
          <div className={styles.inAFast}>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </div>
          <div className={styles.audioTestimonial}>
            <div className={styles.audioTrack}>
              <div className={styles.audioTrackChild} />
              <div className={styles.playButton}>
                <div className={styles.playBackground} />
                <img
                  className={styles.playArrowBlack24dp1Icon}
                  loading="lazy"
                  alt=""
                  src="/play-arrow-black-24dp-1.svg"
                />
              </div>
              <div className={styles.micblackdp} />
              <img
                className={styles.audioTrackItem}
                loading="lazy"
                alt=""
                src="/ellipse-26@2x.png"
              />
              <img
                className={styles.micBlack24dp1Icon}
                alt=""
                src="/mic-black-24dp-1.svg"
              />
              <div className={styles.audioDuration}>
                <div className={styles.audioProgress}>
                  <div className={styles.audioProgressChild} />
                </div>
                <div className={styles.div}>0:00</div>
              </div>
            </div>
            <div className={styles.shubhaNagarajanParent}>
              <img
                className={styles.shubhaNagarajanIcon}
                loading="lazy"
                alt=""
                src="/ellipse-12@2x.png"
              />
              <div className={styles.speakerInfo}>
                <div className={styles.shubhaNagarajanGroup}>
                  <div className={styles.shubhaNagarajan}>Shubha Nagarajan</div>
                  <div className={styles.classicalDancer}>Classical Dancer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonials1.propTypes = {
  className: PropTypes.string,
};

export default Testimonials1;
