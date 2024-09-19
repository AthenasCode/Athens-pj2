import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
