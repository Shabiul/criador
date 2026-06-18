import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Criador Studio',
  description: 'How Criador Studio collects, uses, and protects your personal data.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F2EDE6]">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-sm text-[#8C857C] hover:text-[#2E2A26] transition-colors mb-10 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-[#2E2A26] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#8C857C] mb-6">Effective Date: May 2026 &nbsp;|&nbsp; Applicable to: criador-studio.vercel.app</p>

        <p className="text-[#4A4540] mb-10 leading-relaxed">
          Criador Studio is committed to protecting and respecting your privacy. This Privacy Policy sets out how we collect, use, store, and safeguard your personal information when you interact with our website or engage our services. Please read this policy carefully. By using our website or services, you consent to the practices described herein.
        </p>

        <div className="prose prose-stone max-w-none space-y-8 text-[#4A4540]">

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">1. Information We Collect</h2>
            <p className="font-medium text-[#2E2A26] mt-3">1.1 Personal Information</p>
            <p className="mt-1">We may collect the following categories of personal information:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Full name and contact details (email address, phone number)</li>
              <li>Company name and designation</li>
              <li>Project requirements, briefs, and correspondence</li>
              <li>Billing information and payment records</li>
            </ul>
            <p className="font-medium text-[#2E2A26] mt-4">1.2 Technical &amp; Usage Information</p>
            <p className="mt-1">We may automatically collect technical data when you visit our website, including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>IP address and geographic location (at city/region level)</li>
              <li>Browser type, version, and operating system</li>
              <li>Device type and screen resolution</li>
              <li>Pages visited, time spent, and navigation paths</li>
              <li>Referral sources and search terms</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">2. Purposes of Data Processing</h2>
            <p>We process your personal information for the following legitimate purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To respond to enquiries, proposals, and project requests.</li>
              <li>To deliver, manage, and support the services you have engaged.</li>
              <li>To issue invoices and process payments.</li>
              <li>To communicate updates, project milestones, and relevant information.</li>
              <li>To improve the functionality, performance, and content of our website.</li>
              <li>To maintain internal business records and comply with legal obligations.</li>
              <li>To protect the integrity of our systems and prevent fraud or misuse.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">3. Cookies &amp; Tracking Technologies</h2>
            <p>Our website may use cookies, web beacons, and similar tracking technologies to analyse traffic patterns, enhance website functionality, and improve your browsing experience. Cookies are small data files stored on your device.</p>
            <p className="mt-3">You may configure your browser to refuse all or some cookies, or to alert you when cookies are being set. Please note that disabling cookies may affect the functionality of certain features on our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">4. Data Sharing &amp; Disclosure</h2>
            <p>Criador Studio does not sell, trade, rent, or otherwise transfer your personal information to third parties for marketing or commercial purposes. We may share your information only in the following limited circumstances:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>With trusted service providers, contractors, or partners who assist in delivering our services, subject to strict confidentiality and data processing obligations.</li>
              <li>With competent legal or regulatory authorities where disclosure is required by applicable law or a valid legal process.</li>
              <li>With hosting providers, analytics platforms, or communication tools necessary for our operational infrastructure.</li>
            </ul>
            <p className="mt-3">All third parties with whom we share data are required to handle your information in a manner consistent with applicable privacy laws.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">5. Data Security</h2>
            <p>We implement reasonable and appropriate administrative, technical, and organisational measures to protect your personal information from unauthorised access, loss, misuse, or disclosure. Access to personal data is restricted to authorised personnel who require it for legitimate business purposes.</p>
            <p className="mt-3">However, no method of electronic transmission or storage is entirely secure. While we strive to protect your data, we cannot guarantee its absolute security. In the event of a data breach that is likely to affect your rights or interests, we will notify you as required by applicable law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">6. Third-Party Links</h2>
            <p>Our website may contain hyperlinks to external websites or platforms operated by third parties. Criador Studio has no control over the content, privacy practices, or security of these external sites and accepts no responsibility for them. We encourage you to review the privacy policies of any third-party websites you visit.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">7. Data Retention</h2>
            <p>We retain personal information only for as long as is necessary to fulfil the purposes for which it was collected, including the delivery of services, maintenance of business records, and compliance with applicable legal, tax, or contractual obligations. Where data is no longer required, we take reasonable steps to securely delete or anonymise it.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">8. Your Rights</h2>
            <p>Subject to applicable law, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Right of access</strong> — to request a copy of the personal data we hold about you.</li>
              <li><strong>Right of rectification</strong> — to request correction of inaccurate or incomplete data.</li>
              <li><strong>Right of erasure</strong> — to request deletion of your personal data, subject to legal retention obligations.</li>
              <li><strong>Right to withdraw consent</strong> — where processing is based on consent, you may withdraw it at any time.</li>
              <li><strong>Right to object</strong> — to object to certain types of data processing.</li>
            </ul>
            <p className="mt-3">To exercise any of the above rights, please contact us using the details provided in Section 11 of this policy. We will respond to your request within a reasonable timeframe and in accordance with applicable law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">9. Children&apos;s Privacy</h2>
            <p>Our website and services are intended for use by individuals aged 18 and above. We do not knowingly collect or process personal information from individuals under the age of 13. If we become aware that we have inadvertently collected such information, we will take prompt steps to delete it.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">10. Amendments to This Policy</h2>
            <p>We reserve the right to update or revise this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational circumstances. The most current version will be published on our website with the effective date. Your continued use of our website or services following any update constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">11. Contact Us</h2>
            <p>For any privacy-related enquiries, requests, or complaints, please contact us at:</p>
            <div className="mt-3 space-y-1">
              <p className="font-semibold text-[#2E2A26]">Criador Studio</p>
              <p>Haralur, Bengaluru</p>
              <p>Email: <a href="mailto:hello@criadorstudio.com" className="text-[#8B31C7] hover:underline">hello@criadorstudio.com</a></p>
              <p>Phone: <a href="tel:+919632498185" className="text-[#8B31C7] hover:underline">+91 96324 98185</a></p>
              <p>Website: <a href="https://criador-studio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B31C7] hover:underline">criador-studio.vercel.app</a></p>
            </div>
          </section>

        </div>

        {/* Divider */}
        <div className="my-20 border-t border-[#2E2A26]/10" />

        {/* Terms of Service */}
        <h1 className="text-4xl font-bold text-[#2E2A26] mb-2">Terms of Service</h1>
        <p className="text-sm text-[#8C857C] mb-6">Effective Date: May 2026 &nbsp;|&nbsp; Applicable to: criador-studio.vercel.app</p>

        <p className="text-[#4A4540] mb-10 leading-relaxed">
          These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Client&rdquo;, &ldquo;User&rdquo;, or &ldquo;you&rdquo;) and Criador Studio (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree to any provision herein, please discontinue use of our website and services immediately.
        </p>

        <div className="prose prose-stone max-w-none space-y-8 text-[#4A4540]">

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">1. Company Overview</h2>
            <p>Criador Studio is a creative and digital solutions agency headquartered in Haralur, Bengaluru. We specialise in delivering end-to-end branding, design, and digital solutions to businesses across industries. Our services are governed exclusively by these Terms and any supplementary agreements executed in writing between the parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">2. Scope of Services</h2>
            <p>Criador Studio offers, but is not limited to, the following professional services:</p>
            <ul className="list-none pl-5 mt-2 space-y-1">
              <li>– Brand Identity &amp; Logo Design</li>
              <li>– Website Design &amp; Development</li>
              <li>– UI/UX Design</li>
              <li>– Social Media &amp; Marketing Creatives</li>
              <li>– Packaging &amp; Print Design</li>
              <li>– Business Collateral &amp; Stationery</li>
              <li>– Creative Consultation &amp; Strategy</li>
            </ul>
            <p className="mt-3">The specific scope, deliverables, timelines, and pricing applicable to any engagement shall be defined separately through a formal proposal, quotation, or signed service agreement. In the event of any conflict between these Terms and a project-specific agreement, the terms of the project agreement shall prevail with respect to that engagement.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">3. Client Responsibilities</h2>
            <p>By engaging our services or accessing our website, you agree to:</p>
            <ul className="list-none pl-5 mt-2 space-y-1">
              <li>– Provide accurate, complete, and timely information necessary for project execution.</li>
              <li>– Ensure that all content, materials, and assets shared with Criador Studio are either owned by you or that you hold the necessary rights and licences to authorise their use.</li>
              <li>– Refrain from using our website or services for any unlawful, harmful, or unauthorised purpose.</li>
              <li>– Not attempt to gain unauthorised access to any part of our systems, servers, or networks.</li>
              <li>– Not upload, transmit, or otherwise introduce any malicious code, viruses, or harmful content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">4. Intellectual Property Rights</h2>
            <p>All content published on this website — including but not limited to graphics, branding elements, design assets, written copy, visual layouts, and proprietary methodologies — is the exclusive intellectual property of Criador Studio and is protected under applicable intellectual property laws.</p>
            <p className="mt-3">The following terms govern intellectual property in client engagements:</p>
            <ul className="list-none pl-5 mt-2 space-y-1">
              <li>– Unauthorised reproduction, distribution, modification, or commercial exploitation of any content from this website is strictly prohibited.</li>
              <li>– Upon receipt of full and final payment for a project, ownership of the agreed final deliverables shall be transferred to the client as documented in the relevant project agreement.</li>
              <li>– Criador Studio retains the right to feature completed project work in its portfolio, case studies, and promotional materials unless a written confidentiality or non-disclosure arrangement has been executed with the client.</li>
              <li>– Any preliminary concepts, drafts, rejected designs, or supporting assets not included in the final agreed deliverables shall remain the sole property of Criador Studio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">5. Payments &amp; Refund Policy</h2>
            <p>The following terms govern all financial transactions between the client and Criador Studio:</p>
            <ul className="list-none pl-5 mt-2 space-y-1">
              <li>– All payments shall be made in accordance with the milestones or invoices specified in the applicable proposal or agreement.</li>
              <li>– Delayed or outstanding payments may result in the suspension of active project work until the account is brought current.</li>
              <li>– Advance payments and deposits made prior to commencement of work are non-refundable, as they represent the Company&apos;s commitment of resources and capacity.</li>
              <li>– Refund eligibility, if any, shall be assessed on a case-by-case basis depending on the stage of project completion and shall require mutual written agreement.</li>
              <li>– All quoted fees are exclusive of applicable taxes unless otherwise stated in writing.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">6. Revisions, Scope Changes &amp; Client Approvals</h2>
            <ul className="list-none pl-5 mt-2 space-y-1">
              <li>– Each project engagement includes a defined number of revision rounds as specified in the proposal. Requests for revisions beyond this limit will be subject to additional charges at the Company&apos;s prevailing rates.</li>
              <li>– Any modifications to the agreed project scope, deliverables, or timelines must be documented in writing and may result in revised fees and/or timelines.</li>
              <li>– Client approvals provided at any stage of the project (including design sign-offs, content approvals, and development confirmations) shall be deemed final and binding. Requests for changes following an approval may incur additional charges.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">7. Third-Party Tools &amp; Services</h2>
            <p>In the course of delivering services, Criador Studio may engage third-party platforms, hosting providers, plugins, APIs, licensed fonts, software tools, or contractors. While we exercise reasonable diligence in selecting such providers, Criador Studio shall not be held liable for:</p>
            <ul className="list-none pl-5 mt-2 space-y-1">
              <li>– Service interruptions, outages, or downtime attributable to third-party providers.</li>
              <li>– Changes in licensing terms, platform policies, or feature availability by third parties.</li>
              <li>– Any consequential impact on project delivery arising from third-party service disruptions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by applicable law, Criador Studio shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or related to the use of our services or website, including but not limited to business interruption, loss of revenue, data loss, or website downtime caused by external providers.</p>
            <p className="mt-3">The Company&apos;s total aggregate liability in connection with any engagement shall not exceed the total fees paid by the client for the specific service giving rise to the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">9. Confidentiality</h2>
            <p>Criador Studio is committed to maintaining the confidentiality of all proprietary, sensitive, or commercially sensitive information shared by clients during the course of an engagement. We will not disclose such information to any third party except:</p>
            <ul className="list-none pl-5 mt-2 space-y-1">
              <li>– Where required by applicable law or a competent regulatory authority.</li>
              <li>– Where the client has provided explicit written authorisation.</li>
              <li>– Where disclosure is strictly necessary for project execution with trusted sub-contractors or partners who are bound by equivalent confidentiality obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">10. Termination of Services</h2>
            <p className="font-medium text-[#2E2A26] mt-3">Termination by Criador Studio</p>
            <p className="mt-1">We reserve the right to suspend or terminate services with written notice if:</p>
            <ul className="list-none pl-5 mt-2 space-y-1">
              <li>– The client is in material breach of any provision of these Terms.</li>
              <li>– Payment obligations remain outstanding beyond the agreed due dates.</li>
              <li>– The client engages in abusive, threatening, or unethical conduct toward Company personnel.</li>
            </ul>
            <p className="font-medium text-[#2E2A26] mt-4">Termination by the Client</p>
            <p className="mt-1">Clients may terminate an ongoing engagement by providing written notice to Criador Studio. Upon termination, the client shall remain liable for payment in respect of all work completed up to the date of termination, including any non-refundable deposits or advances previously paid.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">11. Amendments to These Terms</h2>
            <p>Criador Studio reserves the right to amend, update, or modify these Terms at any time without prior notice. The most current version of these Terms will be published on our website with the effective date indicated. Your continued use of our website or services following any such update constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">12. Governing Law &amp; Dispute Resolution</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms or any engagement with Criador Studio shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2E2A26] mb-3">13. Contact Information</h2>
            <p>For enquiries related to these Terms, please contact us at:</p>
            <div className="mt-3 space-y-1">
              <p className="font-semibold text-[#2E2A26]">Criador Studio</p>
              <p>Haralur, Bengaluru</p>
              <p>Email: <a href="mailto:hello@criadorstudio.com" className="text-[#8B31C7] hover:underline">hello@criadorstudio.com</a></p>
              <p>Phone: <a href="tel:+919632498185" className="text-[#8B31C7] hover:underline">+91 96324 98185</a></p>
              <p>Website: <a href="https://criador-studio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B31C7] hover:underline">criador-studio.vercel.app</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
