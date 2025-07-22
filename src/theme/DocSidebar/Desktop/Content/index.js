import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useAnnouncementBar,
  useScrollPosition,
} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import {useColorMode} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function useShowAnnouncementBar() {
  const {isActive} = useAnnouncementBar();
  const [showAnnouncementBar, setShowAnnouncementBar] = React.useState(isActive);
  useScrollPosition(
    ({scrollY}) => {
      if (isActive) {
        setShowAnnouncementBar(scrollY === 0);
      }
    },
    [isActive],
  );
  return isActive && showAnnouncementBar;
}

function SidebarItem({item}) {
  const {colorMode} = useColorMode();
  const isDarkTheme = colorMode === 'dark';
  const location = useLocation();

  const icon = item.customProps?.icon;
  const iconPath = icon ? `/icons/${icon}-${isDarkTheme ? 'dark' : 'light'}.svg` : null;

  const currentPath = location.pathname.replace(/\/$/, ''); // Normalize
  const itemPath = (item.href || item.permalink || '').replace(/\/$/, '');
  const isActive = currentPath === itemPath;

  return (
    <li className="menu__list-item">
      <Link
        className={clsx('menu__link', {
          'menu__link--active': isActive,
        })}
        to={item.href || item.permalink}
      >
        {iconPath && (
          <img
            src={iconPath}
            alt=""
            className={styles.sidebarIcon}
            loading="lazy"
          />
        )}
        <span>{item.label}</span>
      </Link>
    </li>
  );
}

function IconizedSidebarItems({items}) {
  return (
    <>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </>
  );
}

export default function DocSidebarDesktopContent({path, sidebar, className}) {
  const showAnnouncementBar = useShowAnnouncementBar();

  return (
    <nav
      aria-label={translate({
        id: 'theme.docs.sidebar.navAriaLabel',
        message: 'Docs sidebar',
      })}
      className={clsx(
        'menu thin-scrollbar',
        styles.menu,
        showAnnouncementBar && styles.menuWithAnnouncementBar,
        className,
      )}
    >
      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
        <IconizedSidebarItems items={sidebar} />
      </ul>
    </nav>
  );
}