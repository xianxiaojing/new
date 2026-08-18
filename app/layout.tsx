import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "张娴静｜金融产品体验设计师",
  description: "张娴静的 UI/UX 作品集：以用户行为与业务数据，驱动信贷转化与商业化体验。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
