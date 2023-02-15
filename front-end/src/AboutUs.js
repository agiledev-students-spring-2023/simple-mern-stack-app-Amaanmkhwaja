import React, { useState, useEffect } from 'react';

function AboutUs () {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetch('http://localhost:5002/about')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setdata(data);
    })
    .catch(error => console.log(error));
  }, [])
  
  if (!data) {
    return <div>Loading...</div>;
  }

  // check if name is defined before accessing it

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>{data.name}</h1>
        {/* 👇 show image */}
        <img src={data.photo} alt="Me"  width='300px'/>
        {data.text ? data.text.map((text, index) => <p key={index}>{text}</p>) : null}
    </div>
  )
}

export default AboutUs