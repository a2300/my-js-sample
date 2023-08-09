const buffer = Buffer.from("🍔");

for (const byte of buffer) {
  // `.toString(16)` returns the content in hexadecimal format.
  console.log(byte.toString(16));
}

const copyBuffer = Buffer.alloc(buffer.length);

for(const [index, value] of buffer.entries()) {
  copyBuffer[index] = value;
}

console.log(copyBuffer.toString());

const buffer1 = Buffer.alloc(50)
const buffer2 = Buffer.from("inside the 🍔", "utf-8")

buffer1.write("Try to put 🍟 in every meal", "utf-8");
buffer2.copy(buffer1, 16)

console.log(buffer1.toString("utf-8")) // Try to put 🍟 inside the 🍔

const authorsAndBooks = [
  ['Tolkien', 'Lord of The Rings'],
  ['Rutger', 'Utopia For Realists'], 
  ['Sinek', 'Leaders Eat Last'],
  ['Eyal', 'Habit'],
];

console.table(authorsAndBooks);