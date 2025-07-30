import {
  User,
  Phone,
  Antenna,
  Receipt,
  Modem,
  Id,
  Grant,
  Bank,
  Users,
  Stat,
  ContactPhone,
  Email,
} from "../assets/icons";
import {
  auto3d,
  college_graduate,
  community_leader,
  customerSupport,
  entrepreneur,
  professional_baker,
  reliable3d,
  small_business_owner,
} from "../assets/images";

export const footerLinks = [
  {
    heading: "Contact Us",
    links: [
      {
        name: "forgivenessgrants@gmail.com",
        path: "mailto:forgivenessgrants@gmail.com",
        isExLink: true,
      },
    ],
  },
  {
    heading: "Explore",
    links: [
      { name: "Home", path: "home" },
      { name: "About Us", path: "about-us" },
      { name: "Our Services", path: "our-services" },
      { name: "Our Process", path: "our-process" },
      { name: "FAQs", path: "faqs" },
      { name: "Contact Us", path: "contact-us" },
    ],
  },
];

export const landingPageLinks = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About Us",
    path: "about-us",
  },
  {
    name: "Our Services",
    path: "our-services",
  },
  {
    name: "Our Process",
    path: "our-process",
  },
  {
    name: "FAQs",
    path: "faqs",
  },
  {
    name: "Contact Us",
    path: "contact-us",
  },
];

export const clients = [
  {
    name: "John Doe",
    review:
      "MyAmtApp makes paying bills and recharging so easy! It’s reliable and super fast. Highly recommend!",
    Icon: User,
    starRating: 3,
  },
  {
    name: "Jane Smith",
    review:
      "Excellent service! I can handle all my subscriptions and verifications in one place. A real time-saver.",
    Icon: User,
    starRating: 4,
  },
  {
    name: "Samuel Lee",
    review:
      "The security features give me peace of mind. It’s a trustworthy app for all my transactions.",
    Icon: User,
    starRating: 5,
  },
];

export const reviews = [
  {
    name: "Maria F.",
    title: "Professional Baker",
    review:
      "The Forgiveness Grants Program gave me the financial support I needed to launch my small bakery. With their help, I could finally turn my passion for baking into a thriving business. I'm forever grateful for the opportunity they provided me to follow my dreams without the stress of repayment.",

    image: professional_baker,
  },
  {
    name: "John A.",
    title: "Non-profit Director",
    review:
      "Our non-profit organization was struggling to fund a new program for underserved children. The grant from the Forgiveness Grants Program came at the perfect time, allowing us to expand our services and reach more kids. Their generosity has made a huge impact on our community, and we are deeply thankful.",
    image: small_business_owner,
  },
  {
    name: "Aaliyah W.",
    title: "Entrepreneur",
    review:
      "I had a great business idea but lacked the capital to get started. The Forgiveness Grants Program believed in me when no one else did. With their funding, I was able to launch my online boutique, which has now grown beyond my expectations. I'm proud to say I'm running a successful business, all debt-free!",
    image: entrepreneur,
  },
  {
    name: "Maria S.",
    title: "College Graduate",
    review:
      "As a first-generation college student, I was worried about how I would afford my education. The non-repayment grant I received allowed me to focus on my studies instead of worrying about student loans. Today, I'm a proud graduate and the first in my family to earn a degree, all thanks to the Forgiveness Grants Program.",
    image: college_graduate,
  },
  {
    name: "Maxwell J.",
    title: "Community Leader",
    review:
      "Our community was in desperate need of a youth center, but we didn't have the funds to build one. The grant we received from the Forgiveness Grants Program made our dream a reality. The center is now a safe space for young people to learn, grow, and thrive. We couldn't have done it without their support!",
    image: community_leader,
  },
];

