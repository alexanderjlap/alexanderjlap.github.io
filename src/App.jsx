import React from 'react'
import avatarImg from './assets/avatar.jpg'
import panAsianImg from './assets/pan-asian.jpg'
import saseImg from './assets/sase-app.jpg'
import easeImg from './assets/ease-wellness.png'

function App() {
  const projects = [
    {
      title: 'Tracking Sheet App',
      tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'AWS'],
      desc: '📋 Academic degree audit platform for 1,000+ undergraduate student advising workflows',
      link: 'https://github.com/alexanderjlap',
    },
    {
      title: 'Script Automation & ML Telemetry',
      tags: ['Python', 'Win32', 'pywinauto', 'HMM', 'Telemetry'],
      desc: '🤖 Real-time OS telemetry pipeline and ML failure detection with 92.75% precision',
      link: 'https://github.com/alexanderjlap',
    },
    {
      title: "Brigham and Women's Hospital Kiosk",
      tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Auth0'],
      desc: '🏥 Full-stack medical equipment tracking web app with A* pathfinding and AWS deployment',
      link: 'https://github.com/alexanderjlap',
    },
    {
      title: 'EASE Wellness Planner',
      tags: ['React', 'Flask', 'PostgreSQL', 'PyTorch', 'Scikit-learn'],
      desc: '⏰ Gamified task management web app with Pomodoro timers and ML productivity analysis',
      image: easeImg,
      imageFit: 'object-cover object-top',
      imageBg: 'bg-white dark:bg-zinc-950',
      link: 'https://devpost.com/software/ease-4cjkus',
    },
    {
      title: 'SASE National Convention App',
      tags: ['HTML', 'CSS', 'JavaScript', 'vfairs API', 'QR Integration'],
      desc: '📱 Mobile event web app for 3,000+ convention attendees across 40+ technical sessions',
      image: saseImg,
      imageFit: 'object-cover object-top',
      imageBg: 'bg-white dark:bg-zinc-950',
      link: 'https://play.google.com/store/apps/details?id=com.sase.mobileApp&hl=en_US&pli=1',
    },
    {
      title: 'Pan Asian Festival App',
      tags: ['React', 'Flask', 'Firebase', 'Tailwind'],
      desc: '🍜 Real-time queueing and line-holding application cutting attendee wait times by 50%',
      image: panAsianImg,
      imageFit: 'object-contain',
      imageBg: 'bg-[#f0dec7]',
      link: 'https://devpost.com/software/pan-asian-festival-app',
    },
  ]

  const experience = [
    {
      year: '2026',
      title: 'Research Assistant',
      company: 'WPI & Oak Ridge National Laboratory',
      period: 'Jun – Aug 2026',
      desc: '🔬 3D microwave plasma modeling and QuickWave simulations',
      category: 'software-research',
    },
    {
      year: '2025',
      title: 'Software Engineer',
      company: 'Hitchkick',
      period: 'May 2025 – Feb 2026',
      desc: '⚡ Full-stack PERN platform & APIs deployed across 50+ dance studios',
      category: 'software-research',
    },
    {
      year: '2025',
      title: 'Software Engineer Intern',
      company: 'Hong Kong Standards Testing Centre (STC)',
      period: 'Jan – Mar 2025',
      desc: '🌐 Global multilingual project management app & data visualizations',
      category: 'software-research',
    },
    {
      year: '2024',
      title: 'Coding Instructor',
      company: 'iD Tech',
      period: 'Jun – Aug 2024',
      desc: '💻 Python and Java programming curricula instruction for 23 students',
      category: 'education',
    },
    {
      year: '2023',
      title: 'Camp Counselor',
      company: 'YMCA',
      period: 'Jun – Aug 2023',
      desc: '🤝 Youth group leadership and team conflict resolution',
      category: 'education',
    },
    {
      year: '2022',
      title: 'Information Systems Intern',
      company: 'Cooley Dickinson Hospital',
      period: 'Jul – Aug 2022',
      desc: '🏥 Hospital web portal navigation and digital clinical form workflows',
      category: 'cyber',
    },
    {
      year: '2022',
      title: 'Cybersecurity Intern',
      company: 'City of Northampton',
      period: 'Apr – May 2022',
      desc: '🛡️ Municipal security policy revamp and employee compliance training',
      category: 'cyber',
    },
    {
      year: '2022',
      title: 'Advanced Cybersecurity Extern',
      company: 'Work ED',
      period: 'Feb 2022',
      desc: '🔒 RangeForce cyber drills, Log4j research, and Mirai Botnet case study',
      category: 'cyber',
    },
    {
      year: '2021',
      title: 'Information Technology Lead',
      company: 'IT Innovation Pathways',
      period: 'Jun – Sep 2021',
      desc: '🖥️ School district Windows computer fleet management and tech support',
      category: 'cyber',
    },
    {
      year: '2021',
      title: 'Information Technology Intern',
      company: 'IT Innovation Pathways',
      period: 'Feb – Jun 2021',
      desc: '📹 Frontline IT troubleshooting and video hardware guides',
      category: 'cyber',
    },
    {
      year: '2020',
      title: 'Data Analysis Intern',
      company: 'DESCO (Medical Equipment Solutions)',
      period: 'Aug – Nov 2020',
      desc: '📊 Medical sterilizer telemetry analysis and executive briefings',
      category: 'software-research',
    },
    {
      year: '2020',
      title: 'Cybersecurity Intern',
      company: 'City of Northampton',
      period: 'Jun – Jul 2020',
      desc: '🕵️ Darktrace AI network threat detection with municipal CIO',
      category: 'cyber',
    },
    {
      year: '2019',
      title: 'Cybersecurity Extern',
      company: 'Work ED',
      period: 'Aug 2019',
      desc: '🔐 System hardening, cryptography, and critical infrastructure defense',
      category: 'cyber',
    },
    {
      year: '2019',
      title: 'Information Technology Support Intern',
      company: 'IT Innovation Pathways',
      period: 'Jun – Jul 2019',
      desc: '🛠️ Hardware disassembly, monitor repair, and OS disk imaging',
      category: 'cyber',
    },
  ]

  const [theme, setTheme] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored
    }
    return 'dark'
  })

  React.useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0a0a0c] dark:text-zinc-100 selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-300 transition-colors duration-200">
      {/* Light / Dark Mode Toggle Button */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50 p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white shadow-sm hover:scale-105 active:scale-95 transition-all focus:outline-none cursor-pointer"
      >
        {theme === 'dark' ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-6 py-12 sm:py-20 space-y-20 sm:space-y-24">
        
        {/* Hero & Contact Section */}
        <section id="contact" className="space-y-6 scroll-mt-20 flex flex-col items-center text-center">
          <img
            src={avatarImg}
            alt="Alexander Lap Avatar"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-zinc-200 dark:border-zinc-800 shadow-xl"
          />

          <div className="space-y-4 flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Alexander Lap
            </h1>

            {/* Quick Action Contact Icon Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-3">
              <a
                href="mailto:alex.lap118@gmail.com"
                aria-label="Email"
                title="alex.lap118@gmail.com"
                className="w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/alexanderlap"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.4 9.74V9.93H5.06v8.57h2.8z" />
                </svg>
              </a>
              <a
                href="https://github.com/alexanderjlap"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="space-y-4 scroll-mt-20">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400">
            Education
          </h2>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm">
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-200">Worcester Polytechnic Institute</span>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs">M.S. in Cybersecurity · Dec 2026</p>
              </div>
              <span className="text-xs text-zinc-500">Worcester, MA</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-sm">
              <div>
                <span className="font-semibold text-zinc-900 dark:text-zinc-200">Worcester Polytechnic Institute</span>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs">B.S. in Computer Science · May 2026</p>
              </div>
              <span className="text-xs text-zinc-500">Worcester, MA</span>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="scroll-mt-20">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white inline-block border-b-2 border-zinc-900 dark:border-white pb-0.5">
              Timeline
            </h2>
          </div>

          {/* Continuous Timeline List matching jerryhe.dev */}
          <div className="relative pl-6 space-y-6">
            {/* Unbroken, fully connected continuous vertical line */}
            <div className="absolute left-[3.25px] top-2.5 bottom-2.5 w-[1.5px] bg-zinc-200 dark:bg-zinc-700/80 pointer-events-none" />

            {experience.map((exp, i) => (
              <div
                key={`${exp.title}-${exp.company}-${i}`}
                className="relative group"
              >
                {/* Milestone dot directly on top of the continuous line */}
                <div className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 ring-4 ring-white dark:ring-[#0a0a0c]" />

                {/* Content */}
                <div>
                  {/* Top row: Title, Dates */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-1">
                    <span className="font-bold text-zinc-900 dark:text-white text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.title}
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm">
                      {exp.period}
                    </span>
                  </div>

                  {/* Subtitle row: Company · Short single-sentence description */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <span className="text-zinc-800 dark:text-zinc-300 font-medium">{exp.company}</span>
                    <span className="text-zinc-400 dark:text-zinc-500 mx-1.5">·</span>
                    <span>{exp.desc}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="space-y-6 scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white inline-block border-b-2 border-zinc-900 dark:border-white pb-0.5">
              Projects
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {projects.map((proj, i) => {
              const CardWrapper = proj.link ? 'a' : 'div'
              const cardProps = proj.link
                ? {
                    href: proj.link,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : {}

              return (
                <CardWrapper
                  key={i}
                  {...cardProps}
                  className={`group p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all flex flex-col justify-between space-y-4 ${
                    proj.link ? 'cursor-pointer hover:shadow-lg' : ''
                  }`}
                >
                  <div className="space-y-4">
                    {proj.image && (
                      <div className={`w-full h-48 sm:h-52 overflow-hidden rounded-lg flex items-center justify-center border border-zinc-200/60 dark:border-zinc-800/60 ${proj.imageBg || 'bg-zinc-100 dark:bg-zinc-950/60'}`}>
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className={`w-full h-full ${proj.imageFit || 'object-contain'} group-hover:scale-105 transition-transform duration-300`}
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center justify-between">
                        <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {proj.title}
                        </span>
                        {proj.link && (
                          <span className="text-xs text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-normal">
                            ↗
                          </span>
                        )}
                      </h3>

                      <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-100 font-medium leading-relaxed pt-0.5">
                        {proj.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md border border-zinc-800 dark:border-white text-zinc-900 dark:text-white bg-transparent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardWrapper>
              )
            })}
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="pt-8 border-t border-zinc-200 dark:border-zinc-900 text-xs text-zinc-500 dark:text-zinc-600 text-center">
          <span>© 2026 Alexander Lap. All rights reserved.</span>
        </footer>

      </main>
    </div>
  )
}

export default App
