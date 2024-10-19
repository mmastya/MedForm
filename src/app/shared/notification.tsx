import { CircleCheck } from "lucide-react";

interface Props {
  className?: string;
  text: string;
}

export const SuccessNotification: React.FC<Props> = ({ text }) => {
  return (
    <div className="absolute bottom-0 right-2 flex px-2 py-2 border-2 rounded-lg border-green-600 bg-white">
      <CircleCheck className="text-green-600 mr-5" />
      <span className="text-green-600">{text}</span>
    </div>
  );
};