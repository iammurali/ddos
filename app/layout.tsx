import type { Metadata } from "next";
import { Poppins, Knewave, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const font = Inter({ subsets: ["latin"] });
const titleFont = Knewave({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DDOS - Daily does of sarcasm",
  description: "Your daily dose of sarcasm.!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col md:flex-row">
            <aside className="flex md:flex-col md:border-r py-20 px-16 w-[35%]">
              <div
                className={cn(titleFont.className, "text-[42px] text-[#FF7171] flex flex-col gap-4 font-normal pb-24")}
              >
                <span className="block">Daily</span>
                <span className="block">Dose</span>
                <span className="block">Of</span>
                <span className="block">Sarcasm</span>
              </div>
              <div className="mt-8 text-[#444D61] hidden md:block text-sm">
                  <p className="pb-3">Next Dose in 16H</p>
                  <p className="text-white pb-7 leading-7">Built with way too less caffeine by <br/> Anuroop & Murali</p>
                  <p>Case solved 1 / --</p>
                </div>
            </aside>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
