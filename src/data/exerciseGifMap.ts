/**
 * 홈페이지 운동 ID → Free Exercise DB 이미지 매핑
 * Source: https://github.com/yuhonas/free-exercise-db
 * 각 운동마다 0.jpg(시작), 1.jpg(종료) 2장 제공
 */

const BASE = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises";

const EXERCISE_IMAGE_MAP: Record<string, string> = {
  // 가슴
  "bench-press": "Barbell_Bench_Press_-_Medium_Grip",
  "incline-bench-press": "Barbell_Incline_Bench_Press_-_Medium_Grip",
  "decline-bench-press": "Decline_Barbell_Bench_Press",
  "push-up": "Pushups",
  "dumbbell-flye": "Dumbbell_Flyes",
  "cable-crossover": "Cable_Crossover",
  "dumbbell-press": "Dumbbell_Bench_Press",
  "incline-dumbbell-press": "Incline_Dumbbell_Press",
  "decline-dumbbell-press": "Decline_Dumbbell_Bench_Press",
  "close-grip-bench-press": "Close-Grip_Barbell_Bench_Press",
  "wide-grip-bench-press": "Wide-Grip_Barbell_Bench_Press",
  "chest-press-machine": "Machine_Bench_Press",
  "cable-fly": "Cable_Crossover",
  "incline-cable-fly": "Incline_Cable_Flye",
  "pec-deck-fly": "Butterfly",
  "dumbbell-pullover": "Dumbbell_Pullover",
  "machine-incline-press": "Machine_Bench_Press",
  "machine-decline-press": "Machine_Bench_Press",

  // 등
  "conventional-deadlift": "Barbell_Deadlift",
  "romanian-deadlift": "Romanian_Deadlift",
  "sumo-deadlift": "Sumo_Deadlift",
  "pull-up": "Pullups",
  "lat-pulldown": "Wide-Grip_Lat_Pulldown",
  "barbell-row": "Bent_Over_Barbell_Row",
  "chin-up": "Chin-Up",
  "seated-row": "Seated_Cable_Rows",
  "t-bar-row": "T-Bar_Row_with_Handle",
  "one-arm-dumbbell-row": "One-Arm_Dumbbell_Row",
  "face-pull": "Face_Pull",
  "shrug": "Barbell_Shrug",
  "hyperextension": "Hyperextensions_(Back_Extensions)",
  "reverse-fly": "Reverse_Flyes",
  "assisted-pull-up": "Machine_Assisted_Pull-Up",
  "straight-arm-pulldown": "Straight-Arm_Pulldown",
  "good-morning": "Good_Morning",
  "pendlay-row": "Pendlay_Row",

  // 어깨
  "shoulder-press": "Dumbbell_Shoulder_Press",
  "lateral-raise": "Side_Lateral_Raise",
  "reverse-pec-deck-fly": "Reverse_Machine_Flyes",
  "overhead-press": "Standing_Military_Press",
  "machine-shoulder-press": "Leverage_Shoulder_Press",
  "front-raise": "Front_Dumbbell_Raise",
  "upright-row": "Upright_Barbell_Row",
  "cable-lateral-raise": "Cable_Seated_Lateral_Raise",
  "rear-delt-cable": "Cable_Rear_Delt_Fly",
  "bent-over-lateral-raise": "Seated_Bent-Over_Rear_Delt_Raise",
  "arnold-press": "Arnold_Dumbbell_Press",
  "machine-lateral-raise": "Side_Lateral_Raise",

  // 하체
  "squat": "Barbell_Squat",
  "lunge": "Dumbbell_Lunges",
  "leg-press": "Leg_Press",
  "bulgarian-squat": "Single_Leg_Squat",
  "front-squat": "Front_Barbell_Squat",
  "calf-raise": "Standing_Calf_Raises",
  "seated-calf-raise": "Seated_Calf_Raises",
  "goblet-squat": "Goblet_Squat",
  "hip-thrust": "Barbell_Hip_Thrust",
  "glute-bridge": "Barbell_Glute_Bridge",
  "step-up": "Barbell_Step_Ups",
  "hack-squat": "Hack_Squat",
  "side-lunge": "Side_Lunge",
  "reverse-lunge": "Dumbbell_Rear_Lunge",
  "barbell-lunge": "Barbell_Lunge",
  "adductor-machine": "Thigh_Adductor",
  "abductor-machine": "Thigh_Abductor",
  "leg-curl": "Lying_Leg_Curls",
  "leg-extension": "Leg_Extensions",
  "smith-squat": "Barbell_Squat",
  "machine-hip-thrust": "Barbell_Hip_Thrust",
  "machine-calf-press": "Standing_Calf_Raises",

  // 이두
  "dumbbell-curl": "Dumbbell_Bicep_Curl",
  "hammer-curl": "Hammer_Curls",
  "barbell-curl": "Barbell_Curl",
  "cable-curl": "Cable_Hammer_Curls_-_Rope_Attachment",
  "preacher-curl": "Preacher_Curl",
  "concentration-curl": "Concentration_Curls",
  "incline-dumbbell-curl": "Incline_Dumbbell_Curl",
  "spider-curl": "Spider_Curl",
  "machine-curl": "Machine_Bicep_Curl",
  "drag-curl": "Barbell_Drag_Curl",
  "cable-hammer-curl": "Cable_Hammer_Curls_-_Rope_Attachment",

  // 삼두
  "tricep-pushdown": "Triceps_Pushdown",
  "tricep-dips": "Dips_-_Chest_Version",
  "overhead-triceps-extension": "Dumbbell_One-Arm_Triceps_Extension",
  "lying-triceps-extension": "Lying_Triceps_Press",
  "rope-pushdown": "Triceps_Pushdown_-_Rope_Attachment",
  "kickback": "Tricep_Dumbbell_Kickback",
  "cable-kickback": "Cable_One_Arm_Tricep_Extension",
  "diamond-pushup": "Diamond_Push-Up",
  "bench-dips": "Bench_Dips",
  "overhead-cable-extension": "Cable_Overhead_Triceps_Extension",
  "machine-tricep-extension": "Cable_One_Arm_Tricep_Extension",

  // 코어
  "plank": "Plank",
  "crunches": "Crunches",
};

export function getExerciseGifUrl(exerciseId: string): string | null {
  const folder = EXERCISE_IMAGE_MAP[exerciseId];
  if (!folder) return null;
  return `${BASE}/${folder}/0.jpg`;
}

export function getExerciseImages(exerciseId: string): [string, string] | null {
  const folder = EXERCISE_IMAGE_MAP[exerciseId];
  if (!folder) return null;
  return [`${BASE}/${folder}/0.jpg`, `${BASE}/${folder}/1.jpg`];
}

export default EXERCISE_IMAGE_MAP;
