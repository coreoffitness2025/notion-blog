/**
 * 홈페이지 운동 ID → ExerciseDB GIF ID 매핑
 * URL: https://static.exercisedb.dev/media/{gifId}.gif
 */

const EXERCISE_GIF_MAP: Record<string, string> = {
  // 가슴
  "bench-press": "0025",
  "incline-bench-press": "0047",
  "decline-bench-press": "0033",
  "push-up": "0662",
  "dumbbell-flye": "0306",
  "cable-crossover": "0160",
  "dumbbell-press": "0289",
  "incline-dumbbell-press": "0314",
  "decline-dumbbell-press": "0281",
  "close-grip-bench-press": "0030",
  "wide-grip-bench-press": "0122",
  "chest-press-machine": "0574",
  "cable-fly": "0227",
  "incline-cable-fly": "0171",
  "pec-deck-fly": "0668",
  "dumbbell-pullover": "0364",
  "machine-incline-press": "0574",
  "machine-decline-press": "0574",

  // 등
  "conventional-deadlift": "0032",
  "romanian-deadlift": "0085",
  "sumo-deadlift": "0117",
  "pull-up": "0651",
  "lat-pulldown": "0198",
  "barbell-row": "0027",
  "chin-up": "0250",
  "seated-row": "0215",
  "t-bar-row": "2300",
  "one-arm-dumbbell-row": "0330",
  "face-pull": "0187",
  "shrug": "0100",
  "hyperextension": "0505",
  "reverse-fly": "0673",
  "assisted-pull-up": "0017",
  "straight-arm-pulldown": "0234",
  "good-morning": "0044",
  "pendlay-row": "0027",

  // 어깨
  "shoulder-press": "0405",
  "lateral-raise": "0334",
  "reverse-pec-deck-fly": "0673",
  "overhead-press": "0561",
  "machine-shoulder-press": "0603",
  "front-raise": "0310",
  "upright-row": "0120",
  "cable-lateral-raise": "0175",
  "rear-delt-cable": "0179",
  "bent-over-lateral-raise": "0384",
  "arnold-press": "0262",
  "machine-lateral-raise": "0334",

  // 하체
  "squat": "0043",
  "lunge": "0337",
  "leg-press": "0739",
  "bulgarian-squat": "1685",
  "front-squat": "0042",
  "calf-raise": "0106",
  "seated-calf-raise": "0738",
  "goblet-squat": "0320",
  "hip-thrust": "0130",
  "glute-bridge": "0635",
  "step-up": "0097",
  "hack-squat": "0046",
  "side-lunge": "0756",
  "reverse-lunge": "0336",
  "barbell-lunge": "0056",
  "adductor-machine": "1393",
  "abductor-machine": "1394",
  "leg-curl": "0586",
  "leg-extension": "0585",
  "smith-squat": "0043",
  "machine-hip-thrust": "0130",
  "machine-calf-press": "0106",

  // 이두
  "dumbbell-curl": "0298",
  "hammer-curl": "0324",
  "barbell-curl": "0031",
  "cable-curl": "0151",
  "preacher-curl": "0070",
  "concentration-curl": "0285",
  "incline-dumbbell-curl": "0325",
  "spider-curl": "2315",
  "machine-curl": "0577",
  "drag-curl": "0038",
  "cable-hammer-curl": "0156",

  // 삼두
  "tricep-pushdown": "0241",
  "tricep-dips": "0291",
  "overhead-triceps-extension": "0406",
  "lying-triceps-extension": "0049",
  "rope-pushdown": "0863",
  "kickback": "0447",
  "cable-kickback": "0158",
  "diamond-pushup": "0285",
  "bench-dips": "0126",
  "overhead-cable-extension": "0183",
  "machine-tricep-extension": "0241",

  // 코어
  "plank": "0627",
  "crunches": "0274",
};

export function getExerciseGifUrl(exerciseId: string): string | null {
  const gifId = EXERCISE_GIF_MAP[exerciseId];
  if (!gifId) return null;
  return `https://static.exercisedb.dev/media/${gifId}.gif`;
}

export default EXERCISE_GIF_MAP;
