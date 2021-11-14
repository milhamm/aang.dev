import Hero from "components/Hero";
import { DefaultLayout } from "components/Layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Hero />
    </DefaultLayout>
  );
};

export default Home;
