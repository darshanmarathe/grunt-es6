class MyComponent {
    constructor(fanme, lname) {
        this.obj = {};
        this.obj.fname = fanme;
        this.obj.lname = lname;
    }

    render() {
        const { fname, lname } = this.obj;

        return `your name is ${fname} ${lname}`;
    }

}