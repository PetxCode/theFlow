import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../global/GlobalProvider";
import { readOneGoal } from "../../assets/API/API";

const DetailDisplayScreen = () => {
  const { id }: any = useContext(GlobalContext);
  const [data, setData] = useState<any>({});

  const getData = async () => {
    await readOneGoal(id).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="px-4">
      <div>
        <h2 className="text-[15px] font-medium my-10">Goal: {data?.title}</h2>
        <p className="text-[12px] mb-20">Description: {data?.description}</p>
        <p className="font-medium">Status: {data?.status}</p>
      </div>
    </div>
  );
};

export default DetailDisplayScreen;
