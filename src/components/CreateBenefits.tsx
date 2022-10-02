import IconCheck from "../assets/icon-check.svg";

interface CreateBenefitsProps {
  text: string;
}

const CreateBenefits = ({ text }: CreateBenefitsProps) => (
  <div className="flex items-center gap-4">
    <img src={IconCheck} alt="Check icon" />
    <p className="font-semibold text-light-text text-xs">{text}</p>
  </div>
);

export default CreateBenefits;
