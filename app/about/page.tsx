import Image from "next/image";
import Link from "next/link";
import Shell from "@/components/global/Shell";
import heroImage from "@public/assets/home/bg2.webp";
import industryImage from "@public/assets/home/gallery10.webp";
import learningImage from "@public/assets/home/work1.webp";
import styles from "./About.module.css";

const pillars = [
  { letter: "I", title: "Intelligence", text: "We nurture intelligent thinkers—people who ask better questions, understand problems before solving them, and use technology thoughtfully. Intelligence is the foundation of every great creator, marketer, designer, entrepreneur, and leader." },
  { letter: "D", title: "Design", text: "Design is not just aesthetics. It is a way of thinking: creating meaningful experiences, solving problems, and communicating ideas with clarity, purpose, and impact." },
  { letter: "E", title: "Entrepreneurship", text: "We build people who think like owners—who take initiative, identify opportunities, create value, lead projects, and embrace responsibility wherever they work." },
  { letter: "A", title: "Artistry", text: "Artistry gives creativity meaning. It is the ability to tell stories that move people, shape culture, communicate emotion, and create experiences people remember." },
];

const experience = ["Live projects", "Industry briefs", "Practical workshops", "Working mentors", "Portfolio development", "Team collaboration", "Reviews & feedback", "Creative challenges", "Professional workflows", "Industry immersion"];

