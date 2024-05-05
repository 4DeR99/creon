import Footer from 'components/molecules/Footer';
import Header from './components/molecules/Header';
import './globals.css';
import MainBackground from 'components/molecules/MainBackground';
import FooterBackground from 'components/molecules/FooterBackground';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex flex-col items-center w-full h-full bg-black text-primaryText">
          <MainBackground />
          <Header />
          <main className="w-full flex flex-col items-center">
            <div className="w-[90%] md:w-[70%] lg:w-[750px] xl:w-[1075px] 2xl:w-[1450px] flex flex-col items-center">
              {children}
            </div>
          </main>
          <Footer />
          <FooterBackground />
        </div>
      </body>
    </html>
  );
}

export default Layout;
