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
            <div className="w-full flex flex-col">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

export default Layout;
