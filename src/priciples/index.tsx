import React from "react";
import SingleResponsability from "./single-responsability/single-responsability";
import OpenClosed from "./open-closed/open-closed";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col gap-9 items-center justify-start min-h-screen mt-20 px-4 sm:px-6 lg:px-8">
      <section className="max-w-3xl w-full">
        <header className="flex items-center mb-6">
          <div className="h-16 w-1 bg-gradient-to-b from-orange-500 to-orange-600 mr-3"></div>
          <h1 className="text-2xl font-medium text-center sm:text-left">
            SOLID applied to frontend
          </h1>
        </header>
        <article className="text-xl flex flex-col gap-14">
          <SingleResponsability />
          <OpenClosed/>
        </article>
      </section>
    </main>
  );
};

export default HomePage;
