import React from 'react';
import Head from '@docusaurus/Head';
import {Redirect} from '@docusaurus/router';

export default function RetiredCustomerStory() {
  return <>
    <Head><meta name="robots" content="noindex, nofollow" /></Head>
    <Redirect to="/platform-overview" />
    <p>View the <a href="/platform-overview">current product guide</a>.</p>
  </>;
}
