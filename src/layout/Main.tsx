import { Footer } from "../components/Footer";
import Header from '../components/Header';
import  SubHeader  from "../components/SubHeader";

export const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div >
        <Header />
        <SubHeader />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
