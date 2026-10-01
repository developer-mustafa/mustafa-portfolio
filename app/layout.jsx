import "./globals.css";

export const metadata = {
  title: "Mustafa Rahman — Full Stack Software Engineer",
  description: "Portfolio of Mustafa Rahman, Full Stack Software Engineer, founder, and ICT lecturer.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
