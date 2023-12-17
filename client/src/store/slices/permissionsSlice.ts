import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    classPermissions: 'app-permissions-item-box-subtitle d-none'
};

export const permissionsSlice = createSlice({
    name: 'classPermissions',
    initialState,
    reducers: {
        changeClassPermissions: (state) => {
            if(state.classPermissions.includes('d-none')){
                state.classPermissions= 'app-permissions-item-box-subtitle';
            }else{
                state.classPermissions= 'app-permissions-item-box-subtitle d-none'
            }
        }
    }
});

export const {changeClassPermissions} = permissionsSlice.actions;

export default permissionsSlice.reducer;