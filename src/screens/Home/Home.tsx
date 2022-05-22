import * as React from 'react';

import { Helmet } from 'react-helmet';

import { Layout } from 'components';

import { Entry, Success } from './components';

function Home() {
  const [codeEntered, setCodeEntered] = React.useState(false);

  return (
    <Layout>
      <Helmet>
        <title>С др кароч</title>
      </Helmet>

      {codeEntered ? (
        <Success />
      ) : (
        <Entry
          onSuccess={() => {
            setCodeEntered(true);
          }}
        />
      )}
    </Layout>
  );
}

export default Home;
