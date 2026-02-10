import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Фонд поддержки социально-культурных инициатив и бизнес проектов",
  description:
    "Объединяем людей, бизнес и культуру для создания проектов, которые меняют жизнь и формируют пространство доверия.",
  openGraph: {
    title: "Фонд поддержки социально-культурных инициатив и бизнес проектов",
    description:
      "Объединяем людей, бизнес и культуру для создания проектов, которые меняют жизнь",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
