---
id: index
title: Platforms
sidebar_label: Platforms
---

import { useColorMode } from '@docusaurus/theme-common';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Understanding Platforms</h2>

  <p class="body text-gray-dark">
    A <strong>Platform</strong> is a container that helps group related <strong>events</strong> under a shared theme such as a campaign, public initiative, or collaboration.
  </p>

  <p class="body text-gray-dark mt-2">
    Examples include initiatives like <em>Formula 1</em>, <em>Expo 2020</em>, or <em>Davos</em>. Platforms help unify efforts and visualize cross-departmental work.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/platform-tag-example.png"
      alt="Platform tag with example initiatives"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: /img/platform-tag-example.png -->

  ### 1. What You Can Do

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

    <div class="flex items-center space-x-3">
      <img src={`/icons/platforms-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Platform icon" />
      <span class="body"><strong>Create a Platform</strong>: Group events under a shared purpose or theme.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/edit-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Edit icon" />
      <span class="body"><strong>Edit Platform</strong>: Update name, description, or access level.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/approve-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Approve icon" />
      <span class="body"><strong>Approve Drafts</strong>: Admins can review and approve new platform submissions.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/tasks-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Tasks icon" />
      <span class="body"><strong>Manage Tasks</strong>: Assign and track tasks linked to the platform.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/calendar-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Calendar icon" />
      <span class="body"><strong>View in Calendar</strong>: Tasks linked to a platform appear in the dashboard calendar.</span>
    </div>

  </div>

  ### 2. Creating a Platform

  <ol class="list-decimal pl-6 body">
    <li>Go to the <strong>Platforms</strong> section from the sidebar.</li>
    <li>Click <strong>+ Add New Platform</strong>.</li>
    <li>
      Fill in the platform form:
      <div class="pl-4">
        <ul class="list-disc">
          <li><strong>Name</strong> *</li>
          <li><strong>Description</strong> *</li>
          <li><strong>Tags</strong></li>
          <li><strong>Map Pin</strong></li>
          <li><strong>Access Level</strong>: Private / Public / Group-based</li>
        </ul>
      </div>
    </li>
    <li>Click <strong>Save</strong>. The platform will appear in the Drafts tab.</li>
    <li>Only Admins can approve and publish the platform to make it visible across the organization.</li>
  </ol>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    🔐 Want to learn how Access Levels work? See the <a href="/docs/access-permissions/access-permissions" class="text-accent-secondary underline">Access & Permissions</a> page.
  </div>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/platform-form-empty.png"
      alt="Empty platform creation form"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: /img/platform-form-empty.png -->

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/platform-form-filled.png"
      alt="Filled platform creation form"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: /img/platform-form-filled.png -->

  ### 3. Drafts vs Approved Platforms

  <p class="body">
    Platforms begin as drafts. Only Admins can move them to the <strong>Approved</strong> tab to make them live.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/platform-tabbar-drafts-approved.png"
      alt="Drafts and approved platform tabs"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: /img/platform-tabbar-drafts-approved.png -->

  ### 4. Editing a Platform

  <p class="body">
    To edit a platform, click the <strong>✏️ pen icon</strong> next to its name. Once you've made changes, click <strong>✔ Save</strong> or <strong>✖ Cancel</strong>.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/platform-edit-mode.png"
      alt="Editing a platform"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: /img/platform-edit-mode.png -->

  ### 5. Platform Overview Page

  <p class="body">
    Once approved, each platform has its own page showing:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Overview:</strong> Platform name, description, tags, and map view</li>
    <li><strong>Associated Events:</strong> Events linked during creation</li>
    <li><strong>Tasks:</strong> Kanban board showing all related tasks</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/platform-overview-page.png"
      alt="Platform overview page"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: /img/platform-overview-page.png -->

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    📌 Tasks can be updated directly from this page. For more info, visit the <a href="/docs/tasks/index" class="text-accent-secondary underline">Tasks Section</a>.
  </div>

  ### 6. Related Features

  <ul class="list-disc pl-6 body">
    <li><strong>Tasks Module</strong>: Manage platform tasks across views.</li>
    <li><strong>Groups</strong>: Used to control who can access a platform.</li>
    <li><strong>Access Permissions</strong>: Roles and approval flows explained in full in the Access & Permissions section.</li>
  </ul>

</div>