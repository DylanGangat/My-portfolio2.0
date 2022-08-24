import styles from "../styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className="main-footer spacer">
      <div className="container">
        <div className={styles["footer-nav"]}>
          <a
            href="index.html"
            className={styles.logo}
            aria-label="navigation logo"
          >
            <svg
              className={styles.svg}
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.6136 15.4091H38C37.5114 10.7386 33.2727 7.40909 27.7727 7.40909C21.5 7.40909 16.4091 11.7273 16.4091 19.4091C16.4091 26.7727 21.0227 31.3182 27.8182 31.3182C33.9091 31.3182 38.2727 27.5909 38.2727 21.2273V18H27.9545V22.5H32.1818C32.125 24.5227 30.6932 25.8182 27.8636 25.8182C24.5909 25.8182 22.9091 23.4091 22.9091 19.3182C22.9091 15.2841 24.7273 12.9091 27.9091 12.9091C29.8864 12.9091 31.2273 13.8182 31.6136 15.4091Z"
                fill="#101414"
              />
              <path
                d="M10.4545 31C17.5455 31 22.0455 26.6364 22.0455 19.3636C22.0455 12.0909 17.5455 7.72727 10.3636 7.72727H1.5V31H10.4545ZM7.81818 25.6364V13.0909H10.0455C13.6818 13.0909 15.6818 14.5 15.6818 19.3636C15.6818 24.2273 13.6818 25.6364 10.2273 25.6364H7.81818Z"
                fill="#101414"
              />
            </svg>
          </a>
          <ul className={styles.socials}>
            <li>
              <a
                className={styles.anchor}
                aria-label="instagram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/dylangangat/"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className={styles.anchor}
                aria-label="github"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/DylanGangat"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <a
          className="top-of-site-link"
          data-visible="false"
          href="#top-of-site"
        >
          <i className="fas fa-arrow-circle-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
