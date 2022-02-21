export class Course {
    constructor(
        public name: string,
        public description: string,
        public category: string,
        public subject: string,
        public time: number,
        public nbStudent: number
    ){}
}