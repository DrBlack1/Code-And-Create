function waitASecond(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num < 5) {
                reject("rejected")
            } else if (num > 5) {
                resolve("resolved")
            }
        }, 1000)
    });
}

async function process() {
    let status = await waitASecond(7);
    console.log(status);
    // "resolved"
}

process()


// resolved
// rejected
// pending