import React, { useRef, useState } from "react";
import data4 from "./data";
import { data1 } from "./data";
import { RiArrowDropDownLine } from "react-icons/ri";
import './box.css'

//  accordionitem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="cc-wrapper">
      <button
        className={`cc-question-container ${isOpen ? "cc-active" : ""}`}
        onClick={onClick}
      >
        <p className="cc-question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "cc-active" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="cc-answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="cc-answer-content">{answer}</p>
      </div>
    </div>
  );
};


/*Indonesia*/


const Box1 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  const Box2 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data1.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };

  const Box3 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data1.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



/*Maldivs */



  const Box4 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data1.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };
  

  const Box5 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };


  const Box6 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };


  /*Dubai */


  const Box7 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };




  const Box8 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };




  const Box9 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  /*Italy */


  const Box10 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };


  const Box11 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };


  const Box12 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  /*Malaysia */



  const Box13 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };


  const Box14= () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  const Box15 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };


  /*China */

  const Box16 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  const Box17 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  const Box18 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  /*Korea */


  const Box19 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  const Box20 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };




  const Box21 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  /*Cuba */


  const Box22 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };





  const Box23 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };




  const Box24 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  /*Switzerland */


  const Box25= () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  const Box26 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };




  const Box27 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  /*Finland */


  const Box28 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };




  const Box29 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };





  const Box30 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };




  /*Scotland */



  const Box31 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };





  const Box32 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };






  const Box33 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };




  /*Mexico */


  const Box34 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };






  const Box35 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };






  const Box36 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };




  /*London */


  const Box37 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };






  const Box38 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };






  const Box39 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  /*New Zealand */



  const Box40 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  const Box41 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };





  const Box42 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };




  /*Netherland */


  const Box43 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };




  const Box44 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };




  const Box45 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  /*France */


  const Box46 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };





  const Box47 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };





  const Box48 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };



  /*Ireland */


  const Box49 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };






  const Box50 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };







  const Box51 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="cc-container">
        {data4.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    );
  };


  export {Box1,Box2,Box3,Box4,Box5,Box6,Box7,Box8,Box9,Box10}
  export {Box11,Box12,Box13,Box14,Box15,Box16,Box17,Box18,Box19,Box20}
  export {Box21,Box22,Box23,Box24,Box25,Box26,Box27,Box28,Box29,Box30}
  export {Box31,Box32,Box33,Box34,Box35,Box36,Box37,Box38,Box39,Box40}
  export {Box41,Box42,Box43,Box44,Box45,Box46,Box47,Box48,Box49,Box50,Box51}