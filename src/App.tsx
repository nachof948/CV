import React, { useState } from 'react';
import { Github, Linkedin, Mail, Calendar, Building2, GraduationCap, Code2, Users, Sparkles, Brain, Sun, Moon, Lightbulb, MessageSquare } from 'lucide-react';
import Imagen from './assets/Imagen-Sobre-Mi.jpg';
import Spain from './assets/spain.svg'
import UnitedStatesOfAmerica from './assets/united-states-of-america.svg'

type Language = 'es' | 'en';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<Language>('es');

  const translations = {
    es: {
      title: 'Desarrollador Front End',
      subtitle: 'DESARROLLADOR POTENCIADO POR IA',
      technologies: 'Tecnologías y Herramientas',
      categories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        Database: 'Base de Datos',
        'State Management': 'Gestión de Estado',
        'AI Tools': 'Herramientas IA'
      },
      softSkills: 'Habilidades Blandas',
      experience: 'Experiencia Laboral',
      education: 'Formación Académica',
      aboutMe: 'Sobre Mí',
      teamwork: 'Trabajo en Equipo',
      teamworkDesc: 'Experiencia colaborando efectivamente en equipos multidisciplinarios para alcanzar objetivos comunes.',
      innovation: 'Innovación y Creatividad',
      innovationDesc: 'Capacidad para aportar soluciones creativas y pensar fuera de la caja en el desarrollo de proyectos.',
      communication: 'Comunicación Efectiva',
      communicationDesc: 'Habilidad para transmitir ideas técnicas de manera clara y precisa a diferentes audiencias.',
      aboutMeText: 'Finalicé la Diplomatura en Programación Web Full Stack en la Universidad Tecnológica Nacional. Durante mi formación, adquirí experiencia en diversos lenguajes como HTML, CSS, Bootstrap, Tailwind, Javascript, además de familiarizarme con el uso de frameworks como React y Vue.js. También profundicé mis conocimientos en Node.js y Express.js, además de bases de datos como Mongo DB para gestionar y almacenar datos. Esta experiencia me ha proporcionado un entendimiento integral del desarrollo de sitios web interactivos y aplicaciones web en un enfoque Full Stack.  A su vez entre a trabajar en CooWeb donde me desempeñe desarrollador front-end trabajando en conjunto con otros desarrolladores,  diseñadores UX/UI y QA Tester. Actualmente me desempeño como desarrollador front-end en Kontroll, una empresa dedicada a la logística internacional y la integración de APIs de distintas empresas de importación y exportación. A raíz de mi desempeño, fui contratado como desarrollador front-end, puesto que ocupo desde septiembre.',
      present: 'Actualidad',
      socialLinks: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Correo'
      },
      experienceWork: {
        kontroll: {
          title: 'Desarrollador Front End - Kontroll',
          date: 'Septiembre 2024 - Actualidad',
          description: 'Desarrollo web con Vue.js y Pinia, mantenimiento y desarrollo de nuevas funcionalidades. Implementación de herramientas de IA para optimizar el desarrollo. Especialización en digitalización y optimización de cadenas de suministro para empresas import/export.'
        },
        cooweb: {
          title: 'Desarrollador Front End - CooWeb',
          date: 'Diciembre 2023 - Septiembre 2024',
          description: 'Desarrollo de interfaces intuitivas utilizando Vue.js y Pinia. Mantenimiento y desarrollo de nuevas funcionalidades para productos digitales y transformaciones digitales empresariales.'
        }
      },
      educationExperience: {
        webDev: {
          title: "Diplomatura en Programación Web Full Stack",
          institution: "Universidad Tecnológica Nacional",
          year: "2023"
        },
        musicDegree: {
          title: "Licenciatura en Música Popular",
          institution: "Pontificia Universidad Católica Argentina",
          year: "2020-2024"
        },
        musicTech: {
          title: "Tecnicatura en Música Popular",
          institution: "Pontificia Universidad Católica Argentina",
          year: "2020-2022"
        },
        musicTeacher: {
          title: "Profesor de Educación Musical",
          institution: "Conservatorio Isaías Orbe",
          year: "2013-2019"
        },
        guitarTeacher: {
          title: "Profesor de Guitarra",
          institution: "Conservatorio Isaías Orbe",
          year: "2013-2019"
        }
      }
    },
    en: {
      title: 'Front End Developer',
      subtitle: 'AI-POWERED DEVELOPER',
      technologies: 'Technologies & Tools',
      categories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        Database: 'Database',
        'State Management': 'State Management',
        'AI Tools': 'AI Tools'
      },
      softSkills: 'Soft Skills',
      experience: 'Work Experience',
      education: 'Education',
      aboutMe: 'About Me',
      teamwork: 'Teamwork',
      teamworkDesc: 'Experience effectively collaborating in multidisciplinary teams to achieve common goals.',
      innovation: 'Innovation & Creativity',
      innovationDesc: 'Ability to provide creative solutions and think outside the box in project development.',
      communication: 'Effective Communication',
      communicationDesc: 'Skill in conveying technical ideas clearly and precisely to different audiences.',
      aboutMeText: 'I completed the Diploma in Full Stack Web Programming at the National Technological University. During my training, I gained experience in various languages ​​such as HTML, CSS, Bootstrap, Tailwind, Javascript, in addition to becoming familiar with the use of frameworks such as React and Vue.js. I also deepened my knowledge in Node.js and Express.js, as well as databases such as Mongo DB to manage and store data. This experience has provided me with a comprehensive understanding of developing interactive websites and web applications in a Full Stack approach. At the same time, I started working at CooWeb where I worked as a front-end developer working together with other developers, UX/UI designers and QA Tester. I currently work as a front-end developer at Kontroll, a company dedicated to international logistics and the integration of APIs from different import and export companies. As a result of my performance, I was hired as a front-end developer, a position I have held since September.',
      present: 'Present',
      socialLinks: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Email'
      },
      experienceWork: {
        kontroll: {
          title: 'Front End Developer - Kontroll',
          date: 'September 2024 - Present',
          description: 'Web development with Vue.js and Pinia, maintenance and development of new features. Implementation of AI tools to optimize development. Specialization in digitalization and optimization of supply chains for import/export companies.'
        },
        cooweb: {
          title: 'Front End Developer - CooWeb',
          date: 'December 2023 - September 2024',
          description: 'Development of intuitive interfaces using Vue.js and Pinia. Maintenance and development of new features for digital products and business digital transformations.'
        }
      },
      educationExperience: {
        webDev: {
          title: "Full Stack Web Development Diploma",
          institution: "National Technological University",
          year: "2023"
        },
        musicDegree: {
          title: "Bachelor's Degree in Popular Music",
          institution: "Pontifical Catholic University of Argentina",
          year: "2020-2024"
        },
        musicTech: {
          title: "Technical Degree in Popular Music",
          institution: "Pontifical Catholic University of Argentina",
          year: "2020-2022"
        },
        musicTeacher: {
          title: "Music Education Teacher",
          institution: "Isaías Orbe Conservatory",
          year: "2013-2019"
        },
        guitarTeacher: {
          title: "Guitar Teacher",
          institution: "Isaías Orbe Conservatory",
          year: "2013-2019"
        }
      }
    }
  };

  const t = translations[language];

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-100 via-blue-100 to-gray-100 text-gray-900'
    }`}>
      {/* Theme and Language Controls */}
      <div className="fixed top-4 right-4 flex gap-4 z-50">
        <button
          onClick={() => setLanguage(prev => prev === 'es' ? 'en' : 'es')}
          className={`p-2 rounded-full ${
            isDarkMode 
              ? 'bg-gray-800/80 hover:bg-gray-700/80' 
              : 'bg-white/80 hover:bg-gray-100/80'
          } backdrop-blur-sm transition-all duration-300 transform hover:scale-110 flex items-center justify-center`}
          aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
          <img 
            src={language === 'es' ? Spain : UnitedStatesOfAmerica} 
            alt={language === 'es' ? 'Bandera española' : 'United States flag'} 
            className="w-6 h-6"
          />
        </button>
        <button
          onClick={() => setIsDarkMode(prev => !prev)}
          className={`p-2 rounded-full ${
            isDarkMode 
              ? 'bg-gray-800/80 hover:bg-gray-700/80' 
              : 'bg-white/80 hover:bg-gray-100/80'
          } backdrop-blur-sm transition-all duration-300 transform hover:scale-110`}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <Sun className="w-6 h-6 text-blue-400" />
          ) : (
            <Moon className="w-6 h-6 text-blue-600" />
          )}
        </button>
      </div>

      <div className="p-8">
        {/* Header/Hero Section */}
        <header className="max-w-5xl mx-auto mb-16 text-center relative">
          <div className="mb-8 relative">
            <div className={`absolute inset-0 rounded-full blur-3xl opacity-20 ${
              isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
            }`} style={{ transform: 'scale(0.8)' }} />
            <img 
              src={Imagen} 
              alt="Profile" 
              className={`w-48 h-48 rounded-full mx-auto mb-8 border-4 relative z-10 ${
                isDarkMode ? 'border-blue-400 shadow-blue-500/20' : 'border-blue-600 shadow-blue-500/10'
              } shadow-lg transition-all duration-300 hover:scale-105`}
            />
            <h1 className={`text-5xl md:text-6xl font-bold mb-2 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400'
                : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600'
            }`}>
              {t.title}
            </h1>
            <p className={`text-xl font-semibold tracking-wide mb-6 transition-all duration-300 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
              {t.subtitle}
            </p>
            <div className="flex justify-center gap-6 mb-8">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ignaciofernandezdev/', label: t.socialLinks.linkedin },
                { icon: Mail, href: 'mailto:ignaciofernandezdeveloper@gmail.com', label: t.socialLinks.email }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target='_blank'
                  className={`group relative transition-all duration-300 transform hover:scale-110 ${
                    isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
                  }`}
                >
                  <Icon className="w-7 h-7" />
                  <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-white text-gray-900'
                  }`}>
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto space-y-12">
        <section className={`transform transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800/30 backdrop-blur-sm shadow-blue-500/10' 
              : 'bg-white/70 backdrop-blur-sm shadow-blue-500/5'
          } rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1`}>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className={`transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              {t.aboutMe}
            </h2>
            <p className={`leading-relaxed text-lg transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.aboutMeText}
            </p>
          </section>
          {/* Technologies Section */}
          <section className={`transform transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800/30 backdrop-blur-sm shadow-blue-500/10' 
              : 'bg-white backdrop-blur-sm shadow-blue-500/5'
          } rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1`}>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Code2 className={`transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              {t.technologies}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'HTML', category: 'Frontend' },
                { name: 'CSS', category: 'Frontend' },
                { name: 'JavaScript', category: 'Frontend' },
                { name: 'React', category: 'Frontend' },
                { name: 'Vue', category: 'Frontend' },
                { name: 'TypeScript', category: 'Frontend' },
                { name: 'Pinia', category: 'State Management' },
                { name: 'Redux', category: 'State Management' },
                { name: 'Node.js', category: 'Backend' },
                { name: 'Express', category: 'Backend' },
                { name: 'MongoDB', category: 'Database' },
                { name: 'WindSurf', category: 'AI Tools' },

              ].map((tech) => (
                <div 
                  key={tech.name}
                  className={`group relative overflow-hidden transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/30 hover:bg-blue-900/30' 
                      : 'bg-gray-100/50 hover:bg-blue-100/50'
                  } backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 hover:shadow-lg`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                    isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                  }`} />
                  <p className={`font-semibold mb-1 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-white group-hover:text-blue-400' 
                      : 'text-gray-900 group-hover:text-blue-600'
                  }`}>
                    {tech.name}
                  </p>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {t.categories[tech.category as keyof typeof t.categories]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Soft Skills Section */}
          <section className={`transform transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800/30 backdrop-blur-sm shadow-blue-500/10' 
              : 'bg-white backdrop-blur-sm shadow-blue-500/5'
          } rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1`}>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Brain className={`transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              {t.softSkills}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: t.teamwork, desc: t.teamworkDesc },
                { icon: Lightbulb, title: t.innovation, desc: t.innovationDesc },
                { icon: MessageSquare, title: t.communication, desc: t.communicationDesc }
              ].map(({ icon: Icon, title, desc }) => (
                <div 
                  key={title}
                  className={`group transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700/30 hover:bg-blue-900/30' 
                      : 'bg-gray-100/50 hover:bg-blue-100/50'
                  } backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 hover:shadow-lg`}
                >
                  <Icon className={`w-8 h-8 mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  } group-hover:scale-110 transform transition-transform duration-300`} />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className={`transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className={`transform transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800/30 backdrop-blur-sm shadow-blue-500/10' 
              : 'bg-white backdrop-blur-sm shadow-blue-500/5'
          } rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1`}>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Building2 className={`transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              {t.experience}
            </h2>
            
            <div className="space-y-8">
              <div className={`relative border-l-2 transition-colors duration-300 ${
                isDarkMode ? 'border-blue-400' : 'border-blue-600'
              } pl-6`}>
                <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full transition-colors duration-300 ${
                  isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                }`} />
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">{t.experienceWork.kontroll.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{t.experienceWork.kontroll.title}</h3>
                <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t.experienceWork.kontroll.description}
                </p>
              </div>

              <div className={`relative border-l-2 transition-colors duration-300 ${
                isDarkMode ? 'border-blue-400' : 'border-blue-600'
              } pl-6`}>
                <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full transition-colors duration-300 ${
                  isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                }`} />
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">{t.experienceWork.cooweb.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{t.experienceWork.cooweb.title}</h3>
                <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t.experienceWork.cooweb.description}
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className={`transform transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800/30 backdrop-blur-sm shadow-blue-500/10' 
              : 'bg-white/70 backdrop-blur-sm shadow-blue-500/5'
          } rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1`}>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className={`transition-colors duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              {t.education}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(t.educationExperience).map((edu, index) => (
                <div key={index} className={`p-4 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                    : 'bg-white hover:bg-gray-50'
                } shadow-md hover:shadow-lg`}>
                  <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
                  <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {edu.institution}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </section>
         
        </main>
      </div>
    </div>
  );
}

export default App;