import jwt_decode from 'jwt-decode';

export const validateUser = () => {
   let access_token = localStorage.getItem("access_token");
   let user_id = localStorage.getItem("user_id");
   
   if( (access_token === undefined) || (jwt_decode(access_token).sub !== parseInt(user_id, 10)) ) {
        return false;
   }else{
       return true;
   }
}