export const faqs = [
  {
    question: "What is the Forgiveness Grants Program?",
    answer:
      "The Forgiveness Grants Program is a non-repayment grant agency dedicated to providing financial support to individuals, small businesses, non-profits, and community projects. Our grants are designed to help recipients achieve their goals without the burden of debt.",
  },
  {
    question: "Who is eligible to apply for a grant?",
    answer:
      "Eligibility varies depending on the specific grant. Generally, we support individuals, small businesses, non-profit organizations, and community initiatives that align with our mission of fostering growth, education, and innovation. Please check our eligibility page for detailed criteria.",
  },
  {
    question: "How do I apply for a grant?",
    answer:
      "To apply, simply visit our website and fill out the online application form. Be sure to provide all required information and supporting documents to ensure your application is complete.",
  },
  {
    question: "Is there an application fee?",
    answer:
      "To ensure commitment and streamline processing, a one-time application fee of $300 is required. However, if your application is not approved, this fee will be fully refunded making it a risk-free step towards securing your grant through the Forgiveness Grants Program.",
  },
  {
    question: "What types of projects or initiatives do you fund?",
    answer:
      "We fund a wide range of projects, including educational pursuits, small business startups, community initiatives, and non-profit projects. We are particularly interested in projects that demonstrate a clear impact and align with our values of empowerment, community, and innovation.",
  },
  {
    question: "How long does the application review process take?",
    answer:
      "The review process typically takes 12-24 Hours from the time we receive your completed application. During this time, our team carefully evaluates each application to ensure it meets our criteria.",
  },
  {
    question: "Will I be notified if my application is unsuccessful?",
    answer:
      "Yes, all applicants will receive a notification, whether or not their application is successful. We believe in maintaining transparency and providing feedback to help applicants improve their future submissions.",
  },
  {
    question: "Do I have to repay the grant?",
    answer:
      "No, our grants are non-repayment, meaning you do not have to pay back the funds you receive. We aim to alleviate financial stress, allowing you to focus on your project or initiative.",
  },
  {
    question: "How is the funding disbursed if my application is approved?",
    answer:
      "Once your application is approved and all agreements are signed, the funds will be disbursed according to the terms of the grant. This process typically takes about 2 weeks from the approval date.",
  },
];

export const features = [
  {
    name: "Client Focused",
    description:
      "We prioritize your needs with dedicated support and resources designed to make your experience smooth and worry-free.",
    image: customerSupport,
  },
  {
    name: "Innovative and Automated",
    description:
      "Our automated solutions simplify complex processes, leveraging innovation to provide a seamless and efficient user experience.",
    image: auto3d,
  },
  {
    name: "Trustworthy",
    description:
      "With a strong commitment to reliability and transparency, we aim to build lasting trust with our clients in every interaction.",
    image: reliable3d,
  },
];

export const services = [
  {
    name: "Personal Grants",
    description:
      "Get the support you need for everyday life. The Forgiveness Grants Program offers personal grants to help individuals overcome financial barriers and move forward with confidence.",
    Icon: Phone,
    link: "https://forms.gle/w4dgKSadhCLQB8ww6",
  },
  {
    name: "Business Grants",
    description:
      "Whether you're launching a new venture or growing an existing one, our business grants are designed to fuel your ambition without the burden of repayment because progress deserves a helping hand.",
    Icon: Antenna,
    link: "/eligibility-form",
  },
  {
    name: "Educational Grants",
    description:
      "Pursue your academic goals without worrying about tuition or fees. The Forgiveness Grants Program provides educational grants to help you invest in your future, debt-free.",
    Icon: Receipt,
    link: "https://forms.gle/w4dgKSadhCLQB8ww6",
  },
  {
    name: "Innovation Grants",
    description:
      "Have a bold idea or breakthrough project? We support creativity that drives change. Our innovative grants are here to help you turn vision into impact. We are ready to fund your dreams.",
    Icon: Modem,
    link: "https://forms.gle/w4dgKSadhCLQB8ww6",
  },
  {
    name: "Emergency Relief Grants",
    description:
      "In times of crisis, we stand with you. Our emergency relief grants offer fast, compassionate financial help when life takes an unexpected turn.",
    Icon: Id,
    link: "https://forms.gle/w4dgKSadhCLQB8ww6",
  },
  {
    name: "Community Grants",
    description:
      "Build stronger, brighter communities with our support. These grants are for initiatives that uplift neighborhoods, promote inclusion, and create lasting change because everyone deserves a chance to thrive.",
    Icon: Id,
    link: "https://forms.gle/w4dgKSadhCLQB8ww6",
  },
];

