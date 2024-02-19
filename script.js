function hash(key) {
  let hashCode = 0;
  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.charCodeAt(i);
  }
  return hashCode;
}
const HashMap = ((hashFunc = hash) => {
  let capacity = 16;
  let size = 0;
  const maxLoadFactor = 0.75;
  let data = new Array(capacity);

  function clear() {
    keys().forEach((k) => remove(k));
  }

  function grow() {
    capacity *= 2;
    let oldEntries = entries();
    data = new Array(capacity);
    size = 0;
    oldEntries.forEach((entry) => {
      set(entry[0], entry[1]);
    });
  }

  function set(key, value) {
    if (size / capacity > maxLoadFactor) {
      grow();
      console.log("grown", entries());
    }
    let code = hashFunc(key) % capacity;
    if (!data[code]) {
      data[code] = {};
    }
    if (!data[code][key]) {
      size++;
    }
    data[code][key] = value;
  }

  function get(key) {
    let code = hashFunc(key) % capacity;
    let result;
    if (data[code]) {
      result = data[code][key];
    }
    return result ? result : null;
  }

  function has(key) {
    let code = hashFunc(key) % capacity;
    if (data[code] && data[code][key]) {
      return true;
    }
    return false;
  }
  function remove(key) {
    if (has(key)) {
      delete data[hashFunc(key) % capacity][key];
      size--;
      return true;
    }
    return false;
  }
  function length() {
    return keys().length;
  }

  function extractor(bucketItemSupplier) {
    let result = [];
    data.forEach((bucket) => {
      bucketItemSupplier(bucket).forEach((k) => {
        result.push(k);
      });
    });
    return result;
  }

  function keys() {
    return extractor(Object.keys);
  }
  function values() {
    return extractor(Object.values);
  }
  function entries() {
    return extractor(Object.entries);
  }

  return {
    get,
    set,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
})();

HashMap.set("Fred", "Smith");
console.log(HashMap.get("Hehe"));
console.log(HashMap.get("Fred"));
console.log(HashMap.has("huijhyb"));
console.log(HashMap.has("Fred"));

console.log("remove Fred", HashMap.remove("Fred"));

console.log("add Oliver", HashMap.set("Oliver", "Pants"));

console.log("entries", HashMap.entries());
console.log("keys", HashMap.keys());
console.log("values", HashMap.values());
console.log("clear", HashMap.clear());
console.log("entries", HashMap.entries());
console.log("add Oliver", HashMap.set("Oliver", "Pants"));
console.log("entries", HashMap.entries());
console.log("length", HashMap.length());

console.log("add Oliver", HashMap.set("Oliver1", "Pants"));
console.log("add Oliver", HashMap.set("Oliver2", "Pants"));
console.log("add Oliver", HashMap.set("Oliver3", "Pants"));
console.log("add Oliver", HashMap.set("Oliver4", "Pants"));
console.log("add Oliver", HashMap.set("Oliver5", "Pants"));
console.log("add Oliver", HashMap.set("Oliver6", "Pants"));
console.log("add Oliver", HashMap.set("Oliver7", "Pants"));
console.log("add Oliver", HashMap.set("Oliver8", "Pants"));
console.log("add Oliver", HashMap.set("Oliver9", "Pants"));
console.log("add Oliver", HashMap.set("Oliver10", "Pants"));
console.log("add Oliver", HashMap.set("Oliver11", "Pants"));
console.log("add Oliver", HashMap.set("Oliver12", "Pants"));
console.log("add Oliver", HashMap.set("Oliver13", "Pants"));
console.log("add Oliver", HashMap.set("Oliver14", "Pants"));
console.log("add Oliver", HashMap.set("Oliver15", "Pants"));
console.log("add Oliver", HashMap.set("Oliver16", "Pants"));
console.log("add Oliver", HashMap.set("Oliver17", "Pants"));
console.log("add Oliver", HashMap.set("Oliver18", "Pants"));
