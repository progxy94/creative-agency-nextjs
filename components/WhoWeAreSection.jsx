'use client';

import Image from 'next/image';
import styles from '../styles/whoweare.module.css';

export default function WhoWeAreSection() {
  return (
    <section className={styles.whoWeAreSection}>
      <div className="e-con-boxed">
        <div className={styles.sectionContent}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <div className={styles.iconBadge}>
              <Image
                src="https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/2-PNG.png"
                alt="Badge"
                width={80}
                height={80}
              />
            </div>
            <h2 className={styles.sectionTitle}>WHO WE ARE</h2>
            <h1 className={styles.mainHeading}>CREATIVITY MEETS STRATEGY.</h1>
            <p className={styles.description}>
              With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions
              that elevate your brand and captivate your audience.
            </p>

            {/* Features */}
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <Image
                  src="https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/creative-agency-icon-pack-2RAJRWN.png"
                  alt="Experience"
                  width={80}
                  height={80}
                />
                <h4>OVER 10 YEARS OF EXPERIENCE</h4>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.featureItem}>
                <Image
                  src="https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/Icon-2.png"
                  alt="Trusted"
                  width={80}
                  height={80}
                />
                <h4>TRUSTED BY GLOBAL BRANDS</h4>
              </div>
            </div>
          </div>

          {/* Right Content - Image and Progress Bars */}
          <div className={styles.rightContent}>
            <div className={styles.imageContainer}>
              <Image
                src="https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/Png-1-1.png"
                alt="Decorative"
                width={350}
                height={385}
                className={styles.decorativeImage}
              />
            </div>

            <Image
              src="https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/smiling-young-african-woman-working-online-with-a-3M7W2SX-1024x683.jpg"
              alt="Team working"
              width={400}
              height={267}
              className={styles.mainImage}
            />

            {/* Progress Bars */}
            <div className={styles.progressBars}>
              <ProgressBar title="SUCCESSFUL CAMPAIGN LAUNCHES" value={95} />
              <ProgressBar title="INNOVATIVE DESIGN" value={85} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressBar({ title, value }) {
  const styles_pb = require('../styles/whoweare.module.css');

  return (
    <div className={`${styles_pb.progressItem} elementor-invisible`}>
      <div className={styles_pb.progressLabel}>
        <span className={styles_pb.progressTitle}>{title}</span>
      </div>
      <div className={styles_pb.progressBarContainer}>
        <div className={styles_pb.progressFill} style={{ '--progress': `${value}%` }}>
          <span className={styles_pb.progressValue}>{value}%</span>
        </div>
      </div>
    </div>
  );
}
