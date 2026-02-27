'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="e-con-boxed">
        <div className={styles.headerContent}>
          {/* Logo */}
          <div className={styles.logo}>
            <Image
              src="https://pai.nomadenstudio.com/aurelia/wp-content/uploads/sites/6/2024/12/Logo.png"
              alt="Aurelia Logo"
              width={512}
              height={160}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <ul className="ekit-nav-menu-one-page-no">
              <li>
                <a href="#" className="ekit-menu-nav-link active">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="ekit-menu-nav-link">
                  About Us
                </a>
              </li>
              <li className={styles.dropdown}>
                <a href="#" className="ekit-menu-nav-link">
                  Our Services
                  <i className="icon-down-arrow1">▼</i>
                </a>
                <ul className={styles.submenu}>
                  <li>
                    <a href="#">Single Service</a>
                  </li>
                </ul>
              </li>
              <li className={styles.dropdown}>
                <a href="#" className="ekit-menu-nav-link">
                  Portfolio
                  <i className="icon-down-arrow1">▼</i>
                </a>
                <ul className={styles.submenu}>
                  <li>
                    <a href="#">Portfolio Detail</a>
                  </li>
                </ul>
              </li>
              <li className={styles.dropdown}>
                <a href="#" className="ekit-menu-nav-link">
                  Pages
                  <i className="icon-down-arrow1">▼</i>
                </a>
                <ul className={styles.submenu}>
                  <li>
                    <a href="#">Our Experts</a>
                  </li>
                  <li>
                    <a href="#">Pricing Plan</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Coming Soon</a>
                  </li>
                  <li>
                    <a href="#">404</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="ekit-menu-nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Phone Contact - Desktop Only */}
          <div className={styles.phoneContact}>
            <svg viewBox="0 0 512 512" width="20" height="20">
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
            </svg>
            <div>
              <h5>PHONE NUMBER</h5>
              <p>+ 43 879 5673 9876</p>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className={styles.mobileNav}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
