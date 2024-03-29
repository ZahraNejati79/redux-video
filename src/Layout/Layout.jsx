import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <main className="pt-20 pb-24 min-h-screen flex items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
