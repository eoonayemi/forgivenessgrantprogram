import { User, Phone, Antenna, Receipt, Modem, Id } from "../assets/icons";
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
    name: "Airtime Top-Up",
    description:
      "Instantly recharge your mobile with airtime across all networks.",
    Icon: Phone,
  },
  {
    name: "Data Subscription",
    description:
      "Subscribe to data plans with ease for uninterrupted internet access.",
    Icon: Antenna,
  },
  {
    name: "Utility Bill Payment",
    description: "Pay your electricity and water bills securely and on time.",
    Icon: Receipt,
  },
  {
    name: "Cable TV Subscription",
    description:
      "Renew your GOTV or DSTV subscription quickly and conveniently.",
    Icon: Modem,
  },
  {
    name: "NIN and BVN Verification",
    description:
      "Verify your National Identification Number (NIN), Bank Verification Number (BVN) details and print slips.",
    Icon: Id,
  },
];
