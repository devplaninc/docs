import React from 'react';
import {Redirect, useLocation} from '@docusaurus/router';

// Older implementation handoffs link here instead of the document's public slug.
export default function LegacySpecDrivenDevelopment() {
  const {hash, search} = useLocation();
  return <Redirect to={`/spec-driven-development${search}${hash}`} />;
}
