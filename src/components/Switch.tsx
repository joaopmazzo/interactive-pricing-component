import { Dispatch, SetStateAction } from "react";

import * as Switch from "@radix-ui/react-switch";

interface SwitchComponentProps {
  monthlyBilling: boolean;
  setMonthlyBilling: Dispatch<SetStateAction<boolean>>;
}

const SwitchComponent = ({
  monthlyBilling,
  setMonthlyBilling,
}: SwitchComponentProps) => (
  <Switch.Root
    checked={monthlyBilling}
    onCheckedChange={setMonthlyBilling}
    defaultChecked={false}
    name="discount-switch"
    className="bg-[#CFD8EF] w-11 h-6
      flex items-center rounded-full
      hover:bg-[#7AEADF]
      radix-state-checked:bg-[#10D8C4] radix-state-checked:hover:bg-[#7AEADF]"
  >
    <Switch.Thumb
      className="w-4 h-4 bg-white rounded-full mx-1 transition-transform
        radix-state-checked:animate-checked radix-state-checked:translate-x-5"
    />
  </Switch.Root>
);

export default SwitchComponent;
