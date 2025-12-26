import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  BugAntIcon,
  HomeModernIcon,
  SparklesIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/solid';

const services = [
  {
    title: "Termite Inspections & Treatment",
    description: "Advanced thermal imaging technology and 32+ years of inspection experience. Comprehensive protection plans available.",
    icon: HomeModernIcon,
    features: ["Infrared Thermal Imaging", "Shelter Tube Detection", "Treatment Plans"]
  },
  {
    title: "General Pest Control",
    description: "Complete elimination of cockroaches, ants, spiders, and other common household pests with eco-friendly solutions.",
    icon: BugAntIcon,
    features: ["Cockroach Elimination", "Spider Control", "Ant Treatment"]
  },
  {
    title: "Mosquito & Tick Control",
    description: "Property-wide treatments to protect your family from disease-carrying mosquitoes, ticks, and fleas.",
    icon: ShieldCheckIcon,
    features: ["Yard Treatments", "Tick Prevention", "Flea Control"]
  },
  {
    title: "Mold Remediation",
    description: "Professional mold inspection, testing, and remediation services to protect your home and health.",
    icon: SparklesIcon,
    features: ["Mold Testing", "Moisture Detection", "Safe Removal"]
  }
];

const licenses = ["MDA 24184", "DDA 809", "VDA 6214"];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                <ShieldCheckIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Global Exterminating</h1>
                <p className="text-xs text-green-700 font-medium">Celebrating 25 Years of Excellence</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-green-700 transition font-medium">Services</a>
              <a href="#about" className="text-gray-600 hover:text-green-700 transition font-medium">About</a>
              <a href="#contact" className="text-gray-600 hover:text-green-700 transition font-medium">Contact</a>
              <a
                href="tel:4102082515"
                className="btn-primary text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                (410) 208-2515
              </a>
            </div>
            <a
              href="tel:4102082515"
              className="md:hidden btn-primary text-white p-3 rounded-full"
            >
              <PhoneIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <StarIcon className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">Celebrating 25 Years of Excellence</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Protect Your Home from
                <span className="text-green-300"> Unwanted Pests</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Trusted by families across Berlin, MD and the Eastern Shore for over 25 years.
                Professional pest control, termite inspections, and mold remediation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:4102082515"
                  className="bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-6 h-6" />
                  Call Now: (410) 208-2515
                </a>
                <a
                  href="#services"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition text-center"
                >
                  View Services
                </a>
              </div>
              <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-300" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-300" />
                  <span>Free Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-300" />
                  <span>Same Day Service</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-white/10 rounded-full flex items-center justify-center floating">
                  <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-2xl">
                      <ShieldCheckIcon className="w-24 h-24 text-green-700" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-10 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <StarIcon className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">32+ Years</p>
                      <p className="text-sm text-gray-500">Experience</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 right-10 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <HomeModernIcon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">1000+</p>
                      <p className="text-sm text-gray-500">Homes Protected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Comprehensive Pest Control Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From termite inspections with advanced thermal imaging to complete mold remediation,
              we provide the full spectrum of pest control services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="tel:4102082515"
              className="btn-primary text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3"
            >
              <PhoneIcon className="w-6 h-6" />
              Get a Free Quote Today
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
                25+ Years Protecting <span className="text-gradient">Eastern Shore Homes</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Global Exterminating Inc. has been the trusted choice for pest control in Berlin, MD
                and the surrounding Eastern Shore communities. With over 32 years of personal inspection
                experience, our owner brings unmatched expertise to every job.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We use the latest technology, including infrared thermal imaging cameras for termite
                detection, to ensure the most thorough inspections possible. Our commitment to
                excellence has made us the go-to choice for homeowners and real estate professionals alike.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-green-50 rounded-2xl">
                  <p className="text-4xl font-bold text-green-700">25+</p>
                  <p className="text-gray-600 mt-1">Years in Business</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-2xl">
                  <p className="text-4xl font-bold text-green-700">32</p>
                  <p className="text-gray-600 mt-1">Years Experience</p>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-2xl">
                  <p className="text-4xl font-bold text-green-700">3</p>
                  <p className="text-gray-600 mt-1">State Licenses</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {licenses.map((license, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    License: {license}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "Advanced thermal imaging technology for accurate termite detection",
                  "Over 32 years of hands-on inspection experience",
                  "Fully licensed in Maryland, Delaware, and Virginia",
                  "Comprehensive termite protection plans available",
                  "Fast response times and flexible scheduling",
                  "Eco-friendly treatment options available",
                  "Free estimates on all services",
                  "Satisfaction guaranteed on every job"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                    <span className="text-green-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Ready to Protect Your Home?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get in touch today for a free estimate. Our team is ready to help you with all your pest control needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <a href="tel:4102082515" className="text-2xl font-bold text-green-400 hover:text-green-300 transition">
                (410) 208-2515
              </a>
              <p className="text-gray-400 mt-2">Mon-Fri: 9AM - 5PM</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPinIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-2xl font-bold text-green-400">Berlin, MD</p>
              <p className="text-gray-400 mt-2">Serving the Eastern Shore</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
              <p className="text-green-400 font-semibold">Monday - Friday</p>
              <p className="text-2xl font-bold text-white">9:00 AM - 5:00 PM</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="tel:4102082515"
              className="bg-green-600 hover:bg-green-500 text-white px-12 py-5 rounded-full font-bold text-xl inline-flex items-center gap-3 transition"
            >
              <PhoneIcon className="w-7 h-7" />
              Call Now for Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                <ShieldCheckIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Global Exterminating Inc.</h3>
                <p className="text-sm text-green-400">Celebrating 25 Years of Excellence</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Licensed: MDA 24184 | DDA 809 | VDA 6214
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Global Exterminating Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
