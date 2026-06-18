const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://criador-studio.vercel.app/#business',
      name: 'Criador Creative Studio',
      alternateName: 'Criador',
      description:
        'Criador is a premium creative agency in Bengaluru, India, specialising in business consulting, branding, logo design, social media marketing, SEO, AIEO, GEO, catalog design, label designing, visiting card design, web hosting, and e-commerce solutions for startups and modern businesses.',
      url: 'https://criador-studio.vercel.app',
      telephone: '+919632498185',
      email: 'hello@criador.studio',
      foundingDate: '2022',
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Credit Card, Bank Transfer, UPI',
      areaServed: ['India', 'Worldwide'],
      logo: {
        '@type': 'ImageObject',
        url: 'https://criador-studio.vercel.app/criador_logo.png',
        width: 1200,
        height: 630,
      },
      image: 'https://criador-studio.vercel.app/criador_logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Haralur',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560102',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.8905',
        longitude: '77.6875',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '50',
        bestRating: '5',
        worstRating: '1',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Creative & Digital Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Consulting', description: 'Strategic business analysis, growth roadmaps, positioning and revenue scaling.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Logo Design', description: 'Logos, visual identities, and brand positioning to make your business unforgettable.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Marketing', description: 'High-converting creatives, content strategies, and ad campaigns for every platform.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimization', description: 'SEO, AIEO and GEO optimised strategies that improve rankings and drive organic traffic.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Development', description: 'End-to-end online store design and development built to convert visitors into customers.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Hosting', description: 'Fast, secure, and reliable hosting solutions to keep your website always online.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Catalog Design', description: 'Professionally designed product and service catalogs for better customer influence.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Label Designing', description: 'Premium label designs crafted to elevate your product and strengthen your brand.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Visiting Card Design', description: 'Premium business card designs that leave a lasting impression at every handshake.' } },
        ],
      },
      sameAs: [
        'https://www.instagram.com/criador.studio',
        'https://www.facebook.com/criador.studio',
        'https://www.linkedin.com/company/criador-studio',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://criador-studio.vercel.app/#website',
      url: 'https://criador-studio.vercel.app',
      name: 'Criador Creative Studio',
      description: 'Premium creative agency in Bengaluru for branding, social media, SEO, and web design.',
      publisher: { '@id': 'https://criador-studio.vercel.app/#business' },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://criador-studio.vercel.app/blogs?search={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://criador-studio.vercel.app/#webpage',
      url: 'https://criador-studio.vercel.app',
      name: 'Criador Creative Studio | Branding, Social Media & Web Design Agency in Bengaluru',
      isPartOf: { '@id': 'https://criador-studio.vercel.app/#website' },
      about: { '@id': 'https://criador-studio.vercel.app/#business' },
      description: 'Home page of Criador Creative Studio — premium branding, digital marketing, SEO, and web design agency based in Bengaluru, India.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://criador-studio.vercel.app' }],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Criador offer?',
          acceptedAnswer: { '@type': 'Answer', text: 'Criador offers branding, catalog design, visiting cards, label designing, social media marketing, SEO, AIEO, GEO, web hosting, e-commerce development, and business consulting — everything a modern business needs to build a strong brand presence and grow online.' },
        },
        {
          '@type': 'Question',
          name: 'Where is Criador Creative Studio located?',
          acceptedAnswer: { '@type': 'Answer', text: 'Criador Creative Studio is based in Haralur, Bengaluru, Karnataka, India. We serve clients across India and internationally.' },
        },
        {
          '@type': 'Question',
          name: 'How long does a branding project take?',
          acceptedAnswer: { '@type': 'Answer', text: 'A standard branding project at Criador takes 2–4 weeks from discovery to final delivery, depending on project scope and revision cycles. Larger projects like full digital experiences may take 6–8 weeks.' },
        },
        {
          '@type': 'Question',
          name: 'What is your pricing structure?',
          acceptedAnswer: { '@type': 'Answer', text: 'Criador uses project-based pricing. We provide a detailed quote after an initial strategy call to understand your specific needs, goals, and timeline. There are no hidden fees.' },
        },
        {
          '@type': 'Question',
          name: 'Do you work with startups and small businesses?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Criador works with businesses of all sizes — from early-stage startups building their first brand identity to established companies refreshing their presence for a new market.' },
        },
        {
          '@type': 'Question',
          name: 'How does the design process work at Criador?',
          acceptedAnswer: { '@type': 'Answer', text: 'Criador follows a 5-step process: Discovery, Research, Strategy, Design, and Launch. Every project kicks off with a free 30-minute strategy call to align on vision before any design work begins.' },
        },
        {
          '@type': 'Question',
          name: 'Does Criador offer SEO and digital marketing services?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Criador provides full SEO (Search Engine Optimization), AIEO (AI Engine Optimization), and GEO (Generative Engine Optimization) services to improve your rankings on Google, AI search tools like ChatGPT, Perplexity, and Gemini, and drive organic traffic.' },
        },
        {
          '@type': 'Question',
          name: 'What is the contact number for Criador Creative Studio?',
          acceptedAnswer: { '@type': 'Answer', text: 'Reach out to us via email, phone, WhatsApp, or the contact form below. Our team generally responds within one business day.' },
        },
      ],
    },
  ],
}

import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import Hero from '@/Components/Hero'
import Clients from '@/Components/Clients'
import Services from '@/Components/Services'
import Portfolio from '@/Components/Portfolio'
import About from '@/Components/About'
import Process from '@/Components/Process'
import Testimonials from '@/Components/Testimonials'
import FAQ from '@/Components/FAQ'
import ContactForm from '@/Components/ContactForm'
import CTA from '@/Components/CTA'
import Footer from '@/Components/Footer'
import FloatingCTA from '@/Components/FloatingCTA'
import Preloader from '@/Components/Preloader'
import WhatsApp from '@/Components/WhatsApp'
import Blogs from '@/Components/Blogs'
import { getLatestPosts } from '@/lib/wordpress'

export const revalidate = 60

export default async function Home() {
  const latestPosts = await getLatestPosts(3)

  return (
    <main className="bg-[#F2EDE6] text-[#2E2A26] overflow-hidden cursor-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <Navbar />
      <Sidebar />
      <Hero />
      <Clients />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <Testimonials />
      <Blogs posts={latestPosts} />
      <FAQ />
      <ContactForm />
      <CTA />
      <Footer />
      <FloatingCTA />
      <WhatsApp />
    </main>
  )
}
