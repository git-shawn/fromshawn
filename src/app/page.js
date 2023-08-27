// src/app/page.js

import styles from './page.module.css'
import Image from 'next/image'
import SocialButtons from '@/components/buttons/social'
import Button from '@/components/buttons/button'

export const metadata = {
  title: "Shawn Davis",
  description: "I'm the indie app developer behind Rerouter, QR Pop, and others. I write mainly for Apple platforms with a focus on privacy.",
}

export default function Home() {
  return (
    <>
      <header className={styles.heroContainer}>
        <div className={styles.hero}>
          <div className={styles.content}>
            <div>
              <h1>Hi, I'm Shawn</h1>
              <p>I'm an indie app developer, digital communicator, AmeriCorps VISTA alumni, and amateur long-distance runner.</p>
            </div>

            <SocialButtons />
          </div>

          <div className={styles.image}>
            <Image
              src="/home/profile.webp"
              priority
              fill={true}
              alt="A group photograph featuring me, Shawn, standing in the front center helping hold a blue sign labeled 'AmeriCorps Montana'. Everybody in the picture is wearing business casual and the photograph is being taken in front of the Montana state capital building. Written on top of the photograph, in white ink, is the words 'That's Me!' with a hand-drawn arrow pointing to me."
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
              fill
              alt="A rendering of a phone displaying of the QR Pop app."
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
              fill
              alt="A rendering of an iPad displaying the Rerouter Safari Extension pop-up while visiting Google Maps."
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
              fill
            />
          </div>
        </div>
      </section>
    </>
  )
}
