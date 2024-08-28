import "./globals.css";
import { Metadata } from "next";
import { Toaster } from "sonner";
import { AI } from "./actions";
import { KasadaClient } from "@/utils/kasada/kasada-client";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-sdk-preview-rsc-genui.vercel.dev"),
  title: "Generative User Interfaces Preview",
  description: "Generative UI with React Server Components and Vercel AI SDK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <KasadaClient />
        <Toaster position="top-center" richColors />
        <AI>{children}</AI>
      </body>
    </html>
  );
}
