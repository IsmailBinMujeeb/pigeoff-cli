import Project from "./Project";

export default interface Req {
    method: string,
    req: string;
    body?: any;
    files?: any;
    query?: any;
    project?: Project;
    header?: any;
}