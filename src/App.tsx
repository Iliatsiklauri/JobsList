import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Child from './components/Child';

export type propType = {
  company: string;
  contract: string;
  featured: boolean;
  id: number;
  languages: string[];
  level: string;
  location: string;
  logo?: string;
  new: boolean;
  position: string;
  postedAt: string;
  role?: string;
  tools: string[];
  sub: string[];
  setSub: React.Dispatch<React.SetStateAction<string[]>>;
};

function App() {
  const [data, setData] = useState<propType[] | null>(null);
  const [sub, setSub] = useState<string[]>([]);
  const [ind, setInd] = useState<number | null>(null);

  useEffect(() => {
    axios.get('data.json').then((data) => setData(data.data));
  }, []);
  const deleteDiv = (i: number) => {
    setInd(i);
    console.log(ind);
  };
  return (
    <div className="relative flex justify-center items-center  flex-col gap-14 bg-[#EFFAFA] pt-20">
      <img
        src="images\bg-header-mobile.svg"
        alt=""
        className="absolute  md:hidden top-0 bg-[#5CA5A5] w-full h-[156px] z-10"
      />
      <img
        src="images\bg-header-desktop.svg"
        alt=""
        className="absolute top-0 bg-[#5CA5A5] w-full h-[156px]  hidden md:block z-10"
      />
      {sub.length > 0 ? (
        <div className="rounded-md w-[90%] max-w-[1110px] flex bg-white shadow-lg p-6 items-center justify-between flex-wrap z-20">
          <div className="flex h-full flex-wrap gap-5 w-[85%]">
            {sub.map((el: string, key: number) => (
              <div
                key={key}
                className="flex h-8 bg-[#EFFAFA] items-center justify-between gap-2 rounded-lg btn"
              >
                <p className="">{el}</p>
                <div
                  className="h-8 w-8 flex items-center justify-center btn1"
                  onClick={() => deleteDiv(key)}
                >
                  <img src="images\icon-remove.svg" alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="" onClick={() => setSub([])}>
            clear
          </div>
        </div>
      ) : null}
      <div className={`w-full gap-10 flex flex-col items-center`}>
        {data?.map((el: propType, key: number) => (
          <Child
            sub={sub}
            setSub={setSub}
            company={el.company}
            contract={el.contract}
            featured={el.featured}
            position={el.position}
            location={el.location}
            postedAt={el.postedAt}
            languages={el.languages}
            role={el.role}
            logo={el.logo}
            new={el.new}
            tools={el.tools}
            level={el.level}
            id={el.id}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
