import React, { useState, useEffect } from 'react';
import fetchBasic from '../images/fetch_basic.png';

const FetchBasic = () => {
  return (
    <div>
      <h4> A basic fetch</h4>
      <section>
        <p>
          Below I am using the{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">
            fetch-API
          </a>{' '}
          to retrieve a single user from the{' '}
          <a href="https://randomuser.me/">Random User Generator</a> API.
        </p>
        <p>
          We want to fetch after all other resources have been loaded onto your
          page or component. There are a couple of ways of achieving this in
          React, for example by using the useEffect hook, or wrapping the
          request in{' '}
          <a href="https://reactjs.org/docs/react-component.html">
            componentDidMount()
          </a>
          .
        </p>
        <p>
          I am using the useEffect hook with an open dependency array, which
          will have the effect of making the fetch request once, when the
          component has loaded.
        </p>
        <p>
          <p className="sub-header">Code</p>
          <img
            className="code_img"
            src={fetchBasic}
            alt="code snippet of a basic fetch request"
            width="100%"
          />
        </p>
      </section>

      <section>
        <p class="sub-header">Sandbox</p>
        <iframe
          src="https://codesandbox.io/embed/runtime-bash-ty05y?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: '100%',
            height: '300px',
            border: '0',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="runtime-bash-ty05y"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </section>
    </div>
  );
};

export default FetchBasic;
