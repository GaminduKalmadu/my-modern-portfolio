import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates, team chat, and productivity analytics.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Beautiful weather application with detailed forecasts, interactive maps, and personalized alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'OpenWeather API', 'Chart.js'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio CMS',
      description:
        'Content management system specifically designed for creative professionals to showcase their work.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'PostgreSQL', 'TypeScript'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Fitness Tracker',
      description:
        'Comprehensive fitness tracking app with workout plans, progress tracking, and nutrition monitoring.',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Redux', 'Node.js'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Chat Assistant',
      description:
        'Intelligent chatbot powered by AI with natural language processing and context awareness.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'React', 'OpenAI', 'FastAPI'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 mt-10 transition-colors duration-500 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 text-gray-900 dark:text-white">
            My Projects
          </h1>
          <p className="text-xl max-w-3xl mx-auto transition-colors duration-300 text-gray-600 dark:text-gray-400">
            A collection of work I'm proud to share
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-3 transition-colors duration-300 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full transition-colors duration-300 bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center transition-colors duration-200 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Github size={20} className="mr-1" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center transition-colors duration-200 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <ExternalLink size={20} className="mr-1" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
