---
id: index
title: Users
sidebar_label: Users
---

import { useColorMode } from '@docusaurus/theme-common';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Managing Users</h2>

  <p class="body text-gray-dark">
    The <strong>Users</strong> section is where Admins can manage team members, assign access levels, and control visibility through groups. This page helps you invite, view, and organize user roles within Stellr.
  </p>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    ⚠️ <strong>Access:</strong> Only Admins can view and manage the Users section.
  </div>

  ### 1. What You Can Do

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

    <div class="flex items-center space-x-3">
      <img src={`/icons/users-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Users icon" />
      <span class="body"><strong>View All Users</strong>: See who has access to your organization workspace.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/invite-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Invite icon" />
      <span class="body"><strong>Invite Users</strong>: Add new teammates via email address.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/groups-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Groups icon" />
      <span class="body"><strong>View Group Memberships</strong>: Quickly see what groups each user belongs to.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/security-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Security icon" />
      <span class="body"><strong>Check Access Levels</strong>: See if a user is an Admin, Member, or Viewer.</span>
    </div>

  </div>

  ### 2. Inviting a User

  <ol class="list-decimal pl-6 body mt-4 space-y-2">
    <li>Click the <strong>“Invite User”</strong> button on the Users page.</li>
    <li>Enter the user's email address.</li>
    <li>Assign them to one or more groups if applicable.</li>
    <li>Click <strong>Send Invite</strong>.</li>
  </ol>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/users-invite-form.png"
      alt="User Invitation Form"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    🔐 <strong>Email Restrictions:</strong> Invitations can only be sent to emails with your organization’s approved domain. If you don’t see the domain you need, contact your system administrator.
  </div>

  ### 3. Group Access and Membership

  <p class="body">
    Each user can belong to one or more <strong>Groups</strong>. These determine what platforms, events, or notes the user can view or contribute to. 
  </p>

  <p class="body mt-2">
    You can view assigned groups in the <strong>Access Level</strong> section of each user row.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/users-group-view.png"
      alt="Group memberships listed next to user"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    👥 Want to learn more about setting up groups and permissions? Visit the <a href="/groups" class="text-accent-secondary underline">Groups</a> section.
  </div>

  ### 4. Related Features

  <ul class="list-disc pl-6 body">
    <li><strong>Groups Module:</strong> Define visibility rules and access across features.</li>
    <li><strong>Profile Settings:</strong> Each user can update their display name and department via the <a href="/profile" class="text-accent-secondary underline">Profile Page</a>.</li>
    <li><strong>Access Permissions:</strong> Learn more in the <a href="/access-permissions" class="text-accent-secondary underline">Access & Permissions</a> section.</li>
  </ul>

</div>