import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "./../../../services/API";
import { toast } from "react-toastify";
import Register from './../../../pages/auth/Register';

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      // const {data} = await API.post(' http://localhost:8080/api/v1/auth/login',{role,email,password})
      // store token
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        setTimeout(() => {
          window.location.replace('/');
        }, 2000);
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//  register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website
       });
       if(data.success){
        toast.success("User Registerd Successfully")
        setTimeout(() => {
          window.location.replace('/login');
        }, 3000);
       }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// current user
export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async ({rejectWithValue}) => {
    try{
        const res = await API.get('/auth/current-user')
        if(res?.data){
          return res?.data
        }
    }catch(error){
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
)