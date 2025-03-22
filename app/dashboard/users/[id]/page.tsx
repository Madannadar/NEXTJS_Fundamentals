import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return <h1>User details page: {params.id}</h1>;
};

export default Page;
