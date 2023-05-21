import React from "react";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";

const BottomSec = () => {
  return (
    <>
      <div className="ml-2">
        <p className="text-sm w-[1100px] absolute z-[1000] top-[470px] text-white leading-[26px]">
          ChatGPT is an artificial intelligence (AI) chatbot developed by OpenAI
          and released in November 2022. The "Chat" in the name is a reference
          to it being a chatbot, and the "GPT" stands for generative pre-trained
          transformer—a type of large language model (LLM). ChatGPT is a natural
          language processing (NLP) AI Chatbot driven by AI technology developed
          from Open AI. The chatbot has a language-based model that the
          developer fine-tunes (with help from user feedback) for human
          interaction. The language model can answer an ever increase array of
          questions and tasks.Some of the most popular tasks ChatGPT can perform
          are composing essays, writing emails, creating inventive creative
          stories and generating programming code. ChatGPT can provide these
          answers as it essentially harvests information about a vast variety of
          topics from across the web and delivers the answers in a concise and
          conversational manner.
        </p>
      </div>
      <div className="absolute z-[1000] top-[670px] ml-2 bg-sky-800 rounded text-white">
        <Button
          variant=""
          className="outline-2 outline-white outline-dotted"
          endIcon={<EastIcon />}
        >
          MORE
        </Button>
      </div>
    </>
  );
};

export default BottomSec;
