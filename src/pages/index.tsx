import Hero from "components/Hero";
import { DefaultLayout } from "components/Layout";
import PostCard from "components/PostCard";
import Section from "components/Section";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Section title="Latest Posts">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <PostCard
            data={{
              title: "Create Your First React App",
              date: "14 November 2021",
            }}
          />
          <PostCard
            data={{
              title: "Mocking REST API using MSW",
              date: "14 November 2021",
              color: "orange",
            }}
          />
          <PostCard
            data={{
              title: "Apa tuh frontend?",
              date: "14 November 2021",
              color: "pink",
            }}
          />
        </div>
      </Section>
    </DefaultLayout>
  );
};

export default Home;
