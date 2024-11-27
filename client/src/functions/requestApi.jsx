const apiRequest = async (url = "", optionsObj = {}, defaultErrMsg = "An error occurred.") => {
  try {
    const response = await fetch(`http://localhost:3000/${url}`, optionsObj);
    if (!response.ok) {
      const errorResponse = await response.text(); 
      throw new Error(errorResponse || "Server response not OK. Please try again.");
    }

    const contentType = response.headers.get("Content-Type");
    
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return data;
    } else {
      const data = await response.text();
      return data;
    }
  } catch (err) {
    console.log('Error occurred:', err);
    return { error: err.message || defaultErrMsg };
  }
};
export default apiRequest;

