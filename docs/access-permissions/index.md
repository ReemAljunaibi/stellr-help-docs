---
id: access-permissions
title: Access & Permissions
sidebar_label: Access & Permissions
---

import { useColorMode } from '@docusaurus/theme-common';
import MoreIcon from '@site/static/icons/more-light.svg';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Understanding Access & Permissions</h2>

  <p class="body text-gray-dark">
    Stellr uses a simple, layered permission system to help you control what team members can see and do. There are three main layers: <strong>User Roles</strong>, <strong>Content Access</strong>, and <strong>Group Permissions</strong>.
  </p>

  ### 1. User Roles

  <p class="body">
    Every user is either an:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Admin:</strong> Full access. Can manage users, assign groups, edit everything, and approve content.</li>
    <li><strong>Member:</strong> Can only see or edit content they’ve been added to through group access.</li>
  </ul>

  <p class="body">
    You choose the user’s role when inviting them to the workspace, and you can change it anytime later from the Users page. Just click the <MoreIcon className="icon-inline-text" /> <strong>three dots</strong> next to their name.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/user-details-actions.png"
      alt="Changing a user's role from the 3-dot menu"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 2. Content Access (Public or Restricted)

  <p class="body">
    When creating content — like <strong>individuals, institutions, events, or platforms</strong> — you’ll choose who can access it:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Public:</strong> Shared with everyone in your workspace.</li>
    <li><strong>Restricted:</strong> Shared only with specific groups of users.</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/individual-access-settings--filled.png"
      alt="Restricted access setting with group selector"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  <p class="body">
    If you choose <strong>Restricted</strong>, you’ll be asked to select a group. If no group is selected, the content will only be visible to Admins.
  </p>

  ### 3. Group Access (Read or Write)

  <p class="body">
    You control visibility and permissions by adding people to groups. Each group member can be set to:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Read:</strong> Can view content shared with the group.</li>
    <li><strong>Write:</strong> Can create or edit content for that group.</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/users-group-access.png"
      alt="Adding a user to a group with read/write access"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  <p class="body">
    You can manage this anytime from the <strong>Users</strong> page by clicking the <MoreIcon className="icon-inline-text" /> <strong>three dots</strong> next to a person’s name and selecting “Manage group access.”
  </p>

  ### 4. Real-Life Examples

  <p class="body">
    Here’s how it all works in action:
  </p>

  <table class="table-auto w-full text-sm mt-4">
    <thead>
      <tr class="bg-gray-light">
        <th class="p-2 text-left">User</th>
        <th class="p-2 text-left">Role</th>
        <th class="p-2 text-left">Group</th>
        <th class="p-2 text-left">Access</th>
        <th class="p-2 text-left">Permission</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-2">Fatima</td>
        <td class="p-2">Admin</td>
        <td class="p-2">Media</td>
        <td class="p-2">All content</td>
        <td class="p-2">Write</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="p-2">Khaled</td>
        <td class="p-2">Member</td>
        <td class="p-2">Media</td>
        <td class="p-2">Only Media content</td>
        <td class="p-2">Read</td>
      </tr>
      <tr>
        <td class="p-2">Salma</td>
        <td class="p-2">Member</td>
        <td class="p-2">Finance</td>
        <td class="p-2">Only Finance content</td>
        <td class="p-2">Write</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="p-2">Omar</td>
        <td class="p-2">Member</td>
        <td class="p-2">–</td>
        <td class="p-2">Public content only</td>
        <td class="p-2">–</td>
      </tr>
    </tbody>
  </table>

  ### 5. Admin Tips

  <ul class="list-disc pl-6 body">
    <li>Use <strong>groups</strong> to simplify visibility control.</li>
    <li>Assign people to the right groups with the right permissions.</li>
    <li>Clean up unused groups and review access regularly from the <a href="/users" class="text-accent-secondary underline">Users</a> page.</li>
  </ul>

  ### 6. Related Pages

  <ul class="list-disc pl-6 body">
    <li><a href="/users" class="text-accent-secondary underline">Users</a></li>
    <li><a href="/groups" class="text-accent-secondary underline">Groups</a></li>
    <li><a href="/profile" class="text-accent-secondary underline">Profile</a></li>
  </ul>

</div>

import HelpCenterCTA from '@site/src/components/HelpCenterCTA';

<HelpCenterCTA />