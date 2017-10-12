 export default class LikeComponent{
    private _likesCount: number;
    private  _active: boolean;

    constructor() {
        this._likesCount = 0;
        this._active = true;
    }
    
    get like(){
        return this._likesCount;
    }

    get active(){
        return this._active;
    }

    set active(value:boolean){
       this._active=value;
    }
    onClick(){
        if(!this.active){
            this._likesCount++;
            console.log("Likes Increase"+ this._likesCount);
        }else{
            this._likesCount--;
            console.log("Likes Decrease" + this._likesCount);
        }
    }
}
