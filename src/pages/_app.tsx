import '@/styles/globals.css'
import type { AppProps } from "next/app";
import Layout from "@/components/nav/layout";
import Transition from '@/components/shared/transition';
import { Syne, Familjen_Grotesk } from "next/font/google";
const syne = Syne({ subsets: ["latin"] });
const fGrotesk = Familjen_Grotesk({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --syne-font: ${syne.style.fontFamily};
          --fGrotesk-font: ${fGrotesk.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </>
  );
}
