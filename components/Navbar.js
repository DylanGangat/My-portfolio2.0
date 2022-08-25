import styles from "../styles/components/Navbar.module.scss";
import Link from "next/link";

const Navbar = ({ toggleColorMode, stickyNav }) => {
  return (
    <header className={stickyNav ? "primary-header sticky" : "primary-header"}>
      <div className="container">
        <nav className={styles["main-nav"]}>
          <Link href="/">
            <a className={styles.logo} aria-label="navigation logo">
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
          </Link>
          <ul className={styles["nav-list"]}>
            <li className={styles["theme-toggle"]}>
              <button
                onClick={e => toggleColorMode(e)}
                className="theme-color light-hidden"
                aria-label="light-mode-toggle"
              >
                <svg
                  className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <g data-name="Mail Box">
                    <circle cx="16" cy="16" r="8" />
                    <path d="M16 6a1 1 0 01-1-1V3a1 1 0 012 0v2a1 1 0 01-1 1zM23.78 9.22a1 1 0 01-.71-1.71l1.42-1.41a1 1 0 011.41 1.41l-1.41 1.42a1 1 0 01-.71.29zM29 17h-2a1 1 0 010-2h2a1 1 0 010 2zM25.19 26.19a1 1 0 01-.71-.29l-1.41-1.41a1 1 0 011.41-1.41l1.41 1.41a1 1 0 01-.71 1.71zM16 30a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zM6.81 26.19a1 1 0 01-.71-1.71l1.41-1.41a1 1 0 011.41 1.41L7.51 25.9a1 1 0 01-.7.29zM5 17H3a1 1 0 010-2h2a1 1 0 010 2zM8.22 9.22a1 1 0 01-.71-.29L6.1 7.51A1 1 0 017.51 6.1l1.42 1.41a1 1 0 01-.71 1.71z" />
                  </g>
                </svg>
              </button>

              <button
                onClick={e => toggleColorMode(e)}
                className="theme-color dark-hidden"
                aria-label="dark-mode-toggle"
              >
                <svg
                  className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 125 100"
                >
                  <path
                    d="M85.46 65.33a2 2 0 00-1.89-.85 33.84 33.84 0 01-34.1-49.27 2 2 0 00-2-2.91 37.85 37.85 0 1038.11 55.1 2 2 0 00-.12-2.07z"
                    data-name="Weather, moon, night"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- close container --> */}
    </header>
  );
};

export default Navbar;
