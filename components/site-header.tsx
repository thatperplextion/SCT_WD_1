'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const rawPathname = usePathname() || '/';
  const pathname = rawPathname.replace(/\/$/,'') || '/';
  const menuId = useId();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('menu-open');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('menu-open');
    };
  }, [mobileOpen]);

  // Add a page-specific class to the body so the entire page can change theme per route
  useEffect(() => {
    const pageClass = pathname === '/' ? 'page-home' : `page-${pathname.replace(/^\//, '').replace(/\//g, '-')}`;
    const known = ['page-home', 'page-about', 'page-contact'];

    known.forEach((c) => document.body.classList.remove(c));
    document.body.classList.add(pageClass);

    return () => {
      document.body.classList.remove(pageClass);
    };
  }, [pathname]);

  return (
    <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''} ${pathname !== '/' ? 'site-header-has-active' : ''}`}>
      <div className="site-header-inner">
        <Link href="/" className="brand">
          Pulse
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const isHovered = hoveredItem === item.label;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-controls={menuId}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen ? (
        <div className="mobile-menu-layer">
          <button
            type="button"
            className="mobile-backdrop"
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
          />

          <div id={menuId} className="mobile-panel" role="dialog" aria-label="Primary navigation menu">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
