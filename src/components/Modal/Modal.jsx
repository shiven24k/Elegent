import React from "react";
import ex from "../Assets/Vector.png";

function Modal({closeModal}){ 

   return<>
     
    <div className=" flex flex-col justify-between items-center w-[413px] h-[1024px] absolute z-10 px-6 py-10 top-0 right-0 bg-white">
    <div className="flex flex-col justify-start items-start self-stretch   gap-4">
      <div className="flex justify-start items-center self-stretch   relative gap-4">
        <p className="flex-grow w-[325px] text-[28px] font-medium text-left text-[#121212]">Cart</p>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch   gap-6">
        <div className="flex justify-between items-center   w-[376px] py-6 border-t-0 border-r-0 border-b border-l-0 border-[#e8ecef]">
          <div className="flex flex-col justify-start items-start   w-[376px] gap-2.5">
            <div className="flex justify-start items-center   w-[316px] relative gap-4">
              <div className="  w-20 h-24 relative overflow-hidden">
                <img className="w-20 h-24 absolute left-[-1px] top-[-1px]" src="paste-image-2.png" />
              </div>
              <div className="flex justify-between items-start self-stretch   w-[267px]">
                <div className="flex flex-col justify-center items-start   w-[200px] relative gap-2">
                  <p className="  w-[210px] h-[22px] text-sm font-semibold text-left text-[#141718]">
                    Tray Table
                  </p>
                  <p className="  text-xs text-left text-[#6c7275]">
                    Color: Black
                  </p>
                  <div className="flex flex-col justify-center items-center   h-8 w-20 relative gap-2.5 px-2 py-3 rounded border border-[#6c7275]">
                    <div className="self-stretch   h-5 relative">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 absolute left-0 top-0.5"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M3.22925 8H12.5626"
                          stroke="#121212"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="absolute left-7 top-0 text-xs font-semibold text-center text-[#121212]">
                        2
                      </p>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 absolute left-12 top-0.5"
                        preserveAspectRatio="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.37492 3.33334C8.37492 3.12624 8.20702 2.95834 7.99992 2.95834C7.79281 2.95834 7.62492 3.12624 7.62492 3.33334V7.62501H3.33325C3.12615 7.62501 2.95825 7.7929 2.95825 8.00001C2.95825 8.20712 3.12615 8.37501 3.33325 8.37501H7.62492V12.6667C7.62492 12.8738 7.79281 13.0417 7.99992 13.0417C8.20702 13.0417 8.37492 12.8738 8.37492 12.6667V8.37501H12.6666C12.8737 8.37501 13.0416 8.20712 13.0416 8.00001C13.0416 7.7929 12.8737 7.62501 12.6666 7.62501H8.37492V3.33334Z"
                          fill="#121212"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end   relative gap-2">
                  <p className="  text-sm font-semibold text-right text-[#121212]">
                    $19.19
                  </p>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="  w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                      fill="#6C7275"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center   w-[376px] py-6 border-t-0 border-r-0 border-b border-l-0 border-[#e8ecef]">
          <div className="flex flex-col justify-start items-start   w-[376px] gap-2.5">
            <div className="flex justify-start items-center   w-[316px] relative gap-4">
              <div className="  w-20 h-24 relative overflow-hidden">
                <img className="w-20 h-24 absolute left-[-1px] top-[-1px]" src="paste-image.png" />
              </div>
              <div className="flex justify-between items-start self-stretch   w-[267px]">
                <div className="flex flex-col justify-center items-start   w-[200px] relative gap-2">
                  <p className="  w-[210px] h-[22px] text-sm font-semibold text-left text-[#141718]">
                    Tray Table
                  </p>
                  <p className="  text-xs text-left text-[#6c7275]">
                    Color: Red
                  </p>
                  <div className="flex flex-col justify-center items-center   h-8 w-20 relative gap-2.5 px-2 py-3 rounded border border-[#6c7275]">
                    <div className="self-stretch   h-5 relative">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 absolute left-0 top-0.5"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M3.22925 8H12.5626"
                          stroke="#121212"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="absolute left-7 top-0 text-xs font-semibold text-center text-[#121212]">
                        2
                      </p>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 absolute left-12 top-0.5"
                        preserveAspectRatio="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.37492 3.33333C8.37492 3.12622 8.20702 2.95833 7.99992 2.95833C7.79281 2.95833 7.62492 3.12622 7.62492 3.33333V7.625H3.33325C3.12615 7.625 2.95825 7.79289 2.95825 8C2.95825 8.2071 3.12615 8.375 3.33325 8.375H7.62492V12.6667C7.62492 12.8738 7.79281 13.0417 7.99992 13.0417C8.20702 13.0417 8.37492 12.8738 8.37492 12.6667V8.375H12.6666C12.8737 8.375 13.0416 8.2071 13.0416 8C13.0416 7.79289 12.8737 7.625 12.6666 7.625H8.37492V3.33333Z"
                          fill="#121212"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end   relative gap-2">
                  <p className="  text-sm font-semibold text-right text-[#121212]">
                    $19.19
                  </p>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="  w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                      fill="#6C7275"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center   w-[376px] py-6 border-t-0 border-r-0 border-b border-l-0 border-[#e8ecef]">
          <div className="flex flex-col justify-start items-start   w-[376px] gap-2.5">
            <div className="flex justify-start items-center   w-[316px] relative gap-4">
              <div className="  w-20 h-24 relative overflow-hidden">
                <img className="w-20 h-24 absolute left-[-1px] top-[-1px]" src="paste-image-3.png" />
              </div>
              <div className="flex justify-between items-start self-stretch   w-[267px]">
                <div className="flex flex-col justify-center items-start   w-[200px] relative gap-2">
                  <p className="  w-[210px] h-[22px] text-sm font-semibold text-left text-[#141718]">
                    Table lamp
                  </p>
                  <p className="  text-xs text-left text-[#6c7275]">
                    Color: gold
                  </p>
                  <div className="flex flex-col justify-center items-center   h-8 w-20 relative gap-2.5 px-2 py-3 rounded border border-[#6c7275]">
                    <div className="self-stretch   h-5 relative">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 absolute left-0 top-0.5"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M3.22925 8H12.5626"
                          stroke="#121212"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="absolute left-7 top-0 text-xs font-semibold text-center text-[#121212]">
                        2
                      </p>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 absolute left-12 top-0.5"
                        preserveAspectRatio="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.37492 3.33333C8.37492 3.12623 8.20702 2.95833 7.99992 2.95833C7.79281 2.95833 7.62492 3.12623 7.62492 3.33333V7.625H3.33325C3.12615 7.625 2.95825 7.79289 2.95825 8C2.95825 8.20711 3.12615 8.375 3.33325 8.375H7.62492V12.6667C7.62492 12.8738 7.79281 13.0417 7.99992 13.0417C8.20702 13.0417 8.37492 12.8738 8.37492 12.6667V8.375H12.6666C12.8737 8.375 13.0416 8.20711 13.0416 8C13.0416 7.79289 12.8737 7.625 12.6666 7.625H8.37492V3.33333Z"
                          fill="#121212"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end   relative gap-2">
                  <p className="  text-sm font-semibold text-right text-[#121212]">
                    $39.00
                  </p>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="  w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                      fill="#6C7275"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-center self-stretch   gap-4">
      <div className="flex flex-col justify-start items-start self-stretch  ">
        <div className="flex flex-col justify-start items-start self-stretch   py-[13px] border-t-0 border-r-0 border-b border-l-0 border-[#e8ecef]">
          <div className="flex justify-start items-start self-stretch   relative gap-40">
            <div className="flex-grow h-[26px] relative">
              <div className="flex justify-start items-center absolute left-0 top-0 gap-2">
                <p className="  text-base text-left text-[#141718]">
                  Subtotal
                </p>
              </div>
              <p className="absolute left-[308px] top-0 text-base font-semibold text-right text-[#141718]">
                $99.00
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch   py-[13px]">
          <div className="flex justify-start items-start self-stretch   relative gap-40">
            <div className="flex-grow h-[26px] relative">
              <div className="flex justify-start items-center absolute left-0 top-[-1px] gap-2">
                <p className="  text-xl font-medium text-left text-[#141718]">
                  Total
                </p>
              </div>
              <p className="absolute left-[285px] top-0 text-xl font-medium text-right text-[#141718]">
                $234.00
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center self-stretch   gap-4">
        <div className="flex justify-center items-center self-stretch   relative gap-1 px-[26px] py-2.5 rounded-md bg-[#141718]">
          <p className="  text-lg font-medium text-center text-white">
            Checkout
          </p>
        </div>
        <div className="flex justify-start items-center   relative gap-1 border-t-0 border-r-0 border-b border-l-0 border-[#121212]">
          <p className="  text-sm font-semibold text-left text-[#121212]">
            View Cart
          </p>
        </div>
      </div>
    </div>
    
    <button onClick={()=>{closeModal(false)}} className="h-[38px] w-[38px] bg-black rounded-full absolute left-[349px] top-9 p-2 flex items-center justify-center">
  <img className="w-4" src={ex}/>
    
    </button>
  </div>

  
  </>
}
export default Modal;