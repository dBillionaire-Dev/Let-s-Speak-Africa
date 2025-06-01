
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { useIsMobile } from "../hooks/use-mobile";
import Headshot from "/Headshot.jpg";

const About = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      <Hero
        title="About Let's Speak Africa"
        subtitle="Learn more about our mission, vision, and the people behind our organization"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200"
        overlayOpacity="opacity-60"
      />

      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Our Vision" centered={false} />
              <p className="text-lg text-gray-700 mb-6">
                An Africa where every voice is heard, and every story shapes the path toward justice, equity, and sustainability.
              </p>
              <p className="text-lg text-gray-700">
                By 2030, we aim to have empowered over 10,000 youth advocates across 20 African countries, creating a network of changemakers driving positive transformation.
              </p>
            </div>

            <div>
              <SectionTitle title="Our Mission" centered={false} />
              <p className="text-lg text-gray-700 mb-6">
                To empower African youth through storytelling, public speaking, and creative expression to lead movements in climate action, gender justice, and community development.
              </p>
              <p className="text-lg text-gray-700">
                We create platforms and programs that amplify the voices of young people, allowing them to shape the narrative around critical issues affecting their communities and the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our work and define our organization"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lsa-gold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Youth Leadership</h3>
              <p className="text-gray-600">
                We believe in the power, creativity, and passion of young people to lead change in their communities and beyond.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lsa-gold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We create spaces where all voices are heard, respected, and valued, regardless of background or identity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lsa-gold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Storytelling</h3>
              <p className="text-gray-600">
                We harness the transformative power of stories to connect, educate, inspire, and drive action.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lsa-gold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Environmental Sustainability</h3>
              <p className="text-gray-600">
                We are committed to promoting practices that protect our planet and creating a sustainable future for generations to come.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lsa-gold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Gender Equity</h3>
              <p className="text-gray-600">
                We actively work to dismantle barriers and create equal opportunities for all genders in leadership and society.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-lsa-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-lsa-gold text-2xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We build partnerships and alliances to amplify our impact and create sustainable change at all levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5">
              <img
                src={Headshot}
                alt="Ruth Bassey Okim"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-3/5">
              <SectionTitle
                title="Our Founder"
                subtitle="Meet Ruth Bassey Okim (Ruth Reje)"
                centered={false}
              />
              <p className="text-lg text-gray-700 mb-6">
                Ruth Bassey Okim, also known as Ruth Reje, is an award-winning public speaker, spoken word artist, environmentalist, and trained medical laboratory scientist. She is the Founder and CEO of Let’s Speak Africa, a youth-led organization that leverages public speaking and community engagement to drive advocacy across Africa, particularly in the areas of climate action and women’s rights.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                In addition to her leadership at Let’s Speak Africa, Ruth serves as the National Director of Advocacy at Kingdom Nation Impact Community in Nigeria, West Africa. She is also the National Coordinator for Sierra Leone and Gambia at Students for Liberty Africa, where she continues to champion the values of freedom, justice, and civic participation.
              </p>
              <p className="text-lg text-gray-700">
                Ruth is deeply committed to the belief that public speaking is a powerful tool for societal transformation. Under her leadership, Let’s Speak Africa has grown from a local initiative into a dynamic movement spanning multiple cities, empowering thousands of young people to raise their voices, share their stories, and advocate for meaningful change within their communities. Through her work, Ruth continues to inspire and equip the next generation of African leaders to speak up and lead with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Journey"
            subtitle="How Let's Speak Africa has evolved over the years"
          />

          {isMobile ? (
            <div className="space-y-8">
              <MobileTimelineItem
                year="December 2019"
                title="The Beginning"
                description="Let’s Speak Africa was founded on December 13, 2019 by Ruth Bassey Okim in Calabar, Nigeria. And officially launched with a speech concert that marked the beginning of our commitment to youth-led advocacy through public speaking. Since then, we have successfully organized seven speech concerts, each providing a platform for storytelling and civic engagement."
              />

              <MobileTimelineItem
                year="March 2022"
                title="Let’s Speak Women’s Open Tournament"
                description="In March 2022, we introduced the Let’s Speak Women’s Open, a public speaking tournament dedicated to amplifying women's voices. This annual event, held every March in celebration of Women’s Month, has become a cornerstone of our gender equity advocacy"
              />

              <MobileTimelineItem
                year="March 2022"
                title="First Community Outreach"
                description="Our first community outreach initiative took place in March 2022, featuring a self-defense training program for women, aimed at promoting safety and empowerment."
              />

              <MobileTimelineItem
                year="April 2022"
                title="First Environmental Outreach"
                description="The following month, in April 2022, we carried out our first environmental outreach, marking the start of our on-ground climate advocacy efforts."
              />

              <MobileTimelineItem
                year="2023"
                title="Expansion to Multiple Cities"
                description="Expanded our reach to two additional cities in Nigeria, training 50+ youth advocates and launching the Voices for Her program."
              />

              <MobileTimelineItem
                year="April - May 2024"
                title="Enugu 500 Tree Planting Campaign"
                description="We planted 520 trees across 31 elementary schools in Enugu State as part of our commitment to combating deforestation, promoting food sustainability, and raising climate awareness among young learners. Alongside this effort, we launched Environmental Conservation Clubs in each school to empower students with hands-on environmental education and long-term stewardship skills."
              />

              <MobileTimelineItem
                year="February 2025"
                title="Project 100 Environmental Storytelling Clubs"
                description="We launched storytelling-based environmental advocacy clubs in schools, training young people to use their voices for climate action. These clubs empower children and teens to speak up for their future and champion the protection of our planet."
              />

              <MobileTimelineItem
                year="2025"
                title="Today and Beyond"
                description="Continuing to grow our impact with over 2,000 youth reached, 3+ cities with active clubs, and 100+ trained advocates."
              />
            </div>
          ) : (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-lsa-gold"></div>

              {/* Timeline Items */}
              <div className="grid grid-cols-1 gap-12">
                <TimelineItem
                  year="December 2019"
                  title="The Beginning"
                  description="Let’s Speak Africa was founded on December 13, 2019 by Ruth Bassey Okim in Calabar, Nigeria. And officially launched with a speech concert that marked the beginning of our commitment to youth-led advocacy through public speaking. Since then, we have successfully organized seven speech concerts, each providing a platform for storytelling and civic engagement."
                  isLeft={true}
                />

                <TimelineItem
                  year="March 2022"
                  title="Let’s Speak Women’s Open Tournament"
                  description="In March 2022, we introduced the Let’s Speak Women’s Open, a public speaking tournament dedicated to amplifying women's voices. This annual event, held every March in celebration of Women’s Month, has become a cornerstone of our gender equity advocacy"
                  isLeft={false}
                />

                <TimelineItem
                  year="March 2022"
                  title="First Community Outreach"
                  description="Our first community outreach initiative took place in March 2022, featuring a self-defense training program for women, aimed at promoting safety and empowerment."
                  isLeft={true}
                />

                <TimelineItem
                  year="April 2022"
                  title="First Environmental Outreach"
                  description="The following month, in April 2022, we carried out our first environmental outreach, marking the start of our on-ground climate advocacy efforts."
                  isLeft={false}
                />

                <TimelineItem
                  year="2023"
                  title="Expansion to Multiple Cities"
                  description="Expanded our reach to two additional cities in Nigeria, training 50+ youth advocates and launching the Voices for Her program."
                  isLeft={true}
                />

                <TimelineItem
                  year="April - May 2024"
                  title="Enugu 500 Tree Planting Campaign"
                  description="We planted 520 trees across 31 elementary schools in Enugu State as part of our commitment to combating deforestation, promoting food sustainability, and raising climate awareness among young learners. Alongside this effort, we launched Environmental Conservation Clubs in each school to empower students with hands-on environmental education and long-term stewardship skills."
                  isLeft={false}
                />

                <TimelineItem
                  year="February 2025"
                  title="Project 100 Environmental Storytelling Clubs"
                  description="We launched storytelling-based environmental advocacy clubs in schools, training young people to use their voices for climate action. These clubs empower children and teens to speak up for their future and champion the protection of our planet."
                  isLeft={true}
                />

                <TimelineItem
                  year="2025"
                  title="Today and Beyond"
                  description="Continuing to grow our impact with over 2,000 youth reached, 3+ cities with active clubs, and 100+ trained advocates."
                  isLeft={false}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ year, title, description, isLeft }: { year: string; title: string; description: string; isLeft: boolean }) => {
  return (
    <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center`}>
      <div className={`w-1/2 ${isLeft ? 'text-right pr-12' : 'pl-12'}`}>
        <div className={`bg-white p-6 rounded-lg shadow-md ${isLeft ? 'ml-auto' : 'mr-auto'} max-w-md`}>
          <h3 className="text-lsa-gold font-bold text-xl mb-2">{year}</h3>
          <h4 className="font-bold text-lg mb-3">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="relative z-10">
        <div className="w-6 h-6 bg-lsa-gold rounded-full"></div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

// Mobile Timeline Item Component
const MobileTimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => {
  return (
    <div className="relative pl-8 border-l-2 border-lsa-gold">
      <div className="absolute left-[-8px] top-0">
        <div className="w-4 h-4 bg-lsa-gold rounded-full"></div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lsa-gold font-bold text-xl mb-2">{year}</h3>
        <h4 className="font-bold text-lg mb-3">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default About;
