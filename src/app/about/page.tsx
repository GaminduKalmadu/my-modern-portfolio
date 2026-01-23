import { Award, BookOpen, Heart, Target } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Academic Year', value: '3rd' },
    //{ label: 'Code Commits', value: '3k+' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Focused on creating meaningful impact through technology',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Love what I do and always eager to learn more',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest technologies',
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Committed to delivering excellence in every project',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 mt-10 transition-colors duration-500 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="text-xl max-w-3xl mx-auto transition-colors duration-300 text-gray-600 dark:text-gray-400">
            Software Engineering undergraduate at SLIIT, passionate full-stack developer with 2 years of experience
            building innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold transition-colors duration-300 text-gray-900 dark:text-white">My Story</h2>
            <p className="leading-relaxed transition-colors duration-300 text-gray-600 dark:text-gray-400">
              I'm currently a 3rd year Software Engineering undergraduate at SLIIT (Sri Lanka Institute of Information Technology),
              with a strong passion for full stack development. With 2 years of hands on experience, I've developed a solid
              foundation in building scalable and efficient web applications that solve real world problems.
            </p>
            <p className="leading-relaxed transition-colors duration-300 text-gray-600 dark:text-gray-400">
              My technical expertise spans across core computer science fundamentals including Object-Oriented Programming (OOP),
              Data Structures & Algorithms, and Data Handling & Analysis. I excel at writing clean, efficient code and
              transforming complex requirements into elegant solutions. My journey in software development has equipped me
              with both frontend and backend technologies, allowing me to build complete end to end applications.
            </p>
            <p className="leading-relaxed transition-colors duration-300 text-gray-600 dark:text-gray-400">
              Beyond coding, I'm constantly exploring new technologies, optimizing algorithms, and enhancing my problem solving
              skills. I believe in continuous learning and staying updated with industry best practices to deliver high quality
              software solutions that make a difference.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl text-center transition-colors duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900"
                >
                  <div className="text-3xl font-bold mb-2 transition-colors duration-300 text-blue-600 dark:text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-sm transition-colors duration-300 text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 transition-colors duration-300 text-gray-900 dark:text-white">
            What Drives Me
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-blue-100 dark:bg-blue-900">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 transition-colors duration-300 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm transition-colors duration-300 text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
