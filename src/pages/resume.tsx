import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Resume.module.css";
import gridStyles from "@/styles/GridLayout.module.css"
import { BsHeart, BsCloudDownload } from "react-icons/bs";
import { motion, Variants } from "framer-motion";

import ga4Cert from "/public/resume/cert-ga.png";
import gaAdsCert from "/public/resume/cert-ga-ads.png";
import swiftCert from "/public/resume/cert-swift.png";
import swiftFullCert from "/public/resume/cert-swift-full.jpg";
import FooterBox from "@/components/shared/contact-footer";
import Sparkles from "@/components/shared/sparkle";

export default function Resume() {

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

    return (
        <>
            <Head>
                <title>Shawn Davis - About Me</title>
                <meta name="description" content="Just a guy who loves being outside and volunteering. I code sometimes too." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/shared-assets/favicon.ico" />
                <meta property="og:title" content="Shawn Davis - About Me" />
                <meta property="og:description" content="Just a guy who loves being outside and volunteering. I code sometimes too." />
                <meta property="og:image" content="/previews/social-box-main.png" />
            </Head>
            <div className={styles.aboutContainer}>
                <div id="intro">
                    <div className={styles["download-row"]}>
                        <h1>Hi, I'm Shawn</h1>
                        {/* <a
                            href="/resume/shawn-davis-resume.pdf"
                            aria-label="Download PDF Resume"
                            title="Download PDF Resume"
                            download
                            className={`${gridStyles["circular-material-button"]} ${gridStyles["black"]}`}>
                            <BsCloudDownload
                                className={gridStyles["circular-material-button-icon"]}
                            />
                        </a> */}
                    </div>
                    <p>I'm a passionate digital communicator and freelance software developer.</p>
                    <p>I <BsHeart style={{ verticalAlign: "sub" }} /> volunteering, running, and our national parks.</p>
                </div>

                {/* Education */}
                <div id="education">
                    <h2 className={styles["grid-title"]}>Education</h2>
                    <div className={`${styles.fourGrid}`}>
                        <div className={`${styles.fourGridDate}`}>
                            2016 - 2020<br></br>
                            <span className={`${styles.location}`}>Carbondale, IL</span>
                        </div>
                        <div className={`${styles.fourGridItem}`}>
                            <h3>Southern Illinois University</h3>
                            B.S. Journalism (Advertising)<br></br>
                            Minor Computer Science
                        </div>
                    </div>
                </div>

                {/* Volunteer */}

                <div id="volunteer">
                    <h2 className={styles["grid-title"]}>Volunteerism</h2>
                    <div className={`${styles.fourGrid}`}>
                        <div className={`${styles.fourGridDate}`}>
                            2022 - Now<br></br>
                            <span className={`${styles.location}`}>Remote</span>
                        </div>
                        <div className={`${styles.fourGridItem}`}>
                            <h3>Cody Dieruf Foundation</h3>
                            WordPress content management and general maintenance
                            <div className={`${styles.skillPills}`}>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>WordPress</span>
                            </div>
                            <a
                                href="https://www.breathinisbelievin.org/"
                                className={`${styles.link}`}
                                data-text="Foundation Website"
                            >
                                Foundation Website
                            </a>
                        </div>
                    </div>
                </div>

                {/* Work Experience */}

                {/* <Sparkles color="#FFC700">
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={squircleVariants}
                        viewport={{ once: true, amount: 0.3 }}
                        className={styles["banner"]}
                    >
                        <p>Currently pursuing new career opportunities</p>
                        <div
                            style={{
                                margin: 0
                            }}
                            className={gridStyles["button-row"]}
                        >
                            <Link
                                href="/contact"
                                className={gridStyles["pill-button"]}>
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>
                </Sparkles> */}

                <div id="work">
                    <h2 className={styles["grid-title"]}>Work Experience</h2>

                    {/* DUDA */}

                    <div className={`${styles.fourGrid}`}>
                        <div className={`${styles.fourGridDate}`}>
                            2023 - Now<br></br>
                            <span className={`${styles.location}`}>Louisville, CO</span>
                        </div>
                        <div className={`${styles.fourGridItem}`}>
                            <h3>
                                Content Writer - Duda
                            </h3>
                        </div>
                        <br></br>
                    </div>

                    {/* BAMSL */}

                    <div className={`${styles.fourGrid}`}>
                        <div className={`${styles.fourGridDate}`}>
                            2022<br></br>
                            <span className={`${styles.location}`}>St. Louis, MO</span>
                        </div>
                        <div className={`${styles.fourGridItem}`}>
                            <h3>
                                Digital Marketing Specialist - Bar Association of Metropolitan
                                St. Louis
                            </h3>
                            Implemented GA4, created engaging web experiences, enhanced email
                            marketing, and coordinated social media content calendars.
                            <div className={`${styles.skillPills}`}>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>Social Media</span>
                                <span>Adobe Suite</span>
                                <span>Copywriting</span>
                                <span>Email</span>
                                <span>GA4</span>
                            </div>
                            <a
                                href="https://www.bamsl.org/?pg=business"
                                className={`${styles.link}`}
                                data-text="Business Landing Page"
                            >
                                Business Landing Page
                            </a>
                            <a
                                href="https://www.bamsl.org/?pg=BarFoundation"
                                className={`${styles.link}`}
                            >
                                Foundation Web Section
                            </a>
                        </div>
                    </div>
                    <br></br>

                    {/* CDF */}

                    <div className={`${styles.fourGrid}`}>
                        <div className={`${styles.fourGridDate}`}>
                            2021 - 2022<br></br>
                            <span className={`${styles.location}`}>Bozeman, MT</span>
                        </div>
                        <div className={`${styles.fourGridItem}`}>
                            <h3 id="cdf">AmeriCorps VISTA - Cody Dieruf Foundation</h3>
                            Created marketing materials and strategies targeting both donors
                            and constituents.
                            <div className={`${styles.skillPills}`}>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>WordPress</span>
                                <span>Copywriting</span>
                                <span>Canva</span>
                                <span>Figma</span>
                                <span>Market Research</span>
                                <span>Social Media</span>
                                <span>Salesforce</span>
                                <span>MailChimp</span>
                                <span>GA4</span>
                                <span>Project Management</span>
                            </div>
                            <a
                                href="https://breathinisbelievin.org/plate/"
                                className={`${styles.link}`}
                            >
                                Specialty License Plate
                            </a>
                            <a
                                href="https://breathinisbelievin.org/pages/wp-content/uploads/2021/07/CDF-Brochure.pdf"
                                className={`${styles.link}`}
                            >
                                Outreach Materials
                            </a>
                            <a
                                href="https://www.instagram.com/p/CUYVen_MjcB"
                                className={`${styles.link}`}
                            >
                                Direct Marketing
                            </a>
                        </div>
                    </div>
                    <br></br>

                    {/* AdLab */}

                    <div className={`${styles.fourGrid}`}>
                        <div className={`${styles.fourGridDate}`}>
                            2020<br></br>
                            <span className={`${styles.location}`}>Carbondale, IL</span>
                        </div>
                        <div className={`${styles.fourGridItem}`}>
                            <h3 id="sal">Creative Director - Saluki AdLab</h3>
                            Worked alongside a team of student creatives and marketers to
                            deliver high-quality advertising services to clients.
                            <div className={`${styles.skillPills}`}>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React Native</span>
                                <span>Adobe Suite</span>
                                <span>Final Cut Pro</span>
                                <span>Media Buying</span>
                                <span>Market Research</span>
                                <span>Copywriting</span>
                                <span>Social Media</span>
                                <span>MailChimp</span>
                                <span>GA4</span>
                                <span>Project Management</span>
                            </div>
                            <a
                                href="https://www.salukiadlab.com/post/the-daily-egyptian"
                                className={`${styles.link}`}
                            >
                                Daily Egyptian App
                            </a>
                            <a
                                href="https://news.siu.edu/2020/09/091820-Saluki-AdLab-students-gain-experience-with-Census-project.php"
                                className={`${styles.link}`}
                            >
                                2020 Census Outreach
                            </a>
                            <a
                                href="https://www.salukiadlab.com/post/cool-spoons"
                                className={`${styles.link}`}
                            >
                                Cool Spoons Online
                            </a>
                        </div>
                    </div>
                </div>
                <br></br>

                {/* Certifications */}

                <div id="certs">
                    <h2 className={styles["grid-title"]}>Certifications</h2>
                    <div className={`${styles.certGrid}`}>
                        <div className={`${styles.certItem}`}>
                            <a
                                title="Google Analytics Certification"
                                href="https://skillshop.credential.net/2d72e39e-9cd3-449f-ad50-bf539b182cbb#gs.rdkc2o"
                            >
                                <Image
                                    className={`${styles.roundedImage}`}
                                    alt="Google Analytics Certification"
                                    src={ga4Cert}
                                />
                            </a>
                        </div>
                        <div className={`${styles.certItem}`}>
                            <a
                                title="Google Ads - Measurement Certification"
                                href="https://skillshop.exceedlms.com/student/award/qEkwWJxnqxVy9G9b8P7tcSV8"
                            >
                                <Image
                                    className={`${styles.roundedImage}`}
                                    alt="Google Ads - Measurement Certification"
                                    src={gaAdsCert}
                                />
                            </a>
                        </div>
                        <div className={`${styles.certItem}`}>
                            <a
                                title="100 Days of Swift Completion Certificate"
                                href={swiftFullCert.src}
                            >
                                <Image
                                    className={`${styles.roundedImage}`}
                                    alt="100 Days of Swift Completion Certificate"
                                    src={swiftCert}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    padding: "1rem",
                    maxWidth: "900px",
                    margin: "0 auto"
                }}
            >
                <FooterBox />
            </div>
        </>
    );
}