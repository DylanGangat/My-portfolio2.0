import Link from "next/link";
import Head from "next/head";
import styles from "../styles/components/404.module.scss";
import Image from "next/image";
import robot from "/public/images/404.svg";

import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>DG | 404 Error Page</title>
        <meta
          name="description"
          content="Error page for when page is not found"
        />
      </Head>
      <section className={styles["error-page"]}>
        <div className="container flow-content">
          <motion.div
            className={styles.robot}
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Image
              src={robot}
              layout="responsive"
              height="821"
              width="889"
              objectFit="contain"
              alt="robot with a box"
            />
          </motion.div>
          <motion.div
            className="spacer"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div>
              <h1 className={styles.title}>404</h1>
              <p className={styles.title}>Oooops!</p>
              <p className={styles.title}>Page Not Found</p>
            </div>
            <div>
              <p>This page does not exist or was removed!</p>
              <p>We suggest you back to home.</p>
            </div>
            <Link href="/">
              <a className="btn spacer">Back to Home</a>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
