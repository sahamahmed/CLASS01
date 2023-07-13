function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("size:", size, "\nmessage:", message);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "hi");
