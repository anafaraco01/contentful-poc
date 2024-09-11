import { useRouter } from "next/router";
import Link from "next/link";
import { client, previewClient } from "@/lib/contentful";
import ContentBlock from "@/components/ContentBlock";
import Header from "@/components/Header";
import ImageBlock from "@/components/ImageBlock";
import TwoColumnsBlock from "@/components/TwoColumnsBlock";
import Button from "@/components/Button";
import SimpleRichText from "@/components/SimpleRichText";

export default function Page({ page, preview }) {
    const sections = page.fields.sections;

    return (
        <>
            {sections.map((section, sectionIdx) => {
                const contentType = section.sys.contentType.sys.id;

                if (contentType === "header") {
                    return <Header key={section.sys.id} content={section} />;
                }

                if (contentType === "contentBlock") {
                    return <ContentBlock key={section.sys.id} content={section} />;
                }

                if (contentType === "imageBlock") {
                    return <ImageBlock key={section.sys.id} content={section} />;
                }

                if (contentType === "twoColumnsBlock") {
                    return <TwoColumnsBlock key={section.sys.id} content={section} />;
                }

                if (contentType === "button") {
                    return <Button key={section.sys.id} content={section} />;
                }

                if (contentType === "simpleRichText") {
                    return <SimpleRichText key={section.sys.id} content={section} />;
                }

                return null;
            })}
        </>
    );
};

export const getStaticProps = async ({ params, preview = false }) => {

    const currentClient = preview ? previewClient : client

    const { slug } = params;
    
    const response = await currentClient.getEntries({
        content_type: "page",
        "fields.slug": slug,
    });

    if (!response?.items?.length) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            page: response?.items?.[0],
            revalidate: 60,
            preview,
        },
    };
};

export const getStaticPaths = async () => {
    const response = await client.getEntries({
        content_type: "page"
    });

    const paths = response.items.map((item) => {
        return {
            params: { slug: item.fields.slug },
        }
    });

    return {
        paths,
        fallback: false,
    };
};
