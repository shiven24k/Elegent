import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../Assets/user.png";
import cart from "../Assets/cart.png";
import search from "../Assets/search.png";
import mainimg from "../Assets/mainimg.png";
import Kitchen from "../Assets/Kitchen.png";
import Bedroom from "../Assets/Bedroom.png";
import LivingRoom from "../Assets/LivingRoom.png";
import ticket from "../Assets/ticket.png";
import delivery from "../Assets/delivery.png";
import call from "../Assets/call.png";
import lock from "../Assets/lock.png";
import money from "../Assets/money.png";
import sofa from "../Assets/sofa.png";
import ProductCard from '../ProductCard/ProductCard';
import sofa1 from "../Assets/sofa1.png";
import lamp from "../Assets/lamp.png";
import lamp2 from "../Assets/lamp2.png";
import basket from "../Assets/basket.png";
import bottom from "../Assets/bottom.png";
import instagram from "../Assets/instagram.png";
import facebook from "../Assets/facebook.png";
import youtube from "../Assets/youtube.png";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill,BsArrowRight ,BsHeart,BsStarFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import Modal from "../Modal/Modal";


function Home() {

  const [openModel, setOpenModel] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }; 

  return (
    <>
    
     
      <div className="flex flex-col items-center justify-center relative ">
               
         {/* top bar */}
        <div className="flex flex-wrap w-full h-10 relative items-center justify-center bg-[#f3f5f7]">
          <div className="flex justify-center items-start left-[524px] top-2 gap-3">
            <div className="flex justify-center items-center   relative gap-3">
              <img width={24} height={24} className="  w-6 h-6 relative"  src={ticket}/>
              <p className="  text-sm font-semibold text-center text-[#343839]">
                30% off storewide — Limited time!{" "}
              </p>
            </div>
            <div className="flex justify-center items-center    border-b  border-[#377dff]">
              <div className=" cursor-pointer flex justify-start items-center   relative gap-1">
                <p className="  text-sm font-medium text-left text-[#377dff]">
                  Shop Now
                </p>
                {/* arrow */}
                
                <BsArrowRight className="text-[#377dff]"/>
              </div>
            </div>
          </div>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer w-5 h-5 absolute mr-5 right-0 top-2.5"
            preserveAspectRatio="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.4419 5.44194C15.686 5.19786 15.686 4.80214 15.4419 4.55806C15.1979 4.31398 14.8021 4.31398 14.5581 4.55806L10 9.11612L5.44194 4.55806C5.19786 4.31398 4.80214 4.31398 4.55806 4.55806C4.31398 4.80214 4.31398 5.19786 4.55806 5.44194L9.11612 10L4.55806 14.5581C4.31398 14.8021 4.31398 15.1979 4.55806 15.4419C4.80214 15.686 5.19786 15.686 5.44194 15.4419L10 10.8839L14.5581 15.4419C14.8021 15.686 15.1979 15.686 15.4419 15.4419C15.686 15.1979 15.686 14.8021 15.4419 14.5581L10.8839 10L15.4419 5.44194Z"
              fill="#343839"
            />
          </svg>
        </div>
        {/* Navbar */}
        <div className="flex justify-between items-center flex-wrap space-x-4 md:space-x-10 w-full md:w-[1440px] relative px-4 md:px-40 py-4 bg-white">
      <div>
        <p className="text-2xl font-medium text-center">
          <span className="text-2xl font-medium text-center text-black">
            3legant
          </span>
          <span className="text-2xl font-medium text-center text-[#6c7275]">
            .
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 md:gap-10">
        <div className="cursor-pointer flex justify-start items-center gap-0.5">
          <div className="flex justify-start items-center gap-0.5 border-0 border-[#141718]">
            <div className="flex justify-start items-center relative gap-1">
              <p className="text-sm font-medium text-left text-[#141718]">
                Home
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex justify-start items-center gap-0.5">
          <div className="flex justify-start items-center gap-0.5 border-0 border-[#6c7275]">
            <div className="flex justify-start items-center relative gap-1">
              <p className="text-sm font-medium text-left text-[#6c7275]">
                Shop
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex justify-start items-center gap-0.5">
          <div className="flex justify-start items-center gap-0.5 border-0 border-[#6c7275]">
            <div className="flex justify-start items-center relative gap-1">
              <p className="text-sm font-medium text-left text-[#6c7275]">
                Product
              </p>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex justify-start items-center gap-0.5">
          <div className="flex justify-start items-center gap-0.5 border-0 border-[#6c7275]">
            <div className="flex justify-start items-center relative gap-1">
              <p className="text-sm font-medium text-left text-[#6c7275]">
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative gap-4">
        <button>
        <img className="w-6 h-6 relative" src={search} alt="Search" />
        </button>
        
        <button onClick={() => setOpenModel(true)} className="w-7 h-7 flex justify-center relative">
        <img className="w-7 h-7 relative" src={cart} alt="Cart" />
        <p className="absolute right-[4.5px] top-[1px] text-[7px] font-bold text-center text-white">
          2
        </p>
      </button>

      
        <button className="relative">
          <img
            className=" w-6 h-6 relative"
            src={user}
            alt="User"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              
              <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Log Out
              </a>
            </div>
          )}
        </button>
      </div>
    </div>
        {/* hero section */}
        <div className="flex flex-col justify-start items-center w-full max-w-screen-xl relative gap-8 px-4 md:px-10 lg:px-20 pb-10 bg-white">
  <div className="w-full max-w-screen-lg h-auto md:h-[536px]">
    <div className="w-full h-full relative overflow-hidden">
      <BsArrowLeftCircleFill className="z-10 cursor-pointer absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 text-[#ffffff]" />
      <img className="w-full h-full object-cover" src={mainimg} />
      <BsArrowRightCircleFill className="cursor-pointer absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 text-[#ffffff]" />
    </div>
  </div>

  <div className="flex flex-col md:flex-row justify-start items-center relative gap-6">
    <p className="w-full md:w-[643px] text-4xl md:text-7xl font-medium text-left">
      <span className="text-[#141718]">Simply Unique</span>
      <span className="text-[#6c7275]"> / </span>
      <br />
      <span className="text-[#141718]">Simply Better</span>
      <span className="text-[#6c7275]">.</span>
    </p>
    <div className="flex flex-col justify-start items-start w-full md:w-[453px] relative gap-4">
      <p className="w-full text-base text-left">
        <span className="font-semibold text-[#343839]">3legant </span>
        <span className="text-[#6c7275]">is a gift &amp; decorations store based in HCMC, Vietnam. Est since 2019.</span>
      </p>
    </div>
  </div>

  <div className="flex flex-col md:flex-row justify-center items-start w-full relative gap-6 px-4 md:px-10 lg:px-20 bg-white">
    {/* living room */}
    <div className="w-full md:w-[548px] h-auto md:h-[664px] relative">
      <div className="w-full h-full relative overflow-hidden">
        <img className="w-full h-full object-cover" src={LivingRoom} />
      </div>
      <div className="flex flex-col justify-start items-start absolute left-4 md:left-12 top-4 md:top-12 gap-3">
        <div className="flex flex-col justify-start items-start w-full md:w-[360px] relative gap-3">
          <p className="w-full text-2xl md:text-[34px] font-medium text-left text-[#141718]">Living Room</p>
        </div>
        <div className="flex justify-start items-center relative gap-1 border-t-0 border-r-0 border-b border-l-0 border-[#141718]">
          <div className="flex justify-start items-center relative gap-1">
            <p className="cursor-pointer text-base font-medium text-left text-[#141718]">Shop Now</p>
          </div>
          <BsArrowRight />
        </div>
      </div>
    </div>
    {/* bedroom */}
    <div className="flex flex-col justify-start items-start h-auto md:h-[662px] w-full md:w-[548px] relative gap-6">
      <div className="w-full h-auto md:h-[319px] relative">
        <div className="w-full h-full relative overflow-hidden">
          <img className="w-full h-full object-cover" src={Bedroom} />
        </div>
        <div className="flex flex-col justify-start items-start w-full md:w-[420px] absolute left-4 md:left-8 top-4 md:top-[201px] gap-3">
          <p className="w-full text-2xl md:text-[34px] font-medium text-left text-[#141718]">Bedroom</p>
          <div className="flex justify-start items-center relative gap-1 border-t-0 border-r-0 border-b border-l-0 border-[#141718]">
            <div className="flex justify-start items-center relative gap-1">
              <p className="cursor-pointer text-base font-medium text-left text-[#141718]">Shop Now</p>
            </div>
            <BsArrowRight />
          </div>
        </div>
      </div>
      <div className="w-full h-auto md:h-[319px] relative">
        <div className="w-full h-full relative overflow-hidden">
          <img className="w-full h-full object-cover" src={Kitchen} />
        </div>
        <div className="flex flex-col justify-start items-start w-full md:w-[420px] absolute left-4 md:left-8 top-4 md:top-[201px] gap-3">
          <p className="w-full text-2xl md:text-[34px] font-medium text-left text-[#141718]">Kitchen</p>
          <div className="flex justify-start items-center relative gap-1 border-t-0 border-r-0 border-b border-l-0 border-[#141718]">
            <div className="flex justify-start items-center relative gap-1">
              <p className="cursor-pointer text-base font-medium text-left text-[#141718]">Shop Now</p>
            </div>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        {/* Products Page*/}
        <div className="flex flex-col justify-start items-start w-[1440px] relative gap-12 pl-40 pt-12 bg-white">
  <div className="flex justify-between items-end w-[1120px] relative">
    <p className="text-[40px] font-medium text-left text-black">
      <span className="text-[40px] font-medium text-left text-black">
        New{" "}
      </span>
      <br />
      <span className="text-[40px] font-medium text-left text-black">
        Arrivals
      </span>
    </p>
    <div className="flex justify-start items-center relative gap-1 border-t-0 border-r-0 border-b border-l-0 border-[#141718]">
      <div className="cursor-pointer flex justify-start items-center relative gap-1">
        <p className="text-base font-medium text-left text-[#141718]">
          More Products
        </p>
      </div>
      <BsArrowRight />
    </div>
  </div>
    {/* products */}
    
    <div className="scroll-container flex justify-start items-start gap-6 overflow-x-scroll w-full">
  <div className="flex-shrink-0 w-64">
    <ProductCard
      imageSrc={sofa1}
      productName="Loveseat Sofa"
      price="199.00"
      originalPrice="400.00"
      stars={3.5}
      isNew={true}
      discount="-50%"
    />
  </div>
  <div className="flex-shrink-0 w-64">
    <ProductCard
      imageSrc={lamp2}
      productName="Table Lamp"
      price="24.99"
      originalPrice="50.00"
      stars={3.5}
      isNew={true}
      discount="-25%"
    />
  </div>
  <div className="flex-shrink-0 w-64">
    <ProductCard
      imageSrc={lamp}
      productName="Beige Table Lamp"
      price="24.99"
      originalPrice="40.00"
      stars={3.5}
      isNew={true}
      discount="-50%"
    />
  </div>
  <div className="flex-shrink-0 w-64">
    <ProductCard
      imageSrc={basket}
      productName="Bamboo basket"
      price="24.99"
      originalPrice="70.00"
      stars={3.5}
      isNew={true}
      discount="-50%"
    />
  </div>
  <div className="flex-shrink-0 w-64">
    <ProductCard
      imageSrc={sofa1}
      productName="Loveseat Sofa"
      price="199.00"
      originalPrice="400.00"
      stars={3.5}
      isNew={true}
      discount="-50%"
    />
  </div>
  <div className="flex-shrink-0 w-64">
    <ProductCard
      imageSrc={sofa1}
      productName="Loveseat Sofa"
      price="199.00"
      originalPrice="400.00"
      stars={3.5}
      isNew={true}
      discount="-50%"
    />
  </div>
  <div className="flex-shrink-0 w-64">
    <ProductCard
      imageSrc={sofa1}
      productName="Loveseat Sofa"
      price="199.00"
      originalPrice="400.00"
      stars={3.5}
      isNew={true}
      discount="-50%"
    />
  </div>
