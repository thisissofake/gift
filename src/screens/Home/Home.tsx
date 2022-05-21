import * as React from 'react';

import { Layout } from 'components';

import { Entry, Success } from './components';

function Home() {
  const [codeEntered, setCodeEntered] = React.useState(false);

  return (
    <Layout>
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
