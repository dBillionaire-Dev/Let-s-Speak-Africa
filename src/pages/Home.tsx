
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import ProgramCard from "../components/ProgramCard";
import StatCard from "../components/StatCard";

const Home = () => {
  return (
    <div>
      <Hero
        title="Every Voice Matters. Every Story Counts."
        subtitle="Let's Speak Africa a.k.a Ruth Reje Advocacy Foundation is a youth-led NGO using storytelling, public speaking, and art to promote climate action, gender equity, and social justice."
        buttonText="Join Us"
        buttonLink="/get-involved"
        secondaryButtonText="Watch Stories"
        secondaryButtonLink="/programs"
      />

      {/* About Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                alt="Youth activism"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About Let's Speak Africa</h2>
              <div className="h-1 w-16 bg-lsa-gold mb-6"></div>
              <p className="text-lg mb-6">
                We are a youth-led NGO founded by Ruth Bassey Okim, dedicated to amplifying the voices of African youth through storytelling and advocacy to address the most pressing challenges of our time.
              </p>
              <p className="text-lg mb-6">
                Through innovative programs and initiatives, we empower young people to become leaders in climate action, gender equity, and social justice.
              </p>
              <Link to="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Our Programs"
            subtitle="Discover our innovative initiatives that empower youth and create lasting change"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Environmental Storytelling Clubs"
              description="Youth-led clubs that use storytelling to raise awareness about environmental issues and inspire action at the local level."
              image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800"
              link="/programs#storytelling-clubs"
            />
            <ProgramCard
              title="7 Days of Environmental Action"
              description="A week-long campaign of coordinated activities across multiple communities to drive tangible environmental impact."
              image="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800"
              link="/programs#seven-days"
            />
            <ProgramCard
              title="Voices for Her"
              description="Empowering young women to advocate for gender equity through public speaking, art, and community organizing."
              image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800"
              link="/programs#voices"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/programs" className="btn-secondary">
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="section-padding bg-lsa-black text-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Impact"
            subtitle="Together, we're making a meaningful difference across Africa"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard number="2,000+" label="Youth Reached" />
            <StatCard number="3+" label="Cities with Active Clubs" />
            <StatCard number="100+" label="Trained Advocates" />
            <StatCard number="12" label="Community Projects" />
          </div>

          <div className="text-center mt-12">
            <Link to="/impact" className="btn-primary">
              See Our Full Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved CTA Section */}
      <section className="section-padding bg-gradient-to-r from-lsa-green/90 to-lsa-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you want to join a club, partner with us, volunteer, or donate, there are many ways to support our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved#join" className="btn-primary">
              Join a Club
            </Link>
            <Link to="/get-involved#partner" className="btn-outline text-white border-white hover:bg-white/20">
              Partner With Us
            </Link>
            <Link to="/get-involved#volunteer" className="btn-outline text-white border-white hover:bg-white/20">
              Volunteer
            </Link>
            <Link to="/get-involved#donate" className="btn-outline text-white border-white hover:bg-white/20">
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
