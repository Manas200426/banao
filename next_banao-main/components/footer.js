import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <div className={styles.frameParent}>
            <div className={styles.hobbycueParent}>
              <b className={styles.hobbycue}>Hobbycue</b>
              <a className={styles.aboutUs}>About Us</a>
            </div>
            <div className={styles.howDoIParent}>
              <b className={styles.howDoI}>How Do I</b>
              <a className={styles.signUp}>Sign Up</a>
            </div>
            <div className={styles.quickLinksParent}>
              <b className={styles.quickLinks}>Quick Links</b>
              <a className={styles.listings}>Listings</a>
            </div>
            <div className={styles.socialMediaParent}>
              <b className={styles.socialMedia}>Social Media</b>
              <div className={styles.socialMediaIcons}>
                <img
                  className={styles.socialMediaIconsChild}
                  loading="lazy"
                  alt=""
                  src="/group-60.svg"
                />
                <img
                  className={styles.socialMediaIconsItem}
                  loading="lazy"
                  alt=""
                  src="/group-61.svg"
                />
                <img
                  className={styles.socialMediaIconsInner}
                  loading="lazy"
                  alt=""
                  src="/group-62.svg"
                />
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-63.svg"
                />
                <img
                  className={styles.socialMediaIconsChild1}
                  loading="lazy"
                  alt=""
                  src="/group-59.svg"
                />
                <img
                  className={styles.socialMediaIconsChild2}
                  loading="lazy"
                  alt=""
                  src="/group-58.svg"
                />
                <img
                  className={styles.socialMediaIconsChild3}
                  loading="lazy"
                  alt=""
                  src="/group-57.svg"
                />
                <img
                  className={styles.socialMediaIconsChild4}
                  alt=""
                  src="/group-56.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.ourServicesParent}>
              <a className={styles.ourServices}>Our Services</a>
              <a className={styles.workWithUs}>Work with Us</a>
              <a className={styles.faq}>FAQ</a>
              <a className={styles.contactUs}>Contact Us</a>
            </div>
            <div className={styles.addAListingParent}>
              <a className={styles.addAListing}>Add a Listing</a>
              <a className={styles.claimListing}>Claim Listing</a>
              <a className={styles.postAQuery}>Post a Query</a>
              <a className={styles.addABlog}>Add a Blog Post</a>
              <a className={styles.otherQueries}>Other Queries</a>
            </div>
            <div className={styles.blogPostsParent}>
              <a className={styles.blogPosts}>Blog Posts</a>
              <a className={styles.shopStore}>Shop / Store</a>
              <a className={styles.community}>Community</a>
            </div>
            <div className={styles.inviteContentWrapper}>
              <div className={styles.inviteContent}>
                <b className={styles.inviteFriends}>Invite Friends</b>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.emailInputContainer}>
                    <div className={styles.emailId}>Email ID</div>
                  </div>
                  <div className={styles.inviteButtonContainer}>
                    <div className={styles.inviteButtonContainerChild} />
                    <div className={styles.invite}>Invite</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.purpleCuesPrivate}>
          © Purple Cues Private Limited
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
