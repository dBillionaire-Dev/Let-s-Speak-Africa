
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
              <h3 className="text-2xl font-bold mb-4">Greening Our Streets: The Calabar Urban Beautification Project</h3>
              <p className="text-lg text-gray-700 mb-4">
                In June 2025, Let’s Speak Africa led a transformative project to beautify Ekorinim in Calabar through flower planting. What began as a modest vision bloomed into a vibrant display of collective action for the environment.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Despite limited resources, our team mobilized volunteers, raised community support, and executed a seamless project that added color and consciousness to the streets.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This initiative didn’t just plant flowers, it planted awareness. Residents, especially young people, were inspired to take environmental action in their own neighborhoods.
              </p>
              <p className="text-lg text-gray-700">
                The project is a model of how local solutions and creative activism can promote climate responsibility across African cities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Telling Africa’s Climate Stories – The Environmental Storytelling Club Launch</h3>
              <p className="text-lg text-gray-700 mb-4">
                In Kaduna, Nigeria, Let’s Speak Africa launched its first Environmental Storytelling Club, a youth-led initiative blending advocacy with spoken word, drama, and poetry.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This club empowers students to express climate realities through art, making issues like deforestation, flooding, and air pollution personal and relatable.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The launch event featured original performances from secondary school students, and it sparked interest from educators, artists, and NGOs who want to replicate the model.
              </p>
              <p className="text-lg text-gray-700">
                By nurturing storytelling as a tool for climate justice, Let’s Speak Africa is inspiring a generation of storytellers who don’t just tell stories, they change them.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Voices That Move Mountains: 14 Days of Environmental Activism</h3>
              <p className="text-lg text-gray-700 mb-4">
                Through our Planet Pulse campaign, Let’s Speak Africa activated a movement across 40+ African countries. In 14 days, youth from Kenya to Nigeria, Ghana to South Africa engaged in creative tasks: from storytelling and spoken word to tree planting and recycling challenges.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The highlight was a continental video collage, each participant representing their country with powerful environmental declarations. The campaign amplified African voices, showing that climate advocacy doesn’t require wealth, only the will to speak and act.
              </p>
              <p className="text-lg text-gray-700">
                Planet Pulse proved that when voices unite across borders, the climate conversation becomes impossible to ignore.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Women Leading the Change: Let’s Speak Women's Open</h3>
              <p className="text-lg text-gray-700 mb-4">
                Through our “Voices of Women” campaign, Let’s Speak Africa empowered young women across Nigeria and beyond to lead climate action through storytelling, clean-up projects, and local advocacy.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                From spoken word to mentorship meetups, women found strength in unity. A standout moment came from Enugu, where one participant’s activism sparked talks with local authorities.
              </p>
              <p className="text-lg text-gray-700">
                This project reaffirmed what we already believe: when African women rise, communities move. Let’s Speak Africa is committed to amplifying women’s leadership and storytelling as a driving force in Africa’s environmental transformation.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <TestimonialCard
              quote="Working with the Executive team in 2025 has been impactful, allowing me to connect with diverse audiences across Africa. A standout moment was the Let's Speak Women Open tournament, where I helped empower women through public speaking, a truly inspiring and unforgettable experience."
              name="Advocate Ashfaque A."
              title="Intercontinental leader, Let's Speak Africa"
              image="akbar.jpeg"
            />
            <TestimonialCard
              quote="Joining the Executive team for the 2025 project year has been both exciting and enlightening, offering me a fresh perspective on activism. It’s been a truly rewarding experience, and I look forward to a future where our world becomes a place for everyone."
              name="Emmanuel A."
              title="Graphics Head, Let's Speak Africa"
              image="emmanuel.jpeg"
            />
            <TestimonialCard
              quote="Being part of Let's speak Africa led me to ignite the creativity that i never knew i had it in me. It provided me with an opportunity to tackle and identify the strength i never knew  existed. 
              Day by day, it fuels me to light up and bring out the best in me."
              name="Fida N."
              title="Content Creator, Let's Speak Africa"
              image="fida.jpeg"
            />
            <TestimonialCard
              quote="The public speaking skills I gained through Let's Speak Africa helped me become a confident advocate for gender equity in my school and community."
              name="Odida A"
              title="Deputy Public Relations Officer, Let's Speak Africa"
              image="odida.jpeg"
            />
            <TestimonialCard
              quote="Serving as Public Relations Manager at Let’s Speak Africa has been a transformative experience, allowing me to amplify the voices of young people across the continent. Drawing on my background in social work and passion for civic engagement, I’m proud to contribute to initiatives that enable Africa’s youth to drive conversations and solve problems within their own communities. Let’s Speak Africa isn’t just an organization, it’s a movement, shaping the future by investing in the leaders of tomorrow."
              name="Name S."
              title="Public Relations Manager, Let's Speak Africa"
              image="testimonial.jpeg"
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

          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-1 items-center w-100 mx-auto"> */}
          <div className="grid gap-2 items-center">
            <div className="rounded-full shadow-sm flex items-center justify-center">
              <div><img className="rounded-full h-40 w-40" src="/iyc.jpeg" /></div>
            </div>
            {/* <div className="rounded-full shadow-sm flex items-center justify-center">
              <div><img className="rounded-full h-40 w-40" src="/Nex.jpeg" /></div>
            </div> */}
            {/* <div className="bg-black p-2 rounded-lg shadow-sm flex items-center justify-center h-24">
              <div className="texvt-xl font-bold text-gray-400">Partner 2</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Partner 4</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Partner 5</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24">
              <div className="text-xl font-bold text-gray-400">Partner 6</div>
            </div> */}
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
