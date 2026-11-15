// User-provided scene images; replace paths here if you swap a matched stimulus.
window.STUDY_CONFIG={
  // Each pair is a matched green/non-green scene. Keep each pair's level slots identical.
  stimulusPairs:{
    "1":{green:"assets/backgrounds/pair-01-green.jpg",nongreen:"assets/backgrounds/pair-01-nongreen.jpg"},
    "2":{green:"assets/backgrounds/pair-02-green.jpg",nongreen:"assets/backgrounds/pair-02-nongreen.jpg"},
    "3":{green:"assets/backgrounds/pair-03-green.png",nongreen:"assets/backgrounds/pair-03-nongreen.png"},
    "4":{green:"assets/backgrounds/pair-04-green.jpg",nongreen:"assets/backgrounds/pair-04-nongreen-simplified.png"}
  },
  // Levels 1–5 share Pair 1; each of the four pairs appears five times overall.
  stimulusPairOrder:[1,1,1,1,1,2,3,4,2,3,4,3,4,2,4,2,3,3,2,4],
  participantCondition:"green", // Prototype fallback path scene; deployment must set from server allocation.
  participantStoryCondition:"green", // Story background is a separate factor in the four-group design.
  backgroundBrightness:1.2, // Fixed 20% boost, held identical for both conditions and all participants.
  targetDays:14,
  randomization:"server-required", // A shared server must balance the four combinations across participants.
  version:"prototype-1.0"
};
