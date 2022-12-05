import Head from "next/head";
import Navbar from "../Components/Navbar";
import SectionHeading from "../Components/SectionHeading";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Application Management</title>
      </Head>

      <Navbar />

      <SectionHeading />
    </div>
  );
}
