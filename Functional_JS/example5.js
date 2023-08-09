const createPrinter = () => {
  const myNumber = 11;

  return () => {
    console.log(`my number is ${myNumber}`);
  }
}

const printer = createPrinter();

printer();