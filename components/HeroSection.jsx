'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/hero.module.css';

export default function HeroSection() {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    media: 0,
  });

  useEffect(() => {
    // Animate counters when component mounts
    const animateCounter = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounters((prev) => ({ ...prev, [key]: target }));
          clearInterval(interval);
        } else {
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 16);
    };

    animateCounter(500, 'clients');
    animateCounter(125, 'projects');
    animateCounter(450, 'media');
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className="e-con-boxed">
        <div className={styles.heroContent}>
          {/* Left Content */}
          <div className={styles.heroText}>
            <h1 className={`${styles.mainTitle} elementor-invisible`}>CREATIVE AGENCY</h1>
            <div className={styles.heroStats}>
              <div className={styles.statItem + ' elementor-invisible'}>
                <div className={styles.counterNumber}>{counters.clients}+</div>
                <h5>HAPPY CLIENT</h5>
              </div>
              <div className={styles.divider}></div>

              <div className={styles.statItem + ' elementor-invisible'}>
                <div className={styles.counterNumber}>{counters.projects}+</div>
                <h5>PROJECT DONE</h5>
              </div>
              <div className={styles.divider}></div>

              <div className={styles.statItem + ' elementor-invisible'}>
                <div className={styles.counterNumber}>{counters.media}+</div>
                <h5>MEDIA FEATURED</h5>
              </div>
            </div>
          </div>

          {/* Right Content with Images */}
          <div className={styles.heroImages}>
            <Image
              src="https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/short-haired-girl-in-good-mood-listening-to-song-i-BXEP4P5-2-1-e1736261077207.png"
              alt="Girl listening to song"
              width={400}
              height={400}
              className={`${styles.mainImage} elementor-invisible`}
              priority
            />
          </div>
        </div>

        {/* Team Images Section */}
        <div className={styles.teamSection}>
          <div className={styles.teamHeader}>
            <div className={styles.dividerHorizontal}></div>
            <h6>THE EXPERT TEAM BRINGS A CREATIVITY TO EVERY PROJECT.</h6>
          </div>

          <div className={styles.teamGrid}>
            <Image
              src="https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/pleased-to-meet-you-smart-attractive-redhead-man-w-G6AMV2J.jpg"
              alt="Team member 1"
              width={300}
              height={300}
              className={styles.teamImage}
            />
            <Image
              src="https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/waist-up-shot-of-charming-female-freelance-journal-9QUQDSC.jpg"
              alt="Team member 2"
              width={300}
              height={300}
              className={styles.teamImage}
            />
            <Image
              src="https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/horizontal-shot-of-good-looking-funny-and-happy-ma-X5RMJTP.jpg"
              alt="Team member 3"
              width={300}
              height={300}
              className={styles.teamImage}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <p>Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.</p>
          <button className="elementor-button elementor-button-link elementor-size-sm">
            <span>Get Started</span>
            <svg viewBox="0 0 512 512" width="16" height="16">
              <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
            </svg>
          </button>

          <div className={styles.videoButton}>
            <a href="https://www.youtube.com/embed/VhBl3dHT5SY" aria-label="Play video">
              <svg viewBox="0 0 24 24" width="48" height="48">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
