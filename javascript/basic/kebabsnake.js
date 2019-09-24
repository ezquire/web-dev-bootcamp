function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}

console.log(kebabToSnake("hello-world-this-is-now-snake-case"));