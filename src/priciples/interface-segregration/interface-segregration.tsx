import React, { useState } from "react";
import { codeSnippet } from "./example";

const handleCopy = (
  setCopied: React.Dispatch<React.SetStateAction<boolean>>
) => {
  navigator.clipboard.writeText(codeSnippet);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

const InterfaceSegregration: React.FC = () => {
  const [copied, setCopied] = useState(false);

  return (
    <main>
      <section>
        <div className="flex items-baseline">
          <div className="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
          <h1 className="text-2xl font-medium mb-4">Interface Segregration</h1>
        </div>
        <p className="text-zinc-400 tracking-wide">
          The Interface Segregation Principle (ISP) states that a class or
          module should not be forced to implement interfaces it doesn't use.
          Instead of having large, monolithic interfaces, it's better to have
          smaller, more specific ones. This way, clients only need to depend on
          the methods that are relevant to them, promoting flexibility and
          easier maintenance.
        </p>
      </section>
      <section className="mt-5">
        <h2>Example:</h2>
        <pre className="bg-zinc-900 p-4 rounded overflow-auto max-h-128">
          {codeSnippet}
        </pre>
        <button
          onClick={() => handleCopy(setCopied)}
          className=" bg-gradient-to-b from-orange-500 to-orange-600 text-black p-2 mt-4 rounded-[5px] hover:filter hover:brightness-75 font-semibold"
        >
          Copy Code
        </button>
        {copied && <p className="text-green-500">Copied</p>}
      </section>
    </main>
  );
};

export default InterfaceSegregration
