import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Varnikumar</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          More than just a title — let’s dive deeper!
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a passionate Full-Stack Engineer and Generative AI developer with a knack for building robust, scalable applications. My core expertise spans the modern web ecosystem — particularly the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js — paired with hands-on experience in architecting intelligent systems using modern AI technologies.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I specialize in building intelligent AI-driven applications using LLMs, LangChain, RAG (Retrieval-Augmented Generation), and Vector Databases, seamlessly integrating them into full-stack ecosystems. Additionally, I have a solid grasp of System Design — covering both Low-Level Design (LLD) and High-Level Design (HLD) — ensuring solutions are modular, fault-tolerant, and built to scale.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Beyond writing code, I thrive in collaborative environments, continuously exploring cutting-edge tech, tackling challenging engineering problems, and building impactful digital products that create real value for users.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
