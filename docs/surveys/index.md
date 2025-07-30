---
id: index
title: Surveys
sidebar_label: Surveys
---

import { useColorMode } from '@docusaurus/theme-common';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Creating Surveys</h2>

  <p class="body text-gray-dark">
    The <strong>Surveys</strong> module lets you create flexible forms to gather feedback, RSVPs, or event data. Surveys can be attached to <a href="/email-templates" class="text-accent-secondary underline">Email Templates</a> and customized with different input types and logic.
  </p>

  ### 1. Adding a Survey

  <ol class="list-decimal pl-6 body mt-4 space-y-2">
    <li>Navigate to the <strong>Surveys</strong> tab from the sidebar.</li>
    <li>Click <strong>+ Create New Survey</strong>.</li>
    <li>Enter a title and description for internal reference.</li>
    <li>Start building your form by adding inputs (see types below).</li>
    <li>Click <strong>Save</strong> to publish the form.</li>
  </ol>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/survey-builder-form.png"
      alt="Survey Builder Interface"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 2. Input Types

  <ul class="list-disc pl-6 body space-y-2">
    <li><strong>Short Answer:</strong> One-line input for things like name, title, or ID.</li>
    <li><strong>Paragraph:</strong> Multi-line open-ended responses.</li>
    <li><strong>Multiple Choice:</strong> Select one from a list of radio buttons.</li>
    <li><strong>Checkboxes:</strong> Select multiple options from a group.</li>
    <li><strong>Dropdown:</strong> Select one item from a collapsed list.</li>
    <li><strong>File Upload:</strong> Attach documents or images as part of the response.</li>
    <li><strong>Yes/No:</strong> Simple toggle for binary responses.</li>
    <li><strong>Date Picker:</strong> Select a date from a calendar.</li>
    <li><strong>Section Break:</strong> Visually separate survey sections with labels.</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/survey-input-types.png"
      alt="Survey Input Types"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 3. Preview & Logic

  <p class="body">
    Once your survey is built, use the <strong>Preview</strong> toggle to view how guests will see the form on desktop or mobile.
  </p>

  <p class="body mt-2">
    🚧 <strong>Coming soon:</strong> Conditional logic for branching questions based on earlier responses.
  </p>

  ### 4. Attach to Email Template

  <p class="body">
    You can link a survey to an <strong>Email Template</strong> using a button (e.g., “RSVP Now” or “Give Feedback”). Learn more in the <a href="/email-templates" class="text-accent-secondary underline">Email Templates</a> section.
  </p>

  ### 5. Related Features

  <ul class="list-disc pl-6 body">
    <li><strong>Email Templates:</strong> Surveys are sent through event communications.</li>
    <li><strong>Survey Responses:</strong> View and export submissions (see <em>Survey Responses</em> section).</li>
    <li><strong>Events:</strong> Most surveys are created as part of <a href="/events" class="text-accent-secondary underline">event</a> workflows.</li>
  </ul>

</div>