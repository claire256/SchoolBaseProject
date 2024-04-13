import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BlkLine, rightArrowStroke } from "../../../assets";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const events = [
  {
    id: 1,
    tittle: "What are the school hours at Little Learners Academy?",
    discription:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: 2,
    tittle: "Is there a uniform policy for students?",
    discription: "",
  },
  {
    id: 3,
    tittle: "What extracurricular activities are available for students?",
    discription: "",
  },
  {
    id: 4,
    tittle: "What extracurricular activities are available for students?",
    discription: "",
  },
];
const eventR = [
  {
    id: 1,
    tittle: "How do you handle food allergies and dietary restrictions?",
    discription:
      "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
  },
  {
    id: 2,
    tittle: "What is the teacher-to-student ratio at Little Learners Academy?",
    discription: "",
  },
  {
    id: 3,
    tittle: "How do you handle discipline and behavior management?",
    discription: "",
  },
  {
    id: 4,
    tittle: "How do I apply for admission to schoolbase Academy?",
    discription: "",
  },
];

const FAQs = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <div className="flex justify-center items-center my-20">
        <div className="flex flex-col gap-10 font-manrope">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <img src={BlkLine} alt="" />
              <p className="font-normal opacity-[70%] text-[24px] leading-[28.8px]">
                Get Answers Now
              </p>
              <img src={BlkLine} alt="" />
            </div>
            <p className="font-semibold text-[36px] leading-[43.2px] text-center">
              Frequently Asked Questions
            </p>
          </div>
          <div data-aos='fade-right' className="flex flex-col md:flex-row gap-8 w-[95%] md:w-[80%] m-auto">
            <div>
              <div className="flex flex-col gap-5">
                {events.map(({ ids, tittle, discription }) => (
                  <div key={ids} className="shadow-lg">
                    <Accordion className="py-0 md:py-[5px]">
                      <AccordionSummary
                        expandIcon={
                         <div className="flex justify-center items-center border-[1px] hover:bg-primary rounded-full h-[25px] w-[25px] p-">
                           <img src={rightArrowStroke} alt=""/>
                         </div>
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <p>{tittle}</p>
                        </Typography>
                      </AccordionSummary>
                      <hr />
                      <AccordionDetails>
                        <Typography className="">
                          <p className="text-[16px] font-semibold text-[#5F5F67]">
                            {discription}
                          </p>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>

            {/* <div> */}
              <div className="flex flex-col gap-5">
                {eventR.map(({ ids, tittle, discription }) => (
                  <div key={ids} className=" shadow-lg">
                    <Accordion className="py-0 md:py-[5px]">
                      <AccordionSummary
                        expandIcon={
                           <div className="flex justify-center items-center border-[1px] hover:bg-primary rounded-full h-[25px] w-[25px] p-">
                           <img src={rightArrowStroke} alt=""/>
                         </div>
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <p>{tittle}</p>
                        </Typography>
                      </AccordionSummary>
                      <hr />
                      <AccordionDetails>
                        <Typography className="">
                          <p className="text-[16px] font-semibold text-[#5F5F67]">
                            {discription}
                          </p>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
