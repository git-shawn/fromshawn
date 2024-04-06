// src/app/page.js

import styles from './page.module.css'
import Image from 'next/image'
import SocialButtons from '@/components/buttons/social'
import Button from '@/components/buttons/button'

export const metadata = {
  title: "Shawn Davis",
  description: "I'm the indie app developer behind Rerouter, QR Pop, and others. I write mainly for Apple platforms with a focus on privacy.",
  openGraph: {
    title: "Shawn Davis",
    description: "An indie developer who loves volunteering and running.",
    url: "https://www.fromshawn.dev",
    siteName: "Shawn Davis",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      <header className={styles.heroContainer}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <div>
              <h1>Hi, I'm Shawn</h1>
              <p>I'm an indie app developer who's really into running, volunteering, being outside, and meeting new people.</p>
            </div>

            <SocialButtons />
          </div>

          <div className={styles.image}>
            <Image
              src="/home/profile.webp"
              priority={true}
              fill={true}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsLEj8DwAE/wJLQC41TwAAAABJRU5ErkJggg=="
              alt="A photograph of me and others in from of the Montana state capital for the AmeriCorps. The image is annotated with an arrow pointing ot me."
              sizes="(max-width: 600px) 50vw, 100vw"
            />
          </div>
        </div>
      </header>

      <section id="apps" className={styles.cards}>
        <div
          className={styles.card}
          style={{ backgroundColor: "var(--qrpop)" }}
        >
          <div className={styles.content}>
            <div>
              <h2>QR Pop</h2>
              <p>An easy to use, privacy-first QR code generator built specifically for Apple devices.</p>
            </div>

            <Button
              href="/qrpop"
            >
              Meet QR Pop
            </Button>
          </div>

          <div className={styles.image}>
            <Image
              src="/home/qrpop.webp"
              fill={true}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8n2f8HwAGtQKhPIj2xQAAAABJRU5ErkJggg=="
              alt="A rendering of a phone displaying of the QR Pop app."
              sizes="(max-width: 600px) 50vw, 100vw"
            />
          </div>
        </div>

        <div
          className={styles.card}
          style={{ backgroundColor: "var(--rerouter)" }}
        >
          <div className={styles.content}>
            <div>
              <h2>Rerouter</h2>
              <p>A simple Safari Extension that automatically opens Google Maps pages in Apple Maps.</p>
            </div>

            <Button
              href="/rerouter"
            >
              Meet Rerouter
            </Button>
          </div>

          <div className={styles.image}>
            <Image
              src="/home/rerouter.webp"
              fill={true}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0mvz/PwAFqALN/ZPxbAAAAABJRU5ErkJggg=="
              alt="A rendering of an iPad displaying the Rerouter Safari Extension pop-up while visiting Google Maps."
              sizes="(max-width: 600px) 50vw, 100vw"
            />
          </div>
        </div>

        <div
          className={styles.card}
          style={{ backgroundColor: "#571312" }}
        >
          <div className={styles.content}>
            <div>
              <h2>Daily Egyptian</h2>
              <p>A unique mobile-first experience for Southern Illinois University's long-running student newspaper.</p>
            </div>

            <Button
              href="https://www.salukiadlab.com/post/the-daily-egyptian"
              outbound={true}
            >
              Meet the DE
            </Button>
          </div>

          <div className={styles.image}>
            <Image
              src="/home/dailyegyptian.webp"
              alt="A rendering of a phone displaying of the Daily Egyptian app."
              fill={true}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMFxb6DwACwgF9iyFaGgAAAABJRU5ErkJggg=="
              sizes="(max-width: 600px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
    </>
  )
}
