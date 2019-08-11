export class CommunityEntity {
    constructor(
        public id: string,
        public title: string,
        public titledisp: string,
        public image: string,
        public likes: number,
        public comments: number,
        public disp: string,
        public icon: string,
        public createdate: Date,
        public isactive: boolean
    ) {}
}
