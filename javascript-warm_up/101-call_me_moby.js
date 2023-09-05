export default function loop(times, func) {
    for (let i = 0; i < times; i++) {
        func();
    }
}