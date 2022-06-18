import React from 'react';
const RemotePage = React.lazy(() => import('app1/Page'));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'cyan',
        }}>
        <h1>App 2</h1>
      </div>
      <React.Suspense fallback={<div>Loading</div>}>
        <RemotePage />
      </React.Suspense>
    </div>
  );
};

export default App;
