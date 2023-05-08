export default class View {
    $={};
    $$={};
    count=0;

    
    constructor() {
        this.$.read = this.#qs('[data-id="read"]');
        this.$$.messageContainer = this.#qsAll('[data-id="message-container"]');
        this.$.container = this.#qs('[data-id="container"]');
        this.$.notification = this.#qs('[data-id="notification-frequency"]');
        this.$.leftarea = this.#qs('[data-id="left-area"]')
        this.$.executed=false;
        
       
    }
        
             display(handler) {
                //display all notifications
                this.$.container.addEventListener("click",handler);
                
            }
     
     
 
    countDisplay(obj){
        
        for(let i=0; i<obj.length; i++)
        {
            if(obj[i].unread)
            {
                this.count++;
            }
        }
        if(this.$.notification.textContent)
        {
            //do noting
        }
        else {
            let textNode = document.createTextNode(this.count);
            this.$.notification.appendChild(textNode);
            this.$.notification.classList.add("notification-color")
        }
      
        
    

    }

    displayNotification(obj){
        //create a div element which will be the main div
        //for the messages
        // if(this.$.notification.textContent)
        // {
        //     //do nothing
        // }
        // else {

        // console.log("hello")
        // let div = document.createElement("div");
        // div.classList.add("content");
        // let contentDiv = document.createElement("div");
        // contentDiv.classList.add("message-container");
        // contentDiv.setAttribute("data-id","message-container");
       

        // let profileDiv = document.createElement("div");
        // profileDiv.classList.add("profile-pic");
        // let img = document.createElement("img");
        // img.setAttribute("src","assets/images/avatar-mark-webber.webp");
        // img.setAttribute("alt","profile picture of mark webber");
        // profileDiv.appendChild(img);
        // div.appendChild(profileDiv);
        
        // let profileNameDiv = document.createElement("div");
        // profileNameDiv.classList.add("profile-name");
        // let paraForProfileName = document.createElement("p");
        // let textForProfileName= document.createTextNode(obj[0].name);
        // paraForProfileName.appendChild(textForProfileName);
        // profileNameDiv.appendChild(paraForProfileName);
        // div.appendChild(profileNameDiv)
       
        // let activityDiv = document.createElement("div");
        // activityDiv.classList.add("activity");
        // let paraForActivity=document.createElement("p");
        // let textForActivity=document.createTextNode(obj[0].activity);
        // paraForActivity.appendChild(textForActivity);
        // activityDiv.append(paraForActivity);
        // div.appendChild(activityDiv)
        
        // let doneDiv = document.createElement("div");
        // doneDiv.classList.add("done-on");
        // let paraForDoneDiv= document.createElement("p");
        // let textForDoneDiv = document.createTextNode(obj[0].done);
        // paraForDoneDiv.appendChild(textForDoneDiv);
        // doneDiv.appendChild(paraForDoneDiv);
        // div.appendChild(doneDiv)
        
        // let frequencyDiv = document.createElement("div");
        // frequencyDiv.classList.add("frequency");
        // let paraForFrequency = document.createElement("p");
        // let textForFrequency=document.createTextNode("1m ago");
        // paraForFrequency.appendChild(textForFrequency);
        // frequencyDiv.appendChild(paraForFrequency);
        // div.appendChild(frequencyDiv);

        //go to each object and check and add nodes
        if(this.$.notification.textContent)
        {
            //do nothing
            
        }
        else {
            obj.forEach((element)=> {
                    console.log("element message"+element.unread);
                    let div = document.createElement("div");
                    div.classList.add("content");
                    div.setAttribute("data-id","content")
                    let contentDiv = document.createElement("div");
                    contentDiv.classList.add("message-container");
                    if(!element.unread)
                    {
                        contentDiv.classList.add("read-message")
                    }
                    contentDiv.setAttribute("data-id","message-container");
                    //profile picture
                    let profileDiv=document.createElement("div");
                    profileDiv.classList.add("profile-pic")
                    let img=document.createElement("img");
                    img.setAttribute("src",element.imgName);
                    img.setAttribute("alt","profile picture");

                    profileDiv.appendChild(img);
                    div.appendChild(profileDiv);

                    //for profile name
                    let profileNameDiv = document.createElement("div");
                    profileNameDiv.classList.add("profile-name");
                    let paraForProfileName=document.createElement("p");
                    let textForProfileName=document.createTextNode(element.name);
                    paraForProfileName.appendChild(textForProfileName);
                    profileNameDiv.appendChild(paraForProfileName);
                    div.appendChild(profileNameDiv);
                   
                    //for activity
                    let activityDiv=document.createElement("div");
                    activityDiv.classList.add("activity");
                    let paraForActivity=document.createElement("p");
                    let textForActivity=document.createTextNode(element.activity);
                    paraForActivity.appendChild(textForActivity);
                    activityDiv.appendChild(paraForActivity);
                    div.appendChild(activityDiv);


                    //for done div
                    if(element.done!=null)
                    {
                        let doneDiv=document.createElement("div");
                        doneDiv.classList.add("done-on");
                        let paraForDoneDiv = document.createElement("p");
                        let textContentDoneDiv=document.createTextNode(element.done);
                        paraForDoneDiv.appendChild(textContentDoneDiv);
                        doneDiv.appendChild(paraForDoneDiv)
                        div.appendChild(doneDiv)
                    }
                    if(element.isMessage)
                    {
                        let message = document.createElement("div");
                        message.classList.add("comment");
                        let comment = document.createElement("p");
                        let textComment =document.createTextNode(element.message);
                        comment.appendChild(textComment);
                        contentDiv.appendChild(div)
                        message.appendChild(comment)
                        contentDiv.appendChild(message);
                        this.$.container.appendChild(contentDiv)
                    }
                    
                    if(!element.isMessage)
                    {
                        contentDiv.appendChild(div)
                        this.$.container.appendChild(contentDiv);
                    }
                    
                    
                })
         }
        
    
        
    }
  
    #qs(selector)
    {
        const ele = document.querySelector(selector);
        return ele;
    }
    #qsAll(selector) {
        const ele = document.querySelectorAll(selector);
        return ele;
    }
    makeItAllRead(handler)
    {
        this.$.read.addEventListener("click",handler)
    }

    allRead(obj) {
        let newObj=obj;
        newObj.forEach((element)=> {
            element.unread=false;
        });
        obj=newObj;
    //    this.$$.messageContainer.forEach(element => {
    //     element.classList.add("read-message");
    //    });
        document.querySelectorAll('[data-id="message-container"]').forEach((element)=>{
            element.classList.add("read-message")

        })
        this.$.notification.textContent="";
        this.$.notification.textContent="0";
        this.$.notification.classList.add("notification");
        
    }


}