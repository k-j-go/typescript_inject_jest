import "reflect-metadata";
import { container } from "./inversify.config";
import { COMPANY } from "./types";
import {CompanyInterface} from "./infra/interface";

const company = container.get<CompanyInterface>(COMPANY)

console.log(company.getEmployee())
