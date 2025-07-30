import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '8e1'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'aff'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '3a2'),
            routes: [
              {
                path: '/access-permissions/',
                component: ComponentCreator('/access-permissions/', '518'),
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
                path: '/notes/',
                component: ComponentCreator('/notes/', 'fe0'),
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
