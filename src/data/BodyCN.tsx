/* eslint-disable react/no-unescaped-entities */
import { Section, SectionText, SectionTitle } from "@/components/ui/Section";
import {
  Entry,
  EntryBadges,
  EntryDescription,
  EntryDetails,
  EntryDetailsTooltip,
  EntrySubtitle,
  EntryTime,
  EntryTitle
} from "@/components/Entry";
import { Badges, DarkBadge, LightBadge } from "@/components/ui/Badge";
import { Project } from "@/components/Project";
import React from "react";
import { SubEntry, SubEntryBadges, SubEntryTime, SubEntryTitle } from "@/components/sub-entry";
import { CustomTooltip } from "@/components/custom-tooltip";
import { Friends } from "@/data/Friends";

const BodyCN = () => (
  <>
    <Section>
      <SectionTitle>關於</SectionTitle>
      <SectionText>
        我對計算機科學的多個領域充滿濃厚興趣，特別是
        <CustomTooltip
          trigger={
            <i>
              <u>理論計算機科學（理論 B）</u>。
            </i>
          }
          content={
            <>
              邏輯、語義與自動機；
              <br />
              形式模型與重寫系統；
              <br />
              程式語言理論。
            </>
          }
        />
        我有系統地累積了開發和維護客戶端/伺服器應用及網站的經驗，亦正積極探索數據挖掘、處理及視覺化等領域。
      </SectionText>
    </Section>
    <Section>
      <SectionTitle>學歷</SectionTitle>
      <Entry>
        <EntryTitle>香港科技大學</EntryTitle>
        <EntrySubtitle>工學士（計算機科學）</EntrySubtitle>
        <EntryTime>2023 - 2027（就讀中）</EntryTime>
        <EntryDetails>
          <p>
            <i>（截至 2025 年 6 月 9 日）</i>
          </p>
          <p>
            累積平均績點（CGA）：4.179/4.3 <br />
            主修累積平均績點（MCGA）：4.209/4.3 <br />
          </p>
          <p>
            所有計算機科學課程均獲 A+。
            <br />
            超過一半計算機科學課程（部分為估算，如大多評分項目最高分）獲得第一名。
            <br />
          </p>
          <SubEntry>
            <SubEntryTitle>
              COMP 4431 Multimedia Computing（多媒體計算）
            </SubEntryTitle>
            <SubEntryTime>2024-25 春季</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 4121 Modern Compiler Construction（現代編譯器構造）
            </SubEntryTitle>
            <SubEntryTime>2024-25 春季</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 3711 Design and Analysis of Algorithms（演算法設計與分析）
            </SubEntryTitle>
            <SubEntryTime>2024-25 春季</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 3021 Java Programming（Java 程式設計）
            </SubEntryTitle>
            <SubEntryTime>2024-25 秋季</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 3031 Principle of Programming Languages（程式語言原理）
            </SubEntryTitle>
            <SubEntryTime>2024-25 秋季</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 3511 Operating Systems（作業系統）
            </SubEntryTitle>
            <SubEntryTime>2024-25 秋季</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2711 Discrete Mathematical Tools for Computer
              Science（計算機科學離散數學工具）
            </SubEntryTitle>
            <SubEntryTime>2024-25 秋季</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2611 Computer Organization（計算機組織）
            </SubEntryTitle>
            <SubEntryTime>2023-24 春季</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2012 Object-Oriented Programming and Data
              Structures（面向對象程式設計與數據結構）
            </SubEntryTitle>
            <SubEntryTime>2023-24 春季</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2211 Exploring Artificial Intelligence（探索人工智能）
            </SubEntryTitle>
            <SubEntryTime>2023-24 秋季</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2011 Programming with C++（C++ 程式設計）
            </SubEntryTitle>
            <SubEntryTime>2023-24 秋季</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
        </EntryDetails>
        <EntryDetailsTooltip>課程</EntryDetailsTooltip>
      </Entry>
      <Entry>
        <EntryTitle>賓夕法尼亞大學</EntryTitle>
        <EntrySubtitle>工程學院交流計劃</EntrySubtitle>
        <EntryTime>2025-26 春季</EntryTime>
        <EntryDetails>
          <p>
            <i>獲香港科技大學工學院提名，於 2025-26 春季參與賓夕法尼亞大學交流計劃。</i>
          </p>
        </EntryDetails>
        <EntryDetailsTooltip>課程</EntryDetailsTooltip>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>獎項與成就</SectionTitle>
      <Entry>
        <EntryTitle>Best UGTA Award（最佳本科教學助理獎）</EntryTitle>
        <EntrySubtitle>香港科技大學計算機科學及工程學系</EntrySubtitle>
        <EntryTime>2024-25</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>AEON 信貸財務（亞洲）獎學金</EntryTitle>
        <EntrySubtitle>香港科技大學</EntrySubtitle>
        <EntryTime>2024-25</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>潘權勝陳妙霞紀念獎學金</EntryTitle>
        <EntrySubtitle>香港科技大學計算機科學及工程學系</EntrySubtitle>
        <EntryTime>2024-25</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>院長嘉許名單</EntryTitle>
        <EntrySubtitle>香港科技大學工學院</EntrySubtitle>
        <EntryTime>2024-25 秋季</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>
          大學獎學金計劃 (在讀)
        </EntryTitle>
        <EntrySubtitle>香港科技大學</EntrySubtitle>
        <EntryTime>2024-25</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>香港科技大學校友基金飛鷹拔才計劃獎學金</EntryTitle>
        <EntrySubtitle>香港科技大學。由計算機科學及工程學系提名</EntrySubtitle>
        <EntryTime>2023-24</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>
          Best UGTA Award-Honorable Mention（最佳本科教學助理獎—榮譽提名）
        </EntryTitle>
        <EntrySubtitle>香港科技大學計算機科學及工程學系</EntrySubtitle>
        <EntryTime>2023-24</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>院長嘉許名單</EntryTitle>
        <EntrySubtitle>香港科技大學工學院</EntrySubtitle>
        <EntryTime>2023-24 秋季、春季</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>
          University Admissions Scholarship（大學入學獎學金）
        </EntryTitle>
        <EntrySubtitle>香港科技大學</EntrySubtitle>
        <EntryTime>2023</EntryTime>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>工作經驗</SectionTitle>
      <Entry>
        <EntryTitle>Department of Computer Science, HKUST</EntryTitle>
        <EntrySubtitle>本科生教學助理</EntrySubtitle>
        <EntryTime>2023-24 春季 - 現在</EntryTime>
        <EntryDescription>
          <p>
            於計算機科學課程表現優異後，獲導師邀請擔任本科教學助理（UGTA）。截至
            2024-25 夏季，已於 3 門課程（COMP 2011、2012 及 1023）共 6
            個學期（包括夏季及冬季）擔任 UGTA。
          </p>
          <ul>
            <li>協助導師準備課程材料，包括作業、教學筆記、講義及自學測驗。</li>
            <li>
              解答學生問題，指導課堂內容、作業、環境設置，並於學生有興趣時介紹進階主題。
            </li>
            <li>撰寫指引，協助學生設置程式環境及排查複雜程式問題。</li>
          </ul>
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>極智慧城市研究學院</EntryTitle>
        <EntrySubtitle>暑期實習</EntrySubtitle>
        <EntryTime>2023-24 夏季 - 現在</EntryTime>
        <EntryBadges>
          <LightBadge>兼職</LightBadge>
        </EntryBadges>
        <EntryDescription>
          我開發並實現了一套自動化軟件方案，利用計算機視覺技術高效處理及分析交通數據，並與
          GIS
          軟件集成以提升數據視覺化及空間分析能力。同時，優化了工作流程，提高了交通數據處理的準確性與效率。
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>USThing</EntryTitle>
        <EntrySubtitle>後端主管及 App 團隊負責人</EntrySubtitle>
        <EntryTime>2023-24 秋季 - 現在</EntryTime>
        <EntryBadges>
          <LightBadge>核心成員</LightBadge>
        </EntryBadges>
        <EntryDescription>
          USThing
          是一款由學生開發的香港科技大學一站式應用程式。團隊由一群充滿熱誠及才華的學生組成，致力於不斷優化應用及服務科大學生社群。
          <ul>
            <li>
              帶領後端團隊將後端伺服器架構重構為容器化微服務架構，以提升效能及可維護性。
            </li>
            <li>
              帶領 App 團隊重構舊有 App，將原本分別為 Android 及 iOS 的原生 App
              合併為一個以 React Native 技術開發的 App。
            </li>
            <li>
              帶領團隊重構後端及 App 團隊的 CI/CD
              流程，自動化、簡化並提升整合及部署/發佈效率。
            </li>
          </ul>
        </EntryDescription>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>研究經驗</SectionTitle>
      <Entry>
        <EntryTitle>專題研究</EntryTitle>
        <EntrySubtitle>
          AI 代理作為動態自適應的語言評估者： 建立可申請專利的 APP
        </EntrySubtitle>
        <EntryTime>2024-25 春季</EntryTime>
        <EntryDescription>
          由 Dr. Desmond TSOI 指導，項目現處於早期開發階段。
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>本科生研究計劃</EntryTitle>
        <EntrySubtitle>
          程式語言設計與實作
        </EntrySubtitle>
        <EntryTime>2024-25 秋季、春季</EntryTime>
        <EntryDescription>
          <p>
            由 Prof. Lionel Parreaux
            指導，我於其創立及主導的面向對象及函數式程式語言 MLscript 中實現了
            <i>Type Class</i> 語言特性。具體包括：
          </p>
          <ul>
            <li>
              支援 <i>Multiple Parameter Lists</i> 的函數。
            </li>
            <li>
              <i>Module Methods</i>，即需編譯器於調用端額外處理的方法（函數）。
            </li>
            <li>
              <i>Type Classes</i>，包括 Contextual Parameters 及 Given Instances。
            </li>
          </ul>
          <p>
            為支援新特性，已於編譯器中新增一個階段。現正繼續開發以支援其他需調用端處理的特性。
          </p>
        </EntryDescription>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>其他經驗</SectionTitle>
      <Entry>
        <EntryTitle>本科生學生代表</EntryTitle>
        <EntrySubtitle>
          第 32 屆計算機科學及工程學系師生聯絡委員會會議，香港科技大學
        </EntrySubtitle>
        <EntryTime>2025 年 5 月 12 日</EntryTime>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>技能</SectionTitle>
      <Entry>
        <EntryTitle>程式語言</EntryTitle>
        <EntryDescription>
          <Badges>
            <DarkBadge>Java</DarkBadge>
            <DarkBadge>Kotlin</DarkBadge>
            <DarkBadge>Scala</DarkBadge>
            <DarkBadge>MLscript</DarkBadge>
            <DarkBadge>Golang</DarkBadge>
            <DarkBadge>C / C++</DarkBadge>
            <DarkBadge>HTML</DarkBadge>
            <DarkBadge>CSS</DarkBadge>
            <DarkBadge>JavaScript</DarkBadge>
            <DarkBadge>TypeScript</DarkBadge>
            <DarkBadge>Python</DarkBadge>
          </Badges>
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>函式庫 / 框架 / 資料庫</EntryTitle>
        <EntryDescription>
          <Badges>
            <DarkBadge>Spring</DarkBadge>
            <DarkBadge>Vue</DarkBadge>
            <DarkBadge>React</DarkBadge>
            <DarkBadge>NumPy</DarkBadge>
            <DarkBadge>Keras</DarkBadge>
            <DarkBadge>TensorFlow</DarkBadge>
            <DarkBadge>PostgreSQL</DarkBadge>
            <DarkBadge>React Native</DarkBadge>
            <DarkBadge>Fastify</DarkBadge>
            <DarkBadge>MongoDB</DarkBadge>
          </Badges>
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>其他</EntryTitle>
        <EntryDescription>
          <Badges>
            <DarkBadge>Git</DarkBadge>
            <DarkBadge>Linux</DarkBadge>
            <DarkBadge>Microsoft Word</DarkBadge>
            <DarkBadge>Microsoft Excel</DarkBadge>
            <DarkBadge>LaTeX</DarkBadge>
            <DarkBadge>Typst</DarkBadge>
            <DarkBadge>ChatGPT</DarkBadge>
            <DarkBadge>GenAI</DarkBadge>
            <DarkBadge>Video Games</DarkBadge>
            <DarkBadge>Mobile Games</DarkBadge>
            <DarkBadge>Adobe Photoshop</DarkBadge>
            <DarkBadge>Adobe Premiere Pro</DarkBadge>
          </Badges>
        </EntryDescription>
      </Entry>
    </Section>
  </>
);

export default BodyCN;
