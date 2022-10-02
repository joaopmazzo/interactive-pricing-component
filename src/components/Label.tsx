interface LabelComponentProps {
  text: string;
}

const LabelComponent = ({ text }: LabelComponentProps) => (
  <label className="font-semibold text-light-text text-xs">{text}</label>
);

export default LabelComponent;
