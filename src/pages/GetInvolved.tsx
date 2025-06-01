
import { useState } from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const GetInvolved = () => {
  // State for form handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "join",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "join",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div>
      <Hero
        title="Get Involved"
        subtitle="Join us in creating positive change across Africa"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
        overlayOpacity="opacity-60"
      />

      {/* Ways to Get Involved Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Ways to Get Involved"
            subtitle="There are many ways to support our mission and make a difference"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="join" className="bg-white p-8 rounded-lg shadow-md border-l-4 border-lsa-gold">
              <h3 className="text-2xl font-bold mb-4">Join a Club</h3>
              <p className="text-lg text-gray-700 mb-6">
                Become part of our Environmental Storytelling Clubs or Voices for Her program. Develop your skills, connect with like-minded peers, and lead initiatives in your community.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">Who Can Join:</h4>
                <p className="text-gray-600">Young people aged 15-30 who are passionate about environmental and social issues and want to make a difference.</p>
              </div>
              <button className="btn-primary">Apply to Join</button>
            </div>

            <div id="partner" className="bg-white p-8 rounded-lg shadow-md border-l-4 border-lsa-green">
              <h3 className="text-2xl font-bold mb-4">Partner With Us</h3>
              <p className="text-lg text-gray-700 mb-6">
                We collaborate with organizations, schools, businesses, and government agencies that share our vision for youth empowerment and positive change.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">Partnership Opportunities:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Program sponsorship</li>
                  <li>Joint initiatives</li>
                  <li>Resource sharing</li>
                  <li>Technical expertise</li>
                </ul>
              </div>
              <button className="btn-primary">Become a Partner</button>
            </div>

            <div id="volunteer" className="bg-white p-8 rounded-lg shadow-md border-l-4 border-lsa-black">
              <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
              <p className="text-lg text-gray-700 mb-6">
                Share your skills and time to support our programs and initiatives. Whether you have a few hours or can commit to regular involvement, your contribution matters.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">Volunteer Roles:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Workshop facilitation</li>
                  <li>Mentorship</li>
                  <li>Event organization</li>
                  <li>Digital content creation</li>
                  <li>Administrative support</li>
                </ul>
              </div>
              <button className="btn-primary">Volunteer With Us</button>
            </div>

            <div id="donate" className="bg-white p-8 rounded-lg shadow-md border-l-4 border-lsa-gold">
              <h3 className="text-2xl font-bold mb-4">Donate</h3>
              <p className="text-lg text-gray-700 mb-6">
                Support our work financially to help us reach more youth and create greater impact. Your contribution helps fund our programs, training materials, events, and more.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-2">What Your Donation Supports:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Training workshops</li>
                  <li>Program materials</li>
                  <li>Community events</li>
                  <li>Scholarships for participants</li>
                </ul>
              </div>
              <button className="btn-secondary">Make a Donation</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Get in Touch"
            subtitle="Reach out to learn more about our programs or how you can get involved"
          />

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                    Thank you for reaching out! We'll get back to you soon.
                  </div>
                )}

                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lsa-gold"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lsa-gold"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lsa-gold"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="interest" className="block text-gray-700 font-medium mb-2">I'm Interested In</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lsa-gold"
                  >
                    <option value="join">Joining a Club</option>
                    <option value="partner">Partnership Opportunities</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="donate">Making a Donation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lsa-gold"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-secondary w-full">Send Message</button>
              </form>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Office Address</h4>
                    <p className="text-gray-600">
                      Calabar, Nigeria
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">Email Us</h4>
                    <p className="text-gray-600">
                      <a href="mailto:letsspeakafrica@gmail.com" target="_blank" className=" hover:text-lsa-gold transition-colors">info@letsspeakafrica.org</a>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">Call Us</h4>
                    <p className="text-gray-600">
                      <a href="tel:+2348132609942" target="_blank" className="hover:text-lsa-gold transition-colors">+234 813 260 9942</a>
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-2">Follow Us</h4>
                    <div className="flex space-x-4">
                      {/* Social Media Icons */}
                      <a href="#" className="text-lsa-black hover:text-lsa-gold transition-colors">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <a href="https://www.facebook.com/share/1A5ijF9eaN/?mibextid=wwXIfr" target="_blank" className="hover:text-lsa-gold transition-colors"><Facebook size={20} /></a>
                        </div>
                      </a>
                      <a href="#" className="text-lsa-black hover:text-lsa-gold transition-colors">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <a href="https://www.instagram.com/letsspeakafrica_/?igsh=NWZoaDc1eDd5bzd3&utm_source=qr#" target="_blank" className="hover:text-lsa-gold transition-colors"><Instagram size={20} /></a>
                        </div>
                      </a>
                      <a href="#" className="text-lsa-black hover:text-lsa-gold transition-colors">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <a href="https://www.linkedin.com/company/letsspeak-africa/" target="_blank" className="hover:text-lsa-gold transition-colors"><Linkedin size={20} /></a>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-lg mb-2">Newsletter</h4>
                  <p className="text-gray-600 mb-4">
                    Subscribe to our newsletter to receive updates about our work and opportunities to get involved.
                  </p>
                  <form className="flex flex-col sm:flex-row">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-lsa-gold"
                      required
                    />
                    <button type="submit" className="w-full sm:w-auto mt-2 sm:mt-0 bg-lsa-gold hover:bg-lsa-gold/90 text-black font-medium py-3 px-6 rounded-md sm:rounded-l-none">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about getting involved with Let's Speak Africa"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How can I start a club in my community?</h3>
              <p className="text-gray-600">
                Contact us through our form or email to express your interest. We'll provide guidance, training materials, and support to help you establish and run a successful club in your community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Do I need prior experience to join your programs?</h3>
              <p className="text-gray-600">
                No prior experience is necessary! We welcome anyone with passion and commitment. Our programs include training that will help you develop the necessary skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Can organizations partner with specific programs?</h3>
              <p className="text-gray-600">
                Yes! We welcome partnerships that align with specific programs or initiatives. Contact us to discuss how your organization can support or collaborate on particular aspects of our work.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">How is my donation used?</h3>
              <p className="text-gray-600">
                Your donations directly support our programs, including training materials, event costs, program development, and operational expenses. We're committed to transparency and can provide details on request.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Can I volunteer remotely?</h3>
              <p className="text-gray-600">
                Yes! We have remote volunteering opportunities including content creation, digital marketing, research, and mentorship. Let us know your skills and availability, and we'll find a good match.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Do you offer internships?</h3>
              <p className="text-gray-600">
                We occasionally offer internships in program development, communications, and advocacy. Follow our social media or subscribe to our newsletter to be notified when opportunities become available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
