import * as React from 'react';

import { Entry, Success } from './components';

function Home() {
  // const [codeEntered, setCodeEntered] = React.useState(false);
  const [codeEntered, setCodeEntered] = React.useState(true);

  return codeEntered ? (
    <Success />
  ) : (
    <Entry
      onSuccess={() => {
        setCodeEntered(true);
      }}
    />
  );
}

export default Home;
