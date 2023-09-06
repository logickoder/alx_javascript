class Rectangle {
    constructor(w, h) {
        if (w > 0) {
            this.width = w
        }
        if (h > 0) {
            this.height = h
        }
    }

    print() {
        let str = ''
        for (let i = 0; i < this.height; i++) {
            str += 'X'.repeat(this.width) + '\n'
        }
        console.log(str.slice(0, -1))
    }
}

module.exports = Rectangle