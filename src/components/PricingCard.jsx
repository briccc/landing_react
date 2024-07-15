import { CheckCircle2 } from 'lucide-react';

export const PricingCard = ({ option, index }) => {
  return (
    <div key={index} className="w-full sm:w-1/1 lg:w-1/3 p-2">
      <div className="p-10 border border-neutral-700 rounded-xl">
        <p className="text-4xl mb-8">
          {option.title}
          {option.title === "Pro" && (
            <span className="bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent text-lg mb-4 ml-2">
              (Most Popular)
            </span>
          )}
        </p>
        <p className="mb-8">
          <span>{option.price}</span>
          <span className="text-5xl mt-6 mr-2">{option.text}</span>
          <span className="text-neutral-400 tracking-tight ">/Month</span>
        </p>
        <ul>
          {option.features.map((feature, index) => (
            <li key={index} className="mt-8 flex items-center">
              <CheckCircle2 />
              <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href=""
          className="inline-flex text-center justify-center items-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-indigo-900 border-indigo-900 border rounded-lg transition duration-200"
        >
          Suscribite
        </a>
      </div>
    </div>
  );
};
