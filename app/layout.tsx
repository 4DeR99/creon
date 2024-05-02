import "./globals.css";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center w-full h-full bg-primaryBackground text-primaryText">
          {/* <Header /> */}
          <main className="container flex flex-col m-auto">
            <div className="container flex flex-col w-full">{children}</div>
          </main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

export default Layout;
