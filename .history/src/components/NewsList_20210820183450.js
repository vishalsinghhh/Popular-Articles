import React from "react";
import News from "./News";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const NewsList = () => {
  const { news, loading } = useGlobalContext();
  console.log(news);

  if (loading) {
    return <Loading />;
  }
  if (news.length < 1) {
    return <h2>no news article matched your search criteria</h2>;
  }

  return (
    <div>
      <h2>news list component</h2>
    </div>
  );
};

export default NewsList;
