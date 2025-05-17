import {github} from "@/lib/axios";

export const getAllRepos = async () => {
    const {data} = await github.get("/repos");
    return data;
}