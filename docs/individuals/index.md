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
      <img src={`/icons/edit-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Edit/Delete icon" />
      <span class="body"><strong>Edit / Delete</strong>: Modify contact details or remove outdated entries.</span>
    </div>
    <div class="flex items-center space-x-3">
      <img src={`/icons/filter-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Filter icon" />
      <span class="body"><strong>Search & Filter</strong>: Find people by name, institution, or title.</span>
    </div>
  </div>

  ### 2. Adding a New Individual

  <p class="body">
    The form to create a new individual is structured into the following sections. All required fields are marked with an asterisk (<code>*</code>).
  </p>

  #### 2.1 Photo and Personal Details

  <p class="body">
    Upload a profile photo and fill in personal attributes such as full name, nationality (you can add multiple), date of birth, and other demographic details.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img src="/img/individual-photo-details.png" alt="Individual Personal Details" style={{ borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.05)', maxWidth: '100%', marginTop: '1rem' }} />
  </div>

  #### 2.2 Professional Details

  <p class="body">
    Define the individual’s professional roles. Select their primary position and choose an associated institution from a dropdown. If the institution isn’t listed, it must first be <a href="/institutions" class="text-accent-secondary underline">added in the Institutions section</a>.
    You can add multiple clusters (via <em>+ Cluster</em>) and define multiple roles using the <em>+ Position</em> button.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img src="/img/individual-professional-details.png" alt="Professional Details" style={{ borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.05)', maxWidth: '100%', marginTop: '1rem' }} />
  </div>

  #### 2.3 Access Settings

  <p class="body">
    Access determines who can view this individual's profile:
  </p>
  <ul class="list-disc pl-6 body">
    <li><strong>Private</strong>: Only the creator can view the record</li>
    <li><strong>Public</strong>: Anyone on the platform can view</li>
    <li><strong>Group-based</strong>: Visible only to specific <a href="/groups" class="text-accent-secondary underline">Groups</a> selected from the dropdown</li>
  </ul>

  <p class="body mt-2">
    Only Admins can create groups, but all users can assign visibility based on them.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img src="/img/individual-access-settings.png" alt="Access Settings Section" style={{ borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.05)', maxWidth: '100%', marginTop: '1rem' }} />
  </div>

  #### 2.4 Communication Preferences

  <p class="body">
    Specify how this individual prefers to be contacted. Add email, phone, LinkedIn, website, or other social media handles.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img src="/img/individual-communication.png" alt="Communication Section" style={{ borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.05)', maxWidth: '100%', marginTop: '1rem' }} />
  </div>

  #### 2.5 Focal Point

  <p class="body">
    The focal point is the main person responsible for managing the relationship with this individual. This can be:
  </p>
  <ul class="list-disc pl-6 body">
    <li>A registered user (selectable via dropdown)</li>
    <li>A manually typed name (for external focal points)</li>
  </ul>
  <p class="body">You can assign multiple focal points if needed.</p>

  <div style={{ textAlign: 'center' }}>
    <img src="/img/individual-focal-point.png" alt="Focal Point Section" style={{ borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.05)', maxWidth: '100%', marginTop: '1rem' }} />
  </div>

  #### 2.6 Media Scan

  <p class="body">
    This section allows you to record whether a media scan was conducted on the individual:
  </p>
  <ul class="list-disc pl-6 body">
    <li>Select a <strong>Media Scan Status</strong> (dropdown)</li>
    <li>Attach documents or reports</li>
    <li>Add notes and the date of the scan</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img src="/img/individual-media-scan.png" alt="Media Scan Section" style={{ borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.05)', maxWidth: '100%', marginTop: '1rem' }} />
  </div>


  ### 3. Profile View & Notes

  <p class="body">
    Once created, the individual’s profile page contains:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Contact Information</strong>: Name, email, role, etc.</li>
    <li><strong>Affiliated Institution</strong>: Clickable link to parent organization</li>
    <li><strong>Internal Notes</strong>: Use notes to record updates, meeting summaries, or internal comments</li>
    <li><strong>Engagement Log</strong>: A table showing recent interactions</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img src="/img/individual-profile-overview.png" alt="Individual Detail Page" style={{ borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.05)', maxWidth: '100%', marginTop: '1rem' }} />
  </div>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    ✏️ Learn more about how notes work in the <a href="/notes" class="text-accent-secondary underline">Notes</a> section.
  </div>

  ### 4. Related Features

  <ul class="list-disc pl-6 body">
    <li><strong><a href="/institutions" class="text-accent-secondary underline">Institutions</a>:</strong> Individuals must be linked to an existing institution</li>
    <li><strong><a href="/notes" class="text-accent-secondary underline">Notes</a>:</strong> Log updates with rich tagging & group visibility</li>
    <li><strong><a href="/groups" class="text-accent-secondary underline">Groups</a>:</strong> Control who can see notes using group mentions</li>
  </ul>

</div>