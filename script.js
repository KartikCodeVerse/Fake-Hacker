const hacking = async () => {
  const addParagraph = (text) => {
    const newElement = document.createElement("p");
    newElement.textContent = text;
    terminal.appendChild(newElement);
    return newElement;
  };

  const blinkDots = (dotElements) => {
    let index = 0;
    return setInterval(() => {
      dotElements[index].style.visibility =
        dotElements[index].style.visibility === "hidden" ? "visible" : "hidden";
      index = (index + 1) % dotElements.length;
    }, 100);
  };

  const addWithDots = async (text, duration) => {
    const paragraph = addParagraph(text + " ");
    const dots = Array.from({ length: 3 }, () => {
      const dotSpan = document.createElement("span");
      dotSpan.className = "dot";
      dotSpan.textContent = ".";
      paragraph.appendChild(dotSpan);
      return dotSpan;
    });
    const blinkInterval = blinkDots(dots);
    await new Promise((resolve) => setTimeout(resolve, duration));
    clearInterval(blinkInterval);
    dots.forEach((dot) => (dot.style.visibility = "hidden"));
  };

  await addWithDots("Initializing hacking ☠", 1000);
  await addWithDots("Reading Your File 👩🏿‍💻", 3000);
  await addWithDots("Password Files Detected 🔑", 3000);
  await addWithDots(
    "Sending All Passwords and Personal files to Server 🚀",
    3000
  );
  await addWithDots("Cleaning Up 🚫", 3000);
  await addParagraph("Hacking Successfully Complete 🎉✅", 3000);
};

const terminal = document.querySelector(".terminal");
hacking();
