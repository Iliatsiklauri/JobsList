type propType = {
  setSub: React.Dispatch<React.SetStateAction<string[]>>;
  sub: string[];
  deleteDiv: (el: string) => void;
};

const Container = ({ setSub, sub, deleteDiv }: propType) => {
  return (
    <div className="rounded-md w-[90%] max-w-[1110px] flex bg-white shadow-lg p-6 items-center justify-between flex-wrap z-20  absolute  top-24">
      <div className="flex h-full flex-wrap gap-5 w-[85%]">
        {sub.map((el: string, key: number) => (
          <div
            key={key}
            className="flex h-8 bg-[#EFFAFA] items-center justify-between gap-2 rounded-lg btn"
          >
            <p className="font-bold text-[#5CA5A5] ml-2">{el}</p>
            <div
              className="h-8 w-8 flex items-center justify-center btn1 cursor-pointer"
              onClick={() => deleteDiv(el)}
            >
              <img src="images\icon-remove.svg" alt="" />
            </div>
          </div>
        ))}
      </div>
      <div
        className="cursor-pointer text-[#7C8F8F] font-bold hover:text-[#5CA5A5]"
        onClick={() => setSub([])}
      >
        clear
      </div>
    </div>
  );
};

export default Container;
