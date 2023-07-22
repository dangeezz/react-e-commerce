import { Button } from "./button";

export const InputNumberButton = () => {
  return (
    <div className="w-[200px] flex items-center font-semibold text-lg justify-between bg-gray-200 rounded-full px-8">
      <Button className="p-3">-</Button>
      <span>1</span>
      <Button className="p-3">+</Button>
    </div>
  );
};