</div>

 
</div>

   {/* features */}
   <div className="flex flex-wrap justify-start items-start w-full gap-6 px-4 sm:px-10 md:px-20 lg:px-40 py-12 bg-white">
  <div className="flex flex-col justify-start items-start flex-grow relative gap-4 px-8 py-12 bg-[#f3f5f7] w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
    <img src={delivery} className="w-12 h-12" />
    <div className="flex flex-col justify-start items-start relative gap-2">
      <p className="text-xl font-medium text-left text-[#141718]">Free Shipping</p>
      <p className="w-[198px] text-sm text-left text-[#6c7275]">Order above $200</p>
    </div>
  </div>
  <div className="flex flex-col justify-start items-start flex-grow relative gap-4 px-8 py-12 bg-[#f3f5f7] w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
    <img src={money} className="w-12 h-12 relative" />
    <div className="flex flex-col justify-start items-start w-[198px] relative gap-2">
      <p className="text-xl font-medium text-left text-[#141718]">Money-back</p>
      <p className="w-[198px] text-sm text-left text-[#6c7275]">30 days guarantee</p>
    </div>
  </div>
  <div className="flex flex-col justify-start items-start flex-grow relative gap-4 px-8 py-12 bg-[#f3f5f7] w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
    <img src={lock} className="w-12 h-12 relative" />
    <div className="flex flex-col justify-start items-start relative gap-2">
      <p className="text-xl font-medium text-left text-[#141718]">Secure Payments</p>
      <p className="w-[198px] text-sm text-left text-[#6c7275]">Secured by Stripe</p>
    </div>
  </div>
  <div className="flex flex-col justify-start items-start flex-grow relative gap-4 px-8 py-12 bg-[#f3f5f7] w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
    <img src={call} className="w-12 h-12 relative" />
    <div className="flex flex-col justify-start items-start relative gap-2">
      <p className="text-xl font-medium text-left text-[#141718]">24/7 Support</p>
      <p className="w-[198px] text-sm text-left text-[#6c7275]">Phone and Email support</p>
    </div>
  </div>
