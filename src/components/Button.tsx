type prop = {
  text: any;
};

const Button = ({ text }: prop) => {
  return (
    <div
      className="bg-[#5CA5A5] rounded-md bg-opacity-10 p-2 text-center flex items-center justify-center font-bold text-[#5CA5A5]  h-8 "
      onClick={() => console.log(text)}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
