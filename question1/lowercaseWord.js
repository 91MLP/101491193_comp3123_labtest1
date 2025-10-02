function lowerCaseWords(str = []) {
  const words = new Promise((res, rej) => {
    const filtered = str.filter((w) => typeof w === "string");

    if (filtered.length === 0) {
      rej("No string elements found");
    } else {
      res(filtered.map((w) => w.toLowerCase()));
    }
  });

  return words;
}

lowerCaseWords(["HELLO", 123, null, "WORLD"])
  .then((result) => console.log("✅", result))
  .catch((err) => console.error("❌", err));
