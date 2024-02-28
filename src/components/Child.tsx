import { propType } from '../App';
import Button from './Button';

const Child = (props: propType) => {
  return (
    <div className="w-[90%] max-w-[500px] h-[280px] rounded-md  bg-white flex flex-col items-start  justify-center shadow-md relative pl-6 gap-3">
      <img
        src={`${props.logo}`}
        alt=""
        className="absolute top-[-24px] left-6 w-12 h-12"
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
      <div className="w-[90%] h-[1px] bg-[#B7C4C4]"></div>
      <div className="w-[90%] h-[80px] flex gap-4 flex-wrap">
        {props.languages.map((el, key) => (
          <Button text={el} key={key} />
        ))}
        <Button text={props.level} />
        <Button text={props.role} />
        {props.tools.length !== 0
          ? props.tools.map((el, key) => <Button text={el} key={key} />)
          : null}
      </div>
    </div>
  );
};

export default Child;
