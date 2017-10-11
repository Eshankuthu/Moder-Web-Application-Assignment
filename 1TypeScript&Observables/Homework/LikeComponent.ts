 class LikeComponent{
    likesCount: number;
    active: boolean;

    constructor(likesCount:number, active:boolean){
        this.likesCount= likesCount;
        this.active=active;
    }

    onClick(){
        if(this.active){
            this.likesCount++;
            console.log(this.likesCount);
        }else{
            this.likesCount--;
            console.log(this.likesCount);
        }
    }
}

var a = new LikeComponent(10, false);
a.onClick();