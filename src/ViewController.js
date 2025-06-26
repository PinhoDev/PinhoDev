// Projects Page
export const handleInputChange = (e, setFormData) => {
  setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

export const handleFormSubmit = (formData, setFormData, setShowMessage) => {
  fetch("https://formspree.io/f/mgvypgpe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });

  setShowMessage(true);
  setFormData({ name: "", email: "", message: "" });
  setTimeout(() => setShowMessage(false), 2000);
};
