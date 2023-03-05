import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-primary w-screen h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
