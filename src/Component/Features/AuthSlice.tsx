import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    isAuthenticated: boolean;
    error: string | null;
}

export interface Credentials {
    email: string;
    password: string;
}

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    isAuthenticated: false,
    error: null,
};

const fetchApiData = async (url: string, body: Credentials) => {
    const res = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    return await res.json();
};

export const signUpUser = createAsyncThunk('username/signUpUser', async (credentials: Credentials) => { //first unique arument with credential type
    const response = await fetchApiData('https://reqres.in/api/register', credentials);
    return response;
});

export const signInUser = createAsyncThunk('username/signInUser', async (credentials: Credentials) => {
    const response = await fetchApiData('https://reqres.in/api/login', credentials);
    return response;
});

const authSlice = createSlice({
    name: 'username',
    initialState,
    reducers: {
        setTokenAuth: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        setUserAuth: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
            localStorage.setItem('isAuthenticated', JSON.stringify(action.payload));
        },
        clearState: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
            localStorage.clear();
        },
    },
    extraReducers: (builder) => {
        builder
                        // signupuser
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isAuthenticated = true;
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('user', JSON.stringify(action.payload.user));
                localStorage.setItem('isAuthenticated', JSON.stringify(true));
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            })
                        //signinuser
            .addCase(signInUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isAuthenticated = true;
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('user', JSON.stringify(action.payload.user));
                localStorage.setItem('isAuthenticated', JSON.stringify(true));
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const { setTokenAuth, setUserAuth, setAuth, clearState } = authSlice.actions;

export default authSlice.reducer;