import { Hospital } from "lucide-react";

interface Props {
  className?: string;
  text: string;
}

export const Header: React.FC<Props> = ({ text }) => {
  return (
    <header className='flex justify-center py-5 bg-sky-50'>
      <Hospital className="mr-5 text-sky-900"/>
      <h1 className="text-lg font-medium text-sky-900">{text}</h1>
    </header>
  );
};
