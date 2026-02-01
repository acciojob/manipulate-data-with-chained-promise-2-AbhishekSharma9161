<script>
  function manipulateArray() {
    const outputDiv = document.getElementById("output");

    // Initial promise: resolves after 3 seconds with the array
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000);
    })
      .then((arr) => {
        // First transformation: filter even numbers
        return new Promise((resolve) => {
          const evenNumbers = arr.filter(num => num % 2 === 0);

          setTimeout(() => {
            outputDiv.textContent = evenNumbers.join(",");
            resolve(evenNumbers);
          }, 1000);
        });
      })
      .then((evenNumbers) => {
        // Second transformation: multiply by 2
        return new Promise((resolve) => {
          const multiplied = evenNumbers.map(num => num * 2);

          setTimeout(() => {
            outputDiv.textContent = multiplied.join(",");
            resolve(multiplied);
          }, 2000);
        });
      });
  }

  // Call the function when the page loads
  manipulateArray();
</script>
