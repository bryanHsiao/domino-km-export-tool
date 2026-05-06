# Domino 知識資料導出工具

## 釋放企業既有 Domino 文件的知識價值，成為 AI 程式可讀取的資料來源

> 🌐 **Live Demo**
> - **v1** ─ Editorial / 編輯文件風 → <https://bryanhsiao.github.io/domino-km-export-tool/>
> - **v2** ─ Operations Console / 終端機風 → <https://bryanhsiao.github.io/domino-km-export-tool/v2/>
> - **v3** ─ Friendly Soft / 暖系現代風 → <https://bryanhsiao.github.io/domino-km-export-tool/v3/>
> - **v4** ─ Refined Whitepaper / 修飾型長文 → <https://bryanhsiao.github.io/domino-km-export-tool/v4/>
> - **v5** ─ Swiss / Brutalist Grid → <https://bryanhsiao.github.io/domino-km-export-tool/v5/>
> - **v6** ─ Maximalist Magazine / 雜誌跨頁 → <https://bryanhsiao.github.io/domino-km-export-tool/v6/>
> - **v7** ─ Japanese Wabi-Sabi / 侘寂極簡 → <https://bryanhsiao.github.io/domino-km-export-tool/v7/>
> - **v8** ─ Pastel Y2K / Soft Brutalism → <https://bryanhsiao.github.io/domino-km-export-tool/v8/>
> - **v9** ─ Architectural Blueprint / 工程藍圖 → <https://bryanhsiao.github.io/domino-km-export-tool/v9/>
> - **v10** ─ Swiss Brutalist · Yellow / 黃黑配色版 (基於 v5) → <https://bryanhsiao.github.io/domino-km-export-tool/v10/>

> ⚙️ **設定聯絡 Email**
> 三版頁面共用根目錄的 [`config.js`](./config.js)。修改其中的 `contactEmail` 與 `emailSubject` 即可同步生效，不需動 HTML：
> ```js
> window.SITE_CONFIG = {
>   contactEmail: 'contact@example.com',
>   emailSubject: 'Domino 知識資料導出工具 - 諮詢',
>   emailBody: ''
> };
> ```

---

企業開始導入生成式 AI、地端 LLM 或內部知識應用時，常會遇到一個關鍵問題：

**企業真正有價值的知識資料，並不一定在雲端或新系統裡，而是長年累積在既有的 Notes/Domino 系統中。**

許多企業多年來透過 Notes/Domino 建立 KM、流程文件、公告、技術文件、表單紀錄與各類內部知識資料。這些資料對企業極具價值，但在 AI 導入過程中，往往缺少一個安全、可控，且不影響既有系統的資料導出方式。

因此，我們推出：

# Domino 知識資料導出工具

協助企業在**不修改既有 Domino 應用程式設計**的前提下，將 Notes/Domino 文件內容與附件導出為企業 AI 程式、LLM 應用或知識檢索流程可讀取的資料來源。

本工具著重於 Domino 資料導出、文件內容整理、附件匯出與增量更新，讓企業 AI 團隊可在既有 AI 架構下，進一步使用 Domino 長年累積的知識資產。

---

## 為什麼需要 Domino 知識資料導出工具？

近年來，許多企業開始導入生成式 AI、地端 AI 或內部知識助理，但 AI 應用的成效往往取決於一件事：

**企業內部資料是否能被 AI 讀取、整理與使用。**

對許多長期使用 Notes/Domino 的企業而言，大量關鍵資料仍保存在 Domino 資料庫中。這些資料可能包含：

* 企業知識文件
* KM 文件
* 作業規範與 SOP
* 內部公告
* 流程申請紀錄
* 技術文件
* 附件檔案
* 表格式資料
* 長期累積的業務知識

若要讓 AI 使用這些資料，通常不一定需要立即重建既有系統，也不一定需要大幅修改 Domino 應用程式。

更實際的做法是：
**先建立一個穩定、可設定、可控管範圍的 Domino 資料導出機制。**

---

## 與 Domino IQ 及企業既有 AI 架構互補

HCL Domino IQ 是 Domino 在企業 AI 應用上的重要發展，協助企業在 Domino 環境中導入更安全、可控的 AI 使用模式。

然而，企業在實際導入 AI 時，常見情境不一定只有單一路線。有些企業會評估 Domino IQ，有些企業則已由 AI 部門建置地端 LLM、企業知識助理、內部 AI Agent 或其他 AI 應用架構。

