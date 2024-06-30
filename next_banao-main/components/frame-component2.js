import GroupComponent from "./group-component";
import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.feature1Wrapper, className].join(" ")}>
      <div className={styles.feature1}>
        <div className={styles.feature1Child} />
        <div className={styles.featureIconsParent}>
          <div className={styles.featureIcons}>
            <GroupComponent
              className="prople"
              groupsBlack24dp11="/groups-black-24dp-1-1.svg"
              people="People"
              findATeacherCoachOrExpert="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
              connect="Connect"
            />
            <GroupComponent
              groupsBlack24dp11="/location-on-black-24dp-1.svg"
              people="Place"
              findATeacherCoachOrExpert="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
              connect="Meet up"
              propGap="32px"
            />
          </div>
          <div className={styles.frameParent}>
            <GroupComponent
              groupsBlack24dp11="/shopping-basket-black-24dp-2-1.svg"
              people="Product"
              findATeacherCoachOrExpert="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
              connect="Get it"
              propGap="32px"
            />
            <GroupComponent
              groupsBlack24dp11="/event-available-black-24dp-2.svg"
              people="Program"
              findATeacherCoachOrExpert="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
              connect="Attend"
              propGap="59px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