export default function Page() {
  return (
    <Shell>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>ABOUT IDEA SCHOOL</p>
            <h1>Creating<br /><em>Future Ready</em><br />PROs.</h1>
            <p className={styles.heroIntro}>A Creative Professional School built to prepare individuals for the future of the creative economy.</p>
          </div>
          <div className={styles.heroVisual}>
            <Image src={heroImage} alt="IDEA School creative community" fill priority sizes="(max-width: 800px) 100vw, 52vw" />
            <div className={styles.heroShade} />
            <p>Creativity. Technology.<br />Business. Human understanding.</p>
          </div>
        </section>

        <section className={styles.editorial}>
          <div className={styles.editorialInner}>
            <p className={styles.index}>01 — WHY WE EXIST</p>
            <h2>The world changed.<br />Education didn’t keep pace.</h2>
            <div className={styles.twoColCopy}>
              <p>Technology is evolving. Creative industries are transforming. New careers are emerging, while traditional roles are being redefined. The way we learn, create, communicate, and work has fundamentally changed.</p>
              <div>
                <p>Most institutions continue to teach tools. The industry, however, is looking for professionals who can think, adapt, collaborate, solve problems, and create meaningful impact.</p>
                <p className={styles.strong}>That is why IDEA School was founded—not as another institute that teaches software.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.imageStory}>
          <Image src={industryImage} alt="Creative professionals collaborating" fill sizes="100vw" />
          <div className={styles.imageOverlay} />
          <div className={styles.imageStoryCopy}>
            <p className={styles.index}>02 — OUR BELIEF</p>
            <h2>We Build Professionals,<br />Not Just Portfolios.</h2>
            <p>At IDEA School, learning goes far beyond mastering tools. We develop the skills AI can’t replace: creativity, critical thinking, storytelling, design thinking, communication, leadership, ownership, adaptability, and the ability to solve real problems.</p>
            <p>Software will change. These are the capabilities that shape exceptional professionals.</p>
          </div>
        </section>

        <section className={styles.origin}>
          <div className={styles.originTitle}>
            <p className={styles.index}>03 — OUR ORIGIN</p>
            <h2>Born from the<br />industry, not<br />a classroom.</h2>
          </div>
          <div className={styles.originBody}>
            <p>While working with startups, global brands, creators, and businesses, we noticed a recurring challenge. The problem wasn’t a lack of talented people. It was a lack of industry-ready professionals.</p>
            <div className={styles.comparisons}>
              <p><span>Many knew software.</span><strong>Few understood why they were creating.</strong></p>
              <p><span>Many could edit.</span><strong>Few could tell compelling stories.</strong></p>
              <p><span>Many could design.</span><strong>Few could solve business problems.</strong></p>
              <p><span>Many completed courses.</span><strong>Few were ready for real clients and expectations.</strong></p>
            </div>
            <p className={styles.bridge}>The gap wasn’t education.<br /><em>The gap was transformation.</em></p>
          </div>
        </section>

        <section className={styles.future}>
          <p className={styles.index}>04 — THE FUTURE</p>
          <h2>The future belongs to<br /><em>multi-disciplinary</em> professionals.</h2>
          <div className={styles.futureGrid}>
            <p>A filmmaker needs branding.</p><p>A marketer needs storytelling.</p><p>A designer needs business awareness.</p><p>A creator needs strategy.</p><p>An entrepreneur needs communication.</p><p>A visual artist needs technology.</p>
          </div>
          <p className={styles.futureNote}>Tomorrow’s professionals won’t be defined by a single skill, but by their ability to connect creativity, technology, business, and human understanding.</p>
        </section>

        <section className={styles.philosophy}>
          <div className={styles.philosophyHead}>
            <p className={styles.index}>05 — OUR FOUNDATION</p>
            <h2>The IDEA<br />Philosophy</h2>
            <p>Everything we build is rooted in four foundational pillars.</p>
          </div>
          <div className={styles.pillars}>
            {pillars.map((pillar) => <article key={pillar.letter} className={styles.pillar}><span>{pillar.letter}</span><div><h3>{pillar.title}</h3><p>{pillar.text}</p></div></article>)}
          </div>
        </section>

        <section className={styles.learning}>
          <div className={styles.learningImage}><Image src={learningImage} alt="Hands-on creative learning at IDEA School" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
          <div className={styles.learningCopy}>
            <p className={styles.index}>06 — HOW WE LEARN</p>
            <h2>Real confidence comes from real experience.</h2>
            <p>Students don’t grow by simply consuming information. They grow by applying it. Every program is designed around experience, practice, mentorship, feedback, and execution.</p>
            <p>Students don’t just watch—they build. They don’t just submit assignments—they solve challenges. They collaborate, communicate, and create work with purpose.</p>
          </div>
        </section>

        <section className={styles.experience}>
          <div><p className={styles.index}>07 — BEYOND THE CLASSROOM</p><h2>Learning that mirrors the real world.</h2><p>Education should prepare students for the workplace—not surprise them when they enter it.</p></div>
          <ol>{experience.map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
        </section>

        <section className={styles.tech}>
          <p className={styles.index}>08 — OUR POINT OF VIEW</p>
          <h2>Technology is an enabler.<br /><em>Not the destination.</em></h2>
          <p>We embrace emerging technologies because they make creative professionals more capable. But tools will continue to change. The ability to think clearly, communicate effectively, tell meaningful stories, solve complex problems, and create value will remain timeless.</p>
        </section>

        <section className={styles.visionMission}>
          <article><span>OUR VISION</span><h2>Shape the future of the creative economy.</h2><p>To become the most respected Creative Professional School, nurturing confident, adaptable, ethical individuals who create impact through intelligence, creativity, innovation, and meaningful execution.</p></article>
          <article><span>OUR MISSION</span><h2>Bridge education and industry.</h2><p>To create immersive learning experiences that combine creativity, technology, business understanding, and practical execution—so every learner graduates with confidence, perspective, discipline, and the ability to create meaningful impact.</p></article>
        </section>

        <section className={styles.promise}>
          <p className={styles.index}>09 — OUR PROMISE</p>
          <h2>We don’t promise shortcuts.<br />We promise <em>transformation.</em></h2>
          <div><p>An environment that challenges students to think bigger, create better, and grow continuously.</p><p>Mentorship from professionals who actively build, create, and solve.</p><p>Learning rooted in practice, not theory alone.</p></div>
        </section>

        <section className={styles.cta}>
          <p>IDEA SCHOOL</p>
          <h2>Don’t just keep up<br />with the future.<br /><em>Help create it.</em></h2>
          <p className={styles.ctaCopy}>Become a professional who can adapt to change, embrace technology, think creatively, communicate effectively, solve meaningful problems, and create lasting value.</p>
          <Link href="/apply">Start your journey <span>↗</span></Link>
        </section>
      </div>
    </Shell>
  );
}
