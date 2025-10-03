import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import ProjectCard from '@/components/cards/ProjectCard';
import { projectStats } from '@/lib/data/stats';
import { projects } from '@/lib/data/projects';

export default function ProjectsPage() {
  const categories = ['all', 'ai-ml', 'web', 'mobile', 'robotics', 'arvr', 'blockchain'];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our "
        titleGradient="Projects"
        subtitle="Innovation Through Code"
        description="Explore the amazing projects built by our community members. From AI/ML solutions to web applications, witness innovation in action."
        primaryButton={{
          text: 'Submit Project',
          href: '/join',
          icon: 'plus',
        }}
        secondaryButton={{
          text: 'View on GitHub',
          href: 'https://github.com/technikiauh',
          icon: 'github',
        }}
      />

      {/* Stats Section */}
      <Stats stats={projectStats} />

      {/* Featured Projects */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Showcasing the best projects from our talented community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Browse through all the innovative projects created by our community
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-6 py-2 rounded-full bg-white/10 hover:bg-blue-500 text-white transition-all capitalize"
                >
                  {cat === 'ai-ml' ? 'AI/ML' : cat === 'arvr' ? 'AR/VR' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Have a Project Idea?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our community and bring your ideas to life. Get support, mentorship, and resources to build amazing projects.
            </p>
            <a
              href="/join"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-xl"
            >
              Start Building <i className="fas fa-rocket ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
