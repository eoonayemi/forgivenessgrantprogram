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
} from "../assets/icons";
import { auto3d, customerSupport, reliable3d } from "../assets/images";

export const footerLinks = [
  {
    heading: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Blog", path: "/blog" },
      { name: "Press", path: "/press" },
    ],
  },
  {
    heading: "Support",
    links: [
      { name: "Help Center", path: "/help" },
      { name: "Contact Us", path: "/contact" },
      { name: "FAQs", path: "/faqs" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms" },
    ],
  },
  {
    heading: "Services",
    links: [
      { name: "Airtime Top-Up", path: "/services/airtime-topup" },
      { name: "Data Subscription", path: "/services/data-subscription" },
      { name: "Bill Payment", path: "/services/bill-payment" },
      { name: "Verifications", path: "/services/verifications" },
    ],
  },
  {
    heading: "Follow Us",
    links: [
      { name: "Facebook", path: "https://facebook.com/MyAmtApp" },
      { name: "Twitter", path: "https://twitter.com/MyAmtApp" },
      { name: "Instagram", path: "https://instagram.com/MyAmtApp" },
      { name: "LinkedIn", path: "https://linkedin.com/company/MyAmtApp" },
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

export const faqs = [
  {
    question: "What is the Forgiveness Grant Program?",
    answer:
      "The Forgiveness Grant Program is a non-repayment grant agency dedicated to providing financial support to individuals, small businesses, non-profits, and community projects. Our grants are designed to help recipients achieve their goals without the burden of debt.",
  },
  {
    question: "Who is eligible to apply for a grant?",
    answer:
      "Eligibility varies depending on the specific grant. Generally, we support individuals, small businesses, non-profit organizations, and community initiatives that align with our mission of fostering growth, education, and innovation. Please check our eligibility page for detailed criteria.",
  },
  {
    question: "Is MyAmtApp secure?",
    answer:
      "Yes, MyAmtApp uses advanced security protocols to ensure all transactions and personal data are protected.",
  },
  {
    question: "How do I apply for a grant?",
    answer:
      "To apply, simply visit our website and fill out the online application form. Be sure to provide all required information and supporting documents to ensure your application is complete.",
  },
  {
    question: "Is there an application fee?",
    answer:
      "No, there is no fee to apply for a grant through the Forgiveness Grant Program. Our goal is to make the process as accessible as possible for all applicants.",
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
  // {
  //   name: "Secured",
  //   description:
  //     "Advanced security protocols protect your transactions, ensuring that your data and payments are safeguarded from unauthorized access.",
  //   image: secure3d,
  // },
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
      "Get the support you need for everyday life. The Forgiveness Grant Program offers personal grants to help individuals overcome financial barriers and move forward with confidence.",
    Icon: Phone,
  },
  {
    name: "Business Grants",
    description:
      "Whether you're launching a new venture or growing an existing one, our business grants are designed to fuel your ambition without the burden of repayment because progress deserves a helping hand.",
    Icon: Antenna,
  },
  {
    name: "Educational Grants",
    description:
      "Pursue your academic goals without worrying about tuition or fees. The Forgiveness Grant Program provides educational grants to help you invest in your future, debt-free.",
    Icon: Receipt,
  },
  {
    name: "Innovation Grants",
    description:
      "Have a bold idea or breakthrough project? We support creativity that drives change. Our innovative grants are here to help you turn vision into impact. We are ready to fund your dreams.",
    Icon: Modem,
  },
  {
    name: "Emergency Relief Grants",
    description:
      "In times of crisis, we stand with you. Our emergency relief grants offer fast, compassionate financial help when life takes an unexpected turn.",
    Icon: Id,
  },
  {
    name: "Community Grants",
    description:
      "Build stronger, brighter communities with our support. These grants are for initiatives that uplift neighborhoods, promote inclusion, and create lasting change because everyone deserves a chance to thrive.",
    Icon: Id,
  },
];

export const leftGrantProcess = [
  {
    step: "First Step",
    process: "Check Eligibility",
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
    step: "Fifth Step",
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
    step: "Fifth Step",
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
