import Link from "next/link";

export const metadata = {
  title: "个人履历｜张娴静",
  description: "金融产品体验设计师张娴静的个人履历与专业能力。",
};

export default function ResumePage(){
  return <main className="resume-page">
    <header className="resume-nav"><Link className="brand" href="/">ZXJ<span>®</span></Link><Link href="/">← 返回作品集</Link></header>
    <section className="resume-hero"><p className="eyebrow">PROFILE · 2022—2026</p><h1>张娴静<br/><em>金融产品体验设计师</em></h1><div className="resume-intro"><p>聚焦信贷、授信承接与会员商业化，通过用户洞察、复杂流程重构与数据验证，让设计同时回应用户体验与业务增长。</p><a href="tel:13051328631">13051328631 ↗</a></div></section>
    <section className="resume-block"><div className="section-no">01 / EXPERIENCE</div><h2>关键项目履历</h2><div className="resume-list"><article><time>2025—2026</time><div><h3>桔耀会员商业化增长</h3><p>参与前置商务阶段售前营销策略、需求分析、业务方案、界面交互与数据复盘。第一期单月营收超目标，第二期首月至次月续费率约 70%+。</p></div></article><article><time>2024 Q1—Q3</time><div><h3>拒量导流授信流程优化</h3><p>面向自营信贷被拒用户，重构第三方授信承接与信息补充流程。两轮迭代累计提升授信提交率 7.11 个百分点。</p></div></article><article><time>2022 Q2—Q4</time><div><h3>核心借款与会员营销流程优化</h3><p>将借款路径由三步压缩为一步，定义关键用户行为与服务端埋点；提交借款转化率由 11.3% 提升至 22.14%。</p></div></article></div></section>
    <section className="resume-block resume-dark"><div className="section-no">02 / CAPABILITIES</div><h2>专业能力</h2><div className="cap-grid"><article><b>01</b><h3>复杂业务转译</h3><p>梳理信贷规则、用户旅程与关键决策节点，将复杂逻辑转化为清晰可用的体验。</p></article><article><b>02</b><h3>数据驱动迭代</h3><p>定义埋点与转化口径，通过行为反馈和业务指标定位问题、验证方案。</p></article><article><b>03</b><h3>商业化体验</h3><p>兼顾营销效率、用户控制权和合规边界，完成从策略到上线复盘的闭环。</p></article><article><b>04</b><h3>设计协作落地</h3><p>使用 Figma、MasterGo 与 Adobe 工具，推进组件复用、规范建设和研发交付。</p></article></div></section>
    <footer className="resume-footer"><p>期待与你交流</p><h2>张娴静<br/>13051328631</h2><Link href="/#works">查看项目案例 ↗</Link></footer>
  </main>
}
