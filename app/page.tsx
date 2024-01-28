import Image from "next/image";
import Header from "./server-components/Header";
import MainContainer from "./server-components/MainContainer";
import Footer from "./server-components/Footer";

export default function Home() {
  return (
    <main>
      <div className="px-2 2xl:px-48 w-full ">
        <Header />
        <hr className="my-2" />
        <div>
          <MainContainer />
        </div>
      </div>
      <Footer />
    </main>
  );
}
