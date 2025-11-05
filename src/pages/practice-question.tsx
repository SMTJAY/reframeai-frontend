import { useState } from "react";

const QuestCategory = [
  { id: 0, title: "All 50" },
  { id: 1, title: "Background" },
  { id: 2, title: "Situation" },
  { id: 3, title: "Technical" },
];

const Questions = [
  {
    id: 0,
    title: "Background",
    text: "Walk me through your design process from the initial idea to the final handoff.",
  },
  {
    id: 1,
    title: "Situational",
    text: "Tell me about a time you had a major disagreement with a product manager about a design. How did you handle it?",
  },
  {
    id: 2,
    title: "Technical",
    text: "What are WCAG (Web Content Accessibility Guidelines), and why are they important?",
  },
  {
    id: 3,
    title: "Background",
    text: "What's a UX project you're most proud of, and what was your specific role in it?",
  },
  {
    id: 4,
    title: "Technical",
    text: "What is information architecture (IA), and why is it a critical part of UX?",
  },
  {
    id: 5,
    title: "Background",
    text: "What's a product you think has a terrible user experience, and how would you fix it?",
  },
];

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <>
      <div className="flex justify-center gap-4 mt-10">
        {QuestCategory.map((category) => (
          <div
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex justify-center cursor-pointer p-1 rounded-full px-5 transition-colors duration-200 ${
              selectedCategory === category.id
                ? "bg-[#1671D9] text-white"
                : "bg-[#F0F2F5] text-black"
            }`}
          >
            <span>{category.title}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10  justify-center mx-14">
        {Questions.map((quest) => (
          <div className="bg-white p-4 rounded-lg " key={quest.id}>
            <div className="bg-[#E7F6EC] text-[#0F973D] text-[12px] rounded-full p-1 px-4 w-max">
              <span>{quest.title}</span>
            </div>
            <p className="text-[#000000] text-[16px] font-normal mt-4">
              {quest.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategorySelector;
