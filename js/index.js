import View from "./View.js";


let obj =[
    {
     name:"Mark Webber",
     activity:"reacted to your recent post",
     done:"My first tournament today",
     groupName:null,
     isReacted:true,
     isFollow:false,
     join:false,
     isMessage:false,
     isCommented:false,
     message:null,
     left:false,
     unread:true,
     imgName:"assets/images/avatar-mark-webber.webp"
    },
    {
       name:"Angela Gray",
       activity:"followed you",
       done:null,
       groupName:null,
       isReacted:false,
       isFollow:true,
       join:false,
       isMessage:false,
       isCommented:false,
       message:null,
       left:false,
       unread:true,
       imgName:"assets/images/avatar-angela-gray.webp"

    },
    {
        name:"Jacob Thombson",
        activity:"has joined your group",
        done:null,
        groupName:"Chess Club",
        isReacted:false,
        isFollow:false,
        join:true,
        isMessage:false,
        isCommented:false,
        message:null,
        left:false,
        unread:true,
        imgName:"assets/images/avatar-jacob-thompson.webp"

    }, 
    {
        name:"Rizky Hasanuddin",
        activity:"sent you private message",
        done:null,
        groupName:null,
        isReacted:false,
        isFollow:false,
        join:false,
        isMessage:true,
        isCommented:false,
        message:null,
        left:false,
        unread:false,
        imgName:"assets/images/avatar-rizky-hasanuddin.webp",
        message:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and "+
        "I \'m already having lots of fun and improving my game."


    },
    {
        name:"Kimberly Smith",
        activity:"commented on your picture",
        done:"picture",
        groupName:null,
        isReacted:false,
        isFollow:false,
        join:false,
        isMessage:false,
        isCommented:true,
        left:false,
        unread:false,
        imgName:"assets/images/avatar-kimberly-smith.webp"

    },
    {
        name:"Nathan Peterson",
        activity:"reacted to your recent post",
        done:"5 end-game strategies to increase you win rate",
        groupName:null,
        isReacted:true,
        isFollow:false,
        join:false,
        isMessage:false,
        isCommented:false,
        left:false,
        unread:false,
        imgName:"assets/images/avatar-nathan-peterson.webp"


    }

]
function init() {
    const view = new View();

    view.makeItAllRead((event)=>{
        view.allRead(obj);
    })
   
        view.display((event)=>{
                localStorage.setItem("oneTime",false)
                if(localStorage.getItem("oneTime")=="false")
                {
                    view.displayNotification(obj);
              
                    view.countDisplay(obj);
                    
                }
              
            
    
        })
    
   
    
}

window.addEventListener("load",init)