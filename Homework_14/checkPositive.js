function checkPositive(number) {
    try {
      if (number < 0) {
        throw new Error('Negative error');
      }
      if (number === 0) {
        throw new Error('Zero error');
      }
    } catch (err) {
        console.log(err.message);
    }
    return number;
  }
  console.log(checkPositive(-14));