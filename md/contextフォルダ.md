# active-section-context.tsx

```
"use client";

// モジュールのインポート
import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

// ActiveSectionContextのコンテキストの型を定義
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName; // 現在のアクティブなセクションを保持する状態
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>; // アクティブなセクションを変更するための関数
  timeOfLastClick: number; // 最後にクリックされた時間を保持する状態
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>; // 最後にクリックされた時間を変更するための関数
};

// ActiveSectionContextを作成し、初期値はnullとする
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

// ActiveSectionContextのProviderコンポーネントを定義
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home"); // 初期値は"Home"とする
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // 最初は0で初期化するが、後で更新される

  return (
    // コンテキストの値をProviderに渡す
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// ActiveSectionContextを使用するカスタムフックを定義
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  // もしActiveSectionContextProviderの外側でuseActiveSectionContextが呼ばれた場合、
  // エラーをスローする
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  // ActiveSectionContextの値を返す
  return context;
}

```
このコードでは、ActiveSectionContextProviderを使用して、アプリケーション内の他のコンポーネントでセクションの状態と最後のクリック時間を共有することができます。useActiveSectionContextフックを使用することで、他のコンポーネントからこれらの値を取得できます。ただし、useActiveSectionContextを使用する前に、ActiveSectionContextProviderの内部で使用する必要があります。それによってコンテキストが適切に設定され、値が正しく提供されるようになります。
