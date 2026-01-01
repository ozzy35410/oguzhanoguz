'use client'

import { useState } from 'react'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

// Chevron icon for collapsible sections
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

const graduationProject = {
  name: 'Inside-Out Tracking Sensor Suite',
  period: 'Oct 2024 - May 2025',
  description: 'The Inside-Out Tracking Sensor for Virtual Reality Applications project is designed to overcome the limitations of VR systems using external sensors. The aim is to provide a portable, cost-effective and immersive experience by developing an inside-out system that can perform precise and real-time 6-degree-of-freedom head tracking.',
  course: 'Graduation Project',
  status: 'Completed'
}

const termProjects = [
  {
    name: 'Signal Classification with Deep Learning',
    period: 'Fall 2024',
    description: 'Developed a deep learning model for signal classification in communication systems. The project involved  synthetic data generation, signal processing, and ResNet implementation for communication applications. Focused on improving classification accuracy and real-time performance.',
    course: 'EE435 Communications I',
    status: 'Completed'
  },
  {
    name: 'Frequency-Hopping Spread Spectrum (FHSS) Transmitter and Receiver',
    period: 'Fall 2024',
    description: 'Implemented a frequency-hopping spread spectrum communication system including both transmitter and receiver components. The project focused on digital signal processing techniques, wireless communication protocols, and anti-jamming capabilities in challenging environments.',
    course: 'EE430 Digital Signal Processing',
    status: 'Completed'
  },
  {
    name: 'FPGA Implementation of Isometric Shooter Game',
    period: 'Spring 2024',
    description: 'Developed a complete isometric shooter game implemented on FPGA hardware. The project involved digital logic design, VHDL programming, real-time graphics processing, and embedded systems optimization for interactive gaming applications.',
    course: 'EE314 Digital Electronics',
    status: 'Completed'
  },
  {
    name: 'Integrated Analog Micro-Air Conditioner',
    period: 'Fall 2023',
    description: 'Designed and implemented an integrated analog circuit for micro-air conditioning applications. This project involved circuit design, simulation, and practical implementation using analog electronics principles, thermal management, and efficiency optimization.',
    course: 'EE313 Analog Electronics Laboratory',
    status: 'Completed'
  }
]

const deicoProjects = [
  {
    name: 'Oscilloscope and Waveform Generator Control Interface and Test Application with C#',
    period: 'Winter 2025',
    description: 'Comprehensive C# interface for controlling Keysight MSOX3104T Mixed Signal Oscilloscope and 33500B Waveform Generator. Features automated testing capabilities, complete parameter control, and measurement functions for professional laboratory applications.',
    company: 'Deico - Test Engineering Internship',
    status: 'Completed',
    github: 'https://github.com/ozzy35410/Oscilloscope-and-Waveform-Generator-Control-Interface-and-Test-Application-with-Csharp'
  },
  {
    name: 'RS-232 Communication and Test Application with UPort1250',
    period: 'Winter 2025',
    description: 'RS-232 communication interface application for UPort 1250 device with automated testing capabilities. Enables communication between different devices and includes comprehensive testing processes for connection authenticity verification.',
    company: 'Deico - Test Engineering Internship',
    status: 'Completed',
    github: 'https://github.com/ozzy35410/RSR-232-communication-and-test-application-with-UPort1250'
  }
]

const umramProjects = [
  {
    name: 'Jitter Analysis Framework for Sinusoidal Signals',
    period: 'Summer 2024',
    description: 'Developed a comprehensive MATLAB-based framework for calculating and analyzing multiple jitter metrics in sinusoidal signals. The project involved mathematical demonstration of jitter effects and precise estimation of zero-crossing instants using advanced signal processing techniques.',
    company: 'UMRAM - National Magnetic Resonance Research Center',
    status: 'Completed'
  }
]

const personalProjects = [
  {
    name: 'Oscilloscope & Waveform Generator Control Interface and Test Application',
    period: 'Jan 2025',
    description: 'Created a comprehensive control interface and test application for oscilloscopes and waveform generators using C#. The project includes instrument control, data acquisition, automated testing capabilities, and a user-friendly interface for laboratory and professional use.',
    course: 'Personal Project',
    status: 'Completed'
  }
]

