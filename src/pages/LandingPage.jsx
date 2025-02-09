import Header from '../components/Header';
import Section from '../components/Section';
import SocialLinks from '../components/SocialLinks';

export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6 dark:bg-gray-900">
      <div className="max-w-2xl w-full">
        <Header />
        <p className="text-gray-100 mt-2">
          I'm a junior software developer, optimist, and community builder. I work at{' '}
          <a href="https://www.qualitia.ai/" className="text-blue-400" target="_blank" rel="noopener noreferrer">Qualitia</a>, where I built a product for API testing,
          using Java, Node.js, and TypeScript. I enjoy learning new technologies.
        </p>
        
        <Section title="Writing" items={[  
          { text: 'Rust is Eating JavaScript', link: '#' },
          { text: 'On Community Moderation', link: '#' },
          { text: 'On Developer Products', link: '#' },
          { text: 'Typescript makes everything easier', link: '#' },
        ]} />

        <Section title="About Me" items={[  
          { text: 'Developer Experience', link: '#' },
          { text: 'Projects & Builds', link: '#' },
          { text: 'Open Source Work', link: '#' },
          { text: 'Tech Stack', link: '#' },
          { text: 'Certifications', link: '#' },
          { text: 'Awards & Achievements', link: '#' },
          { text: 'Education & Scores', link: '#' },
          { text: 'Side Projects', link: '#' },
          { text: 'Blogs & Articles', link: '#' },
          { text: 'Contact Me', link: '#' }            
        ]} />

        <Section title="Code" items={[  
          { text: 'mern-saas-starter', link: '#' },
          { text: 'mern-email-client', link: '#' },
          { text: 'mern-music-player', link: '#' },
          { text: 'mern-minimal-store', link: '#' }
        ]} />
        
        <SocialLinks />
      </div>
    </div>
  );
}
