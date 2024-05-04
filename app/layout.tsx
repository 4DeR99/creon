import Header from './components/molecules/Header';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center w-full h-full bg-black text-primaryText">
          <Header />
          <main className="w-full flex flex-col items-center">
            <div className="w-[90%] md:w-[70%] lg:w-[750px] xl:w-[1075px] 2xl:w-[1450px] flex flex-col items-center">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

export default Layout;
