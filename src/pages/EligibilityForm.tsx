import { Check, Spinner } from "@/assets/icons";
import { CustomButton, FieldInput, SectionBox } from "@/components";
import { useState, useRef } from "react";
// import { useNavigate } from "react-router";

const EligibilityForm = () => {
  //   const navigate = useNavigate();
  const errorMessageRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    industry: "",
    businessAge: "",
    sales: "",
    EIN: "",
    incorporated: "",
    backAcc: "",
    funding: "",
    employed: "",
  });
  const [isCheckingEligibility, setIsCheckingEligibility] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [showValidationError, setShowValidationError] = useState(false);

  // Function to check if all required fields are filled
  const areRequiredFieldsFilled = () => {
    return (
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      form.industry.trim() !== "" &&
      form.businessAge.trim() !== "" &&
      form.sales.trim() !== "" &&
      form.EIN.trim() !== "" &&
      form.incorporated.trim() !== "" &&
      form.funding.trim() !== "" &&
      form.employed.trim() !== "" &&
      form.backAcc !== "" // This will be set when radio button is selected
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!areRequiredFieldsFilled()) {
      setShowValidationError(true);

      // Smooth scroll to the error message with a slight delay to ensure it's rendered
      setTimeout(() => {
        if (errorMessageRef.current) {
          errorMessageRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          });
        }
      }, 100);
      return;
    }

    // Hide validation error if it was showing
    setShowValidationError(false);

    setIsCheckingEligibility(true);
    setTimeout(() => {
      setIsEligible(true);
      setIsCheckingEligibility(false);
    }, 3500);
  };

  // Hide validation error when user starts typing
  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (showValidationError) {
      setShowValidationError(false);
    }
  };

  const handleRadioChange = (value: string) => {
    setForm({ ...form, backAcc: value });
    if (showValidationError) {
      setShowValidationError(false);
    }
  };

  return (
    <main>
      <SectionBox
        title="Fill Up Your Prequalification Questions"
        description="For Business Grant Applicants ONLY"
        id="eligibility-form"
        desStyles="w-[50%] text-gray-600 text-lg"
        tdStyles="gap-3"
        cardStyles="text-sm xl:px-[250px] mt-20"
        titleStyles="text-3xl sm:text-3xl md:text-3xl md:leading-[4rem] text-wrap text-center overflow-hidden"
      >
        <div className="flex flex-col md:flex-row justify-center gap-20 md:gap-40 mt-20">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            {showValidationError && (
              <div
                ref={errorMessageRef}
                className="bg-red-600 bg-opacity-15 text-red-600 p-3 rounded-sm text-center font-semibold animate-pulse"
              >
                "Fill all required fields"
              </div>
            )}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <FieldInput
                placeholder="Full Name"
                label="Full Name"
                value={form.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
              />
              <FieldInput
                placeholder="Email Address"
                label="Email Address"
                value={form.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
              />
            </div>

            <FieldInput
              placeholder="What industry is your business in?"
              label="What industry is your business in?"
              value={form.industry}
              onChange={(e) => handleInputChange("industry", e.target.value)}
              styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
            />
            <FieldInput
              placeholder="How old is your business?"
              label="How old is your business?"
              value={form.businessAge}
              onChange={(e) => handleInputChange("businessAge", e.target.value)}
              styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
            />
            <FieldInput
              placeholder="On average, how much in monthly sales does your business produce?"
              label="On average, how much in monthly sales does your business produce?"
              value={form.sales}
              onChange={(e) => handleInputChange("sales", e.target.value)}
              styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
            />
            <FieldInput
              placeholder="Do you have an EIN?"
              label="Do you have an EIN?"
              value={form.EIN}
              onChange={(e) => handleInputChange("EIN", e.target.value)}
              styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
            />
            <FieldInput
              placeholder="Is your business incorporated (LLC, S-Corp, C-Corp)?"
              label="Is your business incorporated (LLC, S-Corp, C-Corp)?"
              value={form.incorporated}
              onChange={(e) =>
                handleInputChange("incorporated", e.target.value)
              }
              styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
            />
            <div className="flex flex-col gap-3 w-full">
              <label className="font-bold">
                Do you have a business bank account?
                <span className="text-red-600 ml-1">*</span>
              </label>

              <div className="flex gap-4 items-center">
                <div className="flex gap-1 items-center justify-center">
                  <input
                    name="business"
                    type="radio"
                    value="yes"
                    checked={form.backAcc === "yes"}
                    onChange={(e) => handleRadioChange(e.target.value)}
                  />
                  <label>Yes</label>
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <input
                    name="business"
                    type="radio"
                    value="no"
                    checked={form.backAcc === "no"}
                    onChange={(e) => handleRadioChange(e.target.value)}
                  />
                  <label>No</label>
                </div>
              </div>
            </div>
            <FieldInput
              placeholder="How much are you looking for in funding?"
              label="How much are you looking for in funding?"
              value={form.funding}
              onChange={(e) => handleInputChange("funding", e.target.value)}
              styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
            />
            <FieldInput
              placeholder="Are you employed (W-2 or 1099) as well?"
              label="Are you employed (W-2 or 1099) as well?"
              value={form.employed}
              onChange={(e) => handleInputChange("employed", e.target.value)}
              styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
            />
            {isEligible && (
              <div className="text-light_primary flex gap-2 items-center self-end font-semibold">
                <span>Congrats! You're eligible for the grant</span>
                <Check className="text-lg" />
              </div>
            )}
            <CustomButton
              type={isEligible ? "button" : "submit"}
              Icon={Spinner}
              isLoading={isCheckingEligibility}
              text={
                isCheckingEligibility
                  ? "Checking Eligibility"
                  : isEligible
                  ? "Apply Now"
                  : "Check Eligibility"
              }
              styles="h-[3rem] rounded-sm md:self-end font-bold px-10"
              onClick={() => {
                isEligible &&
                  (window.location.href =
                    "https://forms.gle/w4dgKSadhCLQB8ww6");
              }}
            />
          </form>
        </div>
      </SectionBox>

      <section className="text-white bg-light_primary text-center py-5 text-sm md:text-lg font-bold">
        <p>"Funding hopes, Fueling Dreams"</p>
      </section>
    </main>
  );
};

export default EligibilityForm;
