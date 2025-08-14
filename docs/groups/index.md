---
id: index
title: Groups
sidebar_label: Groups
---

import { useColorMode } from '@docusaurus/theme-common';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Managing Groups</h2>

  <p class="body text-gray-dark">
    The <strong>Groups</strong> module allows Admins to organize users into logical sets for access control, visibility settings, and internal collaboration. Groups are used throughout Stellr to define who can view or edit content across modules.
  </p>

  ### 1. What You Can Do

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

    <div class="flex items-center space-x-3">
      <img src={`/icons/view-${useColorMode().colorMode}.svg`} class="inline-icon" alt="View Groups icon" />
      <span class="body"><strong>View Groups</strong>: Browse all created groups and their members.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/groups-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Groups icon" />
      <span class="body"><strong>Create New Groups</strong>: Add a new group by giving it a name.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/edit-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Edit icon" />
      <span class="body"><strong>Edit Group Name</strong>: Update the title of the group if needed.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/invite-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Assign Users icon" />
      <span class="body"><strong>Assign Users</strong>: Add or remove users to define group membership.</span>
    </div>

  </div>

  ### 2. Creating a Group

  <ol class="list-decimal pl-6 body space-y-1 mt-4">
    <li>Go to the <strong>Groups</strong> tab from the sidebar.</li>
    <li>Click <strong>+ Add New Group</strong>.</li>
    <li>Enter a <strong>Group Name</strong> and click <strong>Create</strong>.</li>
    <li>Use the <strong>Assign Users</strong> panel to add team members to the group.</li>
  </ol>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    ⚠️ You must be an <strong>Admin</strong> to create or manage groups.
  </div>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/groups-create-form.png"
      alt="Create Group Form"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: /img/groups-create-form.png -->

  ### 3. Where Groups Are Used

  <ul class="list-disc pl-6 body mt-2">
    <li><strong>Access Levels:</strong> Limit who can view or interact with content</li>
    <li><strong>Notes:</strong> Post notes visible only to specific groups</li>
    <li><strong>Platforms & Institutions:</strong> Control visibility of drafts or internal data</li>
    <li><strong>Users:</strong> View a user’s group memberships via the <a href="/users" class="text-accent-secondary underline">Users</a> section</li>
  </ul>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    🔗 Related: Learn more in the <a href="/access-permissions" class="text-accent-secondary underline">Access & Permissions</a> guide.
  </div>

</div>

import HelpCenterCTA from '@site/src/components/HelpCenterCTA';

<HelpCenterCTA />