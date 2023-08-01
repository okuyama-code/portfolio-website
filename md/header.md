```
// Reactと必要なモジュールのインポート
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";

// カスタムフックを使ってコンテキストから必要な値を取得する
import { useActiveSectionContext } from "@/context/active-section-context";

// ヘッダーコンポーネントの定義
export default function Header() {
  // カスタムフックからactiveSection、setActiveSection、setTimeOfLastClickを取得する
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    // ヘッダー要素のクラス名を設定し、Framer Motionのmotion.divコンポーネントを使用
    <header className="z-[999] relative">
      {/* アニメーション用のdiv要素 */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }} // アニメーションの初期状態を指定
        animate={{ y: 0, x: "-50%", opacity: 1 }} // アニメーションの終了状態を指定
      ></motion.div>

      {/* ナビゲーションメニュー */}
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            // 各リンクのli要素をモーションでアニメーションさせる
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }} // アニメーションの初期状態を指定
              animate={{ y: 0, opacity: 1 }} // アニメーションの終了状態を指定
            >
              {/* リンク要素 */}
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    // アクティブなセクションのスタイルを変更
                    "text-gray-950 dark:text-gray-200": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  // リンクがクリックされたときにactiveSectionと最後のクリック時刻を更新
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {/* アクティブなセクションの背景をモーションでアニメーション */}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

```

```
className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
```

fixed: このスタイルは、要素を画面上の固定位置に配置します。top-0 と left-1/2 は、要素を画面の上端に固定し、水平方向には画面の中央に配置することを意味します。

h-[4.5rem] と w-full: 要素の高さを4.5レム（レムはフォントサイズに依存する単位の一つ）に設定し、幅を親要素の幅いっぱいに広げます。

rounded-none: 要素の角を丸くしません。

border: 要素に境界線（ボーダー）を追加します。色は border-white で、不透明度は40％ (border-opacity-40) です。

bg-white: 背景色を白色に設定します。

bg-opacity-80: 背景色の不透明度を80％に設定します。つまり、背景がやや透けて見えるようになります。

shadow-lg: 要素に影を付けます。lg は影の大きさを表しており、ここでは大きめの影が付けられます。

shadow-black/[0.03]: 別の影を追加しますが、色が黒で、不透明度が0.03（非常に薄い影）です。

backdrop-blur-[0.5rem]: 要素の背後の背景をぼかします。ぼかしの強さは0.5レムです。

sm:top-6, sm:h-[3.25rem], sm:w-[36rem]: これらは、画面の幅が特定の幅（通常はスマートフォンの画面サイズ）以上の場合にのみ適用されるスタイルです。それぞれ、要素の上端を6レムに、高さを3.25レムに、幅を36レムに設定します。

sm:rounded-full: 画面サイズが特定の幅以上の場合にのみ適用されるスタイルで、要素の角を完全に丸くします。

dark:bg-gray-950, dark:border-black/40, dark:bg-opacity-75: これらは、ダークモードの環境でのみ適用されるスタイルです。背景色はグレーで、ボーダーの色は黒で40％の不透明度、背景色の不透明度は75％に設定されます。

```
<motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
```
<motion.div>: この部分は、framer-motionライブラリが提供する特別なコンポーネントです。このコンポーネントを使うことで、アニメーションを簡単に定義できます。<div>要素を包んでいるので、アニメーションが適用されるのはこの<div>要素です。

initial: initialは、要素が初期状態のときのスタイルを定義します。このオブジェクトの中に指定されたスタイルは、アニメーションが始まる前の要素の状態に適用されます。

y: -100: yは縦方向（Y軸）の位置を意味します。-100と指定されているため、要素は縦方向に上に100px移動して配置されます。
x: "-50%": xは横方向（X軸）の位置を意味します。"-50%"と指定されているため、要素は横方向に親要素の中央に配置されます。-50%は水平方向の中央を表します。
opacity: 0: opacityは要素の不透明度を意味します。0と指定されているため、要素は完全に透明になります。
animate: animateは、アニメーションの最終的な状態を定義します。このオブジェクトの中に指定されたスタイルは、アニメーションの最後のフレームで要素に適用されます。

y: 0: yは縦方向（Y軸）の位置を意味します。0と指定されているため、要素は縦方向に移動せず、元の位置に戻ります（アニメーション前の位置）。
x: "-50%": xは横方向（X軸）の位置を意味します。"-50%"と指定されているため、要素は横方向に親要素の中央に配置されます。-50%は水平方向の中央を表します。
opacity: 1: opacityは要素の不透明度を意味します。1と指定されているため、要素は完全に不透明になります（不透明度100％）。
このアニメーションの効果は、要素が画面上で上から下に移動しながら、徐々に表示されるというものです。アニメーションが開始されると、要素は初期位置から上に100px移動し、完全に透明になっています。そして、徐々に元の位置に戻りつつ、徐々に不透明になって表示されるというアニメーションが行われます。
