function delaySuccess() {
  setTimeout(() => {
    let success = { message: "delayed successed!" };
    console.log(success);
  }, 500);
}

function delayedException() {
  setTimeout(() => {
    let success = { message: "delayed failed!" };
    console.log(success);
  }, 500);
}

const resolvedPromise = new Promise((res, rej) => {
  if (res) {
    delaySuccess();
  }
});

const rejectedPromise = new Promise((res, rej) => {
  if (rej) {
    delayedException();
  }
});

console.log(rejectedPromise);
console.log(rejectedPromise);
