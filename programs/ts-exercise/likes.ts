

export class LikeButton{

    constructor (public likes:number, public buttonState:boolean ) {
    }

   buttonClicked(){

       if(this.buttonState){
             this.likes--;
             this.buttonState = false;
       }else {
           this.likes++;
           this.buttonState = false;
       }
       console.log('Likes - ', this.likes);
   }

}