export interface UsersState{
    users:any[];
    spinner:boolean;
    error:string;
}
export const initialUsersState:UsersState={
    users:[],
    spinner:false,
    error:null
}