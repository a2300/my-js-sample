function showName(firstName, lastName, ...otherNames) {
  console.log(firstName + ' ' + lastName);

  globalThis.console.log(otherNames);
}

showName("Peter", "Bennison", "Pirate", "Corribian");