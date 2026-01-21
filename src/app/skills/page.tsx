import {
  Code2,
  Database,
  Layout,
  Wrench,
  Cloud,
  GitBranch,
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Layout,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 88 },
        { name: 'Vue.js', level: 80 },
      ],
    },
    {
      icon: Code2,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'FastAPI', level: 82 },
        { name: 'REST APIs', level: 93 },
      ],
    },
    {
      icon: Database,
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL', level: 87 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 78 },
        { name: 'Supabase', level: 90 },
        { name: 'Firebase', level: 83 },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 80 },
        { name: 'Webpack', level: 75 },
        { name: 'Vite', level: 88 },
        { name: 'Jest', level: 85 },
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & Deployment',
      skills: [
        { name: 'AWS', level: 82 },
        { name: 'Vercel', level: 90 },
        { name: 'Netlify', level: 88 },
        { name: 'Digital Ocean', level: 78 },
        { name: 'CI/CD', level: 85 },
      ],
    },
    {
      icon: GitBranch,
      title: 'Other Skills',
      skills: [
        { name: 'Agile/Scrum', level: 88 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Leadership', level: 85 },
        { name: 'Code Review', level: 90 },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 mt-10 transition-colors duration-500 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 text-gray-900 dark:text-white">
            Skills & Expertise
          </h1>
          <p className="text-xl max-w-3xl mx-auto transition-colors duration-300 text-gray-600 dark:text-gray-400">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-blue-100 dark:bg-blue-900">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold transition-colors duration-300 text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium transition-colors duration-300 text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm transition-colors duration-300 text-gray-500 dark:text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full rounded-full h-2.5 bg-gray-200 dark:bg-gray-700">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Always Learning</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            The tech landscape is constantly evolving, and so am I. I'm
            passionate about staying current with the latest technologies and
            best practices in web development.
          </p>
        </div>
      </div>
    </div>
  );
}
