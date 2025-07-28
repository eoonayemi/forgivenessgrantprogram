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
    question: "What is MyAmtApp?",
    answer:
      "MyAmtApp is a virtual top-up platform that allows you to buy airtime, data, pay utility bills, and handle essential verifications all in one secure app.",
  },
  {
    question: "How do I top up airtime using MyAmtApp?",
    answer:
      "Simply select 'Airtime Top-Up,' choose your network, enter the amount, and confirm your payment. The airtime will be instantly credited to the chosen number.",
  },
  {
    question: "Is MyAmtApp secure?",
    answer:
      "Yes, MyAmtApp uses advanced security protocols to ensure all transactions and personal data are protected.",
  },
  {
    question: "Can I pay my electricity and cable bills with MyAmtApp?",
    answer:
      "Absolutely! MyAmtApp allows you to pay for utilities like electricity (NEPA bills) and renew cable subscriptions for providers like GOTV and DSTV.",
  },
  {
    question: "How do I verify my NIN or BVN using MyAmtApp?",
    answer:
      "Go to the 'Verifications' section, select NIN or BVN verification, and follow the prompts to complete the process. You can also print the verification slip if needed.",
  },
  {
    question: "What payment methods does MyAmtApp accept?",
    answer:
      "MyAmtApp accepts various payment methods, including debit cards and mobile wallets, to make your transactions as convenient as possible.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach customer support through the 'Help' section in the app or via our contact information on the website.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Icon: Phone,
  },
  {
    name: "Business Grants",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Icon: Antenna,
  },
  {
    name: "Educational Grants",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Icon: Receipt,
  },
  {
    name: "Innovation Grants",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Icon: Modem,
  },
  {
    name: "Emergency Relief Grants",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Icon: Id,
  },
  {
    name: "Community Development Grants",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
