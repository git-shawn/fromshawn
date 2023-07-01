import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import Lightbox from "@/components/shared/lightbox";
import FooterBox from "@/components/shared/contact-footer";
import TextLoop from "@/components/shared/text-loop";

// Style
import grid from '@/styles/GridLayout.module.css'
import { FaTimes } from 'react-icons/fa';

// Images
import imageSelf from 'public/home/grid-vista.png'
import imageGradient from 'public/shared-assets/gradient-overlay.webp'
import imageQRPop from 'public/home/grid-qrpop.png'
import imageRerouter from 'public/home/grid-rerouter.png'
import imageCDF from 'public/home/grid-cdf.png'
import imageAdLab from 'public/home/grid-adlab.png'

export default function Home() {

  const squircleVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1
      }
    }
  }

  interface ICard {
    id: number;
    title: string;
    body: string;
    image: StaticImageData;
    backgroundColor: string;
    flippedTitle: string;
    flippedBody: string;
    flippedURL: string;
  }

  const cards: ICard[] = [
    {
      id: 1,
      title: "QR Pop",
      body: "A clean, convenient, and privacy-first QR code generator for macOS, iOS, and watchOS.",
      image: imageQRPop,
      backgroundColor: "#FF5E1A",
      flippedTitle: "QR codes right where you need them (everywhere)",
      flippedBody: "QR Pop was built with both privacy and simplicity in mind. Not only can you design a beautiful, custom QR code but you can do it in nearly every app on your device. QR Pop's system extensions that bring code generation to the Share Sheet, Siri, Shortcuts, Safari, and more.",
      flippedURL: "/qrpop"
    },
    {
      id: 2,
      title: "Rerouter",
      body: "A seamless Safari Extension that automatically opens Google Maps URLs in Apple Maps.",
      image: imageRerouter,
      backgroundColor: "#3A93FF",
      flippedTitle: "Gets you where you need to go",
      flippedBody: "Rerouter is an unobtrusive Safari Extension made to do just one thing—open Google Map's links in Apple Maps. Setup is easy and rerouting happens privately and automatically. That means when you search for \"hikes near me\" you can actually use the directions you find.",
      flippedURL: "/rerouter"
    },
    {
      id: 3,
      title: "The Cody Dieruf Foundation",
      body: "Various digital and physical marketing projects for an amazing nonprofit in America's last best place.",
      image: imageCDF,
      backgroundColor: "#8E869E",
      flippedTitle: "Breathin' is Believin'",
      flippedBody: "The Cody Dieruf Foundation is giving hope, and financial aid, to those in Montana living with Cystic Fibrosis. As their AmeriCorps VISTA, I created effective marketing collateral that activated dozens of donors and acquired many new clients. I even made a specialty license plate!",
      flippedURL: "https://breathinisbelievin.org/plate/"
    },
    {
      id: 4,
      title: "The Saluki AdLab",
      body: "Coding and marketing for Southern Illinois University's full-service student-led ad agency.",
      image: imageAdLab,
      backgroundColor: "#660000",
      flippedTitle: "Better Call SAL",
      flippedBody: "The Saluki AdLab is Southern Illinois University's award-winning student-led full-service ad agency. As their creative director,  I helped realize projects for clients across the state of Illinois. My work included web development, app development, social media management, ad buying, and commercial production.",
      flippedURL: "https://www.salukiadlab.com/post/the-daily-egyptian"
    }
  ]

  const HoverableFlippableCard: React.FC<{ card: ICard }> = ({ card }) => {
    const [flip, setFlip] = useState(false);
    const [isHovering, setIsHovering] = useState<Boolean>(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    return (
      <div
        className={`${grid["card"]} ${grid["cube-mobile"]} ${flip ? grid["flip"] : ""} ${grid["one"]}`}
      >
        <div
          className={grid["card-inner"]}
        >
          {/* Front of Card */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            className={`${isHovering ? grid["peak-photo"] : ""} ${grid["item"]} ${grid["card-front"]} ${grid["actionable"]} ${grid["cube-mobile"]}`}
            variants={squircleVariants}
            style={{
              backgroundColor: `${card.backgroundColor}`,
              color: 'white'
            }}
            aria-label="View Details"
            onClick={() => { setFlip(true) }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`${grid["padded"]}`}
            >
              <h2 className="blackSyne">{card.title}</h2>
              {card.body}
            </div>
            <Image
              src={card.image}
              role="presentation"
              alt=""
              sizes="(max-width: 450px) 20rem"
              className={`${grid["lower-photo"]}`}
            />
          </motion.div>

          {/* Back of Card */}
          <div
            style={{
              backgroundColor: `${card.backgroundColor}`,
              color: 'white'
            }}
            className={`${grid["card-back"]} ${grid["padded"]} ${grid["cube-mobile"]}`}
          >
            <div>
              <div
                style={{
                  backgroundColor: `${card.backgroundColor}`
                }}
                className={`${grid["card-row"]} ${grid["header"]}`}>
                <h2>{card.flippedTitle}</h2>
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Close Details"
                  className={`${grid["circular-material-button"]} ${grid["small"]} ${grid["black"]} ${grid["actionable"]}`}
                  onClick={() => { setFlip(false) }}
                  onKeyDown={() => { setFlip(false) }}>
                  <FaTimes
                    className={`${grid["circular-material-button-icon"]} ${grid["small"]}`} />
                </div>
              </div>
              {card.flippedBody}
            </div>
            <div className={`${grid["card-row"]} ${grid["footer"]}`}>
              <Link
                href={card.flippedURL}
                className={`${grid["pill-button"]} ${grid["invert"]}`}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <>
      <Head>
        <title>Shawn Davis</title>
        <meta name="description" content="Just a guy who loves being outside and volunteering. I code sometimes too." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shared-assets/favicon.ico" />
        <meta property="og:title" content="Shawn Davis" />
        <meta property="og:description" content="Just a guy who loves being outside and volunteering. I code sometimes too." />
        <meta property="og:image" content="/previews/social-box-main.png" />
      </Head>
      <main className={`${grid["main"]}`}>

        {/* First Row */}

        <div className={`${grid["row"]}`}>

          {/* Introduction Card */}

          <div className={`${grid["item"]} ${grid["two"]} ${grid["default-background"]}`}>
            <Image
              src={imageGradient}
              alt={""}
              priority={true}
              placeholder={"blur"}
              sizes="25rem"
              className={`${grid["cover-photo"]} ${grid["blended"]}`}
            />
            <div
              style={{ zIndex: 1 }}
              className={`${grid["spread-between"]} ${grid["padded"]}`}>
              <h1><span className='black'>Hey, I'm Shawn.</span> I love creating
                <TextLoop>
                  <span>engaging</span>
                  <span>exciting</span>
                  <span>beautiful</span>
                  <span>inclusive</span>
                  <span>thoughtful</span>
                </TextLoop>
                digital experiences.</h1>
              <div
                className={`${grid["button-row"]}`}>
                <Link
                  href="/contact"
                  className={`${grid["pill-button"]}`}>
                  Let's Chat!
                </Link>
              </div>
            </div>
          </div>

          {/* Self Portrait */}

          <div
            className={`${grid["item"]} ${grid["cube-mobile"]} ${grid["one"]} ${grid["actionable"]}`}>
            <Lightbox>
              <Image
                src={imageSelf}
                alt={"A picture of me at the Montana State Capital."}
                placeholder={"blur"}
                sizes="25rem"
                className={`${grid["cover-photo"]}`}
              />
            </Lightbox>
          </div>
        </div>

        {/* Dynamic, Flippable Cards */}

        <div className={`${grid["row"]}`}>
          {/* QR Pop */}
          <HoverableFlippableCard key={cards[0].id} card={cards[0]} />
          {/* Rerouter */}
          <HoverableFlippableCard key={cards[1].id} card={cards[1]} />
        </div>

        <div className={`${grid["row"]}`}>
          {/* Cody Dieruf Foundation */}
          <HoverableFlippableCard key={cards[2].id} card={cards[2]} />
          {/* Saluki AdLab */}
          <HoverableFlippableCard key={cards[3].id} card={cards[3]} />
        </div>

        <FooterBox />
      </main>
    </>
  )
}
