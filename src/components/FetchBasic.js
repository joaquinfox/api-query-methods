import React, { useState, useEffect } from 'react';
import fetchBasic from '../images/fetch_basic.png';

const FetchBasic = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/`)
      .then((res) => res.json())
      .then((res) => {
        let user = res.results[0];
        setData(user);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return 'Loading ...';
  if (error) return 'Error ...';

  return (
    <div>
      <h4> A basic fetch</h4>
      <section>
        <p>
          Here I am using the{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">
            fetch-API
          </a>{' '}
          to retrieve a single user from the{' '}
          <a href="https://randomuser.me/">Random User Generator</a>.
        </p>
        <p>
          <img
            className="code_img"
            src={fetchBasic}
            alt="code snippet of a basic fetch request"
            width="100%"
          />
        </p>
      </section>
      <section>
        <article>
          <h4>{`${data.name.title}. ${data.name.first} ${data.name.last}`}</h4>
          <div>
            <img
              src={data.picture.medium}
              alt=""
              style={{ borderRadius: '12%' }}
            />
          </div>
          <p>Lives in {`${data.location.city}, ${data.location.country}`}</p>
        </article>
      </section>
    </div>
  );
};

export default FetchBasic;
