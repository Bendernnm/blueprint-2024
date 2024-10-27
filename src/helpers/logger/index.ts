// Not the best logger obviously, just example of helper
// Don't do it on your own projects, use some library like winston or pino
export function log(message: string) {
    console.log(message);
}

export function error(message: string) {
    console.error(message);
}

export function warn(message: string) {
    console.warn(message);
}
