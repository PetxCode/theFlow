import DetailDisplayScreen from "./screen/DetailDispayScreen";
import DisplayScreen from "./screen/DisplayScreen";

const ReadGoalsPage = () => {
  return (
    <div className="grid grid-cols-7 gap-2">
      <div className="col-span-4 bg-slate-50">
        <DisplayScreen />
      </div>
      <div className="col-span-3 bg-slate-50">
        <DetailDisplayScreen />
      </div>
    </div>
  );
};

export default ReadGoalsPage;
