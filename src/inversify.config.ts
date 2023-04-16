import { Container } from "inversify";
import { Company } from "./domain/company";
import { COMPANY, USER } from "./types";
import {Employee} from "./domain/employee";

const container = new Container();
container.bind(USER).to(Employee);
container.bind(COMPANY).to(Company);

export { container }
