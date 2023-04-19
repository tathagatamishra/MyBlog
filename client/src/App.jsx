import React, { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => 
  {
    const fetchData = async () => {
      const response = await fetch("https://blogity-blog.vercel.app/test");
      const jsonData = await response.json();
      setData(jsonData.data);
    };

    fetchData();
  }, [])


  return (
    <>
    <h1>{data}</h1>
    </>
  )
}
