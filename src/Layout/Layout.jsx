import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-20 pb-24 ">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
