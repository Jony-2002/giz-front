import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
// import { mock_data } from "@/app/data/projects";
import { StaticImageData } from "next/image";

import { API_KEY } from "@/app/configs/API_KEY";
import { Projectinterface } from "@/app/interfaces/ProjectInterface";
import axios from "axios";

interface DataInterface {
  id: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
  district: string;
  status: string;
}

interface Data {
  data: DataInterface[];
  filteredData: DataInterface[];
  searchFilter: DataInterface[];
}

interface initialStateTypes {
  loading: boolean;
  error: string | undefined;
  projects: [] | any;
  filteredData: [];
  searchFilter: [];
  inputValue: string;
}

const initialState = {
  // filteredData: [],
  // searchFilter: [],
  // inputValue: "",

  // loading: false,
  // error: "",
  // projects: [],
  data: [],
  filteredData: [],
  searchFilter: [],
} as Data;

export const fetchProject = createAsyncThunk("project/fetchProjects", () => {
  return axios.get(`${API_KEY}/get/project`).then((response) => {
    console.log(response.data);
    return response.data;
  });
});

// let status: string = "";

export const projects = createSlice({
  name: "projetcs",
  initialState,
  reducers: {
    selectFilter: (state, action: PayloadAction<string>) => {
      // status = action.payload;
      state.filteredData = state.data.filter(
        (project: DataInterface) => project.district == action.payload
      );
    },
    seacrhFilter: (state, action: PayloadAction<string>) => {
      state.filteredData = state.data.filter((project: DataInterface) => {
        if (action.payload == "") {
          console.log(current(state.data));
          return current(project);
          // return project;
        } else if (
          project.title.toLowerCase().includes(action.payload.toLowerCase())
        ) {
          console.log(current(state.data));
          return current(project);
          // return project;
        }
      });
    },

    // selectFilter: (state, action: PayloadAction<string>) => {
    //   // status = action.payload;
    //   state.filteredData = state.projects.filter(
    //     (project: DataInterface) => project.district == action.payload
    //   );
    // },
    // seacrhFilter: (state, action: PayloadAction<string>) => {
    //   state.filteredData = state.projects.filter(
    //     (project: Projectinterface) => {
    //       if (action.payload == "") {
    //         console.log(current(state.projects));
    //         return current(project);
    //         // return project;
    //       } else if (
    //         project.name_en.toLowerCase().includes(action.payload.toLowerCase())
    //       ) {
    //         console.log(current(state.projects));
    //         return current(project);
    //         // return project;
    //       }
    //     }
    //   );
    // },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchProject.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(fetchProject.fulfilled, (state, action: PayloadAction) => {
  //     state.loading = false;
  //     state.projects = action.payload;
  //     state.error = "";
  //   });
  //   builder.addCase(fetchProject.rejected, (state, action) => {
  //     state.loading = false;
  //     state.projects = [];
  //     state.error = action.error.message;
  //   });
  // },
});

export const { selectFilter, seacrhFilter } = projects.actions;
export default projects.reducer;
