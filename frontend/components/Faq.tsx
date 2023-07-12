"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";

const Faq = () => {
  const faq = [
    {
      question:
        "Will someone come after my arrival to pick me up at the airport?",
      answer:
        "Yes, Travel representative will be there to greet you outside of Terminal Hall. He will be displaying Travel name card with your name on it. You will be moved to the pre-select Hotel after that.",
    },
    {
      question: "Do I need a visa to travel to Nepal?",
      answer:
        "All foreign nationals, except Indian Citizens, need visas to enter Nepal.",
    },
    {
      question: "When is the best time to travel to Nepal?",
      answer:
        "The weather is probably the best guide for deciding when to plan your trip to Nepal. The best time to visit Nepal is between September to November and March to May.",
    },
    {
      question: "Do I need permits?",
      answer:
        "Yes, all foreign citizens require two permits for this trek. You require Sagarmatha National permit and a Local Government fee. To climb Island you need an expedition permit issued from NMA. The climbing & trekking permit is included in the package cost and Trekkers Paradise will organize the permit.",
    },
    {
      question: "How is the Higher Himalayan toilet facilities like?",
      answer:
        "There are generally common toilet facilities in teahouses and lodges, which are typically clean and well maintained. A limited number of tea houses and lodges now sell attached toilets. We will provide you with the best choice in this regard, as far as possible.",
    },
    {
      question: "Will we have Wi-Fi?",
      answer:
        "Wi-Fi and network might not be always available. However, few hotels provide Wi-Fi free or with a certain charge.",
    },
    {
      question: "How are the shower facilities on the trek?",
      answer:
        "Normally there are hot water shower services in various teahouses and lodges. In the absence of such a facility, the teahouse/lodges will provide you hot water bucket. The payment for the shower has to be made by yourself and the cost varies with the places.",
    },
    {
      question: "Will my Cell phone (mobile phone) work in Nepal?",
      answer:
        "Please, Contact your service provider and check if Nepal country is included in their `Global roaming’ package. Please note, not all parts of Nepal are covered by the GSM Network in Nepal.",
    },
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (index: any) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <div className="accordian">
      {faq &&
        faq.map((items, index) => (
          <div className="my-2 qa" key={index}>
            <div
              className="question text-black font-bold text-md"
              onClick={() => toggle(index)}
            >
              <h2>{items.question}</h2>
              <span className="">
                {selected === index ? <BiMinus /> : <AiOutlinePlus />}
              </span>
            </div>
            {/* <div className="answer text-md mt-2"> */}
            <div
              className={
                selected === index
                  ? "answer show text-md mt-2"
                  : "answer text-md mt-2"
              }
            >
              <p>{items.answer}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Faq;
