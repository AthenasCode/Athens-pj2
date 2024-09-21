import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import '../components/styles.css';

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
