---
id: index
title: Tasks
sidebar_label: Tasks
---

import { useColorMode } from '@docusaurus/theme-common';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Managing Tasks Across Stellr</h2>

  <p class="body text-gray-dark">
    Tasks in Stellr help teams manage actions across <strong>Platforms</strong>, <strong>Events</strong>, and more. Each task is tied to a module, assigned to users or groups, and tracked on a board.
  </p>

  ### 1. What You Can Do

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

  <div class="flex items-center space-x-3">
    <img src={`/icons/tasks-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Tasks icon" />
    <span class="body"><strong>Create Tasks</strong>: Add tasks from inside any platform or event.</span>
  </div>

  <div class="flex items-center space-x-3">
    <img src={`/icons/users-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Users icon" />
    <span class="body"><strong>Assign Owners</strong>: Tasks can be assigned to a user.</span>
  </div>

  <div class="flex items-center space-x-3">
    <img src={`/icons/calendar-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Calendar icon" />
    <span class="body"><strong>Set Due Dates</strong>: Track and prioritize deadlines.</span>
  </div>

  <div class="flex items-center space-x-3">
    <img src={`/icons/edit-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Progress icon" />
    <span class="body"><strong>Mark Progress</strong>: Move tasks from <em>To Do</em> ▸ <em>In Progress</em> ▸ <em>Done</em>.</span>
  </div>

  <div class="flex items-center space-x-3">
    <img src={`/icons/filter-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Filter icon" />
    <span class="body"><strong>Filter by Module</strong>: View tasks linked to a specific platform or event.</span>
  </div>

</div>

  ### 2. Where Tasks Appear

  <p class="body">
    You can access tasks in 3 places:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Dashboard:</strong> View tasks assigned to you in the “My Tasks” section</li>
    <li><strong>Platform Page:</strong> Kanban view of all platform-related tasks</li>
    <li><strong>Event Page:</strong> Tasks tied to the event appear in the Event detail view</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/tasks-dashboard-my-tasks.png"
      alt="Dashboard task summary"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: /img/tasks-dashboard-my-tasks.png -->

  ### 3. Creating a Task

<ol class="list-decimal pl-6 body space-y-2">
  <li>Go to any Platform or Event page</li>
  <li>Click the <strong>“+ Add Task”</strong> button</li>
  <li>
    Fill in required fields:
    <ul class="list-disc pl-6 mt-1">
      <li><strong>Title</strong></li>
      <li><strong>Owner</strong> (User or Group)</li>
      <li><strong>Due Date</strong> (optional)</li>
      <li><strong>Linked Platform or Event</strong></li>
    </ul>
  </li>
  <li>Click <strong>Save</strong> to add it to the board</li>
</ol>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/tasks-create-form.png"
      alt="Task creation form"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: /img/tasks-create-form.png -->

  ### 4. Task Status & Workflow

  <p class="body">
    Tasks move between 3 stages:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>To Do:</strong> Not started</li>
    <li><strong>In Progress:</strong> Being worked on</li>
    <li><strong>Done:</strong> Completed</li>
  </ul>

  <p class="body">
    Drag tasks between columns to update status. You can also click a task to reopen or reassign it.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/tasks-kanban-view.png"
      alt="Task Kanban Board"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>
  <!-- 📸 Screenshot: /img/tasks-kanban-view.png -->

  ### 5. Visibility & Permissions

  <ul class="list-disc pl-6 body">
    <li><strong>Admins</strong>: Can create, edit, assign, and delete all tasks</li>
    <li><strong>Members</strong>: Can create, edit their own tasks</li>
    <li><strong>Viewers</strong>: View only (no edit access)</li>
  </ul>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    ⚠️ If you don’t see a task, it may be linked to a group you don’t have access to.
  </div>

  ### 6. Related Features

  <ul class="list-disc pl-6 body">
    <li><strong>Platforms & Events:</strong> Tasks are embedded inside each module</li>
    <li><strong>Dashboard:</strong> “My Tasks” is filtered by logged-in user</li>
    <li><strong>Groups:</strong> Tasks can be scoped to group-level visibility</li>
  </ul>

</div>

import HelpCenterCTA from '@site/src/components/HelpCenterCTA';

<HelpCenterCTA />