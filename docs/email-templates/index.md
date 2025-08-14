---
id: index
title: Email Templates
sidebar_label: Email Templates
---

import { useColorMode } from '@docusaurus/theme-common';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Managing Email Templates</h2>

  <p class="body text-gray-dark">
    Email templates are reusable messages tied to events. Use them to send <strong>invitations</strong>, <strong>follow-ups</strong>, or <strong>feedback surveys</strong> to selected guests — all personalized using dynamic fields and custom blocks.
  </p>

  ### 1. What You Can Do

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

    <div class="flex items-center space-x-3">
      <img src={`/icons/email-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Email icon" />
      <span class="body"><strong>Create Templates</strong>: Build custom messages for invitations, follow-ups, or surveys.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/edit-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Edit icon" />
      <span class="body"><strong>Edit/View</strong>: Modify existing templates or switch to preview mode.</span>
    </div>

    <div class="flex items-center space-x-3">
      <img src={`/icons/send-${useColorMode().colorMode}.svg`} class="inline-icon" alt="Send icon" />
      <span class="body"><strong>Send to Guests</strong>: Attach a survey, select recipients, and send with one click.</span>
    </div>

  </div>

  ### 2. Creating a Template

  <ol class="list-decimal pl-6 body mt-4 space-y-2">
    <li>
      Fill out the fields:
      <div>
        <ul class="list-disc pl-6 mt-2">
          <li><strong>Template Name</strong> (internal only)</li>
          <li><strong>Template Subject</strong> (what the guest will see)</li>
          <li><strong>Template Type</strong>: Invitation, Follow-Up, or Feedback</li>
        </ul>
      </div>
    </li>
  </ol>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/email-template-fields.png"
      alt="Email Template Fields"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    ✉️ The <strong>From</strong>, <strong>Reply-To</strong>, <strong>CC</strong>, and <strong>BCC</strong> are all managed by your system administrator.
  </div>

  ### 3. Adding Content Blocks

  <p class="body">
    Inside the email editor, hover between blocks to click the blue <strong>+</strong> icon and choose a section to insert.
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/email-template-builder.png"
      alt="Email Builder UI"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  <ul class="list-disc pl-6 body mt-4">
    <li>Drag & drop elements like paragraphs, buttons, and headings.</li>
    <li>Switch between desktop and mobile preview.</li>
    <li>Use the edit/view toggle to switch modes.</li>
  </ul>

  ### 4. Using Placeholders

  <p class="body">
    Personalize messages by inserting <strong>dynamic placeholders</strong>. These will auto-fill per guest/event:
  </p>

  <ul class="list-disc pl-6 body">
    <li><strong>Event:</strong> Event Title, Start Date, End Date</li>
    <li><strong>Guest:</strong> First Name, Last Name, Salutation</li>
    <li><strong>Survey:</strong> Survey Name, Expiry Date</li>
  </ul>

  <p class="body mt-2">
    Clicking a placeholder adds it in this format: <code>{`{{ Guest First Name }}`}</code>. <strong>Do not change the brackets or text formatting.</strong>
  </p>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/email-template-placeholders.png"
      alt="Dynamic Placeholders"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 5. Sending the Email

  <p class="body">
    Once the template is ready and your guest list is prepared, click <strong>Send to Guests</strong>:
  </p>

  <ol class="list-decimal pl-6 body mt-2">
    <li>Select the guests you want to include.</li>
    <li>If the email contains a button, choose a <a href="/surveys" class="text-accent-secondary underline">Survey</a> from the dropdown.</li>
    <li>Click <strong>Send to Guests</strong> (this button only activates when all requirements are met).</li>
  </ol>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/email-template-send-modal.png"
      alt="Send to Guests Modal"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 6. Related Features

  <ul class="list-disc pl-6 body">
    <li><strong>Events:</strong> Email templates are created inside an <a href="/events" class="text-accent-secondary underline">event</a>.</li>
    <li><strong>Surveys:</strong> Used to collect RSVP or feedback via linked buttons.</li>
    <li><strong>Guests:</strong> Templates are sent to guest lists selected per event.</li>
  </ul>

</div>

import HelpCenterCTA from '@site/src/components/HelpCenterCTA';

<HelpCenterCTA />