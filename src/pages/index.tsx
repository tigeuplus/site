import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home(): JSX.Element 
{
    return (
        <Layout
            title={``}
            description="">
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
