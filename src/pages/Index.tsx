import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// export const useOnClickOutside = (ref: unknown, handler: unknown) => {
//   useEffect(
//     () => {
//       const listener = (event: { target: any }) => {
//         // Do nothing if clicking ref's element or descendent elements
//         if (!ref.current || ref.current.contains(event.target)) {
//           return;
//         }
//         handler(event);
//       };
//       document.addEventListener("mousedown", listener);
//       document.addEventListener("touchstart", listener);
//       return () => {
//         document.removeEventListener("mousedown", listener);
//         document.removeEventListener("touchstart", listener);
//       };
//     },
//     [ref, handler],
//   );
// };

const Index = () => {
  const ref = useRef();

  const useOnClickOutside = (ref: any, handler: any) => {
    useEffect(
      () => {
        const listener = (event: { target: any }) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler],
    );
  };
  
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmountReg] = useState("");
  const [usermail, setUsermailReg] = useState("");

  const setContext = () => {
    const GlobalUserMail = React.createContext(usermail);
    const GlobalAmount = React.createContext(amount);
  }

  const setFinaldata = () => {
    if (usermail && amount) {
      setShowModal(false);
      setContext();
      redirect();
    }
  };
  const redirect = () => {
    window.location.href = '/Sandbox'
  }
  const alldisable = () => {
    setShowModal(false);
  };
  // const validatemailtype = (e: any) => {
  //   if(e.target.value.match("[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}")!=null) {
  //       setUsermailReg(e.target.value);
  //   }
  // }
  useOnClickOutside(ref, () => alldisable());
  return (
    <div className="px-20 xl:px-60">
      <nav className="flex items-center text-[#737373] font-medium py-4 px-4 md:px-8">
        <a className="nav_logo" href="/">
          <svg
            width="139"
            height="38"
            viewBox="0 0 139 47"
            fill="#fb534a"
            className=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.3173 11.8141C3.65889 11.8141 4.63459 10.7978 4.63459 9.40054C4.63459 8.00325 3.65889 6.98703 2.3173 6.98703C1.09767 6.86 0 8.00325 0 9.27352C0 10.6708 1.09767 11.8141 2.3173 11.8141Z"
              fill="#fb534a"
            ></path>
            <path
              d="M5.1219 28.3273C4.39012 28.3273 3.90227 27.9462 3.90227 27.1841V16.0057C4.02423 15.6246 3.65834 15.2435 3.29245 15.2435H1.21908C0.853194 15.2435 0.487305 15.6246 0.487305 16.0057V27.5652C0.487305 30.4868 1.95086 31.8841 4.02423 31.8841C4.51208 31.8841 4.87797 31.8841 5.24386 31.757C5.48779 31.63 5.60975 31.503 5.60975 31.2489V28.9624C5.73171 28.5814 5.48779 28.3273 5.1219 28.3273Z"
              fill="#fb534a"
            ></path>
            <path
              d="M30.1249 15.2435H27.9296C27.5637 15.2435 27.3197 15.4976 27.1978 15.7516L23.9048 26.676L20.4898 15.8787C20.3679 15.6246 20.1239 15.3706 19.758 15.3706H18.2945C17.9286 15.3706 17.6847 15.6246 17.5627 15.8787L14.1478 26.676L10.8548 15.8787C10.8548 15.4976 10.4889 15.2435 10.2449 15.2435H8.04961C7.56175 15.2435 7.19586 15.7516 7.31783 16.2597L12.1963 31.2489C12.3183 31.503 12.5622 31.757 12.9281 31.757H15.1235C15.4893 31.757 15.7333 31.503 15.8552 31.2489L19.1482 21.0868L22.4412 31.2489C22.5632 31.503 22.8071 31.757 23.173 31.757H25.3683C25.7342 31.757 25.9782 31.503 26.1001 31.2489L30.8567 16.2597C30.9786 15.7516 30.6127 15.2435 30.1249 15.2435Z"
              fill="#fb534a"
            ></path>
            <path
              d="M40.8577 14.8616C36.2231 14.8616 32.5642 18.6724 32.5642 23.4994C32.5642 28.3264 36.2231 32.1372 40.8577 32.1372C45.4923 32.1372 49.1512 28.3264 49.1512 23.4994C49.1512 18.6724 45.4923 14.8616 40.8577 14.8616ZM40.8577 28.7075C38.0525 28.7075 36.1011 26.421 36.1011 23.4994C36.1011 20.5778 38.0525 18.2913 40.8577 18.2913C43.6628 18.2913 45.6142 20.5778 45.6142 23.4994C45.6142 26.421 43.5409 28.7075 40.8577 28.7075Z"
              fill="#fb534a"
            ></path>
            <path
              d="M59.7615 18.2913C61.469 18.2913 62.9326 19.1805 63.7863 20.4508C64.0302 20.7048 64.3961 20.8318 64.64 20.7048L66.5914 19.8156C66.8354 19.6886 66.9573 19.4345 66.9573 19.0535C66.9573 18.9264 66.9573 18.7994 66.8354 18.6724C66.8354 18.6724 64.884 14.8616 59.7615 14.8616C55.005 14.8616 51.2241 18.5454 51.2241 23.4994C51.2241 28.4535 54.883 32.1372 59.7615 32.0102C64.64 32.0102 66.7134 28.1994 66.7134 28.1994C66.8354 28.0724 66.8354 27.9454 66.8354 27.8183C66.8354 27.5643 66.7134 27.3102 66.3475 27.0562L64.64 26.294C64.2742 26.167 63.9083 26.167 63.7863 26.5481C62.9326 27.8183 61.591 28.7075 59.8835 28.7075C57.0783 28.7075 55.005 26.294 55.005 23.3724C54.883 20.4508 56.9564 18.2913 59.7615 18.2913Z"
              fill="#fb534a"
            ></path>
            <path
              d="M135.745 0H95.7409C94.2774 0 93.1797 1.14324 93.1797 2.66757V44.3324C93.1797 45.8568 94.2774 47 95.7409 47H135.867C137.33 47 138.306 45.8568 138.306 44.3324V2.66757C138.306 1.14324 137.208 0 135.745 0ZM133.062 41.5378H98.5461V5.46216L133.062 5.58919V41.5378Z"
              fill="#fb534a"
            ></path>
            <path
              d="M120.011 30.105L124.28 31.8833C124.646 32.0104 125.012 31.7563 125.012 31.3752V15.3698C125.012 14.9887 124.646 14.7347 124.28 14.8617L120.011 16.7671C119.889 16.8942 119.767 17.0212 119.767 17.2752V29.5969C119.767 29.8509 119.889 29.9779 120.011 30.105Z"
              fill="#fb534a"
            ></path>
            <path
              d="M107.205 32.0102L111.474 30.2319C111.718 30.1048 111.718 29.9778 111.718 29.7237V17.4021C111.718 17.1481 111.596 17.021 111.474 16.894L107.205 14.9886C106.839 14.8616 106.473 15.1156 106.473 15.4967V31.5021C106.473 31.8832 106.839 32.1373 107.205 32.0102Z"
              fill="#fb534a"
            ></path>
            <path
              d="M86.4717 28.3276C85.7399 28.3276 85.374 27.9465 85.252 27.1844V16.133C85.252 15.752 84.8862 15.3709 84.5203 15.3709H82.5688C82.203 15.3709 81.8371 15.752 81.8371 16.133V16.8952C80.8614 15.752 79.1539 15.1168 77.2025 15.1168C72.5679 15.1168 69.2749 19.0547 69.2749 23.7547C69.2749 28.4547 72.5679 32.3925 77.2025 32.3925C78.91 32.3925 80.6174 32.0114 82.5688 29.852C82.9347 31.2493 84.0324 32.2655 85.374 32.2655C85.8619 32.2655 86.2277 32.2655 86.5936 32.1384C86.8376 32.0114 86.9595 31.8844 86.9595 31.6303V29.3438C87.0815 28.5817 86.8376 28.3276 86.4717 28.3276ZM77.6903 28.8357C74.8852 28.8357 72.8118 26.2952 73.0558 23.1195C73.1777 20.1979 75.7389 17.7844 78.5441 18.2925C80.1296 18.5466 81.1053 19.4357 81.8371 20.452V26.4222C80.9833 27.6925 79.6417 28.7087 77.6903 28.8357Z"
              fill="#fb534a"
            ></path>
          </svg>
        </a>
        <div className="w-full flex">
          <div className="w-7/12">
            <div className="dropdown px-1">
              <div className="flex items-center">
                <span>Products</span>
                <svg
                  data-testid="Chevron"
                  className="ml-2"
                  width="18"
                  height="9"
                  viewBox="0 0 18 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1.96387L8.82518 6.6077L15.5165 1.96387"
                    stroke="#737373"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="dropdown-content w-100">
                <div>Flexi-Loan</div>
                <div>Revenue Based Loan</div>
                <div>iwocaPay</div>
              </div>
            </div>
            <div className="dropdown px-1">
              <div className="flex items-center">
                <span>Resources</span>
                <svg
                  data-testid="Chevron"
                  className="ml-2"
                  width="18"
                  height="9"
                  viewBox="0 0 18 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1.96387L8.82518 6.6077L15.5165 1.96387"
                    stroke="#737373"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="dropdown-content w-100">
                <div>Small business loan</div>
                <div>Finance options</div>
                <div>Finance explained</div>
                <div>Cash flow hub</div>
              </div>
            </div>
            <div className="dropdown px-1">
              <div className="flex items-center">
                <span>News</span>
                <svg
                  data-testid="Chevron"
                  className="ml-2"
                  width="18"
                  height="9"
                  viewBox="0 0 18 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1.96387L8.82518 6.6077L15.5165 1.96387"
                    stroke="#737373"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="dropdown-content w-100">
                <div>Insights</div>
                <div>Press and news</div>
                <div>Customer stories</div>
              </div>
            </div>
            <div className="dropdown px-1">
              <div className="flex items-center">
                <span>About</span>
                <svg
                  data-testid="Chevron"
                  className="ml-2"
                  width="18"
                  height="9"
                  viewBox="0 0 18 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1.96387L8.82518 6.6077L15.5165 1.96387"
                    stroke="#737373"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="dropdown-content w-100">
                <div>About us</div>
                <div>careers</div>
                <div>Inside iwoca</div>
              </div>
            </div>
          </div>
          <div className="w-5/12 flex justify-start">
            <section className="flex items-center">
              <svg
                width="17"
                height="30"
                viewBox="0 0 17 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.40616 0.632992C4.04628 0.483107 3.65913 0.548447 3.32695 0.722636C2.96211 0.994542 2.67751 1.29766 2.5498 1.65765C0.35863 8.0559 0.140431 13.8212 1.87599 18.5622C3.61387 23.3094 7.29653 26.9806 12.7588 29.2753C13.1317 29.3657 13.5401 29.3294 13.8512 29.1721C14.1833 28.9992 14.4977 28.7089 14.6607 28.2794C15.235 26.7774 15.8106 25.2733 16.3843 23.7723C16.5321 23.3468 16.4889 22.9239 16.3553 22.5637C16.2217 22.2035 15.985 21.8769 15.6233 21.7281C14.4315 21.231 13.0269 20.0653 11.8877 19.1451C11.7585 19.0401 11.5761 19.0229 11.4215 19.1013L8.19877 20.7451C6.18894 17.6522 5.51233 15.7662 5.02701 11.9017L8.22969 10.2685C8.39255 10.1849 8.51731 9.99754 8.54302 9.79795C8.77267 8.13056 8.94562 5.85345 9.60731 4.39023C9.74186 3.97479 9.5849 3.48368 9.43859 3.18961C9.2829 2.88245 9.03785 2.57645 8.66868 2.43367C7.24784 1.83344 5.827 1.23322 4.40616 0.632992Z"
                  fill="#FF594B"
                ></path>
              </svg>
              <a
                href="#"
                className="ml-2 text-[#143b6b] text-[18px] font-bold"
                data-ga-id="navbar__phone"
              >
                020 3778 0274
              </a>
            </section>
          </div>
        </div>
      </nav>

      <div className="flex justify-between">
        <div className="pt-12 pb-4 lg:w-6/12 xl:w-6/12">
          <p className="text-[40px] text-[#102f56] font-bold mb-9">
            Apply for a Flexi-Loan today
          </p>
          <p className="font-medium text-[#000000cc] text-[18px] mb-6">
            Straightforward applications and quick decisions - it’s great for
            businesses who weren’t affected by coronavirus or are starting to
            get back on track.
          </p>
          <ul className="font-medium text-[#000000cc] text-[18px]">
            <li className="flex items-center mb-4">
              <div className="mr-4 irems-center">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                    fill="#009967"
                  ></path>
                </svg>
              </div>
              <p>Borrow from £1,000 to £200,000 over 12 months</p>
            </li>
            <li className="flex items-center mb-4">
              <div className="mr-4 irems-center">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                    fill="#009967"
                  ></path>
                </svg>
              </div>
              <p>Repay early with no fees</p>
            </li>
            <li className="flex items-center mb-4">
              <div className="mr-4 irems-center">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                    fill="#009967"
                  ></path>
                </svg>
              </div>
              <p>Decisions in 1 working day</p>
            </li>
            <li className="flex items-center mb-4">
              <div className="mr-4 irems-center">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                    fill="#009967"
                  ></path>
                </svg>
              </div>
              <p>Have help on hand with a dedicated account manager</p>
            </li>
          </ul>
          <div className="mt-10">
            <button
              className="py-2 px-10 rounded-md shadow-2xl hover:shadow-none bg-[#fb534a] text-white font-medium"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Apply for a Flexi-Loan
            </button>
          </div>
        </div>
        <div className="hidden lg:flex mt-10 lg:h-[400px] h-auto xl:w-5/12">
          <img src="./Flexi_loan_Hero.webp" className="rounded-full" />
        </div>
      </div>
      {showModal ? (
        <>
          <div className="static justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000099]">
            <div className="flex relative  rounded-lg w-auto my-6 mx-auto bg-[#143b6b]" ref={ref.current}>
              {/*content*/}
              <button className="absolute top-0 right-0 pt-4 pr-1" onClick={()=>alldisable()} type="button">
                <svg
                  height="20px"
                  width="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.41421 6.18174e-08L12.7279 11.3137L11.3137 12.7279L0 1.41421L1.41421 6.18174e-08Z"
                    fill="white"
                  ></path>
                  <path
                    d="M0 11.3137L11.3137 0L12.7279 1.41421L1.41421 12.7279L0 11.3137Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
              <div className="p-10 border-0 rounded-bl-lg rounded-tl-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="mb-[40px]">
                  <p className="text-[#143b6b] font-bold text-[24px] mb-4">
                    Let’s get started with Flexi-Loan
                  </p>
                  <p className="text-[#143b6b] font-light text-xl mb-5">
                    Applying won’t affect your credit score
                  </p>
                  <div className="flex items-center mb-5">
                    <div className="w-6/12 pr-5">
                      <p className="text-gray-600 text-[16px] font-light">
                        What is your business email address?
                      </p>
                    </div>
                    <div className="w-6/12 pl-5">
                      <input
                        type="email"
                        id="mail"
                        className="form-input bg-white border text-sm rounded-lg focus:ring-black focus:ring-2 outline-none block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:border-black"
                        name="usermail"
                        placeholder="Enter your business email"
                        pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                        value={usermail}
                        onChange={(e) => setUsermailReg(e.target.value)}
                        // onChange={(e) => validatemailtype(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6/12 pr-5">
                      <p className="text-gray-600 text-[16px] font-light">
                        How much would you like?
                      </p>
                    </div>
                    <div className="w-6/12 pl-5">
                      <input
                        type="number"
                        min='0'
                        id="mail"
                        className="form-input bg-white border text-sm rounded-lg focus:ring-black focus:ring-2 outline-none block w-full p-2.5 border-gray-600 placeholder-gray-400 focus:border-black"
                        name="amount"
                        placeholder="Any amount, up to £500,000"
                        value={amount}
                        onChange={(e) => setAmountReg(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex w-6/12 pr-5">
                    <div className="flex items-center h-5">
                      <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                    <div className="ml-2 text-sm">
                      <label htmlFor="helper-checkbox" className="font-medium text-gray-900 dark:text-gray-300">
                        Free shipping via Flowbite
                      </label>
                      <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300" >
                        we’ll email offers and stories from other small businesses.
                      </p>
                    </div>
                  </div>
                  <div className="w-6/12 pl-5">
                    <button className={`w-full bg-[#0c2440] text-white flex justify-center active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`} type="button" onClick={() => setFinaldata()} >
                      Apply for a Flexi-Loan
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5 text-white min-w-[250px]">
                <p className="text-2xl font-bold mt-5 mb-5">What's next?</p>
                <ul>
                  <li className="flex items-center mb-4">
                    <div className="mr-2 irems-center">
                      <svg
                        width="15"
                        height="12"
                        viewBox="0 0 15 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                          fill="#009967"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-xs">Apply in 5 minutes</p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="mr-2 irems-center">
                      <svg
                        width="15"
                        height="12"
                        viewBox="0 0 15 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                          fill="#009967"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-xs">Meet your account manager</p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="mr-2 irems-center">
                      <svg
                        width="15"
                        height="12"
                        viewBox="0 0 15 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 5.62553L5.6254 11.2509L14.5599 2.31646L12.2435 0.00012207L5.6254 6.61824L2.31634 3.30918L0 5.62553Z"
                          fill="#009967"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-xs">Get money in the bank in hours</p>
                  </li>
                </ul>
                <p className="text-center text-sm mt-10">Need help? Call us</p>
                <section className="flex items-center">
                  <svg
                    width="15"
                    height="25"
                    viewBox="0 0 17 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.40616 0.632992C4.04628 0.483107 3.65913 0.548447 3.32695 0.722636C2.96211 0.994542 2.67751 1.29766 2.5498 1.65765C0.35863 8.0559 0.140431 13.8212 1.87599 18.5622C3.61387 23.3094 7.29653 26.9806 12.7588 29.2753C13.1317 29.3657 13.5401 29.3294 13.8512 29.1721C14.1833 28.9992 14.4977 28.7089 14.6607 28.2794C15.235 26.7774 15.8106 25.2733 16.3843 23.7723C16.5321 23.3468 16.4889 22.9239 16.3553 22.5637C16.2217 22.2035 15.985 21.8769 15.6233 21.7281C14.4315 21.231 13.0269 20.0653 11.8877 19.1451C11.7585 19.0401 11.5761 19.0229 11.4215 19.1013L8.19877 20.7451C6.18894 17.6522 5.51233 15.7662 5.02701 11.9017L8.22969 10.2685C8.39255 10.1849 8.51731 9.99754 8.54302 9.79795C8.77267 8.13056 8.94562 5.85345 9.60731 4.39023C9.74186 3.97479 9.5849 3.48368 9.43859 3.18961C9.2829 2.88245 9.03785 2.57645 8.66868 2.43367C7.24784 1.83344 5.827 1.23322 4.40616 0.632992Z"
                      fill="#FF594B"
                    ></path>
                  </svg>
                  <a
                    href="#"
                    className="ml-2 text-white text-[18px] font-bold"
                    data-ga-id="navbar__phone"
                  >
                    020 3778 0274
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Index;
