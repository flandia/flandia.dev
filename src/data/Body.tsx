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
          GPA: **4.218/4.300**
          Class Rank: **1/170**
        `}</EntryDescription>
        <EntryDetails>
          {md`
            As of March 13, 2026:

            GPA: 4.211/4.300
            Major GPA: 4.216/4.300
            Class Rank: 1/170

            Got A+ in **all** Computer Science courses.
            Got 1st in **more than half** of the Computer Science courses.
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

          I'm investigating how reusable flow analysis can support program optimizations that preserve behavior in MLscript, TACO Lab's experimental programming language. The project uses flow webs to group related producers and consumers, such as functions and their call sites, so that transformations can update them together.

          Eta expansion can move a computation into a lambda, changing when or how often it runs, including when it mutates or observes a state. I implemented an effect-analysis prototype and integrated it into the existing eta-expansion optimization, avoiding transformations that may move observable effects or state mutations and observations. The analysis propagates effects through calls, including recursive calls and calls to imported functions.

          Other directions I'm considering include storing reusable analysis results in symbols, extending flow webs to constructors and destructors, preserving web relationships during deforestation, generalizing dead-parameter elimination to dead-everything elimination, and investigating further transformations such as defunctionalization.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Research Collaboration</EntryTitle>
        <EntrySubtitle>Opportunistic Parallelism</EntrySubtitle>
        <EntryTime>Since 2025-26 Spring</EntryTime>
        <EntryBadges>
          <LightBadge>Ongoing</LightBadge>
        </EntryBadges>
        <EntryDescription>{md`
          I work on PopPy, a compiler for parallelizing Python agentic programs, at the University of Pennsylvania with [Prof. Osbert Bastani](https://obastani.github.io/) and [Dr. Stephen Mell](https://mell.ac/). I joined the collaboration in Spring 2026 and also took part in a summer research internship.

          I extended Bezoar, PopPy's intermediate language, with control transfer statements (early \`return\`, \`break\`, and \`continue\`) and a general \`for\`/\`while\` loop construct. I formalized the extension's syntax, semantics, and lowering to core Bezoar.

          I also worked on control-flow transformations, iterator sequencing, and memory scheduling, and adapted agent-workflow benchmarks for evaluation.

          I'm designing a unified effect system to broaden PopPy's support for effects such as object mutation and I/O. This ongoing work connects with my thesis on flow-based program optimization.

          **[PopPy: Opportunistically Exploiting Parallelism in Python Agentic Workflows](https://arxiv.org/abs/2605.18697)**

          Stephen Mell, David Mell, **Harry Y. H. Li**, Zhihao Jia, Konstantinos Kallas, Steve Zdancewic, and Osbert Bastani

          _arXiv preprint and submitted to ASPLOS 2027 (under review)_
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Undergraduate Research Opportunities Program</EntryTitle>
        <EntrySubtitle>
          Programming Language Design and Implementation
        </EntrySubtitle>
        <EntryTime>2024-25 Fall, Spring, Summer. 2025-26 Fall</EntryTime>
        <EntryDescription>{md`
          Advised by [Prof. Lionel Parreaux](https://lptk.github.io/about.html), I investigated how to support ad hoc polymorphism in _MLscript_, our lab's experimental programming language, while keeping compilation independent of full type inference. The challenge was to recover enough information at each use site to select the intended definition and supply implicit arguments.

          - **Module System.** I first implemented a restricted module-based approach that kept callable declarations known at compile time. Checks on module-valued parameters, return values, and bindings preserved the information needed to insert implicit arguments as modules passed through a program. I also developed formal module-checking rules to describe these restrictions.
          - **Resolution Pass.** Forward references and chained member accesses could require declarations that elaboration had not yet processed. I developed a separate pass after elaboration, combining symbol resolution with lightweight type facts from annotations, literals, constructors, and known members. It also disambiguates overloaded names, such as a class and companion module sharing a name, and preserves the selected definition through lowering and JavaScript generation.
          - **Type Classes and Contextual Parameters.** Building on this information, I implemented lookup and insertion of matching instances from lexical scope, letting functions receive implementations implicitly. I added constructor support, explicit contextual arguments, and instance retrieval with \`use[T]\`. Alongside the implementation, I formalized the translation into explicit calls and explored a declarative algorithm for interacting instance requirements; the general algorithm remained unimplemented.
          - **Multiple Parameter Lists and Eta Expansion.** To support ordinary and contextual arguments together, I added multiple parameter lists across parsing, elaboration, and code generation, enabling partial application. I then implemented eta expansion so functions with interleaved parameter lists could be used as values with implicit arguments supplied, and refined it to avoid redundant expansion inside application chains.
          - **Control-Flow Analysis.** The module-based approach restricted how values could be passed around. I explored using flows from producers to consumers to recover information beyond local annotations and prototyped basic implicit-argument resolution on this basis. I found simple **0-CFA** sufficient for the intended ad hoc-polymorphism use cases in MLscript. This investigation led to my undergraduate thesis on using flow information for program optimization.
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
        <EntrySubtitle>
          Intelligent Feedback and Style Coach for Programmers
        </EntrySubtitle>
        <EntryTime>2026-27 Fall</EntryTime>
        <EntryDescription>{md`
          Advised by [Prof. Desmond Tsoi](https://www.cse.ust.hk/~desmond/).

          - Developed a TypeScript VS Code extension and [browser prototype](https://fsc.flandia.dev) that gives novice Python programmers code-local feedback on correctness, clarity, and performance, with explanations and student-controlled edit previews.
          - Evaluated the prototype on a development benchmark of 450 course-derived and multi-issue inputs with paired controls, using LLM adjudication to assess feedback.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Independent Work Project</EntryTitle>
        <EntrySubtitle>CRS Request System</EntrySubtitle>
        <EntryTime>2025-26 Fall, Winter</EntryTime>
        <EntryDescription>{md`
          Advised by [Prof. Desmond Tsoi](https://www.cse.ust.hk/~desmond/). The system serves **COMP 1023, COMP 2011, COMP 2012, and COMP 2211**, with **over 2,000 active users**.

          - Built student and instructor workflows for class swaps, absences, and assignment deadline extensions.
          - Designed the application with TypeScript, Zod, tRPC, MongoDB, and React/Next.js.
          - Mentored subsequent contributors as the project continued to develop.

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
        <EntryTitle>Student Representative</EntryTitle>
        <EntrySubtitle>
          Hall Affairs and Operations Committee (HAOC), HKUST
        </EntrySubtitle>
        <EntryTime>2026-27 Residential Year</EntryTime>
        <EntryDescription>{md`
          Nominated by [Prof. Cindy Li](https://cse.hkust.edu.hk/~lixin/), I am serving as a student representative on the [Hall Affairs and Operations Committee](https://shrl.hkust.edu.hk/about/governance/hall-affairs-and-operations-committee), contributing a student perspective to the review of hall-residence appeals and the interpretation of hall rules.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Artifact Evaluation Committee</EntryTitle>
        <EntrySubtitle>ICFP 2026, Indianapolis, IN, USA</EntrySubtitle>
        <EntryTime>2026</EntryTime>
        <EntryDescription>{md`
          Served on the [ICFP 2026 Artifact Evaluation Committee](https://icfp26.sigplan.org/committee/icfp-2026-artifact-evaluation-organization-committee) (co-chaired by [Son Ho](https://www.sonho.fr/) and [Prof. Lionel Parreaux](https://lptk.github.io/about.html)), reviewing artifacts submitted to the International Conference on Functional Programming.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>AI Literacy Initiative Workshop</EntryTitle>
        <EntrySubtitle>Hall X, HKUST</EntrySubtitle>
        <EntryTime>2026-27</EntryTime>
        <EntryBadges>
          <LightBadge>Preparing</LightBadge>
        </EntryBadges>
        <EntryDescription>{md`
          Working with [Prof. Cindy Li](https://cse.hkust.edu.hk/~lixin/) and fellow students on AI literacy for Hall X residents, including first-year students. I am developing two beginner-friendly, 90-minute workshops combining live demonstrations and hands-on activities.

          - **Introduction to AI and Agents: A Practical Starter Kit**. A structured introduction to AI providers, models, chatbots, and agents, with practice in specifying tasks, supplying context, and checking responses. Participants will leave with a reusable prompting template and verification checklist.
          - **Everyday Agentic Workflows: From Chatting to Getting Things Done**. A practical introduction to using agents for multi-step student tasks, with clear inputs, outputs, permissions, and review points. A guided workflow will cover gathering information, preparing documents, protecting personal information, and reviewing consequential actions. No programming background is required.
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
    <Section>
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
        <Project href="https://arkwaifu.cc" hiddenPrint>
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
        <Project href="https://flandia.dev" hiddenPrint>
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
        <Project href="https://github.com/HKUST-CRS/crs" hiddenPrint>
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
        <Project href="https://github.com/flandia/from-do" hiddenPrint>
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
