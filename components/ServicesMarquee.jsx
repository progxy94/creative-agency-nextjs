'use client';

import styles from '../styles/marquee.module.css';

export default function ServicesMarquee() {
  const services = [
    'BRANDING',
    'GRAPHIC DESIGN',
    'WEB DESIGN',
    'DIGITAL MARKETING',
    'SOCIAL MEDIA MANAGEMENT',
    'VIDEO PRODUCTION',
  ];

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          {/* Original items */}
          {services.map((service, index) => (
            <div key={`original-${index}`} className={styles.marqueeItem}>
              <span className={styles.serviceText}>{service}</span>
              <span className={styles.icon}>★</span>
            </div>
          ))}
          {/* Duplicate items for seamless loop */}
          {services.map((service, index) => (
            <div key={`duplicate-${index}`} className={styles.marqueeItem}>
              <span className={styles.serviceText}>{service}</span>
              <span className={styles.icon}>★</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
