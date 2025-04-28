const screen = document.getElementById("screen");
const currentNumber = document.getElementById("currentNumber");
const btns = document.querySelectorAll("button");
let preNumber = "";
let currentOp = "";
const operator = "+-*/";

document.addEventListener("keydown", (e) => {
  console.log("你按下了鍵盤：", e.key, typeof e.key);
  let state_nav = "state-1";
  btns.forEach((btn) => {
    btn.click();
    if (e.key === btn.textContent) {
      btn.classList.add("active");
      setTimeout(() => {
        btn.classList.remove("active");
      }, 150);
      // 限制輸入數字及小數點
      if (/\d/.test(e.key) || e.key === "." || e.key === "-") {
        if (e.key === "-") {
          if (screen.textContent === "") {
            screen.textContent += e.key;
            currentNumber.textContent += e.key;
          }
        } else if ((e.key === "0") & (screen.textContent === "")) {
          console.log("第一個數自不能空白或是為 0");
        } else {
          screen.textContent += e.key;
          currentNumber.textContent += e.key;
          console.log(e.key);
        }
      } else if (e.key.toLocaleLowerCase() === "c") {
        // 設定清除鍵
        console.log("已觸發");
        screen.textContent = "";
        currentNumber.textContent = "";
        preNumber = "";
      } else if (e.key === "Backspace") {
        // 設定迴車鍵
        screen.textContent = screen.textContent.slice(0, -1);
        currentNumber.textContent = currentNumber.textContent.slice(0, -1);
      } else if (operator.includes(e.key)) {
      /*
      運算符號需繼續研究
      N1為 -數，運算符號需要也可以輸入-號
      */
        screen.textContent += e.key;
        console.log(e.key);

        console.log(preNumber, currentOp);
      } else if (e.key === "=") {
        // 把數值加入計算
        let N1 = "";
        let N2 = "";
        let op = "";
        let state = "N1_state";

        for (let i = 0; i < screen.textContent.length; i++) {
          const char = screen.textContent[i];
          if (/\d/.test(char) || char === ".") {
            if (state === "N1_state") {
              N1 += char;
            } else if (state === "N2_state") {
              N2 += char;
            }
          } else if (char === "-" && i === 0 && state === "N1_state") {
            // 如果遇到N1負值時
            N1 += char;
          } else if (!/\d/.test(char)) {
            op += char;
            // change state
            state = "N2_state";
          }
        }
        console.log(N1, op, N2);
        let reslut;
        console.log(screen.textContent);
        switch (op) {
          default:
            console.log("不支援運算!");
            console.log(N1);
            console.log(N2);
            break;
          case "+":
            reslut = parseFloat(N1) + parseFloat(N2);
            break;
          case "-":
            reslut = parseFloat(N1) - parseFloat(N2);
            break;
          case "*":
            reslut = parseFloat(N1) * parseFloat(N2);
            break;
          case "/":
            reslut = (parseFloat(N1) / parseFloat(N2)).toFixed(2);
            break;
        }

        screen.textContent = reslut;
        currentNumber.textContent = reslut;
        preNumber = "";
        currentOp = "";
        state_nav = "state-1";
      }
    }
  });
});
