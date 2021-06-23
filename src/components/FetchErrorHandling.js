import React, { useState, useEffect } from 'react';
import fetchError1 from '../images/fetch_error1.png';
import fetchError2 from '../images/fetch_error2.png';
const FetchErrorHandling = () => {
  return (
    <div>
      <h4> Error handling with fetch</h4>
      <p>
        When we request a resource using fetch, the response will be a promise
        which resolves when the response becomes available,{' '}
        <em>regardless of what this response is.</em> If a resource is not found
        and an http status code of 400 is returned, there will not be an error
        code. For this reason, we need to build in a check to confirm we are
        getting what we think we are getting from a request using fetch.
      </p>
      <p>
        Here is the same code from above, with more complete error handling.
      </p>
      <section>
        <p className="sub-header">Code</p>
        <p>
          <img
            className="code_img"
            src={fetchError1}
            alt="code snippet of a basic fetch request"
            width="100%"
          />
        </p>
        <p className="sub-header">Or ...</p>
        <p>
          <img
            className="code_img"
            src={fetchError2}
            alt="code snippet of a basic fetch request"
            width="100%"
          />
        </p>
      </section>

      <section>
        <p class="sub-header">Sandbox</p>

        <iframe
          src="https://codesandbox.io/embed/fetcherror1-hzgxy?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: '100%',
            height: '300px',
            border: '0',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="fetch_error1"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </section>
    </div>
  );
};

export default FetchErrorHandling;