export const leftGrantProcess = [
  {
    step: "First Step",
    process: "Check Eligibility",
    hasButton: true,
    link: "eligibility-form",
    description:
      "For Business Owners, review our eligibility criteria to ensure you qualify for a grant. Visit our eligibility page to see if you meet the requirements for our non-repayment grants.",
  },

  {
    step: "Third Step",
    process: "Application Review",
    cardStyles: "bg-white",
    processStyles: "text-slate-400",
    desStyles: "text-slate-400",
    description:
      "Our team carefully reviews all submitted applications to ensure they meet our criteria and align with our mission. This process typically takes 12-24 hours. Ensure your application is complete and submitted on time. Our team will reach out if additional information is needed.",
  },

  {
    step: "Final Step",
    process: "Funding Disbursement",
    description:
      "After all agreements are signed, funds will be disbursed according to the grant’s terms. This process is typically completed within 48 hours of approval.",
  },
];

export const rightGrantProcess = [
  {
    step: "Second Step",
    process: "Submit Your Application",
    cardStyles: "bg-white",
    processStyles: "text-slate-400",
    desStyles: "text-slate-400",
    description:
      "Complete the online application form with details about yourself, your project or purpose for the grant, and how the funds will be used. Fill out the application form on our website, providing all required information and supporting documents.",
  },
  {
    step: "Fourth Step",
    process: "Approval and Notification",
    description:
      "Once your application is approved, you will receive an official notification with details about the grant amount and terms of use. Review the grant agreement carefully and sign the necessary documents to confirm your acceptance of the grant.",
  },
];

export const grantProcess = [
  {
    step: "First Step",
    process: "Check Eligibility",
    hasButton: true,
    link: "eligibility-form",
    description:
      "For Business Owners, review our eligibility criteria to ensure you qualify for a grant. Visit our eligibility page to see if you meet the requirements for our non-repayment grants.",
  },
  {
    step: "Second Step",
    process: "Submit Your Application",
    cardStyles: "bg-white",
    processStyles: "text-slate-400",
    desStyles: "text-slate-400",
    description:
      "Complete the online application form with details about yourself, your project or purpose for the grant, and how the funds will be used. Fill out the application form on our website, providing all required information and supporting documents.",
  },
  {
    step: "Third Step",
    process: "Application Review",

    description:
      "Our team carefully reviews all submitted applications to ensure they meet our criteria and align with our mission. This process typically takes 12-24 hours. Ensure your application is complete and submitted on time. Our team will reach out if additional information is needed.",
  },
  {
    step: "Fourth Step",
    process: "Approval and Notification",
    cardStyles: "bg-white",
    processStyles: "text-slate-400",
    desStyles: "text-slate-400",
    description:
      "Once your application is approved, you will receive an official notification with details about the grant amount and terms of use. Review the grant agreement carefully and sign the necessary documents to confirm your acceptance of the grant.",
  },
  {
    step: "Final Step",
    process: "Funding Disbursement",
    description:
      "After all agreements are signed, funds will be disbursed according to the grant’s terms. This process is typically completed within 48 hours of approval.",
  },
];

export const grantStats = [
  {
    label: "Grants Awarded",
    value: "219K+",
    Icon: Grant,
  },
  {
    label: "Total Funds Distributed",
    value: "$36M",
    Icon: Bank,
  },
  {
    label: "Beneficiaries Impacted",
    value: "484K",
    Icon: Users,
  },
  {
    label: "Satisfaction Rate",
    value: "98%",
    Icon: Stat,
  },
];

export const contacts = [
  {
    Icon: ContactPhone,
    name: "Phone Number",
    contact: "+1(913) 396-9230",
  },
  {
    Icon: Email,
    name: "Send An Email",
    contact: "forgivenessgrants@gmail.com",
    link: "mailto:forgivenessgrants@gmail.com",
  },
];
