// I can declare a function that accepts any type:
function print(...value: any) {
  console.log(...value);
}

print(42);
print(1,2,3,4, "hi", 8.876, true);
