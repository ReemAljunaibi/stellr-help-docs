---
id: index
title: Profile
sidebar_label: Profile
---

import { useColorMode } from '@docusaurus/theme-common';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Your Profile</h2>

  <p class="body text-gray-dark">
    The <strong>Profile</strong> section lets you personalize your Stellr account. Upload your avatar, update your department, and review group access settings.
  </p>

  ### 1. Edit Profile Information

  <ul class="list-disc pl-6 body">
    <li><strong>Profile Photo:</strong> Click the avatar to upload or change your image.</li>
    <li><strong>Name:</strong> This is how you appear to others across the platform.</li>
    <li><strong>Department:</strong> Add your team, division, or title for easier identification.</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/profile-edit.png"
      alt="Edit Profile Info Screenshot"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: /img/profile-edit.png -->

  ### 2. Access Level

  <p class="body">
    The Access Level section displays which <strong>Groups</strong> you're assigned to.
  </p>

  <ul class="list-disc pl-6 body">
    <li>Admins can add or remove you from groups.</li>
    <li>If no group is listed, your access is limited to default modules.</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/profile-access-groups.png"
      alt="Access Groups Display in Profile"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: /img/profile-access-groups.png -->

  ### 3. Permissions

  <ul class="list-disc pl-6 body">
    <li><strong>Admins:</strong> Can edit all profiles and manage group access.</li>
    <li><strong>Members:</strong> Can edit their own name and department only.</li>
    <li><strong>Viewers:</strong> View-only access (no editing allowed).</li>
  </ul>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    👥 Group access is explained further in the <a href="/groups" class="text-accent-secondary underline">Groups</a> section.
  </div>

</div>

import HelpCenterCTA from '@site/src/components/HelpCenterCTA';

<HelpCenterCTA />