export default function Projects() {
  const [metuExpanded, setMetuExpanded] = useState(false)
  const [graduationExpanded, setGraduationExpanded] = useState(false)
  const [termExpanded, setTermExpanded] = useState(false)
  const [internshipExpanded, setInternshipExpanded] = useState(false)
  const [deicoExpanded, setDeicoExpanded] = useState(false)
  const [umramExpanded, setUmramExpanded] = useState(false)

  return (
    <SimpleLayout
      title="My Projects"
      intro="You can take a look at the projects I have done throughout my education and working life."
    >
      <div className="space-y-8">
        {/* Internship Projects Section */}
        <section>
          <button
            onClick={() => setInternshipExpanded(!internshipExpanded)}
            className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
          >
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              Internship Projects
            </h2>
            <ChevronDownIcon 
              className={`h-6 w-6 text-zinc-500 transition-transform ${
                internshipExpanded ? 'rotate-180' : ''
              }`} 
            />
          </button>

          {internshipExpanded && (
            <div className="mt-6 space-y-6">
              {/* Deico Internship Button */}
              <div>
                <button
                  onClick={() => setDeicoExpanded(!deicoExpanded)}
                  className="w-full flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-200">
                    Deico - Test Engineering Internship
                  </h3>
                  <ChevronDownIcon 
                    className={`h-5 w-5 text-zinc-500 transition-transform ${
                      deicoExpanded ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {deicoExpanded && (
                  <div className="mt-4">
                    <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                      {deicoProjects.map((project) => (
                        <Card as="li" key={project.name}>
                          <div className="flex items-center gap-2 mb-2">
                            <Card.Link href={`/projects/${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`}>
                              <h4 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                {project.name}
                              </h4>
                            </Card.Link>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                              {project.company} • {project.period}
                            </p>
                            <span className="inline-block px-2 py-1 text-xs rounded-full mt-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              {project.status}
                            </span>
                          </div>
                          <div className="mt-4">
                            <Card.Description>{project.description}</Card.Description>
                          </div>
                          <div className="mt-4">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                            >
                              <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              GitHub Repository
                            </a>
                          </div>
                        </Card>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* UMRAM Internship Button */}
              <div>
                <button
                  onClick={() => setUmramExpanded(!umramExpanded)}
                  className="w-full flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-200">
                    National Magnetic Resonance Research Center (UMRAM) - Undergraduate Research Internship
                  </h3>
                  <ChevronDownIcon 
                    className={`h-5 w-5 text-zinc-500 transition-transform ${
                      umramExpanded ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {umramExpanded && (
                  <div className="mt-4">
                    <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                      {umramProjects.map((project) => (
                        <Card as="li" key={project.name}>
                          <div className="flex items-center gap-2 mb-2">
                            <Card.Link href={`/projects/${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`}>
                              <h4 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                {project.name}
                              </h4>
                            </Card.Link>
                          </div>
                          <div className="mt-2">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                              {project.company} • {project.period}
                            </p>
                            <span className="inline-block px-2 py-1 text-xs rounded-full mt-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              {project.status}
                            </span>
                          </div>
                          <div className="mt-4">
                            <Card.Description>{project.description}</Card.Description>
                          </div>
                        </Card>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        {/* METU Projects Section */}
        <section>
          <button
            onClick={() => setMetuExpanded(!metuExpanded)}
            className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm ring-1 ring-zinc-900/5 dark:ring-white/10 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
          >
            <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              METU Projects
            </h2>
            <ChevronDownIcon 
              className={`h-6 w-6 text-zinc-500 transition-transform ${
                metuExpanded ? 'rotate-180' : ''
              }`} 
            />
          </button>

          {metuExpanded && (
            <div className="mt-6 space-y-6">
              {/* Graduation Project Button */}
              <div>
                <button
                  onClick={() => setGraduationExpanded(!graduationExpanded)}
                  className="w-full flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-200">
                    Graduation Project
                  </h3>
                  <ChevronDownIcon 
                    className={`h-5 w-5 text-zinc-500 transition-transform ${
                      graduationExpanded ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {graduationExpanded && (
                  <div className="mt-4">
                    <Card>
                      <Card.Link href={`/projects/${graduationProject.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`}>
                        <h4 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                          {graduationProject.name}
                        </h4>
                      </Card.Link>
                      <div className="mt-2">
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {graduationProject.course} • {graduationProject.period}
                        </p>
                        <span className="inline-block px-2 py-1 text-xs rounded-full mt-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          {graduationProject.status}
                        </span>
                      </div>
                      <div className="mt-4">
                        <Card.Description>{graduationProject.description}</Card.Description>
                      </div>
                    </Card>
                  </div>
                )}
              </div>

              {/* Term Projects Button */}
              <div>
                <button
                  onClick={() => setTermExpanded(!termExpanded)}
                  className="w-full flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-zinc-700 dark:text-zinc-200">
                    Term Projects
                  </h3>
                  <ChevronDownIcon 
                    className={`h-5 w-5 text-zinc-500 transition-transform ${
                      termExpanded ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {termExpanded && (
                  <div className="mt-4">
                    <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                      {termProjects.map((project) => (
                        <Card as="li" key={project.name}>
                          <Card.Link href={`/projects/${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '')}`}>
                            <h4 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                              {project.name}
                            </h4>
                          </Card.Link>
                          <div className="mt-2">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                              {project.course} • {project.period}
                            </p>
                            <span className="inline-block px-2 py-1 text-xs rounded-full mt-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              {project.status}
                            </span>
                          </div>
                          <div className="mt-4">
                            <Card.Description>{project.description}</Card.Description>
                          </div>
                        </Card>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </SimpleLayout>
  )
}
