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
        I am interested in theoretical computer science, programming languages, compiler systems, and software engineering. My experience includes academic programming-language research, compiler implementation, web application development, data processing, and visualization.
      `}</SectionText>
    </Section>
    <Section>
      <SectionTitle>Academic Profile</SectionTitle>
      <SectionText>
        {md`
          II am a full-time undergraduate student in B.Eng. Computer Science at HKUST, expected to graduate in May 2027. I will participate in a summer research internship at the University of Pennsylvania from June 15, 2026 to August 21, 2026, continuing my work on the Opal extension project (see Research Experiences below).

          My current research interests include programming language theory and compiler systems, focusing on academic work on the Opal compiler/language framework.

          **Publications**: none to date. **Patents**: none to date.
        `}
      </SectionText>
    </Section>
    <Section>
      <SectionTitle>Education</SectionTitle>
      <Entry>
        <EntryTitle>Hong Kong University of Science and Technology</EntryTitle>
        <EntrySubtitle>
          Bachelor of Engineering in Computer Science
        </EntrySubtitle>
        <EntryTime>2023 - 2027</EntryTime>
        <EntryDetails>
          {md`
            Cumulative Grade Average (CGA): 4.211/4.3
            Major Cumulative Grade Average (MCGA): 4.216/4.3
            Class Rank: 1/170

            Got A+ in **all** Computer Science courses.
            Ranked 1st in **more than half** of the Computer Science courses.
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
        <EntryDetails>
          {md`
            Nominated by HKUST School of Engineering to participate in an exchange program at UPenn in 2025-26 Spring.

            GPA: 4.00/4.00
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
        <EntryTime>2024-25</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Mr & Mrs Poon Kuen Seng Memorial Scholarships</EntryTitle>
        <EntrySubtitle>
          Department of Computer Science and Engineering, HKUST
        </EntrySubtitle>
        <EntryTime>2024-25</EntryTime>
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
        <EntryTime>2024-25</EntryTime>
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
        <EntryTitle>Best UGTA Award-Honorable Mention</EntryTitle>
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
      <Entry>
        <EntryTitle>First Prize Scholarship</EntryTitle>
        <EntrySubtitle>Shenzhen Fujing Foreign Language School</EntrySubtitle>
        <EntryTime>2023</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>&quot;Fujing Star&quot; Award</EntryTitle>
        <EntrySubtitle>Shenzhen Fujing Foreign Language School</EntrySubtitle>
        <EntryTime>2023</EntryTime>
      </Entry>
      <Entry>
        <EntryTitle>Outstanding Student Award</EntryTitle>
        <EntrySubtitle>Shenzhen Fujing Foreign Language School</EntrySubtitle>
        <EntryTime>2022</EntryTime>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Research Experiences</SectionTitle>
      <Entry>
        <EntryTitle>Research Internship</EntryTitle>
        <EntrySubtitle>Opal Extension</EntrySubtitle>
        <EntryTime>2025-26 Spring, Summer</EntryTime>
        <EntryDescription>{md`
          This academic research project is advised by [Prof. Osbert Bastani](https://obastani.github.io/) and [Stephen Mell](https://mell.ac/). I work on extensions to [Opal](https://arxiv.org/pdf/2405.11361.pdf), a published programming-language and compiler framework. My work focuses on language semantics, compiler implementation, structured control flow, and related compiler-system features.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Undergraduate Research Opportunities Program</EntryTitle>
        <EntrySubtitle>
          Programming Language Design and Implementation
        </EntrySubtitle>
        <EntryTime>2024-25 Fall, Spring, Summer. 2025-26 Fall</EntryTime>
        <EntryDescription>{md`
          This program was supervised by [Prof. Lionel Parreaux](https://lptk.github.io/about.html). I was mainly working on the programming language and compiler designed and implemented by our lab, called _MLscript_. In particular, I was working on:

          - Module System. This is a minimal type system for modules - a singleton object construct in MLscript where we pose certain restrictions on their usage. This was mainly to support implementing ad hoc polymorphism features later in the compiler, such as type classes (see below). I also tried to formalize the system naively in a type-theoretic way, although I haven't proved any properties about it yet. This system is planned to be deprecated in favor of the flow analysis pass (see below) in the future.
          - Type Classes. A traditional ad hoc polymorphism feature usually found in functional programming languages. This feature was fully based on the module system (see above) and was not based on traditional approaches that rely on type checking and type inference (this choice is due to a design goal of MLscript that compilation should be orthogonal to type checking and type inference).
          - Resolution Pass. A new compiler pass that resolves information of references, selections, and applications of the program without performing a traditional kind of type checking or type inference. This pass effectively bases the module system and type classes features, and also any future ad hoc polymorphism features that require call-site handling.
          - Flow Analysis Pass. A new compiler pass that performs a flow-based analysis on the system to gather and derive more precise information about what values flow to what variables in the program. This pass is planned to effectively replace the module system (see above) to support ad hoc polymorphism features, so that the extra restrictions we put on modules will be no longer required in the future.
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
          This program was supervised by [Prof. Yangqiu Song](https://www.cse.ust.hk/~yqsong/) and PhD candidate Zihao Wang. I studied academic topics in knowledge graphs, graph-based learning, and logical reasoning. I participated in a research-oriented project on reasoning over structured knowledge representations.
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
          This project is supervised by Prof. Desmond Tsoi.

          - Developed a web app that allows students in the department to effectively handle course administration matters, such as making class swapping and absence requests, and assignment deadline extension requests.
          - Designed and implemented backend and frontend components using modern web-development practices, with emphasis on maintainability, usability, and reliability.

          For more information, please visit the project page at [github.com/HKUST-CRS/crs](https://github.com/HKUST-CRS/crs).
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Independent Work Project</EntryTitle>
        <EntrySubtitle>
          Educational Language-Learning Application with Adaptive Assessment
          Features
        </EntrySubtitle>
        <EntryTime>2024-25 Spring, 2025-26 Fall</EntryTime>
        <EntryDescription>{md`
          This project is supervised by Prof. Desmond Tsoi, in collaboration with Professor Mei Yi Angel Lin from the Education University of Hong Kong.

          - Developed an educational software prototype that uses language-model-based features to support adaptive language practice and assessment.
          - Designed the prototype for English learners familiar with Mandarin or Cantonese, with features that support bilingual learning and English practice.
          - Applied user-centered educational design principles to better support the learning needs of the target users.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Department of Computer Science, HKUST</EntryTitle>
        <EntrySubtitle>Undergraduate Teaching Assistant</EntrySubtitle>
        <EntryTime>2023-24 Spring - Now</EntryTime>
        <EntryDescription>{md`
          After I performed outstandingly in computer science courses, instructors invited me to serve as an undergraduate teaching assistant (UGTA). As of 2025-26 Winter, I have served as a UGTA for 8 semesters (including Summer and Winter) throughout 3 courses (COMP 2011 C++ Programming, 2012 Object-Oriented Programming and Data Structures and 1023 Introduction to Python Programming).

          - Assisting instructors in preparing course materials, including assignments, tutorial notes, lecture notes and self-tests.
          - Answering students' questions and providing guidance on lecture materials, assignments, environment set-up, as well as introducing additional topics to students if they are interested.
          - Presenting tutorial sessions to help students better understand the course materials and improve their programming skills.
        `}</EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>GREAT Smart Cities Institute, HKUST</EntryTitle>
        <EntrySubtitle>Summer Internship</EntrySubtitle>
        <EntryTime>2023-24 Summer - Now</EntryTime>
        <EntryBadges>
          <LightBadge>Part Time</LightBadge>
        </EntryBadges>
        <EntryDescription>{md`
          - Developed an academic software tool for processing and analyzing traffic-related image/video data for urban-mobility research.
          - Integrated the tool with GIS software to support data visualization and spatial analysis.
          - Performed data processing and analysis to summarize traffic-related patterns for research and planning purposes.
          - Streamlined workflows to improve the accuracy and speed of traffic data processing.
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
          USThing is a student-developed all-in-one app for HKUST. The team consists of passionate and talented students who work towards continually improving the app and the HKUST student community.

          - Led backend refactoring into a containerized service architecture, improving maintainability, deployment workflow, and performance for a student-developed campus application.
          - Leading the app team in revamping our old apps, migrating them from old native apps for Android and iOS, respectively, into one app built with React Native technology.
          - Improved development and release workflows by simplifying integration, testing, and deployment processes for the student-development team.
        `}</EntryDescription>
      </Entry>
    </Section>
    <Section>
      <SectionTitle>Other Experiences</SectionTitle>
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
            <DarkBadge>Haskell</DarkBadge>
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
            <DarkBadge>NumPy</DarkBadge>
            <DarkBadge>PostgreSQL</DarkBadge>
            <DarkBadge>React Native</DarkBadge>
            <DarkBadge>Zod</DarkBadge>
            <DarkBadge>tRPC</DarkBadge>
            <DarkBadge>OpenAPI</DarkBadge>
            <DarkBadge>Fastify</DarkBadge>
            <DarkBadge>MongoDB</DarkBadge>
          </Badges>
        </EntryDescription>
      </Entry>
      <Entry>
        <EntryTitle>Tools & Other Skills</EntryTitle>
        <EntryDescription>
          <Badges>
            <DarkBadge>Git</DarkBadge>
            <DarkBadge>Linux</DarkBadge>
            <DarkBadge>MS Word</DarkBadge>
            <DarkBadge>MS Excel</DarkBadge>
            <DarkBadge>LaTeX</DarkBadge>
            <DarkBadge>Typst</DarkBadge>
            <DarkBadge>AI-assisted productivity tools</DarkBadge>
            <DarkBadge>Video Games</DarkBadge>
            <DarkBadge>Mobile Games</DarkBadge>
            <DarkBadge>Adobe Photoshop</DarkBadge>
            <DarkBadge>Adobe Premiere Pro</DarkBadge>
          </Badges>
        </EntryDescription>
      </Entry>
    </Section>
    <Section hiddenPrint>
      <SectionTitle>Projects</SectionTitle>
      <ProjectCards>
        <Project href="https://arkwaifu.cc">
          <ProjectTitle>Arkwaifu</ProjectTitle>
          <ProjectDescription>
            A website arranging and providing almost all artworks extracted from
            Arknights (a mobile game).
          </ProjectDescription>
          <ProjectBadges>
            <LightBadge>Golang</LightBadge>
            <LightBadge>Python</LightBadge>
            <LightBadge>Vue</LightBadge>
            <LightBadge>Vuetify</LightBadge>
            <LightBadge>Material Design</LightBadge>
            <LightBadge>PostgreSQL</LightBadge>
            <LightBadge>Docker</LightBadge>
            <LightBadge>Arknights</LightBadge>
          </ProjectBadges>
          <ProjectLabel>arkwaifu.cc</ProjectLabel>
        </Project>
        <Project href="https://flandia.dev">
          <ProjectTitle>the Home Page</ProjectTitle>
          <ProjectDescription>
            A résumé-like home page for myself (this page). This page also
            showcases a collection of some of my projects.
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
          <ProjectTitle>CSE Request System</ProjectTitle>
          <ProjectDescription>
            A one-stop platform for students/instructors to handle all
            course-administrative requests.
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
      </ProjectCards>
    </Section>
    <Section hiddenPrint>
      <SectionTitle>Friends</SectionTitle>
      <Friends />
    </Section>
  </>
);

export default Body;
