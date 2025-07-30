---
id: access-permissions
title: Access & Permissions
sidebar_label: Access & Permissions
---

import { useColorMode } from '@docusaurus/theme-common';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Understanding Access & Permissions</h2>

  <p class="body text-gray-dark">
    Stellr provides layered access control by combining <strong>User Roles</strong> and <strong>Visibility Settings</strong> (Public, Private, or Group-based). This ensures that sensitive data is shared only with the right people, at the right time.
  </p>

  ### 1. User Roles

  <p class="body">
    Each user is assigned one of the following roles:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Admin:</strong> Full access. Can invite users, approve drafts, manage groups, and edit all content.</li>
    <li><strong>Member:</strong> Can create and edit their own content but cannot approve or manage others.</li>
    <li><strong>Viewer:</strong> Read-only access to shared or public content. Cannot create or edit anything.</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/access-roles-permissions.png"
      alt="User Roles and Permissions Table"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 2. Access Levels (Visibility)

  <p class="body">
    When creating content — like platforms, events, notes, or tasks — users can define who can access it:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Public:</strong> Visible to all users in the workspace</li>
    <li><strong>Private:</strong> Only visible to the person who created it</li>
    <li><strong>By Group:</strong> Only visible to selected groups of users</li>
  </ul>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    🔐 <strong>Note:</strong> This visibility is separate from user roles. Even Admins cannot view Private or Group-specific content unless they are part of the selected group.
  </div>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/access-level-selector.png"
      alt="Access Level Selector in Form"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 3. How Roles & Access Levels Work Together

  <p class="body">
    Permissions are layered in Stellr:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Role:</strong> Defines what actions you can perform (create, edit, approve)</li>
    <li><strong>Access Level:</strong> Defines who can see what you’ve created</li>
  </ul>

  <p class="body mt-2">
    For example, a <strong>Member</strong> can create an event visible only to the <code>RJJ Group</code>. An <strong>Admin</strong> not in that group won’t see it unless added to the same group.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/access-role-combo-example.png"
      alt="Roles and Access Working Together"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 4. Where Permissions Apply

  <ul class="list-disc pl-6 body">
    <li><strong>Platforms:</strong> Access control is applied when approving and viewing platforms.</li>
    <li><strong>Events:</strong> Visibility set at creation — link to <a href="/events" class="text-accent-secondary underline">Events</a>.</li>
    <li><strong>Institutions & Individuals:</strong> Managed through <a href="/institutions" class="text-accent-secondary underline">Institutions</a> and <a href="/individuals" class="text-accent-secondary underline">Individuals</a>.</li>
    <li><strong>Notes:</strong> Visibility set using group mentions — see <a href="/notes" class="text-accent-secondary underline">Notes</a>.</li>
    <li><strong>Tasks:</strong> Visibility inherits from their parent (platform, event, or individual).</li>
  </ul>

  ### 5. Tips for Admins

  <ul class="list-disc pl-6 body">
    <li>Use <strong>Group-based access</strong> to simplify visibility across modules</li>
    <li>Periodically audit <a href="/users" class="text-accent-secondary underline">Users</a> and <a href="/groups" class="text-accent-secondary underline">Groups</a></li>
    <li>Encourage users to check their <a href="/profile" class="text-accent-secondary underline">Profile</a> for group memberships</li>
  </ul>

  ### 6. Related Pages

  <ul class="list-disc pl-6 body">
    <li><a href="/users" class="text-accent-secondary underline">Users</a></li>
    <li><a href="/groups" class="text-accent-secondary underline">Groups</a></li>
    <li><a href="/notes" class="text-accent-secondary underline">Notes</a></li>
    <li><a href="/profile" class="text-accent-secondary underline">Profile</a></li>
  </ul>

</div>