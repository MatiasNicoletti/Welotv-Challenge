import { Person } from "./Person";
import { ResponseInformation } from "./ResponseInformation";

export interface ResponseObject{
    results: Person[];
    info: ResponseInformation;
}