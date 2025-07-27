import { useEffect, useState } from "react";
import {
  ContentImgCard,
  CustomButton,
  FAQCard,
  ProcessCard,
  ReviewCard,
  SectionBox,
  ServiceCard,
} from "../components";
import {
  clients,
  faqs,
  leftGrantProcess,
  rightGrantProcess,
  services,
} from "../constants";
import { aboutUs, heroImg, ourMission, ourVision } from "../assets/images";
import {
  Facebook,
  Instagram,
  Telegram,
  Twitter,
  Whatsapp,
} from "../assets/icons";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [activeReview, setActiveReview] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % clients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="mt-16 min-h-full text-[16px]">
      <section
        id="home"
        className="text-white h-fit gap-20 bg-dark_primary responsive-p text-center md:text-left flex flex-col md:flex-row justify-center items-center"
      >
        <div className="flex leading-relaxed flex-col gap-10 items-center md:items-start justify-center {self-start}">
          <h1 className="text-3xl leading-normal sm:text-4xl lg:leading-snug lg:text-5xl font-extrabold">
            Fueling Dreams for Individuals & Businesses with Accessible Funding
          </h1>
          <p>
            At Grants4life, we fund ambitions and empower futures by offering
            non-repayment grants to support your goal in education, business or
            community projects without the burden of debt.
          </p>
          <CustomButton
            text="Get Started"
            styles="w-[11rem]"
            hasArrow={true}
            onClick={() => navigate("/register")}
          />
        </div>
        <div className="bg-secondary001 rounded-full overflow-hidden">
          <img
            src={heroImg}
            alt="Hero Image"
            className="w-[50rem] sm:w-[70rem] lg:w-[100rem] object-contain"
          />
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
          "At Grants4Life, we offer non-repayment grants that support education, business, and innovation. Our mission is to remove financial barriers so individuals can follow their dreams—debt-free. Rooted in compassion and opportunity, Grants4life is here to uplift those in need. Whether it’s funding school, starting a business, or driving community impact, our goal is to help people succeed and thrive."
        }
        img={aboutUs}
        imgAlt="About Us"
        buttonText="Learn More"
        btnHasArrow
        hasButton
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
          "At Grants4life, our vision is a world where financial barriers never limit personal or community growth. We aim to lead in providing accessible, non-repayable support that fuels innovation, promotes education, and empowers people to reach their full potential and create lasting impact."
        }
        img={ourVision}
        imgAlt="Our Vision"
        buttonText="Learn More"
        btnHasArrow
        hasButton
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
          "Grants4life is dedicated to empowering people and communities through non-repayable grants that eliminate financial obstacles and unlock opportunities for growth, innovation, and success. We support education, entrepreneurship, and community initiatives to help build a fairer future where everyone can thrive debt-free."
        }
        img={ourMission}
        imgAlt="Our Mission"
        buttonText="Learn More"
        btnHasArrow
        hasButton
        buttonStyles="w-[10rem] text-[14px]"
        imgStyles="w-full rounded-3xl"
        titleStyles="text-3xl font-bold text-black"
        cardStyles="gap-10 md:gap-16 bg-white"
        desStyles="text-black"
      />

      <SectionBox
        title="Our Services"
        description="At Grants4life, we ensure applicants are funded within 72hrs of application approval. The various grants we provide are as follows:"
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget felis nec arcu bibendum faucibus. Donec sit amet mauris sit amet nunc vulputate malesuada. Sed eu turpis in justo malesuada vestibulum at sed orci. Cras porta euismod purus, a imperdiet tortor condimentum sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        id="our-services"
        cardStyles="gap-20"
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5 md:gap-32 md:px-[180px]">
          <div className="flex flex-col gap-5">
            {leftGrantProcess.map((feature, index) => (
              <ProcessCard key={index} {...feature} />
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {rightGrantProcess.map((feature, index) => (
              <ProcessCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </SectionBox>

      <SectionBox title="What Our Client Says" id="our-clients">
        <div className="w-full flex flex-col sm:flex-row sm:justify-center flex-wrap gap-10 mt-14">
          {clients.map((client, i) => (
            <ReviewCard
              key={i}
              {...client}
              cardStyles={`md:w-[31.1%] sm:w-[46.8%] transition-all duration-500 bg-light_primary ${
                activeReview == i
                  ? "md:scale-[100%]"
                  : "max-sm:hidden md:scale-[90%]"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-row gap-2 items-center justify-center mt-10">
          {clients.map((_, i) => (
            <div
              className={`h-2 w-2 ${
                activeReview == i ? "bg-dark_primary" : "bg-light_primary"
              } rounded-full`}
            ></div>
          ))}
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

      <SectionBox
        title="Try MyAmtApp Today"
        description="We offer instant recharge of airtime, databundle, cable TV subscriptions, Electricity bill payments and more."
        id="try-now"
        desStyles="w-[50%] text-gray-600"
        tdStyles="gap-3"
        cardStyles="text-sm"
        titleStyles="text-4xl sm:text-5xl md:text-5xl md:leading-[4rem] text-wrap w-[60%] sm:w-[40%] text-center overflow-hidden"
      >
        <div className="flex flex-col justify-center items-center mt-5 gap-5">
          <CustomButton
            text="Get Started"
            styles="w-[10rem] text-sm"
            hasArrow
            onClick={() => navigate("/register")}
          />
          <span className="text-gray-600">Email: myamtapp@info.com</span>
          <div className="flex gap-5">
            <span className=" bg-light_primary rounded-full p-2">
              <Twitter className="text-white text-xs" />
            </span>
            <span className=" bg-light_primary rounded-full p-2">
              <Facebook className="text-white text-xs" />{" "}
            </span>
            <span className=" bg-light_primary rounded-full p-2">
              <Instagram className="text-white text-xs" />
            </span>
            <span className=" bg-light_primary rounded-full p-2">
              <Telegram className="text-white text-xs" />
            </span>
            <span className=" bg-light_primary rounded-full p-2">
              <Whatsapp className="text-white text-xs" />
            </span>
          </div>
        </div>
      </SectionBox>

      {/* <ArrowUpCircle className="absolute text-white text-4xl right-[3rem]" /> */}
    </main>
  );
};

export default LandingPage;
