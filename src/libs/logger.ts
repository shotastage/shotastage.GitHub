export function logger(msgs: [string]) {
    console.log("##################### INFORMATION #####################");
    msgs.forEach((msg: string) => {
        console.log(msg);
    });
    console.log("#######################################################");
}
