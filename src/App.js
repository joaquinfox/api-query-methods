import React from 'react';
import FetchBasic from './components/FetchBasic';
import FetchErrorHandling from './components/FetchErrorHandling';
import AxiosBasic from './components/AxiosBasic';

function App() {
  return (
    <div>
      <main>
        <h1>API Query Methods, with React</h1>
        <p>
          This is a catalog of code snippets and sandboxes illustrating methods
          of requesting data from an API in react. It is inspired by
          <a href="https://reedbarger.com/fetch-data-in-react/">
            How to Fetch Data in React
          </a>
          , which you should look at for a more in depth discussion of the
          relative benefits and use cases for each method illustrated here. For
          a great primer on API requests more generally see
          <a href="https://snipcart.com/blog/integrating-apis-introduction">
            A Beginners Guide to APIs
          </a>
          , by Alex Trost.
        </p>
        <h2>Fetch</h2>
        <p>
          The{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">
            fetch API
          </a>{' '}
          is built into modern browsers, (with the exception of IE, as of June
          2021) and includes a fetch() method that is simple and easily
          accessed.
        </p>
        <FetchBasic />
        <FetchErrorHandling />
        <h2>Axios</h2>
        <AxiosBasic />
      </main>
    </div>
  );
}

export default App;
