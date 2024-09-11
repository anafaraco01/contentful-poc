import { client } from '@/lib/contentful'
import styles from "@/styles/Home.module.css";
import ContentBlock from "@/components/ContentBlock"


export default function Home({page}) {
      // const sections = page.fields.sections;

return (
    <>
        {/* {sections.map((section, sectionIdx) => {
            const contentType = section.sys.contentType.sys.id;

            if (contentType === "contentBlock") {
                return <ContentBlock key={section.sys.id} content={section} />;
            }

            if (contentType === "heroBlock") {
                return <HeroBlock key={section.sys.id} content={section} />;
            }

            return null;
        })} */}
    </>
);


}

// Generates a list of slugs
export const getStaticPaths = async () => {
  const response = await currentClient.getEntries({
    content_type: "page",
    "fields.slug": slug,
});

  const paths = response.docs.flatMap(({ slug }) => {
      if (slug === 'index') {
          return [
              { params: { slug: [] }, locale: 'en' },  // Adjusted to empty array for root
              { params: { slug: [] }, locale: 'de' },
          ];
      } else {
          const slugParts = slug.split('/');
          return [
              { params: { slug: slugParts }, locale: 'en' },
              { params: { slug: slugParts }, locale: 'de' },
          ];
      }
  });

  return {
      paths,
      fallback: false, // Disable fallback
  };
};

export const getStaticProps = async () => {
  // Here goes the ID of the content model
  const response = await client.getEntries({ content_type: "page" });

  return {
    props: {
      page: response.items,
      revalidate: 70,
    }
  }
}
