import Image from "next/image";
import gridStyle from "@/styles/GridLayout.module.css";
import docStyle from "@/styles/Docs.module.css";

export default function MDXSupportImage({ href, alt, caption }: { href: string; alt: string, caption: string }) {
    return (
        <div className={docStyle["hero-image"]}>
            <Image
                alt={alt}
                src={href}
                width={800}
                height={600}
            />
            <p>{caption}</p>
        </div>
    )
}