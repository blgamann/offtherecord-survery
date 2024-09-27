// src/data/questions.js

const questions = [
  {
    number: 1,
    text: "최선을 다했다고 느낀 일에서 좋지 않은 피드백을 받았을 때, 나는?",
    choices: {
      A: "내가 부족한 부분을 떠올리며, 더 잘할 수 있었는데 놓친 부분을 기록한다.",
      B: "그렇게 할 수 밖에 없는 이유에 대해 생각해보고, 내가 더 도움을 받을 수 있는게 뭔지 생각해본다.",
    },
    scores: {
      A: {
        "나의 사감선생님": 5,
        "스마일 마스크": 4,
        "관심에 목마른, 스포터 라이트": 2,
        "무기력한 넝마 히피": 3,
        "합리화-카멜레온": 0,
      },
      B: {
        "나의 사감선생님": 0,
        "스마일 마스크": 1,
        "관심에 목마른, 스포터 라이트": 3,
        "무기력한 넝마 히피": 1,
        "합리화-카멜레온": 5,
      },
    },
  },
  {
    number: 2,
    text: "건강 문제로 병원에 가야하는 걸 알지만, 두렵기도 하고 불편하기도 할 때, 당신은?",
    choices: {
      A: "나중에 더 아플 것이 걱정돼, 바로 병원을 예약하고 방문한다.",
      B: "병원에 가지 않고 건강이 나아질거라 생각하며 기다린다.",
    },
    scores: {
      A: {
        "나의 사감선생님": 1,
        "스마일 마스크": 0,
        "관심에 목마른, 스포터 라이트": 0,
        "무기력한 넝마 히피": 0,
        "합리화-카멜레온": 0,
      },
      B: {
        "나의 사감선생님": 0,
        "스마일 마스크": 1,
        "관심에 목마른, 스포터 라이트": 0,
        "무기력한 넝마 히피": 5,
        "합리화-카멜레온": 3,
      },
    },
  },
  {
    number: 3,
    text: "당장 들어주기 힘든 친구의 부탁을 받았을 때?",
    choices: {
      A: "부탁을 들어주기 위해 무리해서라도 어떻게든 해결하려고 노력한다.",
      B: "부탁을 들어줄 수 없는 상황에 대해서 잘 설명해서, 친구가 기분 상하지 않게 납득시킨다.",
    },
    scores: {
      A: {
        "나의 사감선생님": 2,
        "스마일 마스크": 5,
        "관심에 목마른, 스포터 라이트": 0,
        "무기력한 넝마 히피": 2,
        "합리화-카멜레온": 0,
      },
      B: {
        "나의 사감선생님": 3,
        "스마일 마스크": 1,
        "관심에 목마른, 스포터 라이트": 0,
        "무기력한 넝마 히피": 0,
        "합리화-카멜레온": 5,
      },
    },
  },
  {
    number: 4,
    text: "중요한 날인데 입고 나온 옷이 별로라고 느껴질 때, 나는?",
    choices: {
      A: "주변 사람들에게 오늘 옷이 너무 별로라고 솔직히 이야기하며, 더 나은 모습으로 오지 못한 것에 대해서 이야기한다.",
      B: "오늘만큼은 사람들이 관심가지지 않게, 조용하게 있으면서 최대한 눈에 띄지 않으려고 노력한다.",
    },
    scores: {
      A: {
        "나의 사감선생님": 3,
        "스마일 마스크": 1,
        "관심에 목마른, 스포터 라이트": 5,
        "무기력한 넝마 히피": 0,
        "합리화-카멜레온": 1,
      },
      B: {
        "나의 사감선생님": 1,
        "스마일 마스크": 1,
        "관심에 목마른, 스포터 라이트": 0,
        "무기력한 넝마 히피": 5,
        "합리화-카멜레온": 0,
      },
    },
  },
  {
    number: 5,
    text: "누군가 나에 대해서 과하게 칭찬해줬을 때, 나는?",
    choices: {
      A: "칭찬받을 정도는 아니고, 그냥 의례상 하는 말이라고 생각한다.",
      B: "겸손한 태도를 보이지만, 칭찬에 들뜨고 기분이 좋다.",
    },
    scores: {
      A: {
        "나의 사감선생님": 4,
        "스마일 마스크": 4,
        "관심에 목마른, 스포터 라이트": 0,
        "무기력한 넝마 히피": 5,
        "합리화-카멜레온": 0,
      },
      B: {
        "나의 사감선생님": 1,
        "스마일 마스크": 0,
        "관심에 목마른, 스포터 라이트": 5,
        "무기력한 넝마 히피": 0,
        "합리화-카멜레온": 1,
      },
    },
  },
  {
    number: 6,
    text: "재밌어 보이는 일에 참여할 수 있는 기회가 떴다! 그때 나는?",
    choices: {
      A: "재밌어 보이지만, 준비가 덜 되었다는 생각이 들어, 다음 기회를 기다리며 참여를 주저한다.",
      B: "이 기회에 자신의 재능을 발휘할 수 있는 기회라 여기며, 기대되는 감정을 주변에 알린다.",
    },
    scores: {
      A: {
        "나의 사감선생님": 5,
        "스마일 마스크": 4,
        "관심에 목마른, 스포터 라이트": 0,
        "무기력한 넝마 히피": 4,
        "합리화-카멜레온": 2,
      },
      B: {
        "나의 사감선생님": 0,
        "스마일 마스크": 0,
        "관심에 목마른, 스포터 라이트": 5,
        "무기력한 넝마 히피": 0,
        "합리화-카멜레온": 0,
      },
    },
  },
  {
    number: 7,
    text: "믿었던 친구에게 마음이 콕 박히는 상처받는 말을 들었을 때, 나는?",
    choices: {
      A: "생각하면 기분이 계속 나빠져, 친구와의 대화를 피하거나 거리를 두려고 한다.",
      B: "친구가 왜 그런 말을 했을까 나에 대해 생각하며, 친구가 무안하지 않게 상황을 잘 마무리한다.",
    },
    scores: {
      A: {
        "나의 사감선생님": 2,
        "스마일 마스크": 0,
        "관심에 목마른, 스포터 라이트": 3,
        "무기력한 넝마 히피": 5,
        "합리화-카멜레온": 4,
      },
      B: {
        "나의 사감선생님": 1,
        "스마일 마스크": 5,
        "관심에 목마른, 스포터 라이트": 2,
        "무기력한 넝마 히피": 0,
        "합리화-카멜레온": 2,
      },
    },
  },
  {
    number: 8,
    text: "소셜 미디어에 게시한 사진이나 글이 최근 기대만큼 '좋아요'를 받지 못할 때, 나는?",
    choices: {
      A: "살짝 실망감을 느끼고, 게시물을 올리지 않는 것이 좋겠다는 생각을 한다.",
      B: "더 많은 사람의 호응을 끌 수 있게 더 멋지고, 인사이트있는 게시물을 더 올리는데 집중한다.",
    },
    scores: {
      A: {
        "나의 사감선생님": 3,
        "스마일 마스크": 2,
        "관심에 목마른, 스포터 라이트": 1,
        "무기력한 넝마 히피": 2,
        "합리화-카멜레온": 1,
      },
      B: {
        "나의 사감선생님": 0,
        "스마일 마스크": 3,
        "관심에 목마른, 스포터 라이트": 5,
        "무기력한 넝마 히피": 0,
        "합리화-카멜레온": 0,
      },
    },
  },
  {
    number: 9,
    text: "너무 잘 하고 싶은 일의 기한이 코앞으로 다가왔는데, 진도가 안나간다. 그때의 나는?",
    choices: {
      A: "잘하고 싶은 마음에 급한데도 계속 미루며, 마음이 더욱 불편해진다.",
      B: "다른 일로도 바빠서 시간이 더 있었다면 훨씬 잘할 수 있을텐데라고 생각하며, 좋은 상황에 대해 생각해본다.",
    },
    scores: {
      A: {
        "나의 사감선생님": 5,
        "스마일 마스크": 3,
        "관심에 목마른, 스포터 라이트": 0,
        "무기력한 넝마 히피": 1,
        "합리화-카멜레온": 1,
      },
      B: {
        "나의 사감선생님": 3,
        "스마일 마스크": 1,
        "관심에 목마른, 스포터 라이트": 0,
        "무기력한 넝마 히피": 3,
        "합리화-카멜레온": 5,
      },
    },
  },
  {
    number: 10,
    text: "주변 사람들은 다 가는 것 같은 행사에 나만 초대받지 못했을 때, 나는?",
    choices: {
      A: "대단한 행사도 아닌데, 요즘 사람들이 너무 호들갑 떤다고 생각한다.",
      B: "내가 좀 더 중요한 사람이 되면 초대받았을거 같다는 생각에 살짝 우울한 마음이 든다.",
    },
    scores: {
      A: {
        "나의 사감선생님": 2,
        "스마일 마스크": 1,
        "관심에 목마른, 스포터 라이트": 1,
        "무기력한 넝마 히피": 0,
        "합리화-카멜레온": 5,
      },
      B: {
        "나의 사감선생님": 0,
        "스마일 마스크": 4,
        "관심에 목마른, 스포터 라이트": 5,
        "무기력한 넝마 히피": 4,
        "합리화-카멜레온": 0,
      },
    },
  },
];

export default questions;
