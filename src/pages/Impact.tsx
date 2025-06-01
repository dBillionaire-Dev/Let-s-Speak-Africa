
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import TestimonialCard from "../components/TestimonialCard";
import { Link } from "react-router-dom";
import Banner from "/Impact.jpg";

const Impact = () => {
  return (
    <div>
      <Hero
        title="Our Impact"
        subtitle="See how we're making a difference across Africa through youth advocacy and storytelling"
        backgroundImage={Banner}
        overlayOpacity="opacity-60"
      />

      {/* Impact Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Impact in Numbers"
            subtitle="A snapshot of our reach and achievements"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="2,000+" label="Youth Reached" />
            <StatCard number="3+" label="Cities with Active Clubs" />
            <StatCard number="100+" label="Trained Advocates" />
            <StatCard number="12" label="Community Projects" />
            <StatCard number="20+" label="Schools Engaged" />
            <StatCard number="500+" label="Trees Planted" />
            <StatCard number="5,000+" label="Community Members Impacted" />
            <StatCard number="30+" label="Local Partners" />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Success Stories"
            subtitle="Real impact from our programs and initiatives"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Community Clean-up Initiative</h3>
              <p className="text-lg text-gray-700 mb-4">
                In Lagos, our Environmental Storytelling Club mobilized over 200 community members to participate in a major clean-up operation, removing 2 tons of plastic waste from local waterways.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The club members used their storytelling skills to create compelling narratives about the importance of clean water, which were shared through community radio and social media.
              </p>
              <p className="text-lg text-gray-700">
                As a result, the local government committed to implementing a regular waste collection schedule and installing waste bins throughout the community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Girls' Education Advocacy</h3>
              <p className="text-lg text-gray-700 mb-4">
                Participants in our Voices for Her program identified a gap in girls' access to education in their community and launched a "Back to School" campaign.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The campaign included storytelling events, community dialogues, and meetings with local leaders, highlighting the barriers to girls' education and proposing solutions.
              </p>
              <p className="text-lg text-gray-700">
                Their efforts resulted in a local scholarship fund that has supported 25 girls to return to school and complete their education.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Environmental Policy Change</h3>
              <p className="text-lg text-gray-700 mb-4">
                Youth advocates from our 7 Days of Environmental Action campaign presented compelling stories and data to the city council about the impact of plastic pollution.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Their presentations, backed by community support mobilized through storytelling, led to the adoption of a new policy limiting single-use plastics in the city.
              </p>
              <p className="text-lg text-gray-700">
                This policy is estimated to reduce plastic waste by 30% annually, demonstrating the power of youth advocacy in creating systemic change.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Youth Leadership Development</h3>
              <p className="text-lg text-gray-700 mb-4">
                Through our leadership and public speaking training, a group of 15 young people from underserved communities developed the confidence and skills to advocate for their needs.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                These youth have gone on to lead community projects, speak at national conferences, and mentor other young people in their communities.
              </p>
              <p className="text-lg text-gray-700">
                Five of them have been appointed to local youth councils, where they now influence policy decisions affecting young people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Testimonials"
            subtitle="Hear from the people who have been part of our journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Being part of the Environmental Storytelling Club changed how I see my role in the community. I found my voice and learned that stories can create real change."
              name="Chioma A."
              title="Club Member, Lagos"
            />
            <TestimonialCard
              quote="The public speaking skills I gained through Let's Speak Africa helped me become a confident advocate for gender equity in my school and community."
              name="Sarah M."
              title="Voices for Her Participant"
            />
            <TestimonialCard
              quote="Let's Speak Africa's approach of combining storytelling with environmental action creates a powerful platform for youth to engage with important issues."
              name="Dr. James K."
              title="Community Partner"
            />
            <TestimonialCard
              quote="After participating in the 7 Days of Environmental Action, I started a recycling initiative in my neighborhood that has now spread to three nearby communities."
              name="Michael O."
              title="Program Participant, Abuja"
            />
            <TestimonialCard
              quote="The mentorship I received through the Voices for Her program gave me the confidence to run for student government and advocate for policy changes at my university."
              name="Amina T."
              title="Youth Advocate"
            />
            <TestimonialCard
              quote="Let's Speak Africa is creating the next generation of environmentally conscious leaders. Their impact will be felt for years to come."
              name="Lisa R."
              title="Environmental Organization Director"
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Partners"
            subtitle="Organizations that support and collaborate with us"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {/* Partner logos would go here - using placeholders */}
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Partner 1</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Partner 2</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Partner 3</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Partner 4</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Partner 5</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Partner 6</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Partner 7</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Partner 8</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Interested in becoming a partner? We welcome collaborations with organizations that share our vision.
            </p>
            <Link to="/get-involved#partner" className="btn-primary">Partner With Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
