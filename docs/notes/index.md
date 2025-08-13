---
id: index
title: Notes
sidebar_label: Notes
---

import { useColorMode } from '@docusaurus/theme-common';
import EditIcon from '@site/static/icons/edit-light.svg';
import ApproveIcon from '@site/static/icons/approve-light.svg';
import CancelIcon from '@site/static/icons/cancel-light.svg';
import BinIcon from '@site/static/icons/bin-light.svg';

<div class="p-6 bg-white rounded-lg shadow-sm space-y-6">

  <h2 class="h2 text-accent-secondary">Using Internal Notes</h2>

  <p class="body text-gray-dark">
    Internal notes are a collaborative space to document your interactions with <a href="/individuals" class="text-accent-secondary underline">individuals</a>. Notes help you retain insights, track decisions, and share updates with team members.
  </p>

  ### 1. How Notes Work

  <ul class="list-disc pl-6 body">
    <li>Each individual profile has a notes section at the bottom</li>
    <li>Notes are displayed in reverse chronological order</li>
    <li>Each note is tagged with the user and timestamp</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/notes-list-preview.png"
      alt="Individual Notes Feed"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

  ### 2. Group Visibility with <code>@</code>

  <p class="body">
    Notes can be shared with specific <a href="/groups" class="text-accent-secondary underline">Groups</a> using <code>@group</code> mentions.
  </p>

  <ul class="list-disc pl-6 body">
    <li>Only members of that group will see the note</li>
    <li>If no group is mentioned, the note becomes <strong>public</strong> to anyone with access to that individual</li>
  </ul>

  <div class="mt-4 text-sm bg-gray-light p-4 rounded text-gray-dark">
    👥 Learn more about how to manage access in the <a href="/access-permissions" class="text-accent-secondary underline">Access & Permissions</a> section.
  </div>

  ### 3. Editing & Deleting Notes

  <p class="body">
    You can update or delete any note you've created:
  </p>

  <ul class="list-disc pl-6 body">
    <li>Click the <EditIcon className="icon-inline-text" /> <strong>Edit icon</strong> to enter edit mode</li>
    <li>Click <ApproveIcon className="icon-inline-text" /> <strong>Save icon</strong> to confirm your changes</li>
    <li>Click <CancelIcon className="icon-inline-text" /> <strong>Cancel icon</strong> to discard changes</li>
    <li>Click <BinIcon className="icon-inline-text" /> <strong>Delete icon</strong> to remove the note</li>
  </ul>

  <div style={{ textAlign: 'center' }}>
    <img
      src="/img/notes-edit-actions.png"
      alt="Edit and delete notes"
      style={{
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        maxWidth: '100%',
        marginTop: '1rem'
      }}
    />
  </div>

</div>