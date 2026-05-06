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
      title: 'EASE Wellness Planner App',
      desc: 'Gamified task app with React.js, Flask, PostgreSQL, and PyTorch ML for productivity tracking',
      date: 'Oct 2024',
      link: '#'
    },
    {
      title: 'SASE National Convention App',
      desc: 'Mobile app for 3,000+ attendees with searchable agenda, QR codes, and engagement tools',
      date: 'May - Oct 2024',
      link: '#'
    },
    {
      title: 'Hospital Kiosk System',
      desc: 'Medical equipment tracking app with pathfinding, Auth0, and AWS deployment for 11-person team',
      date: 'Mar - May 2024',
      link: '#'
    },
  ]

  const experience = [
    {
      title: 'Software Engineer',
      company: 'HitchKick',
      period: 'May 2025 - Aug 2025',
      highlights: [
        'Refined PERN-stack platform for 50+ dance studios',
        'Created 12+ scalable APIs for real-time updates and payment workflows',
        'Optimized frontend performance, improving scheduling speed'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Hong Kong Standards Testing Centre',
      period: 'Jan 2025 - Mar 2025',
      highlights: [
        'Overhauled multilingual project management app, boosting productivity by 40%',
        'Engineered 6 project tracking tools (CPM, EVM, Gantt, Kanban)',
        'Built data visualization with PostgreSQL, FastAPI, React + Vite'
      ]
    },
    {
      title: 'Coding Instructor',
      company: 'iD Tech',
      period: 'Jun 2024 - Aug 2024',
      highlights: [
        'Developed curriculum for Python and Java courses',
        'Instructed 23 students in programming frameworks',
        'Enhanced learning through debugging strategies and peer collaboration'
      ]
    },
  ]

  const skills = {
    languages: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
    frameworks: ['React.js', 'Next.js', 'Node.js', 'Express', 'Flask', 'FastAPI', 'PrismaORM', 'Redux'],
    technologies: ['PostgreSQL', 'Firebase', 'Docker', 'Linux', 'NumPy', 'Pandas', 'PyTorch'],
    cloud: ['AWS', 'Git', 'Jira', 'Vite', 'Tailwind CSS']
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
            <a href="mailto:ajlap@wpi.edu" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors">
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
            (413) 270-2576 | Northampton, MA
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
                Worcester Polytechnic Institute | Aug 2026 - Dec 2026
              </p>
              <p className="text-gray-300">
                <strong>Bachelor of Science in Computer Science</strong><br/>
                Worcester Polytechnic Institute | Aug 2022 - May 2026
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                Full-stack software engineer with expertise in building scalable applications. Passionate about creating performant web applications and solving complex problems across frontend, backend, and cloud infrastructure.
              </p>
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
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-xs text-gray-400">{project.date}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
                  <motion.a
                    href={project.link}
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </motion.a>
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
          <motion.div
            className="grid md:grid-cols-2 gap-8"
          >
            {Object.entries(skills).map(([category, skillList], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-lg border border-blue-500/20 bg-blue-500/5"
              >
                <h3 className="text-lg font-semibold mb-4 text-blue-300 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
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
              href="mailto:ajlap@wpi.edu"
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