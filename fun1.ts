//Optional Parameter

function showDetails(id:number,name:string,e_mail_id?:string)
 {   
    console.log("ID:", id, " Name:",name);   
    
    if(e_mail_id!=undefined)   

    console.log("Email-Id:",e_mail_id);   
 }  

 showDetails(101,"Virat Kohli");

 showDetails(105,"Sachin","sachin@javatpoint.com");  