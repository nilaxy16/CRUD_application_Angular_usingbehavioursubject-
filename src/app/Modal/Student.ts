export class Student {
    StudentId: string;
    // id: number;
    FullName: string;
    Mobile: string;

    constructor(obj: any){
        // this.id = obj && obj.id || 0;
        this.StudentId = obj && obj.StudentId || '';
        this.FullName = obj && obj.FullName || '';
        this.Mobile = obj && obj.Mobile || '';
    }
}