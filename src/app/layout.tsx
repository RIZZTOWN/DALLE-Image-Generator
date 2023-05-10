import "../styles/globals.css";
import Header from '@/components/Header';
import PromptInput from "@/components/PromptInput";

export const metadata = {
  title: "DALLE-E 2.0",
  description: "DALLE-E image generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <PromptInput />
        {children}
      </body>
    </html>
  );
}
