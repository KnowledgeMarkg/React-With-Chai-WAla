import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((resp) => resp.json())
  //     .then((data) => setData(data));
  // }, [data]);
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </>
  );
};

export default Github;


export const githubInfoData = async ()=>{
  const resp = await fetch('https://api.github.com/users/hiteshchoudhary')
  return resp.json()
}