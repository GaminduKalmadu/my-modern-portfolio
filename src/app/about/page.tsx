import { Award, BookOpen, Heart, Target } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Code Commits', value: '10k+' },
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
            Passionate developer with a love for creating elegant solutions to
            complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold transition-colors duration-300 text-gray-900 dark:text-white">My Story</h2>
            <p className="leading-relaxed transition-colors duration-300 text-gray-600 dark:text-gray-400">
              I'm a full-stack developer with a passion for building beautiful,
              functional web applications. With over 5 years of experience in
              the industry, I've had the privilege of working on diverse
              projects ranging from startups to enterprise applications.
            </p>
            <p className="leading-relaxed transition-colors duration-300 text-gray-600 dark:text-gray-400">
              My journey in tech started with a curiosity about how things work
              behind the scenes. Today, I specialize in modern web technologies
              and love bringing ideas to life through code. I believe in
              writing clean, maintainable code and creating user experiences
              that truly matter.
            </p>
            <p className="leading-relaxed transition-colors duration-300 text-gray-600 dark:text-gray-400">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
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