</div>

{/* hero section */}
<div className="flex justify-center items-center w-full h-[532px] relative">
  <div className="flex flex-col md:flex-row w-full h-[532px]">
    <div className="flex-grow h-[532px] overflow-hidden">
      <img
        src={sofa}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col justify-center items-start flex-grow h-[532px] gap-6 p-4 md:pl-[72px] md:pr-40 bg-[#f3f5f7]">
      <div className="flex flex-col justify-start items-start relative gap-4">
        <p className="w-full text-base font-bold text-left uppercase text-[#377dff] md:w-[452px]">
          SALE UP TO 35% OFF
        </p>
        <p className="w-full text-[24px] md:text-[40px] font-medium text-left text-[#141718] md:w-[452px]">
          <span>
            HUNDREDS of{" "}
          </span>
          <br />
          <span>
            New lower prices!
          </span>
        </p>
        <p className="w-full text-lg md:text-xl text-left text-[#141718] md:w-[452px]">
          It’s more affordable than ever to give every room in your home a stylish makeover
        </p>
      </div>
      <div className="flex justify-start items-center relative gap-1 border-t-0 border-r-0 border-b border-l-0 border-[#141718]">
        <div className="flex justify-start items-center relative gap-1">
          <p className="text-base font-medium text-left text-[#141718]">
            Shop Now
          </p>
        </div>
        <BsArrowRight />
      </div>
    </div>
  </div>
</div>
{/* Join us section*/}
<div className="w-full h-[360px] relative">
  <div className="w-full h-full">
    <div className="w-full h-full absolute left-0 top-0 overflow-hidden">
      <img className="w-full h-full absolute left-0 top-0" src={bottom} />
    </div>
    <div className="flex flex-col justify-center items-center absolute left-1/2 transform -translate-x-1/2 top-[101px] gap-8">
      <div className="flex flex-col justify-start items-center relative gap-2">
        <p className="w-full max-w-[456px] text-[40px] font-medium text-center text-[#141718]">
          Join Our Newsletter
        </p>
        <p className="w-full max-w-[540px] text-lg text-center text-[#141718]">
          Sign up for deals, new products and promotions
        </p>
      </div>
      <div className="flex flex-col justify-center items-start h-[52px] w-full max-w-[488px] gap-2">
        <div className="flex justify-start items-center w-full h-[52px] gap-2 border-b border-[#6c7275]/50">
          <div className="flex justify-start items-center flex-grow relative gap-2">
          
          <CiMail  className="w-6 h-6 relative"/>

            <input placeholder="Email address" type="text" className="custom-input flex-grow w-full max-w-[396px] text-base font-medium placeholder-[#6c7275] border-none bg-transparent">
              
            </input>
          </div>
          <div className="flex justify-start items-center gap-0.5 border-0 border-[#141718]">
            <div className="flex justify-start items-center relative gap-1">
              <button className="cursor-pointer text-base font-medium text-left text-[#6c7275]">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* footer */}
