import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Resume.module.css";
import gridStyles from "@/styles/GridLayout.module.css"
import { BsHeart, BsCloudDownload } from "react-icons/bs";

import ga4Cert from "/public/gaCert.png";
import gadsCert from "/public/gAdsCert.png";
import swiftUICert from "/public/100SwiftCert.png";
import swiftUIFullCert from "/public/swiftFullCert.jpg";
import FooterBox from "@/components/shared/contact-footer";

export default function Resume() {

    return (
        <>
            <Head>
                <title>Shawn Davis - About Me</title>
                <meta name="description" content="Just a guy who loves being outside and volunteering. I code sometimes too." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.aboutContainer}>
                <div id="intro">
                    <div className={styles["download-row"]}>
                        <h1>Hi, I'm Shawn</h1>
                        <a
                            href="https://www.linkedin.com/in/shawnfdavis/"
                            className={`${gridStyles["circular-material-button"]} ${gridStyles["black"]}`}>
                            <BsCloudDownload
                                className={gridStyles["circular-material-button-icon"]}
                            />
                        </a>
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
                        </div>
                    </div>
                </div>

                {/* Work Experience */}

                <div id="work">
                    <h2 className={styles["grid-title"]}>Work Experience</h2>

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
                            marketing, and developed social media content calendars.
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
                            <a href="https://skillshop.credential.net/2d72e39e-9cd3-449f-ad50-bf539b182cbb#gs.rdkc2o">
                                <Image
                                    className={`${styles.roundedImage}`}
                                    alt="Google Analytics Certification"
                                    src={ga4Cert}
                                />
                            </a>
                        </div>
                        <div className={`${styles.certItem}`}>
                            <a href="https://skillshop.exceedlms.com/student/award/qEkwWJxnqxVy9G9b8P7tcSV8">
                                <Image
                                    className={`${styles.roundedImage}`}
                                    alt="Google Ads - Measurement Certification"
                                    src={gadsCert}
                                />
                            </a>
                        </div>
                        <div className={`${styles.certItem}`}>
                            <a href={swiftUIFullCert.src}>
                                <Image
                                    className={`${styles.roundedImage}`}
                                    alt="100 Days of Swift Certification"
                                    src={swiftUICert}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    maxWidth: "900px",
                    margin: "0 auto"
                }}
            >
                <FooterBox />
            </div>
        </>
    );
}