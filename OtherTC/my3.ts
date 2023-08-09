interface BackPack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}


declare const backpack: BackPack<String>;

const object = backpack.get();

// backpack.add(23);
backpack.add("23");