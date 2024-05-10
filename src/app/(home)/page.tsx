import { generate_metadata } from "@/utils/generate_metadata";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = generate_metadata({
  title: "Owbird",
  desc: `
  I speak to computers.
  Sometimes they listen.
  Sometimes.
  `,
  image: "",
});

function App() {
  return <Fragment></Fragment>;
}

export default App;
