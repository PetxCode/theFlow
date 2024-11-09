import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { createGoal } from "../assets/API/API";

const CreateGoalPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  const handleSubmit = () => {
    setLoading(true);

    createGoal({ title, duration, description })
      .then((res) => {
        if (res.status === 201) {
          alert("Done");
        } else {
          alert("fail");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="w-[600px] border rounded-md min-h-[200px] p-4">
        <p className="uppercase font-semibold mb-10">
          Create A Gaol to Achieve
        </p>

        <div className="flex flex-col mb-5">
          <label className="text-[14px] font-semibold">Goal Title</label>
          <input
            type="text"
            className="border border-gray-300 py-3 px-2 rounded-md outline-none"
            placeholder="Enter your goal Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label className="text-[14px] font-semibold">Goal Duration</label>
          <input
            type="text"
            className="border border-gray-300 py-3 px-2 rounded-md outline-none"
            placeholder="Enter your goal Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-5">
          <label className="text-[14px] font-semibold">Goal Description</label>
          <textarea
            className="resize-none h-[150px] border border-gray-300 py-3 px-2 rounded-md outline-none"
            placeholder="Enter your Goal Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          className="bg-neutral-950 hover:bg-neutral-800 transition-all duration-300 text-white px-10 py-3 uppercase rounded-md"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? (
            <div className="flex gap-2 items-center">
              <FaSpinner className="animate-spin" />
              <span>Processing</span>
            </div>
          ) : (
            "Submit Goal"
          )}
        </button>
      </div>
    </div>
  );
};

export default CreateGoalPage;
