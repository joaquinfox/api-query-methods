import React from 'react';
import axiosBasic from '../images/axios_basic.png';
import axiosAsync from '../images/axios_async.png';
import axiosAsync2 from '../images/axios_async2.png';

export default function AxiosBasic() {
  return (
    <div>
      <p>
        <a href="https://axios-http.com/docs/intro">Axios </a>
        is a third party library that can be used server or client side. It does
        however have to be imported as a dependency. It allows for terser
        syntax. Here is an example.
      </p>
      <h4>A basic GET request with Axios.</h4>
      <p className="sub-header">Code</p>
      <img
        className="code_img"
        src={axiosBasic}
        alt="code snippet of a basic axios request"
        width="100%"
      />
      <p className="sub-header">Sandbox</p>
      <iframe
        src="https://codesandbox.io/embed/fetchaxios-g47n5?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: '100%',
          height: '300px',
          border: '0',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
        title="fetch_axios"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>

      <h4>Axios with async-await.</h4>
      <p>
        When using async-await syntax, we write the request <em>outside</em> of
        the useEffect hook as an asynchronous call, then we invoke it{' '}
        <em>inside</em> of the useEffect hook, as below.
      </p>
      <p className="sub-header">Code</p>
      <img
        className="code_img"
        src={axiosAsync}
        alt="code snippet of an async axios request"
        width="100%"
      />
      <p className="sub-header">Or ...</p>
      <img
        className="code_img"
        src={axiosAsync2}
        alt="code snippet of an async axios request"
        width="100%"
      />
    </div>
  );
}
