"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {id:"01",title:"核心借款链路体验升级",subtitle:"用流程重构推动信贷转化",metric:"11.3% → 22.14%",tag:"信贷转化 · 2022 Q2—Q4",image:"/works/loan-flow.png",fullImage:"/cases/01-loan.png",brief:"将输入金额、选择期数、确认借款三步合并为一步决策；金额默认展示系统最高可借额度，期数变化时利率与还款信息实时反馈。",role:"交互流程优化、数据建设",result:"以 2022 Q2 的 11.3% 作为历史基准；流程优化上线后，同口径提交借款转化率达到 22.14%。"},
  {id:"02",title:"拒量导流授信流程优化",subtitle:"承接被拒用户的二次价值",metric:"累计 +7.11pp",tag:"授信承接 · 2024 Q1—Q3",image:"/works/credit-routing.png",fullImage:"/cases/02-credit.png",brief:"在明确第三方服务主体与个人信息授权的前提下，复用已有资料，仅展示仍需补充的信息，并重构为两组连续表单。",role:"交互流程优化",result:"1.0 表单优化提升 4.46pp；2.0 新增补充授信入口再提升 2.65pp。"},
  {id:"03",title:"桔耀会员商业化增长",subtitle:"独立权益场景的体验与增长",metric:"M1→M2 续费 70%+",tag:"会员商业化 · 2025—2026",image:"/works/membership.png",fullImage:"/cases/03-membership.png",brief:"从售前营销策略、需求分析到会员落地页与权益楼层设计，以清晰价值表达提升屏幕效率与购买判断。",role:"业务方案、界面交互、数据复盘",result:"单月营收超目标；续费率 70%+，平均当日退款比例约 2%，M2 续费订单约 1%。"}
];

export default function Home(){
  const [scroll,setScroll]=useState(0); const [active,setActive]=useState<(typeof projects)[number]|null>(null);
  useEffect(()=>{const fn=()=>setScroll(window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight)); fn(); addEventListener("scroll",fn,{passive:true}); return()=>removeEventListener("scroll",fn)},[]);
  return <main style={{"--progress":scroll} as React.CSSProperties}>
    <div className="scene" aria-hidden="true"><div className="halo h1"/><div className="halo h2"/><div className="cube"><i>UX</i><i>DATA</i><i>FIN</i><i>AI</i><i>UI</i><i>+</i></div><div className="beam"/></div>
    <header><a className="brand" href="#top">ZXJ<span>®</span></a><nav><a href="#about">关于</a><a href="#experience">业绩</a><a href="#works">项目</a><a href="/resume">工作经历</a></nav><a className="contact" href="tel:13051328631">联系我 ↗</a></header>
    <section className="hero" id="top"><p className="eyebrow">SENIOR UI/UX DESIGNER · FINTECH</p><h1>让复杂金融流程<br/>变得简单、可信、<em>有效。</em></h1><p className="lead">张娴静｜金融产品体验设计师<br/>以用户行为与业务数据，驱动信贷转化与商业化体验。</p><a className="down" href="#about">向下探索 <b>↓</b></a></section>
    <section id="about" className="panel"><div className="section-no">01 / ABOUT</div><h2>我不只设计界面，<br/>也设计业务结果。</h2><div className="about-grid"><p>专注金融与信贷产品体验，将复杂业务规则、合规要求与用户诉求，转化为清晰的产品路径。</p><div className="skills"><span>复杂流程梳理</span><span>数据驱动迭代</span><span>商业化设计</span><span>设计工程化</span></div></div></section>
    <section id="experience" className="panel"><div className="section-no">02 / EXPERIENCE</div><h2>在真实业务里，<br/>持续验证设计价值。</h2><div className="timeline"><article><b>2022 Q2—Q4</b><h3>核心借款转化</h3><p>重构三步借款流程，补齐关键行为与服务端埋点；11.3% 为 2022 Q2 历史基准。</p></article><article><b>2024 Q1—Q3</b><h3>拒量授信承接</h3><p>两轮表单与入口迭代，改善被拒用户二次申请体验。</p></article><article><b>2025—2026</b><h3>会员商业化</h3><p>参与策略、方案、设计与复盘，搭建独立会员权益场景。</p></article></div></section>
    <section id="works" className="works"><div className="section-no">03 / SELECTED WORKS</div><h2>三个项目，三种<br/>增长问题的解法。</h2>{projects.map(p=><button className="project" key={p.id} onClick={()=>setActive(p)}><span className="pid">{p.id}</span><div><small>{p.tag}</small><h3>{p.title}</h3><p>{p.subtitle}</p></div><strong>{p.metric}</strong><Image src={p.image} alt="" width={520} height={300}/><span className="arrow">↗</span></button>)}</section>
    <section className="visuals"><div><div className="section-no">04 / MORE WORKS</div><h2>视觉表达，也是<br/>产品信任的一部分。</h2><p>营销活动、应用市场与数字化产品界面节选。</p></div><div className="stack"><Image src="/works/mall.png" alt="商城业务视觉设计" width={720} height={450}/><Image src="/works/app-store.png" alt="应用市场视觉设计" width={720} height={450}/></div></section>
    <footer><p>THANKS FOR WATCHING</p><h2>一起做出更好的<br/>金融产品体验。</h2><a href="tel:13051328631">张娴静 · 13051328631 ↗</a><small>© 2026 ZHANG XIANJING</small></footer>
    {active&&<div className="modal" onClick={()=>setActive(null)}><article onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setActive(null)}>关闭 ×</button><small>{active.tag}</small><h2>{active.title}</h2><Image className="case-cover" src={active.image} alt={active.title} width={1200} height={700}/><div className="detail"><p><b>设计动作</b>{active.brief}</p><p><b>我的角色</b>{active.role}</p><p><b>业务结果</b>{active.result}</p></div><div className="case-long"><p>向下阅读完整项目复盘 ↓</p><Image src={active.fullImage} alt={active.title+"完整项目复盘"} width={1440} height={9000}/></div></article></div>}
  </main>
}
