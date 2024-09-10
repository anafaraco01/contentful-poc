import Link from "next/link";
//import styles from "@/styles/contentBlock.module.css"

const ContentBlock = ({nexxxt}) => {
    const {lightHeading, boldHeading, paragraph1, paragraph2, richText, slug} = nexxxt.fields;
    return (
        <>
        <Link href={`/${slug}`} aria-label={lightHeading}>
        <div>{boldHeading}</div>
        <div>{paragraph1}</div>
        <div>{paragraph2}</div>
        </Link>
        </>
    )
};

export default ContentBlock