Domino 知識資料導出工具的定位，是協助企業將既有 Notes/Domino 文件與附件整理成 AI 程式可讀取的資料來源，作為 Domino 資料與企業 AI 應用之間的橋接工具。

不論企業後續採用 Domino IQ，或是由內部 AI 團隊使用既有 LLM、知識檢索架構或其他 AI 應用，本工具皆可作為 Domino 知識資料前置整理與導出的輔助機制。

---

## 產品特色

### 1. 不需修改既有應用程式

透過設定方式導出 Domino 資料，不需大幅修改既有 Notes/Domino 應用程式設計，降低導入門檻與系統異動風險。

---

### 2. 將 Domino 文件轉為 AI 程式可讀取的資料來源

可將 Notes/Domino 文件內容導出為適合 AI 程式讀取的資料格式，協助企業 AI 團隊後續進行摘要、分類、問答、知識整理或其他 LLM 應用。

---

### 3. 支援增量更新，降低資料維護負擔

可依文件更新日期進行比對，讓後續處理流程僅需針對新增或異動文件進行更新，減少重複處理資料的成本。

---

### 4. Domino 系統管理員即可維護設定

透過設定化方式管理資料來源與導出範圍，減少每次調整都需由開發人員修改程式的情況。

---

### 5. 可選擇資料導出範圍

可依需求指定不同資料導出方式，例如：

* 指定 View
* 全部文件
* 搜尋公式
* 指定文件

協助企業依照資料性質、機密性與應用情境，選擇合適的導出範圍。

---

### 6. 支援 Notes/Domino 6.0 以上版本

適用於長期使用 Notes/Domino 的企業環境，協助不同版本的 Domino 資料逐步接軌企業 AI 應用需求。

---

### 7. 文件與附件可分別導出

Notes 文件內容可轉出為 HTML 網頁格式，附件則可獨立匯出至指定目錄，方便後續由企業 AI 程式、文件處理流程或知識系統進一步使用。

---

### 8. 提升 AI 讀取文件內容的完整性

針對 Notes 文件中常見的表格、小節與內容區塊，可進行展開與整理，讓 AI 程式能讀取較完整的文件內容，降低資料遺漏的可能性。

---

### 9. 可依企業需求客製化調整

可依企業既有 Domino 架構、資料庫設計、AI 導入方式與資料治理需求，提供在地化客製調整。

---

## 適用情境

Domino 知識資料導出工具適合以下情境：

* 企業已導入或準備導入地端 LLM
* AI 部門需要讀取 Domino 既有知識資料
* 希望將 Domino KM 文件提供給 AI 程式使用
* 希望在不修改既有 Domino AP 的情況下進行 AI 資料準備
* 希望將 Domino 文件與附件整理成可供後續處理的資料來源
* 希望逐步評估 Domino 資料與企業 AI 應用的整合方式
* 希望搭配 Domino IQ 或既有企業 AI 架構，擴大 Domino 知識資料的使用範圍

---

## 可延伸應用方向

本工具主要負責 Domino 資料導出與內容整理，企業可依既有 AI 架構進一步應用於：

* LLM 文件摘要
* 知識問答
* 文件分類
* 內容整理
* 企業知識助理
* 內部 AI Agent
* 知識檢索流程
* RAG 或向量資料庫建置前的資料準備

實際整合方式可依企業 AI 架構與資料治理需求進一步評估。

---

## 讓 Domino 不只是既有系統

## 更成為企業 AI 時代的重要知識資產

Notes/Domino 長年承載企業重要資料與知識流程。
在 AI 導入的過程中，這些既有資料不應被忽略，更不一定需要透過大規模重建才能被使用。

透過 Domino 知識資料導出工具，企業可在保留既有 Domino 系統穩定運作的前提下，逐步釋放多年累積的 Domino 知識價值，並提供給 AI 程式、LLM 應用、Domino IQ 或企業既有 AI 架構使用。

---

## 歡迎與我們聯繫

若您的企業正在評估生成式 AI、地端 LLM、企業知識助理、Domino IQ 或既有 Domino 資料整合應用，歡迎與我們聯繫。

我們可協助您評估：

* 既有 Domino 資料庫是否適合導出
* 哪些文件與附件可作為 AI 資料來源
* 如何設定合適的資料導出範圍
* 如何降低對既有系統的影響
* 如何配合企業 AI 團隊或 Domino IQ 應用進行後續規劃
