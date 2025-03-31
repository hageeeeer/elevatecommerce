
declare type SuccessfulResponse<t>  ={
message:'success'
}&t;
declare type ErrorResponse = {
error:string;
}

 declare type ApiResponse<t> = SuccessfulResponse<t> | ErrorResponse