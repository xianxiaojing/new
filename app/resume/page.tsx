import Link from "next/link";

export const metadata = {
  title: "工作经历｜张娴静",
  description: "金融产品体验设计师张娴静的工作经历与专业能力。",
};

export default function ResumePage(){
  return <main className="resume-page">
    <header className="resume-nav"><Link className="brand" href="/">ZXJ<span>®</span></Link><Link href="/">← 返回作品集</Link></header>
    <section className="resume-hero"><p className="eyebrow">WORK EXPERIENCE · 2010—2026</p><h1>张娴静<br/><em>金融产品体验设计师</em></h1><div className="resume-intro"><p>14+ 年产品与体验设计经历，聚焦信贷、授信承接与会员商业化，通过用户洞察、复杂流程重构与数据验证，让设计同时回应用户体验与业务增长。</p><div className="resume-contact"><a href="tel:13051328631">130 5132 8631 ↗</a><a href="mailto:newdongdong666@163.com">newdongdong666@163.com ↗</a><span>江南大学 · 工业设计 · 2006—2010</span></div></div></section>
    <section className="resume-block"><div className="section-no">01 / WORK EXPERIENCE</div><h2>工作经历</h2><div className="resume-list"><article><time>2022.04—2026.06</time><div><h3>UI 设计师</h3><p>桔子数科 · 金融</p></div></article><article><time>2020.06—2022.04</time><div><h3>交互设计师</h3><p>数通云科 · SaaS</p></div></article><article><time>2016.05—2019.07</time><div><h3>产品设计主管</h3><p>教育云 · 信息化</p></div></article><article><time>2012.09—2016.05</time><div><h3>产品设计师</h3><p>汽车达人 · 社区</p></div></article><article><time>2010.07—2012.06</time><div><h3>视觉设计师</h3><p>研祥集团 · 游戏</p></div></article></div></section>
    <section className="resume-block resume-dark"><div className="section-no">02 / CAPABILITIES</div><h2>专业能力</h2><div className="cap-grid"><article><b>01</b><h3>复杂业务转译</h3><p>梳理信贷规则、用户旅程与关键决策节点，将复杂逻辑转化为清晰可用的体验。</p></article><article><b>02</b><h3>数据驱动迭代</h3><p>定义埋点与转化口径，通过行为反馈和业务指标定位问题、验证方案。</p></article><article><b>03</b><h3>商业化体验</h3><p>兼顾营销效率、用户控制权和合规边界，完成从策略到上线复盘的闭环。</p></article><article><b>04</b><h3>设计协作落地</h3><p>使用 Figma、Codex 与 Claude 工具，推进组件复用、规范建设和研发交付。</p></article></div></section>
    <footer className="resume-footer"><p>期待与你交流</p><h2>张娴静<br/><small>13051328631</small></h2><Link href="/#works">查看项目案例 ↗</Link></footer>
  </main>
}
