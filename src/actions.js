export async function submitContactForm(formData) {
  try {
    const response = await fetch("https://your-backend-api.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return { message: "Something went wrong. Please try again." };
  }
}