<div className="flex flex-col justify-start items-start relative gap-12 px-4 sm:px-10 md:px-20 lg:px-40 pt-10 pb-8 bg-[#141718] w-full">
  <div className="w-full h-8 relative items-center">
  <div className="flex justify-between items-center w-full absolute left-0 top-0">


  <div className="flex justify-center items-center w-full md:w-auto relative gap-4 md:gap-8">
    <div className="w-[105px] h-6 relative flex justify-center items-center">
      <p className="text-2xl font-medium text-center">
        <span className="text-2xl font-medium text-center text-white">3legant</span>
        <span className="text-2xl font-medium text-center text-[#6c7275]">.</span>
      </p>
    </div>
    <div className="w-px h-7 bg-[#6c7275]" />
    <p className="text-sm text-left text-[#e8ecef] hidden md:block">
      Gift &amp; Decoration Store
    </p>
  </div>

  <div className="flex justify-start items-start relative gap-4 md:gap-10">
    <a href="" className="text-sm text-left text-[#fefefe]">Home</a>
    <a href="" className="text-sm text-left text-[#fefefe]">Shop</a>
    <a href="" className="text-sm text-left text-[#fefefe]">Product</a>
    <a href="" className="text-sm text-left text-[#fefefe]">Blog</a>
    <a href="" className="text-sm text-left text-[#fefefe]">Contact Us</a>
  </div>
</div>
  </div>
  <div className="flex flex-col md:flex-row justify-between items-start w-full py-4 border-t-[0.5px] border-[#6c7275]">
    <div className="flex justify-start items-start relative gap-4 md:gap-7">
      <p className="text-xs text-left text-[#e8ecef]">
        Copyright © 2023 3legant. All rights reserved
      </p>
      <p className="cursor-pointer text-xs font-semibold text-left text-[#fefefe]">
        Privacy Policy
      </p>
      <p className="cursor-pointer text-xs font-semibold text-left text-[#fefefe]">
        Terms of Use
      </p>
    </div>
    <div className="flex justify-start items-start relative gap-4 md:gap-6 mt-4 md:mt-0">
      <img src={instagram} className="cursor-pointer w-6 h-6 relative" />
      <img src={facebook} className="cursor-pointer w-6 h-6 relative" />
      <img src={youtube} className="cursor-pointer w-6 h-6 relative" />
    </div>
  </div>
</div>
{openModel && <Modal className="z-10" closeModal={setOpenModel}/>}   
      </div>
    </>
  );
}
export default Home;
