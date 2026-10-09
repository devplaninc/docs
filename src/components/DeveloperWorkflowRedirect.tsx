import React from 'react';
import Head from '@docusaurus/Head';
import {Redirect} from '@docusaurus/router';

export default function DeveloperWorkflowRedirect() {
  return <>
    <Head><meta name="robots" content="noindex, nofollow" /></Head>
    <Redirect to="/spec-driven-development" />
    <p>See the <a href="/spec-driven-development">current developer workflow</a>.</p>
  </>;
}
