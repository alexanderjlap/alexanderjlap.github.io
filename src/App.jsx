import React from 'react'
import { motion } from 'framer-motion'

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const projects = [
    {
      title: 'Tracking Sheet App',
      org: 'WPI',
      date: 'Jun 2026 - Aug 2026',
      desc: [
        'Architected Tracking Sheet App (React, TypeScript, TailwindCSS, AWS) for 1,000+ student advising workflows',
        'Modeled strict domain logic via entity class diagrams, engineered a PostgreSQL and Node.js/Express backend, and prototyped GUIs in Figma for automated .xlsx data ingestion',
      ]
    },
    {
      title: 'Script Automation & ML Telemetry',
      org: 'WPI & Microsoft Intune',
      date: 'Aug 2025 - Mar 2026',
      desc: [
        'Constructed a real-time Python telemetry pipeline (Win32/pywinauto) to map raw UI events into structured semantic workflow graphs, achieving an ultra-low system footprint of just 0.57% average CPU',
        'Reduced IT escalations via HMMs & heuristics, achieving 92.75% precision & 90.09% F1 score',
      ]
    },
    {
      title: "Brigham and Women's Hospital Kiosk App",
      org: 'WPI',
      date: 'Mar 2024 - May 2024',
      desc: [
        'Leveraged Agile principles on an 11-person team to develop a medical equipment tracking web application (TypeScript, Node.js), implementing 8 key features including pathfinding, a map editor, and Auth0 login',
        'Designed and deployed PostgreSQL schema across AWS EC2/RDS with Docker, reducing server provisioning time by 40%'
      ]
    },
    {
      title: 'EASE Wellness Planner App',
      date: 'Oct 2024',
      desc: [
        'Designed a task management app to gamify the completion of tasks using a leveling system to encourage productivity',
        'Added 15 minute Pomodoro-style break reminders and prioritized tasks by weight using JavaScript',
        'Built a deep neural network model with PyTorch, NumPy, Pandas, and Scikit-learn to assess a 1000+ labeled entries'
      ]
    },
    {
      title: 'SASE National Convention App',
      date: 'May 2024 - Oct 2024',
      desc: [
        'Partnered with vfairs to launch an app for 3,000+ attendees with a searchable agenda and engagement tools',
        'Integrated QR codes to streamline session check-ins, track attendance, and facilitate easy contact used in 40+ sessions',
        'Built a reusable frontend architecture using HTML and CSS to streamline updates across 15+ event pages'
      ]
    },
    {
      title: 'Pan Asian Festival App',
      date: 'Oct 2024',
      desc: [
        'Produced a digital line-holding app using Tailwind CSS and Flask to decrease wait times for made-to-order food',
        'Optimized database queries with Firebase for real-time order tracking and notifications to enhance user experience',
        'Developed responsive design principles across web and mobile interfaces, providing usability and accessibility for users'
      ]
    },
  ]

  const experience = [
    {
      title: 'Research Assistant',
      company: 'Worcester Polytechnic Institute & Oak Ridge National Laboratory · Remote',
      period: 'Jun 2026 - Aug 2026',
      highlights: [
        'Configure Linux server environments and operate QuickWave software via SSH/SCP to manage project files and execute 3D electromagnetic simulations for microwave plasma modeling',
        'Modify 3 core cold plasma parameters (conductivity, collision frequency, plasma frequency) in raw data',
        'Extract data from 80,000+ iteration simulations to visualize S11(f) reflection curves across a 2–3 GHz frequency band'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'HitchKick · Remote',
      period: 'May 2025 - Feb 2026',
      highlights: [
        'Refined a modular PERN-stack platform for registration, scheduling, and webcasts, prioritizing 15+ feature requests to ensure successful deployment across 50+ dance studios',
        'Created 12+ scalable APIs and frontend features for real-time updates, secure authentication, and payment workflows',
        'Optimized frontend and UI/UX, reducing scheduling latency by 25% and boosting retention'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Hong Kong Standards Testing Centre · Tai Po, HK',
      period: 'Jan 2025 - Mar 2025',
      highlights: [
        'Overhauled a multilingual project management app and partnered globally to align software, ensuring 100% usability across 4 international markets and amplifying productivity by 40%',
        'Engineered 6 project tracking tools (CPM, EVM, Gantt, Kanban, etc.) to enhance scheduling and data visualization',
        'Built data visualizations using PostgreSQL, FastAPI, React, Vite, Chart.js, and Cytoscape, cutting processing time by 20%'
      ]
    },
    {
      title: 'Coding Instructor',
      company: 'iD Tech',
      period: 'Jun 2024 - Aug 2024',
      highlights: [
        'Developed and taught Python and Java curricula to 23 students',
        'Coached students on debugging, software architecture, and collaborative coding practices',
        'Enhanced course materials for interactive learning and student engagement'
      ]
    },
    {
      title: 'Camp Counselor',
      company: 'YMCA',
      period: 'Jun 2023 - Aug 2023',
      highlights: [
        'Led daily activities for groups of 20+ campers, ensuring a safe and engaging experience',
        'Collaborated with 15 counselors to support camp operations and conflict resolution'
      ]
    },
    {
      title: 'Information Systems Intern',
      company: 'Cooley Dickinson Hospital',
      period: 'Jul 2022 - Aug 2022',
      highlights: [
        'Designed responsive navigation for hospital department website',
        'Enabled 500+ patients to complete forms online each month',
        'Trained 300+ staff on new phone systems and digital workflows'
      ]
    },
    {
      title: 'Cybersecurity Intern',
      company: 'City of Northampton',
      period: 'Apr 2022 - May 2022',
      highlights: [
        'Implemented cybersecurity policy updates and training presentations for 100+ employees',
        'Contributed to incident reduction through stronger security controls'
      ]
    },
  ]

  const leadership = [
    {
      title: 'National Convention | Project Lead - Digital Experience',
      org: 'Society of Asian Scientists and Engineers (SASE) · Seattle, WA',
      period: 'Apr 2026 - Present',
      desc: [
        'Orchestrate app UI/UX redesign, optimizing button layouts, and deploy leaderboards to boost engagement'
      ]
    },
    {
      title: 'National Convention | SASEhack Manager',
      org: 'Society of Asian Scientists and Engineers (SASE) · Pittsburgh, PA',
      period: 'Mar 2025 - Oct 2025',
      desc: [
        'Led 6-member SASEhack team, securing 261 participants (+17% Year-over-Year) across 46 universities',
        'Managed 38 project submissions across 3 tracks, awarding $3,600 to 8 winning teams'
      ]
    },
    {
      title: 'National Convention FAQ & Mobile App Coordinator',
      org: 'Society of Asian Scientists and Engineers (SASE)',
      period: 'Mar 2024 - Nov 2024',
      desc: 'Coordinated logistics for 3,000+ attendee convention and administered transportation for 1,200+ delegates.'
    },
    {
      title: 'Sponsorship Liaison',
      org: 'SASE Northeast Regional Conference',
      period: 'Oct 2023 - Feb 2024',
      desc: 'Secured partnerships with 10+ companies, resulting in a 177% increase in corporate sponsors.'
    },
    {
      title: 'WPI SASE Secretary',
      org: 'Society of Asian Scientists and Engineers (SASE)',
      period: 'Dec 2022 - Dec 2023',
      desc: 'Managed club communication, meetings, documentation, and event planning.'
    },
    {
      title: 'Recruitment Leader',
      org: 'Interfraternity Council',
      period: 'Apr 2023 - Oct 2023',
      desc: 'Organized new member outreach and supported recruitment operations.'
    },
    {
      title: 'Pan Asian Chair',
      org: 'Vietnamese Student Association',
      period: 'Mar 2023 - Feb 2024',
      desc: 'Coordinated events and communications for the campus Pan Asian community.'
    },
  ]

  const achievements = [
    'SASE Chevron Scholarship',
    'James Z. Naurison Scholarship Fund',
    'Broecker-Barnard Memorial Scholarship',
    'Byron R. Lewis Academic Scholarship',
  ]

  const coursework = [
    'Cryptography & Data Security',
    'Software Security Engineering',
    'Operating Systems',
    'Software Engineering',
    'Machine Organization & Assembly Language',
    'Database Systems',
    'Artificial Intelligence',
    'Algorithms',
  ]

  const skills = {
    'Languages': [
      'Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'R', 
      'HTML', 'CSS', 'SQL', 'x86-64 Assembly', 'Bash'
    ],
    'Frameworks': [
      'React.js', 'Next.js', 'Node.js', 'Express', 'Flask', 'FastAPI', 
      'PrismaORM', 'Redux', 'Axios', 'Chart.js', 'Cytoscape', 
      'hello-pangea/dnd', 'i18next', 'Bootstrap', 'Vite', 'Pipenv', 'Tailwind'
    ],
    'Technologies & Tools': [
      'PostgreSQL', 'Firebase', 'Docker', 'Linux', 'JSON', 'NumPy', 
      'Pandas', 'Scikit-learn', 'PyTorch', 'Darktrace', 'Postman', 'Figma'
    ],
    'Cloud & DevOps': [
      'AWS', 'Git', 'Jira', 'Trello', 'Monday.com'
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20 text-center"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Alexander Lap
            </h1>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 mb-2"
          >
            Full-Stack Developer & Software Engineer
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-gray-500 mb-8"
          >
            Cybersecurity & Computer Science | Worcester Polytechnic Institute
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap mb-4"
          >
            <a href="mailto:alex.lap118@gmail.com" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors">
              Get In Touch
            </a>
            <a href="https://linkedin.com/in/alexanderlap" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/alexanderjlap" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-purple-400 text-purple-400 hover:bg-purple-500/10 rounded-lg font-semibold transition-colors">
              GitHub
            </a>
          </motion.div>
          <motion.p variants={itemVariants} className="text-sm text-gray-500">
            (413) 270-2576 | alex.lap118@gmail.com | Northampton, MA | US Citizen
          </motion.p>
        </motion.header>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 p-8 border border-blue-500/20 rounded-2xl bg-blue-500/5 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold mb-6">About</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Education</h3>
              <p className="text-gray-300 mb-4">
                <strong>Master of Science in Cybersecurity</strong><br/>
                Worcester Polytechnic Institute · Worcester, MA | Dec 2026
              </p>
              <p className="text-gray-300">
                <strong>Bachelor of Science in Computer Science</strong><br/>
                Worcester Polytechnic Institute · Worcester, MA | May 2026
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Relevant Coursework</h3>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm text-gray-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            Experience
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm hover:border-blue-500/40 transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm hover:border-blue-500/40 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-1 gap-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{project.date}</span>
                  </div>
                  {project.org && (
                    <p className="text-xs text-blue-400 mb-3">{project.org}</p>
                  )}

                  <div className="text-gray-400 mb-4 text-sm">
                    {Array.isArray(project.desc) ? (
                      <ul className="list-disc pl-4 space-y-2 marker:text-blue-400">
                        {project.desc.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{project.desc}</p>
                    )}
                  </div>

                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors text-sm"
                    >
                      {project.linkLabel || 'View Project'} →
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
          <motion.div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-lg border border-blue-500/20 bg-blue-500/5"
              >
                <h3 className="text-lg font-semibold mb-4 text-blue-300">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-sm text-gray-300 hover:text-blue-300 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Leadership Section */}
        <motion.section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            Leadership & Volunteer
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {leadership.map((role, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-purple-300 mb-1">{role.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{role.org} · {role.period}</p>

                <div className="text-gray-300 text-sm">
                  {Array.isArray(role.desc) ? (
                    <ul className="list-disc pl-4 space-y-1 marker:text-purple-400">
                      {role.desc.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{role.desc}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            Achievements
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {achievements.map((achievement, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-4 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 flex items-start"
              >
                <span className="text-yellow-400 mr-3 text-xl">★</span>
                <span className="text-gray-300">{achievement}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-purple-500/5 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-8">
            Open to collaborations, internships, and exciting projects
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
              href="mailto:alex.lap118@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
            >
              Email Me
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/alexanderlap"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border border-blue-400 text-blue-400 rounded-lg font-bold text-lg hover:bg-blue-500/10 transition-all"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/alexanderjlap"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 border border-purple-400 text-purple-400 rounded-lg font-bold text-lg hover:bg-purple-500/10 transition-all"
            >
              GitHub
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default App