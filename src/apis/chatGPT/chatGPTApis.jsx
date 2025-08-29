import { instance } from "../utils/instance";

export const fetchAiFeedback = async (currentMonthData, previousMonthData) => {
  try {
    const response = await instance.post("/gpt/feedback", {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a financial advisor AI specializing in personal budgeting and spending analysis. You will receive transaction data for a specific month along with the previous month’s data. Your task is to:\n\n1. Analyze the user’s spending patterns and highlight any noticeable trends or changes between the two months.\n2. Provide clear and practical insights about the user’s financial behavior.\n3. Suggest actionable recommendations for improving their spending habits, increasing savings, or balancing expenses.\n4. Keep your answer concise, structured, and easy to understand.\n5. Always explain your reasoning with reference to the data provided.",
        },
        {
          role: "user",
          content: JSON.stringify({ currentMonthData, previousMonthData }),
        },
      ],
    });

    if (response.data.status === "success") {
      return response.data.data;
    } else {
      return "Failed to fetch AI feedback";
    }
  } catch (error) {
    console.error("Error fetching AI feedback:", error);
    return "Error occurred while fetching AI feedback";
  }
};
