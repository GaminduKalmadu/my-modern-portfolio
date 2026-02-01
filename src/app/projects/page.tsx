import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Care Pro Healthcare System',
      description:
        'A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.',
      image: '/home.jpeg',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/kiruluchamika/SLIIT-IWT-Project-2024',
      demo: 'https://github.com/kiruluchamika/SLIIT-IWT-Project-2024',
    },
    {
      title: 'Flexiride vehicle rental system',
      description:
        'Collaborative task management tool with real-time updates, team chat, and productivity analytics.',
      image: '/car-rental-BL1p-RFW.webp',
      tags: ['HTML', 'JavaScript', 'Tailwind CSS', 'java', 'MySQL'],
      github: 'https://github.com/GaminduKalmadu/flexiride-vehicle-rental-system',
      demo: 'https://github.com/GaminduKalmadu/flexiride-vehicle-rental-system',
    },
    {
      title: 'Ceylon Brew -Tea Plantation Management System',
      description:
        'Beautiful weather application with detailed forecasts, interactive maps, and personalized alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Tailwind CSS', 'Spring Boot', 'MySQL', 'TypeScript', 'Postman'],
      github: '#',
      demo: '#',
    },
    {
      title: 'My Portfolio Website',
      description:
        'A personal portfolio website to showcase my projects, skills, and experience.',
      image: '/portfolio1.png',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/GaminduKalmadu/my-modern-portfolio',
      demo: 'https://github.com/GaminduKalmadu/my-modern-portfolio',
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
