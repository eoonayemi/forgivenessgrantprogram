import { Check, Spinner } from "@/assets/icons";
import { CustomButton, FieldInput, SectionBox } from "@/components";
import { useState } from "react";
// import { useNavigate } from "react-router";

const EligibilityForm = () => {
  //   const navigate = useNavigate();
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCheckingEligibility(true);
    setTimeout(() => {
      setIsEligible(true);
      setIsCheckingEligibility(false);
    }, 3500);
  };

  return (
    <SectionBox
      title="Fill Up Your Prequalification Questions"
      description="For Business Grant Applicants ONLY"
      id="contact-us"
      desStyles="w-[50%] text-gray-600 text-lg"
      tdStyles="gap-3"
      cardStyles="text-sm xl:px-[250px] my-20"
      titleStyles="text-3xl sm:text-3xl md:text-3xl md:leading-[4rem] text-wrap w-[60%] sm:w-[40%] text-center overflow-hidden"
    >
      <div className="flex flex-col md:flex-row justify-center gap-20 md:gap-40 mt-20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <FieldInput
              placeholder="Full Name"
              label="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
            />
            <FieldInput
              placeholder="Email Address"
              label="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
            />
          </div>

          <FieldInput
            placeholder="What industry is your business in?"
            label="What industry is your business in?"
            value={form.industry}
            onChange={(e) => setForm({ ...form, industry: e.target.value })}
            styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
          />
          <FieldInput
            placeholder="How old is your business?"
            label="How old is your business?"
            value={form.businessAge}
            onChange={(e) => setForm({ ...form, businessAge: e.target.value })}
            styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
          />
          <FieldInput
            placeholder="On average, how much in monthly sales does your business produce?"
            label="On average, how much in monthly sales does your business produce?"
            value={form.sales}
            onChange={(e) => setForm({ ...form, sales: e.target.value })}
            styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
          />
          <FieldInput
            placeholder="Do you have an EIN?"
            label="Do you have an EIN?"
            value={form.EIN}
            onChange={(e) => setForm({ ...form, EIN: e.target.value })}
            styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
          />
          <FieldInput
            placeholder="Is your business incorporated (LLC, S-Corp, C-Corp)?"
            label="Is your business incorporated (LLC, S-Corp, C-Corp)?"
            value={form.incorporated}
            onChange={(e) => setForm({ ...form, incorporated: e.target.value })}
            styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
          />
          <div className="flex flex-col gap-3 w-full">
            <label className="font-bold">
              Do you have a business bank account?
              <span className="text-red-600 ml-1">*</span>
            </label>

            <div className="flex gap-4 items-center">
              <div className="flex gap-1 items-center justify-center">
                <input name="business" type="radio" required />
                <label>Yes</label>
              </div>
              <div className="flex gap-1 items-center justify-center">
                <input name="business" type="radio" required />
                <label>No</label>
              </div>
            </div>
          </div>
          <FieldInput
            placeholder="How much are you looking for in funding?"
            label="How much are you looking for in funding?"
            value={form.funding}
            onChange={(e) => setForm({ ...form, funding: e.target.value })}
            styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
          />
          <FieldInput
            placeholder="Are you employed (W-2 or 1099) as well?"
            label="Are you employed (W-2 or 1099) as well?"
            value={form.employed}
            onChange={(e) => setForm({ ...form, employed: e.target.value })}
            styles="h-[3rem] rounded-sm bg-slate-200 hover:bg-slate-200 focus:bg-slate-200 laceholder:text-slate-500"
          />
          {isEligible && (
            <div className="text-light_primary flex gap-2 items-center self-end font-semibold">
              <span>Congrats! You're eligible for the grant</span>
              <Check className="text-lg" />
            </div>
          )}
          <CustomButton
            type="submit"
            Icon={Spinner}
            isLoading={isCheckingEligibility}
            text={
              isCheckingEligibility
                ? "Checking Eligibility"
                : isEligible
                ? "Apply Now"
                : "Check Eligibility"
            }
            styles="h-[3rem] rounded-sm self-end font-bold px-10"
          />
        </form>
      </div>
    </SectionBox>
  );
};

export default EligibilityForm;
