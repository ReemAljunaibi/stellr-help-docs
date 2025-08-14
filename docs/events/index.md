---
id: index
title: Events
sidebar_label: Events
---

import { useColorMode } from '@docusaurus/theme-common';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

<h2 class="h2 text-accent-secondary">Managing Events</h2>

<p class="body text-gray-dark">
  Events are a core feature of Stellr. They allow you to plan, manage, and execute real-world or virtual gatherings with structured modules like guests, surveys, tasks, and email templates — all linked to your organization’s workflows.
</p>

### 1. Creating an Event

<ol class="list-decimal pl-6 body space-y-2">
  <li>Navigate to the <strong>Events</strong> section from the sidebar.</li>
  <li>Click <strong>+ Create Event</strong>.</li>
  <li>Fill in the required form fields:</li>
</ol>

<ul class="list-disc pl-10 body">
  <li><strong>Event Title</strong> *</li>
  <li><strong>Region</strong> *</li>
  <li><strong>Address</strong> *</li>
  <li><strong>Start Date</strong> *</li>
  <li><strong>End Date</strong> *</li>
  <li><strong>Access</strong>: Public, Private, or Group-based</li>
  <li><strong>Platform</strong>: Optional — link the event to a broader platform</li>
</ul>

<div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
  🔐 For more on access levels, see the <a href="/access-permissions" class="text-accent-secondary underline">Access & Permissions</a> section.
</div>

<div style={{ textAlign: 'center' }}>
  <img
    src="/img/event-create-form.png"
    alt="Event Creation Form"
    style={{
      borderRadius: '0.5rem',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)',
      maxWidth: '100%',
      marginTop: '1rem'
    }}
  />
</div>

### 2. Event Overview

<p class="body">
  Once created, you'll land on the event’s main page. This includes:
</p>

<ul class="list-disc pl-6 body">
  <li><strong>Details Panel:</strong> Displays all key info (editable via the ✏️ pen icon)</li>
  <li><strong>Map Integration:</strong> Auto-pinned to the event’s address</li>
  <li><strong>Guests Table:</strong> List of confirmed and invited individuals</li>
  <li><strong>Surveys:</strong> Surveys linked to this event</li>
  <li><strong>Tasks:</strong> All to-do items associated with this event</li>
</ul>

<div style={{ textAlign: 'center' }}>
  <img
    src="/img/event-overview-main.png"
    alt="Event Overview with Map and Details"
    style={{
      borderRadius: '0.5rem',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)',
      maxWidth: '100%',
      marginTop: '1rem'
    }}
  />
</div>

### 3. Guests Tab

<p class="body">
  Add guests by selecting individuals already in your system. Each guest entry includes institution, title, and contact details.
</p>

<div style={{ textAlign: 'center' }}>
  <img
    src="/img/event-guest-add.png"
    alt="Guest Selection Modal"
    style={{
      borderRadius: '0.5rem',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)',
      maxWidth: '100%',
      marginTop: '1rem'
    }}
  />
</div>

### 4. Surveys, Templates, Agenda & Tasks

<p class="body">
  Each event is split into specialized tabs:
</p>

<ul class="list-disc pl-6 body">
  <li><strong>Surveys:</strong> Create feedback or RSVP surveys — see <a href="/surveys" class="text-accent-secondary underline">Surveys</a> for details.</li>
  <li><strong>Email Templates:</strong> Design emails for invites or follow-ups — see <a href="/email-templates" class="text-accent-secondary underline">Email Templates</a>.</li>
  <li><strong>Agenda:</strong> Add and manage sessions with title, location, and schedule. See screenshot below.</li>
  <li><strong>Tasks:</strong> Assign responsibilities tied to the event — see <a href="/tasks" class="text-accent-secondary underline">Tasks</a>.</li>
</ul>

<div style={{ textAlign: 'center' }}>
  <img
    src="/img/event-agenda-create.png"
    alt="Add Agenda Item"
    style={{
      borderRadius: '0.5rem',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)',
      maxWidth: '100%',
      marginTop: '1rem'
    }}
  />
</div>

<div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
  📌 Event tasks, surveys, and templates are scoped to the specific event — helping your team stay organized.
</div>

</div>

import HelpCenterCTA from '@site/src/components/HelpCenterCTA';

<HelpCenterCTA />