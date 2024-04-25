import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const FAQ = () => {
  const [accordionItems, setAccordionItems] = useState([
    {
      id: 1,
      question: 'Subject Information',
      answer1: 'Subject Information',
      answer2: 'Groups',
      isActive: false
    },
    {
      id: 2,
      question: 'Subject Content',
      answer1: 'Week 1',
      answer2: 'Week 2', 
      answer3: 'Week 3', 
      answer4: 'Week 4',      
      isActive: false
    },
    {
      id: 3,
      question: 'Assessment and Feedback',
      answer1: 'Assessment Information',
      answer2: 'Submission Link', 
      answer3: 'Take quiz',           
      isActive: false
    },
   
   
  ]);
  const handleAccordionClick = (itemID) => {
    const updatedAccordionItems = accordionItems.map((item) => {
      if (item.id === itemID) {
        return {
          ...item,
          isActive: !item.isActive
        };
      } else {
        return {
          ...item,
          isActive: false
        };
      }
    });
    setAccordionItems(updatedAccordionItems);
  };
  return (
    <div className="text-center  flex flex-col font-inter  md:w-[760px] p-2 lg:ml-48 lg:mt-8">
      {accordionItems.map((item) => (
        <div className="p-2" key={item.id}>
          <div
            className=" border-r-2 text-left"
            onClick={() => handleAccordionClick(item.id)}>
            <div className="  flex flex-row justify-between mb-10">
              <h3 className=" h-10 pb-2 text-xs md:text-base">{item.question}</h3>

              {item.isActive ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            {item.isActive && (
              <div className="">
                <p className="pb-2 md:text-base text-xs text-[#828181]">{item.answer1}</p>
                <p className="pb-2 md:text-base text-xs text-[#828181]">{item.answer2}</p>
                <p className="pb-2 md:text-base text-xs text-[#828181]">{item.answer3}</p>
                <p className="pb-2 md:text-base text-xs text-[#828181]">{item.answer4}</p>
              </div>
            )}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FAQ;