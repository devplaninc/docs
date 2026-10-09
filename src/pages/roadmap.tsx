import React from 'react';
import Head from '@docusaurus/Head';
import {Redirect} from '@docusaurus/router';

export default function RoadmapPlanningRedirect() {
  return <>
    <Head><meta name="robots" content="noindex, nofollow" /></Head>
    <Redirect to="/projects#organize-your-work" />
    <p>See <a href="/projects#organize-your-work">organizing work in Projects</a>.</p>
  </>;
}
