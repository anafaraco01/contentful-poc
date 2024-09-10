import { useRouter } from "next/router";
import Link from "next/link";
import { client, previewClient } from "@/lib/contentful";

const Recipe = ({ recipe, preview }) => {
  const router = useRouter();
  const { lightHeading, boldHeading, paragraph1, paragraph2, richText, slug } = recipe.fields;

  return (
    <>
      <article>
        {preview && (
          <>
            You are previewing content:
            <Link href="/api/exit-preview">Exit preview</Link>
          </>
        )}
        {router.isFallback ? (
          <>loading..</>
        ) : (
      
            // <ContentfulImage
            //   className={styles.bannerImage}
            //   alt={title}
            //   src={banner.fields.file.url}
            //   width={banner.fields.file.details.image.width}
            //   height={banner.fields.file.details.image.height}
            // />
            
            <>
            <Link href={`/${slug}`} aria-label={lightHeading}>
            <div>{boldHeading}</div>
            <div>{paragraph1}</div>
            <div>{paragraph2}</div>
            </Link>
            </>
    
        )}
      </article>
    </>
  );
};

export const getStaticProps = async ({ params, preview = false }) => {
  const currentClient = preview ? previewClient : client

  const { slug } = params;
  const response = await currentClient.getEntries({
    content_type: "contentBlock",
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
      recipe: response?.items?.[0],
      revalidate: 60,
      preview,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: "contentBlock" });
  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default Recipe;