import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import Banner from "/Project.jpg"

const Programs = () => {
  return (
    <div>
      <Hero
        title="Our Programs"
        subtitle="At Let's Speak Africa, we harness storytelling, public speaking, and grassroots action to drive social and environmental change. Here are some of our key projects across Africa and Asia."
        backgroundImage={Banner}
        overlayOpacity="opacity-60"
      />

      {/* Core Focus Areas Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Focus Areas"
            subtitle="Three key areas where we concentrate our efforts to create lasting change"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-lsa-green">
              <h3 className="text-2xl font-bold mb-4">Climate Advocacy</h3>
              <p className="text-gray-600 mb-4">
                We empower youth to become effective advocates for environmental protection and climate action in their communities and beyond.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Community awareness campaigns</li>
                <li>Environmental education initiatives</li>
                <li>Youth-led climate projects</li>
                <li>Public speaking on climate issues</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-lsa-gold">
              <h3 className="text-2xl font-bold mb-4">Women's Rights & Gender Equity</h3>
              <p className="text-gray-600 mb-4">
                We work to advance gender equality and create spaces where women's voices are amplified and valued.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Women's leadership training</li>
                <li>Gender advocacy campaigns</li>
                <li>Safe spaces for dialogue</li>
                <li>Mentorship programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-lsa-black">
              <h3 className="text-2xl font-bold mb-4">Youth Leadership & Public Speaking</h3>
              <p className="text-gray-600 mb-4">
                We build the capacity of young people to articulate their ideas, share their stories, and lead change.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Public speaking workshops</li>
                <li>Storytelling training</li>
                <li>Youth leadership forums</li>
                <li>Community organizing skills</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Programs */}
      <section id="storytelling-clubs" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Environmental Storytelling Clubs"
          />

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800"
                alt="Environmental Storytelling Club"
                className="rounded-lg shadow-lg w-full h-[400px]"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Empowering Youth Through Storytelling</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our Environmental Storytelling Clubs bring together young people who use the power of narrative, public speaking, and creative expression to raise awareness about environmental challenges and inspire action.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Each club meets regularly to develop storytelling skills, learn about environmental issues, and create campaigns that engage their communities in protecting the planet.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Club Activities Include:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Storytelling workshops and practice sessions</li>
                  <li>Environmental education and research</li>
                  <li>Community outreach events</li>
                  <li>Digital storytelling and social media campaigns</li>
                  <li>Public speaking competitions</li>
                </ul>
              </div>
              <Link to="/get-involved#join" className="btn-secondary">Join a Club</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="seven-days" className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="7 Days of Environmental Action"
          />

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800"
                alt="7 Days of Environmental Action"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">A Week of Coordinated Impact</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our annual 7 Days of Environmental Action campaign mobilizes youth across multiple communities to engage in a week of coordinated activities that drive tangible environmental impact.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Each day of the week focuses on a specific environmental theme, with participants taking concrete actions and sharing their stories to inspire others.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Campaign Highlights:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Community clean-up initiatives</li>
                  <li>Tree planting events</li>
                  <li>Waste reduction and recycling drives</li>
                  <li>Educational workshops and panels</li>
                  <li>Digital storytelling and advocacy</li>
                </ul>
              </div>
              <Link to="/get-involved#volunteer" className="btn-secondary">Participate in Next Campaign</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="voices" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Voices for Her"
          />

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800"
                alt="Voices for Her"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Amplifying Women's Voices</h3>
              <p className="text-lg text-gray-700 mb-6">
                Voices for Her is our flagship program dedicated to empowering young women to advocate for gender equity through public speaking, storytelling, and community organizing.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This initiative creates safe spaces for women to share their experiences, develop their leadership abilities, and lead campaigns that address gender-based challenges in their communities.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Program Components:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Public speaking and leadership training</li>
                  <li>Mentorship from established women leaders</li>
                  <li>Gender advocacy campaigns</li>
                  <li>Community dialogue events</li>
                  <li>Digital storytelling initiatives</li>
                </ul>
              </div>
              <Link to="/get-involved#join" className="btn-secondary">Join Voices for Her</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="fourteen-days" className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="14 Days of Environmental Activism"
          />

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://media.istockphoto.com/id/1435661969/photo/close-up-of-children-holding-a-planet-at-the-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=DzMpS97JzlsbjNlMLwam2x6w_0wLZDA6PiP4DLyt7J8="
                alt="14 Days of Environmental Activism"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">2 Weeks Digital Action for a Greener Future</h3>
              <p className="text-lg text-gray-700 mb-6">
                This flagship digital campaign engages youth from over 14 countries in Africa and Asia.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                For 14 days, participants complete eco-conscious challenges—from reducing plastic to planting trees—and share their impact online to spark collective environmental action.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Daily Tasks Include:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Waste reduction and recycling</li>
                  <li>Sustainable lifestyle swaps</li>
                  <li>Nature cleanups</li>
                  <li>Tree planting and care</li>
                  <li>Social media storytelling</li>
                </ul>
              </div>
              <Link to="/get-involved#volunteer" className="btn-secondary">Participate in Next Challenge</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="care-free-day" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Car-Free Day Campaign"
          />

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1698199069683-d81abd54ffe4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FyJTIwZnJlZSUyMGRheXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Car-Free Day Campaign"
                className="rounded-lg shadow-lg w-full h-[400px]"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Promoting Sustainable Transportation</h3>
              <p className="text-lg text-gray-700 mb-6">
                Held annually in over 20 countries, this campaign invites participants to give up cars for a day and embrace eco-friendly alternatives like walking, biking, or carpooling.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This initiative raises awareness about fossil fuel emissions and promotes green mobility.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Campaign Features Include:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>National car-free pledges</li>
                  <li>Bike rides and walkathons</li>
                  <li>Climate talks and webinars</li>
                  <li>Online awareness drives</li>
                  <li>Partnered events with local communities</li>
                </ul>
              </div>
              <Link to="/get-involved#volunteer" className="btn-secondary">Join Voices for Her</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="tree-planting" className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="500 Tree Planting Project – Enugu, Nigeria"
          />

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://media.istockphoto.com/id/1479288148/photo/community-service-volunteering-and-black-man-plant-trees-in-park-garden-and-nature-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xzzcd5YKb4L2lX4-OvCMuy3Wyd6_Cyc4fcETSOcgFqg="
                alt="500 Tree Planting Project – Enugu, Nigeria"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Greening Schools, Inspiring Change</h3>
              <p className="text-lg text-gray-700 mb-6">
                We planted 520 trees across 31 elementary schools in Enugu State to fight deforestation, enhance food security, and educate youth on climate change.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We also launched Environmental Conservation Clubs to support long-term environmental stewardship.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Project Highlights Include:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Tree planting workshops</li>
                  <li>Climate education in classrooms</li>
                  <li>Launch of school-based eco clubs</li>
                  <li>Local government collaboration</li>
                  <li>Ongoing student-led care</li>
                </ul>
              </div>
              <Link to="/get-involved#volunteer" className="btn-secondary">Volunteer in the Next Project</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="urban-beautification" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Urban Beautification Project – Calabar, Nigeria"
          />

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://media.istockphoto.com/id/1324947925/photo/tree-tunnel.webp?a=1&b=1&s=612x612&w=0&k=20&c=6P2V0uq5SEed9IiqUBJQmtT8EoF6aww1WGGXOAydq64="
                alt="Urban Beautification Project – Calabar, Nigeria"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Greener Cities, Brighter Futures</h3>
              <p className="text-lg text-gray-700 mb-6">
                This project revitalizes public spaces through flower and tree planting, in partnership with local authorities and volunteers.
                <p className="text-lg text-gray-700 mb-6">
                  It combines eco-awareness with civic pride to make cities more beautiful and sustainable.
                </p>
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Project Features Include:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Beautification drives in parks and streets</li>
                  <li>Volunteer mobilization and training</li>
                  <li>Urban greening education</li>
                  <li>Art and nature installations</li>
                  <li>Collaboration with city planners</li>
                </ul>
              </div>
              <Link to="/get-involved#join" className="btn-secondary">Join Our Team</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="womens-right" className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Women’s Rights Advocacy Through Storytelling"
          />

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdvbWVuJUUyJTgwJTk5cyUyMFJpZ2h0cyUyMEFkdm9jYWN5JTIwVGhyb3VnaCUyMFN0b3J5dGVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Women’s Rights Advocacy Through Storytelling"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Voices for Equality</h3>
              <p className="text-lg text-gray-700 mb-6">
                Through spoken word, digital campaigns, and live performances, we advocate for women’s rights and gender justice.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                These initiatives empower women and girls to share their stories, challenge gender-based violence, and inspire change.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Program Components Include:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Spoken word poetry events</li>
                  <li>Awareness campaigns on GBV</li>
                  <li>Storytelling workshops for women</li>
                  <li>Women-led stage productions</li>
                  <li>Online activism and conversations</li>
                </ul>
              </div>
              <Link to="/get-involved#volunteer" className="btn-secondary">Participate in Next Campaign</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="cross-continent" className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Cross-Continental Speech Concerts"
          />

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://plus.unsplash.com/premium_photo-1723291238875-b9f0f5a8b95c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENyb3NzJTIwQ29udGluZW50YWwlMjBTcGVlY2glMjBjb25mZXJlbmNlfGVufDB8fDB8fHww"
                alt="Cross-Continental Speech Concerts"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Uniting Voices Across Borders</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our Pan-African and cross-continental speech concerts spotlight youth voices on global issues like climate change, peace, and gender equity.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                These events foster collaboration, creativity, and youth leadership across continents.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Concert Highlights Include:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Youth-led public speaking showcases</li>
                  <li>International speaker collaborations</li>
                  <li>Art-meets-activism performances</li>
                  <li>Thematic storytelling sessions</li>
                  <li>Digital broadcasting and engagement</li>
                </ul>
              </div>
              <Link to="/get-involved#join" className="btn-secondary">Participate</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="environmental-awareness" className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Environmental Awareness in Rural Communities"
          />

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <img
                src="https://media.istockphoto.com/id/1497810665/photo/the-doctor-explaining-medicine-dosage-and-giving-out-medicines-to-village-women-during-rural.webp?a=1&b=1&s=612x612&w=0&k=20&c=yPcpHUiBJrNq0CJ79eiyVmadBXnFHtndMhHmpYJHGPM="
                alt="Environmental Awareness in Rural Communities"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Climate Education at the Grassroots</h3>
              <p className="text-lg text-gray-700 mb-6">
                We deliver environmental awareness sessions in rural and underserved communities, including recent initiatives in Pakistan.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                This is to cultivate local understanding of climate issues and inspire sustainable practices from the ground up.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <h4 className="font-bold mb-2">Session Activities Include:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Climate literacy workshops</li>
                  <li>Village-based outreach talks</li>
                  <li>Hands-on eco training</li>
                  <li>Community-led green projects</li>
                  <li>Local language storytelling</li>
                </ul>
              </div>
              <Link to="/get-involved#volunteer" className="btn-secondary">Join our Awareness Campaign</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
