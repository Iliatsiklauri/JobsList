import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Child from './components/Child';
export type propType = {
  company: string;
  contract: string;
  featured: boolean;
  id?: number;
  languages: string[];
  level: string;
  location: string;
  logo?: string;
  new: boolean;
  position: string;
  postedAt: string;
  role?: string;
  tools: string[];
};

function App() {
  const [data, setData] = useState<propType[] | null>(null);
  useEffect(() => {
    axios.get('data.json').then((data) => setData(data.data));
    console.log(data);
  }, []);
  return (
    <div className="relative flex justify-center bg-[#EFFAFA]">
      <img
        src="images\bg-header-mobile.svg"
        alt=""
        className="absolute top-0 bg-[#5CA5A5] w-full h-[156px]"
      />
      <div className="mt-44 w-full gap-10 flex flex-col items-center">
        {data?.map((el: propType, key: number) => (
          <Child
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
            key={key}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
