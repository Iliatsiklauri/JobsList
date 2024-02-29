import { propType } from '../App';
import Button from './Button';

const Child = (props: propType) => {
  return (
    <div className="w-[90%] max-w-[1110px] h-[280px] md:h-[152px] rounded-md  bg-white flex flex-col items-start  justify-center shadow-2xl relative pl-6 gap-3 md:flex-row md:items-center z-20">
      <img
        src={`${props.logo}`}
        alt=""
        className="absolute top-[-24px] left-6 w-12 h-12 md:w-24 md:h-24 md:relative md:left-auto md:top-auto"
      />
      <div className="flex items-start justify-center flex-col gap-3 w-full">
        <div className="flex gap-8">
          <h1 className="text-[#5CA5A5] jora text-sm font-bold">{props.company}</h1>
          <div className="flex gap-2">
            {props.new ? (
              <h1 className="bg-[#5CA5A5] rounded-2xl text-white w-[52px] text-center h-6">
                NEW
              </h1>
            ) : null}
            {props.featured ? (
              <h1 className="bg-[#2B3939] text-white rounded-2xl w-[87px] text-center h-6">
                Featured
              </h1>
            ) : null}
          </div>
        </div>
        <h1 className="text-[#2B3939] text-base leading-6 font-bold">{props.position}</h1>
        <div className="flex items-center justify-center gap-2 font-medium leading-6 text-base text-[#7C8F8F]">
          <h1>{props.postedAt}</h1>
          <div className="w-1 h-1 rounded-full bg-[#B7C4C4]"></div>
          <h1>{props.contract}</h1>
          <div className="w-1 h-1 rounded-full bg-[#B7C4C4]"></div>
          <h1>{props.location}</h1>
        </div>
      </div>
      <div className="w-[90%] h-[1px] bg-[#B7C4C4] md:hidden"></div>
      <div className="w-[90%] h-[80px] flex gap-4 flex-wrap md:w-[140%] md:justify-end md:items-center md:mr-5">
        {props.languages.map((el, key) => (
          <Button text={el} key={key} sub={props.sub} setSub={props.setSub} />
        ))}
        <Button text={props.level} sub={props.sub} setSub={props.setSub} />
        <Button text={props.role} sub={props.sub} setSub={props.setSub} />
        {props.tools.length !== 0
          ? props.tools.map((el, key) => (
              <Button text={el} key={key} sub={props.sub} setSub={props.setSub} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Child;
