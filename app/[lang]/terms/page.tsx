import { getDictionary } from "/lib";
import { PageProps } from "/types";
import { DownloadApp } from "/components";
import { terms as termItems } from "/config";
import Link from "next/link";

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { terms } = await getDictionary(lang);
  return (
    <>
      <article className="text-black text-lg fade-in xl:py-20 pt-10 flex flex-col">
        <h1 className="xl:text-4xl text-2xl font-bold xl:px-16 px-5">
          {terms.h1}
        </h1>
        <ul className="flex flex-col gap-5 xl:p-16 py-10 px-5 relative">
          {termItems.map(({ link, download, key }) => (
            <li key={key} className="list-disc ml-5">
              <Link
                href={`${
                  download ? process.env.NEXT_PUBLIC_URL : `/${lang}`
                }${link}`}
                className="hover:text-app-blue hover:underline cursor-pointer"
                download={download}
              >
                {terms.li[key]}
              </Link>
            </li>
          ))}
        </ul>
      </article>
      <DownloadApp />
    </>
  );
}
