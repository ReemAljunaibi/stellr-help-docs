import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';

export default function HelpCenterCTA() {
  const { colorMode } = useColorMode();
  const icon = colorMode === 'dark' ? 'help-dark.svg' : 'help-light.svg';

  return (
    <div className="cards-grid" style={{ marginTop: '3rem' }}>
      <div className="card" style={{ flexDirection: 'row', alignItems: 'center', gap: '1.5rem' }}>
        <img
          src={useBaseUrl(`/icons/${icon}`)}
          alt="Help icon"
          className="card-icon"
          style={{ width: '40px', height: '40px' }}
        />
        <div style={{ flex: 1 }}>
          <div className="h4" style={{ marginBottom: '0.25rem' }}>Still need help?</div>
          <div className="body-small" style={{ marginBottom: '0.75rem' }}>
            If you couldn’t find what you’re looking for, our team is one request away.
          </div>
          <Link
            to="https://stellr.atlassian.net/servicedesk/customer/portal/2/group/1/create/2"
            className="button-primary"
          >
            Submit a Support Request
          </Link>
        </div>
      </div>
    </div>
  );
}