import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";

export const revalidate = 60;

export default async function Home() {
  const name = "世界";
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });

  return (
    <>
      <section className={styles.top}>
        <div>
          {/* returnで返せるのは一つの要素だけなのですべてを一つの要素にまとめる必要があります*/}
          <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
          <p className={styles.description}>
            私達は市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
