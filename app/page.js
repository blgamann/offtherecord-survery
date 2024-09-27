// src/App.js
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import questions from "./data/question";
import results from "./data/result";

function App() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [scores, setScores] = useState({
    "나의 사감선생님": 0,
    "스마일 마스크": 0,
    "관심에 목마른, 스포터 라이트": 0,
    "무기력한 넝마 히피": 0,
    "합리화-카멜레온": 0,
  });

  useEffect(() => {
    console.log("useEffect");
    handleRestart();
  }, []);

  const handleStart = () => {
    setCurrentQuestion(0);
    setScores({
      "나의 사감선생님": 0,
      "스마일 마스크": 0,
      "관심에 목마른, 스포터 라이트": 0,
      "무기력한 넝마 히피": 0,
      "합리화-카멜레온": 0,
    });
  };

  const handleChoice = (choice) => {
    if (currentQuestion === null) return;

    const question = questions[currentQuestion];
    const selectedScores = question.scores[choice];

    const newScores = { ...scores };
    for (let trait in selectedScores) {
      newScores[trait] += selectedScores[trait];
    }
    setScores(newScores);

    console.log(`질문 ${currentQuestion + 1} 선택: ${choice}`);
    console.log("선택에 따른 점수:", selectedScores);
    console.log("업데이트된 총 점수:", newScores);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const maxScore = Math.max(...Object.values(scores));
      const result = Object.keys(scores).find(
        (key) => scores[key] === maxScore
      );
      const trait = results[result];

      router.push(`/traits/${trait.slug}`);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(null);
    setScores({
      "나의 사감선생님": 0,
      "스마일 마스크": 0,
      "관심에 목마른, 스포터 라이트": 0,
      "무기력한 넝마 히피": 0,
      "합리화-카멜레온": 0,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-blue-200 p-4">
      <div className="w-full max-w-lg md:max-w-2xl bg-white shadow-lg rounded-lg p-6">
        {currentQuestion === null && <StartScreen onStart={handleStart} />}
        {currentQuestion !== null && currentQuestion < questions.length && (
          <QuestionScreen
            question={questions[currentQuestion]}
            current={currentQuestion + 1}
            total={questions.length}
            onChoice={handleChoice}
          />
        )}
      </div>
    </div>
  );
}

export default App;
