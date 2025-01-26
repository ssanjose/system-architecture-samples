import { docsConfig } from "@/config/docs"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  return <Post />
}

export function generateStaticParams() {
  return docsConfig.sidebarNav.flatMap((section) => section.items).map((item) => {
    return {
      // href assumed to be defined
      slug: item.href!.replace("/docs/examples/", "").replace(/\/$/, ""),
    };
  });
  // { slug: 'welcome' }, { slug: 'about' }
}

export const dynamicParams = false