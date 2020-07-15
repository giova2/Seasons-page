export const SummerText = () => {
  const arrText = [
    "Que calorón!!",
    "Un lorca increíble",
    "No se aguanta",
    "Que lindo para estar en la playita",
    "Very caliente!",
  ];

  return arrText[Math.round(Math.random() * (arrText.length - 1))];
};

export const WinterText = () => {
  const arrText = [
    "Que frío!!",
    "Que fresquete!",
    "Me congelo!!",
    "Necesito una estufita",
    "Very frío!",
  ];

  return arrText[Math.round(Math.random() * (arrText.length - 1))];
};
