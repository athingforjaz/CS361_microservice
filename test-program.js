let sampleTemp = 71

fetch(`http://localhost:5000/convertFtoC/${sampleTemp}`) // URL with programmatic parameter
  .then(response => {
    if (!response.ok) {
      console.error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Do whatever you want with the data - you can assign it to a var, log it, etc.
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });