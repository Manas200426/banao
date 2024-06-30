import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  const [isJoinIn, setIsJoinIn] = useState(false);


  const toggleJoinIn = () => {
    setIsJoinIn(!isJoinIn);
  };

  return (
    <section className={[styles.homeScreenWrapper, className].join(" ")}>
      <form className={styles.homeScreen}>
        <div className={styles.homeScreenChild} />
        <div className={styles.sloganActions}>
          <div className={styles.slogan}>
            <h1 className={styles.exploreYourHobbyContainer}>
              <span className={styles.exploreYour}>Explore your</span>
              <span className={styles.hobby}> hobby</span>
              <span className={styles.or}>{` or `}</span>
              <span className={styles.passion}>passion</span>
            </h1>
            <div className={styles.signInDescription}>
              <div className={styles.signInToInteract}>
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform. Your hobby may
                be about visual or performing arts, sports, games, gardening,
                model making, cooking, indoor or outdoor activities…
              </div>
              <div className={styles.expertSeller}>
                <div className={styles.ifYouAre}>
                  If you are an expert or a seller, you can Add your Listing and
                  promote yourself, your students, products, services or events.
                  Hop on your hobbyhorse and enjoy the ride.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <div className={styles.authOptions}>
              <div className={styles.signinjoinin}>
                <div className={styles.signInParent}>
                  <div
                    className={`${styles.signIn} ${
                      !isJoinIn ? styles.active : styles.inactive
                    }`}
                    onClick={() => setIsJoinIn(false)}
                  >
                    Sign In
                  </div>
                  <div className={styles.signInButtonBg} />
                </div>
                <div className={styles.joinInParent}>
                  <div
                    className={`${styles.joinIn} ${
                      isJoinIn ? styles.active : styles.inactive
                    }`}
                    onClick={toggleJoinIn}
                  >
                    Join In
                  </div>
                  <div className={styles.frameChild} />
                </div>
              </div>
              <div className={styles.externalAuth}>
                <div className={styles.googleFacebook}>
                  <div className={styles.loginWithOtherAccounts}>
                    <img
                      className={styles.googleIcon}
                      alt=""
                      src="/google.svg"
                    />
                    <div className={styles.continueWithGoogle}>
                      Continue with Google
                    </div>
                  </div>
                  <div className={styles.loginWithOtherAccounts1}>
                    <img
                      className={styles.facebookIcon}
                      alt=""
                      src="/facebook.svg"
                    />
                    <div className={styles.continueWithFacebook}>
                      Continue with Facebook
                    </div>
                  </div>
                </div>
                <div className={styles.connectWithSeparator}>
                  <div className={styles.connectWithSeparatorInner}>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.orConnectWith}>Or connect with</div>
                  <div className={styles.connectWithSeparatorChild}>
                    <div className={styles.frameInner} />
                  </div>
                </div>
                <div className={styles.googleFacebook1}>
                  <div className={styles.inputFields}>
                    <div className={styles.email}>Email</div>
                  </div>
                  <div className={styles.component7}>
                    <div className={styles.password}>Password</div>
                    <img
                      className={styles.passwordIcon}
                      alt=""
                      src="/password.svg"
                    />
                  </div>
                  {isJoinIn && (
                    <>
                      <div className={styles.passwordStrength}>
                        Password strength
                      </div>
                      <div className={styles.terms}>
                        By continuing, you agree to our Terms of Service and
                        Privacy Policy
                      </div>
                      <button className={styles.agreeAndContinue}>
                        Agree and Continue
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rememberForgot}>
          <div className={styles.rememberPassword}>
            <div className={styles.remember}>
              <img
                className={styles.spaceIcon}
                loading="lazy"
                alt=""
                src="/5793404-1.svg"
              />
              <img
                className={styles.spaceIcon1}
                loading="lazy"
                alt=""
                src="/5793401-1.svg"
              />
            </div>
          </div>
          {!isJoinIn && (
            <div className={styles.forgot}>
              <div className={styles.forgotElements}>
                <div className={styles.rememberMe}>
                  <div className={styles.checkbox}>
                    <div className={styles.checkboxBg} />
                  </div>
                  <div className={styles.rememberMe1}>Remember me</div>
                </div>
                <div className={styles.forgotPassword}>
                  <img
                    className={styles.lockBlack24dp1Icon}
                    alt=""
                    src="/lock-black-24dp-1.svg"
                  />
                  <div className={styles.forgotPassword1}>Forgot password?</div>
                </div>
              </div>
              <div className={styles.buttons}>
                <div className={styles.continue}>Continue</div>
              </div>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
