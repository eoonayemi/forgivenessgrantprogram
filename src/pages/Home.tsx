// import { useEffect, useState } from "react";
import {
  ActiveSlider,
  ContactCard,
  ContentImgCard,
  CustomButton,
  FAQCard,
  FieldInput,
  ProcessCard,
  // ReviewCard,
  SectionBox,
  ServiceCard,
  StatCard,
} from "../components";
import {
  contacts,
  // clients,
  faqs,
  grantProcess,
  grantStats,
  leftGrantProcess,
  rightGrantProcess,
  services,
} from "../constants";
import {
  aboutUs,
  // heroImg,
  // heroImg2,
  // heroImg3,
  heroImg4,
  ourMission,
  ourVision,
} from "../assets/images";
// import {
//   Facebook,
//   Instagram,
//   Telegram,
//   Twitter,
//   Whatsapp,
// } from "../assets/icons";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useState } from "react";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(6, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

const Home = () => {
  // const [activeReview, setActiveReview] = useState(0);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with:", form);
  };

  return (
    <main className="mt-16 min-h-full text-[16px]">
      <section
        id="home"
        className="text-white h-fit gap-20 bg-dark_primary responsive-p text-center md:text-left flex flex-col md:flex-row justify-center items-center"
      >
        <div className="flex flex-1 leading-relaxed flex-col gap-10 items-center md:items-start justify-center {self-start}">
          <h1 className="text-3xl leading-normal sm:text-4xl lg:leading-snug lg:text-5xl font-extrabold">
            Fueling Dreams for Individuals & Businesses with Accessible Funding
          </h1>
          <p>
            At Forgiveness Grant, we fund ambitions and empower futures by
            offering non-repayment grants to support your goal in education,
            business or community projects without the burden of debt.
          </p>
          <CustomButton
            text="Get Started"
            styles="w-[11rem]"
            hasArrow={true}
            onClick={() => navigate("/register")}
          />
        </div>
        <div className="overflow-hidden rounded-[50%] w-full h-full sm:w-[20rem] sm:h-[20rem]  lg:w-[25rem] lg:h-[25rem] xl:w-[35rem] xl:h-[35rem]">
          <img src={heroImg4} alt="Hero Image" className="w-full h-full" />
        </div>
      </section>
      <section className="text-white bg-light_primary text-center py-5 text-sm md:text-lg font-bold">
        <p>"Funding ambitions & empowering futures"</p>
      </section>

      {/* <SectionBox title="Features" id="features">
        <div className="w-full flex flex-col sm:flex-row flex-wrap gap-10 mt-10 items-center justify-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              cardStyles="md:w-[31.1%] sm:w-[46.8%] bg-[#f5f5f5]"
            />
          ))}
        </div>
      </SectionBox> */}

      <ContentImgCard
        id="about-us"
        title="About Us"
        description={
          "At Forgiveness Grant, we offer non-repayment grants that support education, business, and innovation. Our mission is to remove financial barriers so individuals can follow their dreams—debt-free. Rooted in compassion and opportunity, Forgiveness Grant is here to uplift those in need. Whether it’s funding school, starting a business, or driving community impact, our goal is to help people succeed and thrive."
        }
        img={aboutUs}
        imgAlt="About Us"
        buttonText="Learn More"
        btnHasArrow
        // hasButton
        buttonStyles="w-[10rem] text-[14px]"
        imgStyles="w-full rounded-3xl"
        titleStyles="text-3xl font-bold text-black"
        cardStyles="gap-10 md:gap-16 bg-white"
        desStyles="text-black"
      />
      <ContentImgCard
        id="our-vision"
        title="Our Vision"
        description={
          "At Forgiveness Grant, our vision is a world where financial barriers never limit personal or community growth. We aim to lead in providing accessible, non-repayable support that fuels innovation, promotes education, and empowers people to reach their full potential and create lasting impact."
        }
        img={ourVision}
        imgAlt="Our Vision"
        buttonText="Learn More"
        btnHasArrow
        // hasButton
        buttonStyles="w-[10rem] text-[14px]"
        imgStyles="w-full rounded-3xl"
        titleStyles="text-3xl font-bold text-black"
        cardStyles="gap-10 md:gap-16 md:flex-row-reverse bg-white"
        desStyles="text-black"
      />
      <ContentImgCard
        id="our-mission"
        title="Our Mission"
        description={
          "Forgiveness Grant is dedicated to empowering people and communities through non-repayable grants that eliminate financial obstacles and unlock opportunities for growth, innovation, and success. We support education, entrepreneurship, and community initiatives to help build a fairer future where everyone can thrive debt-free."
        }
        img={ourMission}
        imgAlt="Our Mission"
        buttonText="Learn More"
        btnHasArrow
        // hasButton
        buttonStyles="w-[10rem] text-[14px]"
        imgStyles="w-full rounded-3xl"
        titleStyles="text-3xl font-bold text-black"
        cardStyles="gap-10 md:gap-16 bg-white"
        desStyles="text-black"
      />

      <SectionBox
        title="Our Services"
        description="The Forgiveness Grant Program offers a variety of non-repayable grants to support individuals, businesses, and communities. Whether you need help with personal needs, education, or innovation, we are here to assist. All approved grants are disbursed within 72 hours."
        id="our-services"
        cardStyles="gap-20 bg-dark_primary"
        titleStyles="text-white"
        desStyles="text-white"
      >
        <div className="w-full flex flex-col sm:flex-row flex-wrap gap-10 items-center justify-center">
          {services.map((feature, index) => (
            <ServiceCard
              key={index}
              {...feature}
              cardStyles="bg-white md:w-[31.1%] sm:w-[46.8%]"
            />
          ))}
        </div>
      </SectionBox>

      <SectionBox
        title="Our Process"
        description="Getting the support you need is simple and straightforward. Our process is designed to be fast, transparent, and stress-free from application to approval. Follow the steps below to see how you can access your grant in just a few days. Each application is carefully reviewed to ensure fairness, clarity and prompt response."
        id="our-process"
        cardStyles="gap-20"
      >
        <div className="hidden w-full md:flex flex-row items-center justify-center gap-32 px-[180px]">
          <div className="flex flex-col gap-5">
            {leftGrantProcess.map((feature, index) => (
              <ProcessCard key={index} {...feature} />
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {rightGrantProcess.map((feature, index) => (
              <ProcessCard key={index} {...feature} />
            ))}
            <div className="self-center mt-10">
              <CustomButton
                text="Get Funded"
                styles="rounded-lg px-6 bg-light_primary"
                hasArrow
              />
            </div>
          </div>
        </div>
        <div className="md:hidden w-full flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col gap-5">
            {grantProcess.map((feature, index) => (
              <ProcessCard key={index} {...feature} />
            ))}
            <div className="self-center mt-10">
              <CustomButton
                text="Get Funded"
                styles="rounded-lg px-6 bg-light_primary"
                hasArrow
              />
            </div>
          </div>
        </div>
      </SectionBox>

      <section className="flex flex-col md:flex-row responsive-p items-center justify-center bg-dark_primary gap-10">
        {grantStats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </section>

      <SectionBox title="Testimonials" id="testimonials">
        <div className="flex items-center justify-center mt-20">
          <ActiveSlider />
        </div>
      </SectionBox>

      <SectionBox
        title="Frequently Asked Questions (FAQs)"
        id="faqs"
        cardStyles="bg-dark_primary text-white"
      >
        <div className="mt-10 flex flex-col gap-[1px] rounded-2xl overflow-hidden">
          {faqs.map((faq, i) => (
            <FAQCard key={i} {...faq} arrLen={faqs.length} i={i} />
          ))}
        </div>
      </SectionBox>

      <section className="text-white bg-light_primary text-center py-5 text-sm md:text-lg font-bold">
        <p>"Funding hopes, Fueling dreams"</p>
      </section>

      <SectionBox
        title="Contact Us"
        description="Feel free to get in touch with our team"
        id="contact-us"
        desStyles="w-[50%] text-gray-600 text-lg"
        tdStyles="gap-3"
        cardStyles="text-sm"
        titleStyles="text-3xl sm:text-4xl md:text-4xl md:leading-[4rem] text-wrap w-[60%] sm:w-[40%] text-center overflow-hidden"
      >
        <div className="flex flex-col md:flex-row justify-center gap-20 md:gap-40 mt-20">
          <div className="space-y-5">
            {contacts.map((contact, index) => (
              <ContactCard key={index} {...contact} />
            ))}
          </div>
          <div className="md:w-[40rem]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full"
            >
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <FieldInput
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <FieldInput
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <FieldInput
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                isTextArea
              />
              <CustomButton type="submit" text="Send A Message" />
            </form>
          </div>
        </div>
      </SectionBox>

      {/* <ArrowUpCircle className="absolute text-white text-4xl right-[3rem]" /> */}
    </main>
  );
};

export default Home;
