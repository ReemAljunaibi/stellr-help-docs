import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a72'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'fac'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '4fe'),
            routes: [
              {
                path: '/access-permissions/',
                component: ComponentCreator('/access-permissions/', '518'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contact/',
                component: ComponentCreator('/contact/', '671'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dashboard/',
                component: ComponentCreator('/dashboard/', '274'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/email-templates/',
                component: ComponentCreator('/email-templates/', 'eeb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/email-templates/email-template-builder',
                component: ComponentCreator('/email-templates/email-template-builder', 'd99'),
                exact: true
              },
              {
                path: '/events/',
                component: ComponentCreator('/events/', 'c1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started/',
                component: ComponentCreator('/getting-started/', 'e2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/groups/',
                component: ComponentCreator('/groups/', 'e72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/individuals/',
                component: ComponentCreator('/individuals/', 'd63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/institutions/',
                component: ComponentCreator('/institutions/', '36b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/platforms/',
                component: ComponentCreator('/platforms/', 'dac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/profile/',
                component: ComponentCreator('/profile/', 'd56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/scoring/',
                component: ComponentCreator('/scoring/', '48a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/surveys/',
                component: ComponentCreator('/surveys/', '7f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tasks/',
                component: ComponentCreator('/tasks/', 'c00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/users/',
                component: ComponentCreator('/users/', '887'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '87e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
