"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <h2 className="text-blue-500 my-10 text-3xl font-bold">[ 学習について ]</h2>
      <p className="mb-3 text-2xl">
        私は現在千葉県のゴルフ場に勤務しながら5か月間の独学期間の後、プログラミングスクールHappiness Chainに入学させていただき、学習しています。Udemyや書籍や海外のYouTubeを教材として学習を毎日コツコツ継続しています。プログラミングで一番好きな部分は、問題解決の側面です。エラーや実装したいレイアウトや機能の問題の解決策を見つけたときにやりがいを感じています。 学習している主な言語やフレームワーク、ライブラリは React、Next.js、Node.js、TypeScript、Go、 ruby on railsです。DBはMySQL、 PostgreSQL、 MongoDBを使用して学習した経験があります。私は常に新しい技術を学ぶことに努めています。現在、モダンな自社開発企業様もしくはモダンな技術を使用した受託開発企業様のソフトウェア開発者としてのフルタイムの職を探しています。
        </p>

        <h1 className="text-blue-500 my-10 text-3xl font-bold">[ 自己PR ]</h1>

        <p className="mb-3 text-2xl">
        コミュニケーションスキルと素直にわからないことを聞くことには自信があります。現在の職場では体育会系で職人肌の上司やゴルフのレッスンをしていただいているツアープロに厳しく指導していただいているおかげで指示される前に自分で考えて行動する癖と今までより目上の人を敬いきちんとしたあいさつようができるようになりました。
        技術力はまだまだですが、自主的に勤務時間外を活用して企業様の利益につながるように学習を続けていくつもりでいますのでチャンスをいただけますよう、よろしくお願いいたします。カジュアル面談など、いつでもお待ちしておりますので
        <a className=' text-blue-700 underline  hover:text-blue-400 
        ' href="https://twitter.com/output0121" target="_blank">Twitter(リンクです)</a>
        のDMにて、ご連絡をいただけますと幸いです。
      </p>

      <h2 className="text-blue-500 my-10 text-3xl font-bold">[ 趣味 ]</h2>
      <p className="italic text-2xl">
        コーディングをしていないときは、主に筋トレ、ゴルフ、ママさんバレーに参加したりして体を鍛えています。ゴルフはツアープロに教わりながらコツコツ練習しています。将棋をさしたりもしています(現在将棋ウォーズ3級)。プログラミング上達のために英語の学習もしています(TOEIC HUNTERというロードマップを購入して学習しています)。
      </p>
    </motion.section>
  );
}
