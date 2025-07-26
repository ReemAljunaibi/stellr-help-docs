---
id: index
title: Dashboard
sidebar_label: Dashboard
---

import { useColorMode } from '@docusaurus/theme-common';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Navigating the Dashboard and Sidebar</h2>

  <p class="body text-gray-dark">
    The Stellr dashboard gives you a snapshot of your activity, tasks, and recent interactions across the platform. The left sidebar offers access to modules based on your permissions.
  </p>

  ### 1. Sidebar Navigation

  <p class="body">
    Use the sidebar to access different modules. Hovering over an icon will reveal its label. Clicking will take you to that module's page.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

    <div class="flex items-center space-x-3">
      <img src={`/icons/events-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Events icon" />
      <span class="body"><strong>Events</strong>: View, manage, and attend organization-wide events.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/institutions-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Institutions icon" />
      <span class="body"><strong>Institutions</strong>: View company profiles, relationship scores, and all recent engagements.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/individuals-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Individuals icon" />
      <span class="body"><strong>Individuals</strong>: View partner profiles, and quickly access internal notes and recent engagement events.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/tasks-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Tasks icon" />
      <span class="body"><strong>Tasks</strong>: View tasks assigned to you, along with deadlines and linked platforms or events.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/groups-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Groups icon" />
      <span class="body"><strong>Groups</strong>: View and manage shared access across internal or external collaborators.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/users-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Users icon" />
      <span class="body"><strong>Users</strong>: Manage user accounts, roles, and permissions.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/security-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Security icon" />
      <span class="body"><strong>Access & Permissions</strong>: Control access at user level by defining roles (Viewer, Member, Admin).</span>
    </div>
  </div>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/dashboard-sidebar.png"
      alt="Dashboard Sidebar Overview"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: Sidebar with modules and hover labels -->

  ### 2. Calendar Overview

  <p class="body">
    At the top of the dashboard, you'll find a compact calendar view. Toggle between <strong>Week</strong>, <strong>Month</strong>, or <strong>Year</strong> views. Click the arrow in the top-right corner to open the full calendar module.
  </p>

  <p class="body">
    Color coding helps distinguish between:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>🔵 Blue</strong>: Events</li>
    <li><strong>🟤 Brown</strong>: Platforms</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/dashboard-calendar.png"
      alt="Dashboard Calendar View"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 3. Recent Institutions

  <p class="body">
    This section shows institutions you've recently interacted with. The cards display each organization's name, score, and engagement trend. Clicking opens the full institution profile.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/dashboard-institutions.png"
      alt="Recent Institutions Panel"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 4. Recent Individuals

  <p class="body">
    Shows a list of people you've engaged with recently. You’ll see their name, title, and associated institution. Clicking opens their individual profile.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/dashboard-individuals.png"
      alt="Recent Individuals Panel"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 5. My Tasks

  <p class="body">
    Displays tasks assigned to you, grouped by related platform or event. You can click each task to jump directly to the parent section.
  </p>

  <div class="bg-gray-light p-4 rounded text-sm text-gray-dark mt-2">
    ✨ <strong>No pending tasks?</strong> You’re all caught up!
  </div>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/dashboard-tasks.png"
      alt="My Tasks Panel"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 6. Upcoming Events

  <p class="body">
    Shows a quick summary of your upcoming events, including the platform they belong to. Clicking takes you to the event detail page.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/dashboard-upcoming-events.png"
      alt="Upcoming Events Panel"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 7. Profile and Sign Out

  <p class="body">
    At the bottom-left of the sidebar, you’ll see your avatar. Click to edit your profile or sign out. Profile customization includes uploading your photo, name, and role.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/dashboard-profile.png"
      alt="Profile and Sign Out"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

</div>