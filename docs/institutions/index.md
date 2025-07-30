---
id: index
title: Institutions
sidebar_label: Institutions
---

import { useColorMode } from '@docusaurus/theme-common';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Managing Institutions</h2>

  <p class="body text-gray-dark">
    The <strong>Institutions</strong> module gives you a centralized view of all the organizations you're tracking, collaborating with, or evaluating. From partner profiles to engagement scores, this module helps keep your institutional data clean, connected, and insightful.
  </p>

  ### 1. What You Can Do

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

    <div class="flex items-center space-x-3">
      <img src={`/icons/institutions-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Institutions icon" />
      <span class="body"><strong>View Institutions</strong>: Browse all approved or draft organizations in one place.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/start-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Add icon" />
      <span class="body"><strong>Add Institution</strong>: Submit a new institution with key details for approval.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/edit-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Edit/Delete icon" />
      <span class="body"><strong>Edit / Delete</strong>: Modify or remove records through the 3-dot menu.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/filter-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Filter icon" />
      <span class="body"><strong>Filter</strong>: Refine by sector, stage, engagement score, or assigned individuals.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/approve-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Approve icon" />
      <span class="body"><strong>Approve Institutions</strong>: Admins can publish drafts for full visibility.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/scoring-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Scoring icon" />
      <span class="body"><strong>Score Relationships</strong>: Evaluate institutions using a stage-based scorecard. <a href="/scoring" class="text-accent-secondary underline">Learn more</a>.</span>
    </div>

  </div>

  ### 2. Drafts vs Approved

  <p class="body">
    Institutions can either be:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Drafts:</strong> Pending Admin review and approval</li>
    <li><strong>Approved:</strong> Published and visible to all users</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/institution-status-tabs.png"
      alt="Draft vs Approved Tabs"
      style={{ borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.05)', maxWidth: '100%', marginTop: '1rem' }}
    />
  </div>

  ### 3. Adding an Institution

  <ol class="list-decimal pl-6 body">
    <li>Navigate to the <a href="/institutions" class="text-accent-secondary underline">Institutions</a> section from the sidebar.</li>
    <li>Click <strong>+ Add New Institution</strong>.</li>
    <li>Fill in all required fields <code>*</code>:</li>
  </ol>

  <ul class="list-disc pl-10 mt-2 body">
    <li>Official Name *</li>
    <li>Headquarters Address *</li>
    <li>Regional Office *</li>
    <li>Sector</li>
    <li>Stage of Engagement</li>
    <li>Geographic Scope</li>
    <li>Tags, Website, LinkedIn</li>
    <li>Access Settings (Public/Private)</li>
  </ul>

  <ol start="4" class="list-decimal pl-6 body">
    <li>Click <strong>Save</strong> or <strong>Submit for Review</strong> depending on your role.</li>
    <li>Admins will find pending entries in the Drafts tab.</li>
  </ol>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/institution-create-form.png"
      alt="Institution Creation Form"
      style={{ borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.05)', maxWidth: '100%', marginTop: '1rem' }}
    />
  </div>

  <!-- 📹 Video: /videos/institution.mov -->

  ### 4. Engagement Score

  <p class="body">
    Institutions progress through various stages of engagement such as Introduction, Qualification, Collaboration, and Evolution. Each stage has its own scoring criteria to evaluate relationship strength and relevance.
  </p>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    🧠 Learn how scoring works for each stage in the <a href="/scoring" class="text-accent-secondary underline">Scoring</a> section.
  </div>

  ### 5. Institution Detail View

  <p class="body">
    Click on any institution to open its dedicated profile. This includes:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Overview:</strong> Name, location, sector, size, access, tags</li>
    <li><strong>Score History:</strong> Engagement trends visualized</li>
    <li><strong><a href="/individuals" class="text-accent-secondary underline">Individuals</a>:</strong> Linked collaborators or representatives</li>
    <li><strong>Engagements:</strong> Timeline of activity or events</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/institution-profile-overview.png"
      alt="Institution Detail Page"
      style={{ borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.05)', maxWidth: '100%', marginTop: '1rem' }}
    />
  </div>

  ### 6. Related Features

  <ul class="list-disc pl-6 body">
    <li><strong><a href="/individuals" class="text-accent-secondary underline">Individuals</a>:</strong> Connected to their institution.</li>
    <li><strong><a href="/tasks" class="text-accent-secondary underline">Tasks</a>:</strong> Actions related to engagement, scoring, or follow-ups.</li>
    <li><strong><a href="/groups" class="text-accent-secondary underline">Groups</a>:</strong> Visibility and access management via Group settings.</li>
  </ul>

</div>