
import "reflect-metadata";
import {container} from "../src/inversify.config";
import {CompanyInterface} from "../src/infra/interface";
import {COMPANY} from "../src/types";


describe('testing inject', () => {
        test("inject",
            () => {
                const company = container.get<CompanyInterface>(COMPANY)
                console.log(company.getEmployee())
            }
        )
    }
);
