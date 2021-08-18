import { Dob } from "./Dob";
import { Location } from "./Location";
import { Login } from "./Login";
import { Name } from "./Name";
import { PersonID } from "./PersonID";
import { Picture } from "./Picture";
import { Registered } from "./Registered";

export interface Person {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: PersonID;
    picture: Picture;
    nat: string;
}