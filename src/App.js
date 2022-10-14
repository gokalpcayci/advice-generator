import DividerDesktop from "./UI/DividerDesktop";
import DividerMobile from "./UI/DividerMobile";
import Icon from "./UI/Icon";
import axios from "axios";
import { useState, useEffect } from "react";
const url = "https://api.adviceslip.com/advice";
function App() {
  const [state, setState] = useState({ id: null, advice: null });

  const fetchData = async () => {
    const data = await axios.get(url);
    const response = data.data.slip;
    setState(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex  items-center justify-center min-h-screen max-w-7xl min-w-full   ">
      {/* Card component */}
      <section className="container mx-auto w-full sm:w-auto   relative  bg-darkGrayishBlue p-8 sm:py-6 shadow-xl  rounded-lg">
        <div className="  flex flex-col sm:space-y-4 space-y-6 items-center justify-center ">
          <h3 className="text-neonGreen sm:text-[0.625rem] text-[0.8rem] mt-4 sm:mt-0 font-sans tracking-[0.3rem]  uppercase">
            advice #{state.id}
          </h3>
          <p className="text-lightCyan  text-2xl  font-bold  text-center  font-sans sm:max-w-sm">
            {/* "It is easy to sit up and take notice, what's difficult is getting
            up and taking action." */}
            {state.advice}
          </p>
          <div className=" pb-8  flex items-center justify-center sm:w-full    ">
            <div className="xl:hidden block ">
              <DividerMobile />
            </div>
            <div className="hidden  xl:block">
              <DividerDesktop />
            </div>
          </div>
          <button
            onClick={fetchData}
            className="absolute  transform duration-200 hover:shadow-[0_0_10px_10px_rgb(82,255,168,.5)] btn-shadow  p-4  -bottom-8  rounded-full bg-neonGreen   "
          >
            <Icon />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
