import { Analytics } from "@vercel/analytics/react";
import NavigationBar from "@/app/custom/NavigationBar";
import HeaderScrollProgress from "@/app/custom/ScrollProgress";
import ProfileCard from "@/app/custom/ProfileCard";
import Footer from "@/app/custom/Footer";
import TableOfContentsList from "@/app/custom/TableofContent";
import "./globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [background-attachment:fixed]">
        <div className="min-h-screen flex justify-center gap-4 p-2 sm:p-8">
          {/* Left Section: Profile Card (Hidden on mobile screens) */}
          <aside
            className="hidden lg:flex flex-[2] sticky top-0 justify-end overflow-y-auto"
            style={{ height: "calc(100vh - 3rem)" }}
          >
            <ProfileCard />
          </aside>

          {/* Center Section: Main Content */}
          <main className="flex-1 lg:flex-[5] bg-white overflow-y-auto">
            <Analytics />
            <HeaderScrollProgress />
            <div className="border border-gray-200 rounded-2xl shadow-sm p-2 sm:p-8">
              {/* Content Sections */}
              {children}
              <NavigationBar />
              <Footer />
            </div>
          </main>

          {/* Right Section: Table of Contents (Hidden on mobile and small screens) */}
          <aside className="hidden xl:flex flex-[1.5] h-screen sticky top-0 flex-start">
            <div className="border-l-2 border-gray-200 pl-4">
              <TableOfContentsList />
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}
