type prop = {
  text: any;
  sub: string[];
  setSub: React.Dispatch<React.SetStateAction<string[]>>;
};

const Button = ({ text, sub, setSub }: prop) => {
  const setFunc = (text: string) => {
    if (!sub.includes(text)) {
      setSub([...sub, text]);
    }
  };

  return (
    <div
      className="bg-[#5CA5A5] rounded-md bg-opacity-10 p-2 text-center flex items-center justify-center font-bold text-[#5CA5A5]  h-8 "
      onClick={() => setFunc(text)}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
