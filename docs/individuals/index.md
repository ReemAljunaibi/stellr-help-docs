---
id: index
title: Individuals
sidebar_label: Individuals
---

import { useColorMode } from '@docusaurus/theme-common';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Managing Individuals</h2>

  <p class="body text-gray-dark">
    The <strong>Individuals</strong> module helps you track external contacts and stakeholders affiliated with institutions. Each person can be searched, viewed, and updated easily.
  </p>

  ### 1. What You Can Do

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    <div class="flex items-center space-x-3">
      <img src={`/icons/individuals-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Individuals icon" />
      <span class="body"><strong>View Individuals</strong>: Browse contact profiles linked to institutions.</span>
    </div>
    <div class="flex items-center space-x-3">
      <img src={`/icons/start-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Add icon" />
      <span class="body"><strong>Add Individual</strong>: Create a new contact and connect them to an institution.</span>
    </div>
    <div class="flex items-center space-x-3">
      <img src={`/icons/edit-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Edit icon" />
      <span class="body"><strong>Edit / Delete</strong>: Modify contact details or remove outdated entries.</span>
    </div>
    <div class="flex items-center space-x-3">
      <img src={`/icons/groups-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Search icon" />
      <span class="body"><strong>Search & Filter</strong>: Find people by name, institution, or title.</span>
    </div>
  </div>

  ### 2. Adding a New Individual

  <ol class="list-decimal pl-6 body space-y-2">
    <li>Navigate to <strong>Individuals</strong> from the sidebar.</li>
    <li>Click <strong>+ Add New Individual</strong>.</li>
    <li>Fill in the form fields:</li>
  </ol>

  <ul class="list-disc pl-10 body">
    <li>Full Name *</li>
    <li>Institution (dropdown – required)</li>
    <li>Title / Role</li>
    <li>Email</li>
    <li>Phone Number</li>
    <li>LinkedIn or Website</li>
  </ul>

  <p class="body mt-2">Click <strong>Create</strong> to save the contact.</p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/individual-create-form.png"
      alt="Add Individual Form"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    ⚠️ If the institution doesn’t appear in the dropdown, it must first be added in the <a href="/docs/institutions/index" class="text-accent-secondary underline">Institutions</a> section.
  </div>

  ### 3. Profile View & Notes

  <p class="body">
    Each individual has a profile page with:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Contact Information</strong>: Name, email, role, etc.</li>
    <li><strong>Affiliated Institution</strong>: Clickable link to parent organization</li>
    <li><strong>Internal Notes</strong>: Use notes to record updates, meeting summaries, or internal comments</li>
    <li><strong>Engagement Log</strong>: A table showing recent interactions with this individual</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/individual-profile-overview.png"
      alt="Individual Detail Page"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    ✏️ Learn more about how notes work in the <a href="/docs/notes/index" class="text-accent-secondary underline">Notes</a> section.
  </div>

  ### 4. Access & Permissions

  <ul class="list-disc pl-6 body">
    <li><strong>Admins</strong>: Full edit/delete access to all contacts</li>
    <li><strong>Members</strong>: Can add and manage their own contacts</li>
    <li><strong>Viewers</strong>: Read-only view (if permitted)</li>
  </ul>

  ### 5. Related Features

  <ul class="list-disc pl-6 body">
    <li><strong>Institutions:</strong> Individuals must be linked to an existing institution</li>
    <li><strong>Notes:</strong> Log updates with rich tagging & group visibility</li>
    <li><strong>Groups:</strong> Control who can see notes using group mentions</li>
  </ul>

</div>