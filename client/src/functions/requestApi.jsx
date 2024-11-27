const apiRequest = async (url = "", optionsObj = {}, defaultErrMsg = "An error occurred.") => {
  try {
    const response = await fetch(`http://localhost:3000/${url}`, optionsObj);

    // If the response is not OK (status code is not 2xx)
    if (!response.ok) {
      const errorResponse = await response.text();  // Handle error as text (string)
      throw new Error(errorResponse || "Server response not OK. Please try again.");
    }

    // Handle the response based on Content-Type
    const contentType = response.headers.get("Content-Type");
    
    if (contentType && contentType.includes("application/json")) {
      // If response is JSON, parse it
      const data = await response.json();
      return data;
    } else {
      // If response is a string (e.g., HTML, plain text), treat it as text
      const data = await response.text();
      return data;
    }
  } catch (err) {
    // If an error occurs, return an error object
    console.log('Error occurred:', err);
    return { error: err.message || defaultErrMsg };
  }
};
export default apiRequest;

