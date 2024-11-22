import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Users2, Target, TreePine, Award, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Jane Muthoni",
    role: "Executive Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    bio: "Environmental conservation expert with 15+ years of experience"
  },
  {
    name: "John Kamau",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: "Former UN environmental program coordinator"
  },
  {
    name: "Sarah Ochieng",
    role: "Technology Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    bio: "Tech innovator focusing on environmental solutions"
  }
];

const milestones = [
  {
    year: "2020",
    title: "Foundation Established",
    description: "Clima Quest was founded with a vision for data-driven conservation"
  },
  {
    year: "2021",
    title: "Footprint Platform Launch",
    description: "Revolutionary tree-planting tracking system introduced"
  },
  {
    year: "2022",
    title: "National Recognition",
    description: "Awarded for environmental innovation excellence"
  },
  {
    year: "2023",
    title: "Million Tree Milestone",
    description: "Successfully coordinated planting of 1M+ trees"
  }
];

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation isScrolled={true} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-900 to-green-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Mission for a Greener Future
          </h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto">
            Empowering communities and organizations to make measurable environmental impact 
            through innovative technology and collaborative action.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-green-50 rounded-xl p-8">
              <Target className="h-12 w-12 text-green-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To create a sustainable, data-driven approach to environmental conservation 
                that empowers every Kenyan to contribute to national reforestation goals.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-8">
              <TreePine className="h-12 w-12 text-green-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To facilitate and track the planting of 15 billion trees by 2032 through 
                innovative technology, community engagement, and corporate partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals driving our mission forward.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden hover-card">
                <div className="h-64 relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-green-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to transform Kenya's environment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative">
                <div className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition">
                  <div className="text-green-600 font-bold text-xl mb-3">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Award className="h-16 w-16 mx-auto mb-6 text-green-400" />
            <h2 className="text-4xl font-bold mb-4">Recognition & Impact</h2>
            <p className="text-green-50 max-w-2xl mx-auto">
              Our efforts have been recognized by leading environmental organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Environmental Innovation Award</h3>
              <p className="text-green-50">Recognized for pioneering data-driven conservation approaches</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">UN Climate Action Recognition</h3>
              <p className="text-green-50">Highlighted as a model for national conservation initiatives</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Tech for Good Award</h3>
              <p className="text-green-50">Awarded for innovative use of technology in conservation</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}