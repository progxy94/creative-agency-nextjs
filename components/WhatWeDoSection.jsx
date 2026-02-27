'use client';

import Image from 'next/image';
import styles from '../styles/whatwedo.module.css';

export default function WhatWeDoSection() {
  const services = [
    {
      id: 1,
      title: 'BRAND BUILDING & STRATEGY.',
      description: 'Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.',
      image: 'https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/working-job-career-casual-showing-SJZWF3N-1024x683.jpg',
      icon: 'https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/Gp-10.png',
      delay: 200,
    },
    {
      id: 2,
      title: 'CREATIVE DIGITAL SOLUTION.',
      description: 'Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.',
      image: 'https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/working-job-career-casual-showing-8GNF7UD-1024x683.jpg',
      icon: 'https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/Gp-10.png',
      delay: 400,
    },
    {
      id: 3,
      title: 'MARKETING & CAMPAIGN.',
      description: 'Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.',
      image: 'https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/group-of-creative-people-working-and-brainstorming-F9J86RY-1024x683.jpg',
      icon: 'https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/Gp-10.png',
      delay: 600,
    },
  ];

  return (
    <section className={styles.whatWeDoSection}>
      <div className="e-con-boxed">
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.iconBadge}>
            <Image
              src="https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/11/2-PNG.png"
              alt="Badge"
              width={80}
              height={80}
            />
          </div>
          <h2 className={styles.sectionTitle}>WHAT WE DO</h2>
          <h1 className={`${styles.mainHeading} elementor-invisible`}>DESIGNING FOR SEAMLESS AND ENJOYABLE INTERACTIONS.</h1>
          <button className="elementor-button elementor-button-link elementor-size-sm elementor-invisible">
            <span>All Services</span>
            <svg viewBox="0 0 512 512" width="16" height="16">
              <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
            </svg>
          </button>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard} style={{ '--delay': `${service.delay}ms` }}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <div className={styles.iconContainer}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
                    height={80}
                    className={styles.cardIcon}
                  />
                </div>
                <div className={styles.divider}></div>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={267}
                className={styles.cardImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
