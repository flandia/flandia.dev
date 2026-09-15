import {
  Entry,
  EntryBadges,
  EntryDescription,
  EntryDetails,
  EntrySubtitle,
  EntryTime,
  EntryTitle,
} from "@/components/Entry";
import {
  Project,
  ProjectBadges,
  ProjectCards,
  ProjectDescription,
  ProjectDetails,
  ProjectLabel,
  ProjectTitle,
} from "@/components/Project";
import {
  SubEntry,
  SubEntryBadges,
  SubEntryTime,
  SubEntryTitle,
} from "@/components/sub-entry";
import { Badges, DarkBadge, LightBadge } from "@/components/ui/badge";
import { md } from "@/components/ui/rich-content";
import { Section, SectionText, SectionTitle } from "@/components/ui/section";
import { Friends } from "@/data/Friends";

const Body = () => (
  <>
    <Section>
      <SectionTitle>About</SectionTitle>
      <SectionText>{md`
        I am Yu Hong Harry Li and I go by Harry; I also go by Flandia online.

        I'm interested in a broad range of topics in computer science. My research interests focus on TCS B, particularly programming languages, as well as software engineering and systems. I also have experience in full-stack software engineering, data mining, analysis, and visualization.
      `}</SectionText>
    </Section>
    <Section>
      <SectionTitle>Education</SectionTitle>
      <Entry>
        <EntryTitle>Hong Kong University of Science and Technology</EntryTitle>
        <EntrySubtitle>
          Bachelor of Engineering in Computer Science
        </EntrySubtitle>
        <EntryTime>2023 - 2027</EntryTime>
        <EntryDescription>{md`
          GPA: **4.215/4.300**
          Class Rank: **1/170**
        `}</EntryDescription>
        <EntryDetails>
          {md`
            As of March 13, 2026:

            GPA: 4.211/4.300
            Major GPA: 4.216/4.300
            Class Rank: 1/170

            Earned A+ grades in **all** Computer Science courses.
          `}
          <SubEntry>
            <SubEntryTitle>COMP 4021 Internet Computing</SubEntryTitle>
            <SubEntryTime>2025-26 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 3721 Theory of Computation</SubEntryTitle>
            <SubEntryTime>2025-26 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 3111H Honors Software Engineering
            </SubEntryTitle>
            <SubEntryTime>2025-26 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 4431 Multimedia Computing</SubEntryTitle>
            <SubEntryTime>2024-25 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 4121 Modern Compiler Construction
            </SubEntryTitle>
            <SubEntryTime>2024-25 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 3711 Design and Analysis of Algorithms
            </SubEntryTitle>
            <SubEntryTime>2024-25 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 3021 Java Programming</SubEntryTitle>
            <SubEntryTime>2024-25 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 3031 Principle of Programming Languages
            </SubEntryTitle>
            <SubEntryTime>2024-25 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 3511 Operating Systems</SubEntryTitle>
            <SubEntryTime>2024-25 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2711 Discrete Mathematical Tools for Computer Science
            </SubEntryTitle>
            <SubEntryTime>2024-25 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 2611 Computer Organization</SubEntryTitle>
            <SubEntryTime>2023-24 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2012 Object-Oriented Programming and Data Structures
            </SubEntryTitle>
            <SubEntryTime>2023-24 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              COMP 2211 Exploring Artificial Intelligence
            </SubEntryTitle>
            <SubEntryTime>2023-24 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>COMP 2011 Programming with C++</SubEntryTitle>
            <SubEntryTime>2023-24 Fall</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
              <LightBadge>1st</LightBadge>
            </SubEntryBadges>
          </SubEntry>
        </EntryDetails>
      </Entry>
      <Entry>
        <EntryTitle>University of Pennsylvania</EntryTitle>
        <EntrySubtitle>Exchange Program in Engineering School</EntrySubtitle>
        <EntryTime>2025-26 Spring</EntryTime>
        <EntryDescription>GPA: **4.00/4.00**</EntryDescription>
        <EntryDetails>
          {md`
            Nominated by HKUST School of Engineering for an exchange at UPenn in 2025-26 Spring.
          `}
          <SubEntry>
            <SubEntryTitle>CIS 5450 Big Data Analytics</SubEntryTitle>
            <SubEntryTime>2025-26 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              CIS 4480/5480 Operating Systems Design and Implementation
            </SubEntryTitle>
            <SubEntryTime>2025-26 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              CIS 3990 Intermediate Computer Systems
            </SubEntryTitle>
            <SubEntryTime>2025-26 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A+</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              CIS 1921 Solving Hard Problems in Practice
            </SubEntryTitle>
            <SubEntryTime>2025-26 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>CIS 1905 Rust Programming</SubEntryTitle>
            <SubEntryTime>2025-26 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A</LightBadge>
            </SubEntryBadges>
          </SubEntry>
          <SubEntry>
            <SubEntryTitle>
              CIS 1904 Introduction to Haskell Programming
            </SubEntryTitle>
            <SubEntryTime>2025-26 Spring</SubEntryTime>
            <SubEntryBadges>
              <LightBadge>A</LightBadge>
            </SubEntryBadges>
          </SubEntry>
        </EntryDetails>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Awards & Achievements</SectionTitle>
      <Entry>
        <EntryTitle>Talent Development Scholarship</EntryTitle>
        <EntrySubtitle>HKSAR Government Scholarship Fund</EntrySubtitle>
        <EntryTime>2025-26</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Reaching Out Award</EntryTitle>
        <EntrySubtitle>HKSAR Government Scholarship Fund</EntrySubtitle>
        <EntryTime>2025-26</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Dean's List</EntryTitle>
        <EntrySubtitle>School of Engineering, HKUST</EntrySubtitle>
        <EntryTime>2025-26 Fall</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>IET Prize 2025</EntryTitle>
        <EntrySubtitle>IET Hong Kong</EntrySubtitle>
        <EntryTime>2025-26</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Fung Scholarships</EntryTitle>
        <EntrySubtitle>Victor and William Fung Foundation</EntrySubtitle>
        <EntryTime>2025-26</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Best UGTA Award</EntryTitle>
        <EntrySubtitle>
          Department of Computer Science and Engineering, HKUST
        </EntrySubtitle>
        <EntryTime>2024-25</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>AEON Credit Service (Asia) Scholarships</EntryTitle>
        <EntrySubtitle>
          Hong Kong University of Science and Technology
        </EntrySubtitle>
        <EntryTime>2024-25, 2025-26</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Mr & Mrs Poon Kuen Seng Memorial Scholarships</EntryTitle>
        <EntrySubtitle>
          Department of Computer Science and Engineering, HKUST
        </EntrySubtitle>
        <EntryTime>2024-25, 2025-26</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Dean's List</EntryTitle>
        <EntrySubtitle>School of Engineering, HKUST</EntrySubtitle>
        <EntryTime>2024-25 Fall, Spring</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>
          University's Scholarship Scheme for Continuing Undergraduate Students
        </EntryTitle>
        <EntrySubtitle>
          Hong Kong University of Science and Technology
        </EntrySubtitle>
        <EntryTime>2024-25, 2025-26</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>
          HKUST Alumni Endowment Fund High Flyers Program Scholarship
        </EntryTitle>
        <EntrySubtitle>
          Hong Kong University of Science and Technology
        </EntrySubtitle>
        <EntryTime>2023-24</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Best UGTA Award - Honorable Mention</EntryTitle>
        <EntrySubtitle>
          Department of Computer Science and Engineering, HKUST
        </EntrySubtitle>
        <EntryTime>2023-24</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Dean's List</EntryTitle>
        <EntrySubtitle>School of Engineering, HKUST</EntrySubtitle>
        <EntryTime>2023-24 Fall, Spring</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>University Admissions Scholarship</EntryTitle>
        <EntrySubtitle>
          Hong Kong University of Science and Technology
        </EntrySubtitle>
        <EntryTime>2023</EntryTime>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Research Experiences</SectionTitle>
      <Entry>
        <EntryTitle>Undergraduate Thesis</EntryTitle>
        <EntrySubtitle>Flow-Based Program Optimization</EntrySubtitle>
        <EntryTime>2026 - 2027</EntryTime>
        <EntryBadges>
          <LightBadge>Ongoing</LightBadge>
        </EntryBadges>
        <EntryDescription>{md`
          COMP 4981H · Project LP4. Advised by [Prof. Lionel Parreaux](https://lptk.github.io/about.html).

          I'm exploring flow analysis for program optimization in MLscript. My current focus is tracking effects and mutable accesses so that optimizations preserve program behavior.
        `}</EntryDescription>
        <EntryDetails>{md`
          The prototype tracks whether a function may raise an effect. Next, I plan to track mutable reads and use this information to make transformations such as eta expansion safe.

          Other directions I'm considering include reusable analysis results, constructor/destructor analysis, deforestation, and dead-code elimination.
        `}</EntryDetails>
      </Entry>
      <Entry>
        <EntryTitle>Research Collaboration</EntryTitle>
        <EntrySubtitle>Opportunistic Parallelism</EntrySubtitle>
        <EntryTime>Since 2025-26 Spring</EntryTime>
        <EntryBadges>
          <LightBadge>Ongoing</LightBadge>
        </EntryBadges>
        <EntryDescription>{md`
          I work on the project PopPy at the University of Pennsylvania with [Prof. Osbert Bastani](https://obastani.github.io/) and [Dr. Stephen Mell](https://mell.ac/), extending [Opportunistically Parallel Lambda Calculus](https://arxiv.org/pdf/2405.11361.pdf) (Opal). I joined the collaboration in Spring 2026 and also took part in a summer research internship.

          I extended Opal with control-flow constructs (early-\`return\`, \`break\`, and \`continue\`) by formalizing their syntax and semantics in the Bezoar intermediate language and designing a source-to-source compilation from "Bezoar with control-flow" to core Bezoar.

          I'm currently working on designing and implementing mutation support for PopPy, with the broader goal of supporting arbitrary side-effects. The plan includes control-flow analysis and connects with my thesis on flow-based program optimization.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Undergraduate Research Opportunities Program</EntryTitle>
        <EntrySubtitle>
          Programming Language Design and Implementation
        </EntrySubtitle>
        <EntryTime>2024-25 Fall, Spring, Summer. 2025-26 Fall</EntryTime>
        <EntryDescription>{md`
          Advised by [Prof. Lionel Parreaux](https://lptk.github.io/about.html), I worked on _MLscript_, our lab's programming language and compiler:

          - **Module system:** worked on a minimal module system to support ad hoc polymorphism and explored a type-theoretic formalization.
          - **Type classes:** implemented module-based type classes, keeping compilation separate from type checking and inference.
          - **Resolution pass:** developed a compiler pass to resolve references, selections, and applications without type checking, supporting modules and type classes.
          - **Control-flow analysis:** explored how values flow through a program, with the longer-term goal of relaxing module restrictions and supporting ad hoc polymorphism.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>
          Undergraduate Research Opportunities Program (Tasting Stream)
        </EntryTitle>
        <EntrySubtitle>
          Commonsense Reasoning with Knowledge Graphs
        </EntrySubtitle>
        <EntryTime>2023-24 Summer</EntryTime>
        <EntryDescription>{md`
          I was advised by [Prof. Yangqiu Song](https://www.cse.ust.hk/~yqsong/) and PhD candidate [Zihao Wang](https://zihao-wang.github.io/). I studied a postgraduate course about graph machine learning, graph neural networks, and knowledge graphs. I participated in a research project about logic reasoning over knowledge graphs, where I gained hands-on experience in the research field.
        `}</EntryDescription>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Work Experiences</SectionTitle>
      <Entry>
        <EntryTitle>Independent Work Project</EntryTitle>
        <EntrySubtitle>CRS Request System</EntrySubtitle>
        <EntryTime>2025-26 Fall, Winter</EntryTime>
        <EntryDescription>{md`
          Advised by [Prof. Desmond Tsoi](https://www.cse.ust.hk/~desmond/). The system serves **COMP 1023, COMP 2011, COMP 2012, and COMP 2211**, with **over 2,000 active users**.

          - Built student and instructor workflows for class swaps, absences, and assignment deadline extensions.
          - Designed the application with TypeScript, Zod, tRPC, MongoDB, and React/Next.js.

          [Project repository](https://github.com/HKUST-CRS/crs).
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Independent Work Project</EntryTitle>
        <EntrySubtitle>
          AI Agents as Dynamic, Adaptive Language Assessors: Building a
          Patentable App
        </EntrySubtitle>
        <EntryTime>2024-25 Spring, 2025-26 Fall</EntryTime>
        <EntryDescription>{md`
          Co-advised by [Prof. Desmond Tsoi](https://www.cse.ust.hk/~desmond/) and [Prof. Mei Yi Angel Lin](https://www.eduhk.hk/en/experts/professor-lin-mei-yi-angel) at the Education University of Hong Kong.

          - Developed an app that uses multimodal language models to help learners practice English and assess their language skills.
          - Supported Mandarin- and Cantonese-speaking learners with translation assistance during English conversations.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Department of Computer Science, HKUST</EntryTitle>
        <EntrySubtitle>Undergraduate Teaching Assistant</EntrySubtitle>
        <EntryTime>2023-24 Spring - Now</EntryTime>
        <EntryDescription>{md`
          As **Main TA for COMP 1023**, I teach the course's tutorial sections. In other UGTA roles, I help deliver tutorials and labs, prepare course materials, and answer students' questions. My winter and summer appointments focus primarily on preparing assignments, tutorial notes, lecture notes, and self-tests.

          - **COMP 1023 - Introduction to Python Programming**
            Course coordinator: [Prof. Desmond Tsoi](https://www.cse.ust.hk/~desmond/).
            Main TA: Fall 2026, Fall 2025; UGTA: Summer 2025, Summer 2024.
          - **COMP 2011 - C++ Programming**
            Course coordinator: [Prof. Brian Mak](https://cse.hkust.edu.hk/faculty/mak/).
            UGTA: Spring 2025, Winter 2025, Spring 2024.
          - **COMP 2012 - Object-Oriented Programming and Data Structures**
            Course coordinator: [Prof. Brian Mak](https://cse.hkust.edu.hk/faculty/mak/).
            UGTA: Winter 2026, Fall 2024.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>GREAT Smart Cities Institute, HKUST</EntryTitle>
        <EntrySubtitle>Summer Internship</EntrySubtitle>
        <EntryTime>Summer 2024 - approx. Fall 2025</EntryTime>
        <EntryDescription>{md`
          - Built computer-vision tools to automate traffic-data processing and analysis.
          - Integrated the results with GIS software for visualization and spatial analysis.
          - Analyzed traffic patterns and improved the team's data-processing workflows.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>USThing</EntryTitle>
        <EntrySubtitle>Head of Backend & App Team Leader</EntrySubtitle>
        <EntryTime>2023-24 Fall - Now</EntryTime>
        <EntryBadges>
          <LightBadge>Core Member</LightBadge>
          <LightBadge>Voluntary</LightBadge>
        </EntryBadges>
        <EntryDescription>{md`
          [USThing](https://usthing.xyz) is a student-run app for HKUST. I led the backend and app teams within the 26-member organization.

          I led a rewrite from **June to August 2024** to bring an unmaintained backend and its dependent features back into service.

          - Rebuilt the backend around containerized microservices and migrated separate native Android/iOS applications to React Native.
          - Used TypeScript types and OpenAPI contracts to keep the frontend and backend interfaces consistent.
          - Coordinated development across both teams and improved CI/CD and release workflows.

          The app later recorded **15,000 active users over a 90-day period** and **up to 5,000 daily active users**.
        `}</EntryDescription>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Other Experiences</SectionTitle>
      <Entry>
        <EntryTitle>Artifact Evaluation Committee</EntryTitle>
        <EntrySubtitle>ICFP 2026, Indianapolis, IN, USA</EntrySubtitle>
        <EntryTime>2026</EntryTime>
        <EntryDescription>{md`
          Serving on the [ICFP 2026 Artifact Evaluation Committee](https://icfp26.sigplan.org/committee/icfp-2026-artifact-evaluation-organization-committee) (co-chaired by [Son Ho](https://www.sonho.fr/) and [Prof. Lionel Parreaux](https://lptk.github.io/about.html)), reviewing artifacts submitted to the International Conference on Functional Programming.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>AI Literacy Initiative Workshop</EntryTitle>
        <EntrySubtitle>i-Village, HKUST</EntrySubtitle>
        <EntryTime>2025-26 Summer (in preparation)</EntryTime>
        <EntryBadges>
          <LightBadge>Upcoming</LightBadge>
        </EntryBadges>
        <EntryDescription>{md`
          Led by [Prof. Cindy Li](https://cse.hkust.edu.hk/~lixin/) to join a team leading the AI Literacy Initiative targeting Year 1 students. I will lead two workshops in my areas of expertise and support several others, covering fun and practical AI topics for students' study and daily life.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>University of Oregon</EntryTitle>
        <EntrySubtitle>
          Oregon Programming Languages Summer School
        </EntrySubtitle>
        <EntryTime>2025-26 Summer</EntryTime>
        <EntryDescription>{md`
          Attended the [Oregon Programming Languages Summer School (OPLSS)](https://www.cs.uoregon.edu/research/summerschool/summer26/), a two-week intensive program on programming language theory. The topic was _Types, Proofs, and Program Logics_.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>UG Student Representative</EntryTitle>
        <EntrySubtitle>
          32nd Meeting, Student-Staff Liaison Committee, CSE, HKUST
        </EntrySubtitle>
        <EntryTime>12 May 2025</EntryTime>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <Entry>
        <EntryTitle>Programming Languages</EntryTitle>
        <EntryDescription>
          <Badges>
            <DarkBadge>Java</DarkBadge>
            <DarkBadge>Kotlin</DarkBadge>
            <DarkBadge>Scala</DarkBadge>
            <DarkBadge>OCaml</DarkBadge>
            <DarkBadge>Haskell</DarkBadge>
            <DarkBadge>Rust</DarkBadge>
            <DarkBadge>MLscript</DarkBadge>
            <DarkBadge>Golang</DarkBadge>
            <DarkBadge>C/C++</DarkBadge>
            <DarkBadge>HTML</DarkBadge>
            <DarkBadge>CSS</DarkBadge>
            <DarkBadge>JavaScript</DarkBadge>
            <DarkBadge>TypeScript</DarkBadge>
            <DarkBadge>Python</DarkBadge>
          </Badges>
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Libraries / Frameworks / DBMS</EntryTitle>
        <EntryDescription>
          <Badges>
            <DarkBadge>Bun</DarkBadge>
            <DarkBadge>React</DarkBadge>
            <DarkBadge>React Native</DarkBadge>
            <DarkBadge>NumPy</DarkBadge>
            <DarkBadge>Polars</DarkBadge>
            <DarkBadge>DuckDB</DarkBadge>
            <DarkBadge>PostgreSQL</DarkBadge>
            <DarkBadge>MongoDB</DarkBadge>
            <DarkBadge>Zod</DarkBadge>
            <DarkBadge>tRPC</DarkBadge>
            <DarkBadge>OpenAPI</DarkBadge>
            <DarkBadge>Fastify</DarkBadge>
            <DarkBadge>OR-Tools</DarkBadge>
          </Badges>
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Tools</EntryTitle>
        <EntryDescription>
          <Badges>
            <DarkBadge>Git</DarkBadge>
            <DarkBadge>Linux</DarkBadge>
            <DarkBadge>MS Word</DarkBadge>
            <DarkBadge>MS Excel</DarkBadge>
            <DarkBadge>LaTeX</DarkBadge>
            <DarkBadge>Typst</DarkBadge>
            <DarkBadge>ChatGPT</DarkBadge>
            <DarkBadge>GenAI</DarkBadge>
            <DarkBadge>Adobe Photoshop</DarkBadge>
            <DarkBadge>Adobe Premiere Pro</DarkBadge>
          </Badges>
        </EntryDescription>
      </Entry>
    </Section>
    <Section hiddenPrint>
      <SectionTitle>Projects</SectionTitle>
      <ProjectCards>
        <Project href="https://ust-rankings.com">
          <ProjectTitle>UST Rankings</ProjectTitle>
          <ProjectDescription>{md`
            A course and instructor analytics site for HKUST, bringing together student reviews, official feedback, and course information.

            Around **20,000 active users** during August 8 - September 4, 2026.
          `}</ProjectDescription>
          <ProjectDetails>{md`
            I combine data from ust.space, official Student Feedback Questionnaires, and course schedules. Matching instructor records across sources involves manual review and LLM assistance.

            The rating model combines feedback from multiple sources and standardizes scores using weighted historical data.

            Versioned datasets are queried in the browser with DuckDB-Wasm. A backend manages instructor records and validates community contributions.
          `}</ProjectDetails>
          <ProjectBadges>
            <LightBadge>DuckDB-Wasm</LightBadge>
            <LightBadge>SQL</LightBadge>
            <LightBadge>TypeScript</LightBadge>
            <LightBadge>Data Integration</LightBadge>
          </ProjectBadges>
          <ProjectLabel>ust-rankings.com</ProjectLabel>
        </Project>
        <Project href="https://arkwaifu.cc">
          <ProjectTitle>Arkwaifu</ProjectTitle>
          <ProjectDescription>{md`
            An Arknights artwork and story archive with browsing, search, and automated updates across game regions.

            Around **1,400 active users** during August 8 - September 4, 2026.
          `}</ProjectDescription>
          <ProjectDetails>{md`
            Version 2 uses a Python updater and React frontend to organize artwork and stories from the CN, EN, JP, KR, and TW regions. Linked asset records connect artwork with stories and galleries.

            Earlier versions used Go, Vue/Vuetify, and PostgreSQL, with Real-ESRGAN and Real-CUGAN for image upscaling.
          `}</ProjectDetails>
          <ProjectBadges>
            <LightBadge>Python</LightBadge>
            <LightBadge>React</LightBadge>
            <LightBadge>TypeScript</LightBadge>
            <LightBadge>Docker</LightBadge>
            <LightBadge>Arknights</LightBadge>
          </ProjectBadges>
          <ProjectLabel>arkwaifu.cc</ProjectLabel>
        </Project>
        <Project href="https://flandia.dev">
          <ProjectTitle>the Home Page</ProjectTitle>
          <ProjectDescription>
            My personal website and portfolio, covering research, projects,
            teaching, and other experiences.
          </ProjectDescription>
          <ProjectBadges>
            <LightBadge>Side Project</LightBadge>
            <LightBadge>Next.js</LightBadge>
            <LightBadge>React</LightBadge>
            <LightBadge>HTML</LightBadge>
            <LightBadge>CSS</LightBadge>
            <LightBadge>TypeScript</LightBadge>
            <LightBadge>TSX</LightBadge>
            <LightBadge>shadcn/ui</LightBadge>
            <LightBadge>Tailwind CSS</LightBadge>
          </ProjectBadges>
          <ProjectLabel>flandia.dev</ProjectLabel>
        </Project>
        <Project href="https://github.com/HKUST-CRS/crs">
          <ProjectTitle>CRS Request System</ProjectTitle>
          <ProjectDescription>
            A platform for students and instructors to manage class swaps,
            absences, and deadline extensions. Used across four HKUST courses,
            with over 2,000 active users.
          </ProjectDescription>
          <ProjectBadges>
            <LightBadge>Bun</LightBadge>
            <LightBadge>TypeScript</LightBadge>
            <LightBadge>Zod</LightBadge>
            <LightBadge>tRPC</LightBadge>
            <LightBadge>MongoDB</LightBadge>
            <LightBadge>React</LightBadge>
            <LightBadge>Next.js</LightBadge>
            <LightBadge>shadcn/ui</LightBadge>
            <LightBadge>Tailwind CSS</LightBadge>
            <LightBadge>Docker</LightBadge>
          </ProjectBadges>
          <ProjectLabel>github.com/HKUST-CRS/crs</ProjectLabel>
        </Project>
        <Project href="https://github.com/flandia/from-do">
          <ProjectTitle>From Do</ProjectTitle>
          <ProjectDescription>
            An experimental to-do language and VS Code extension, with a
            compiler written in Rust. It supports relative dates and times, with
            a hand-written parser and pretty-printer.
          </ProjectDescription>
          <ProjectBadges>
            <LightBadge>Rust</LightBadge>
            <LightBadge>DSL</LightBadge>
            <LightBadge>jiff</LightBadge>
            <LightBadge>tokio</LightBadge>
            <LightBadge>clap</LightBadge>
            <LightBadge>notify</LightBadge>
            <LightBadge>WASM</LightBadge>
            <LightBadge>VS Code</LightBadge>
          </ProjectBadges>
          <ProjectLabel>github.com/flandia/from-do</ProjectLabel>
        </Project>
      </ProjectCards>
    </Section>
    <Section hiddenPrint>
      <SectionTitle>Friends</SectionTitle>
      <Friends />
    </Section>
  </>
);

export default Body;
