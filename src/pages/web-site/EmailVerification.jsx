import { FaArrowCircleRight } from "react-icons/fa";
import { semicircle } from "../../assets";
import { circle1 } from "../../assets";
import { circle2 } from "../../assets";
import { envelope } from "../../assets";
import { Link } from "react-router-dom";

const EmailVerification = ({ isOpen, onClose }) => {
  return (
    <div className="bg-blueBg h-screen relative">
      <div className="px-7 py-10 w-1/3">
        <h1 className="font-semibold font-itim text-[#474BCA] text-2xl tracking-wider lgss:ml-24">
          SchoolBase
        </h1>
      </div>
      <h1 className="text-red-600 cursor-pointer" onClick={() => { onClose(); }}>Close</h1>
      <div className="">
        <img className="absolute top-40" src={semicircle} alt="" />
      </div>
      <div className="font-manrope text-center py-24 text-xs bg-white border-black m-auto w-3/4 rounded-3xl shadow-2xl lgss:w-3/5">
        <p className="font-bold text-lg lgss:text-3xl">
          An email has been sent to you
        </p>
        <p className="mt-3 font-medium lgss:font-semibold">
          A confirmation email has been sent to your{" "}
        </p>
        <p className="mb-3 lgss:font-semibold lgss:mb-5">
          email address, (abimbolawilliams@gmail.com).
        </p>
        <img
          className="m-auto lgss:w-16"
          src={envelope}
          width={60}
          height={50}
          alt=""
        />

        {/* =================== Temporary ========================== */}
        <Link
          className="flex justify-center items-center w-full"
          to={"/teacher/confirm-email"}
        >
          <button
            href=""
            className="bg-primary rounded-full py-4 px-4 text-white text-[18px] flex gap-5"
          >
            After email verification <FaArrowCircleRight />
          </button>
        </Link>
      </div>
      <div>
        <img
          className="md:block hidden absolute right-7 bottom-96 lgss:right-28 lgss:top-80"
          src={circle1}
          width={50}
          height={50}
          alt=""
        />
      </div>
      <div className="">
        <img
          className="absolute left-4 bottom-32 lgss:left-32"
          src={circle2}
          alt=""
        />
      </div>
    </div>
  );
};

export default EmailVerification;
