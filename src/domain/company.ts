import {inject, injectable} from 'inversify';
import {CompanyInterface, UserInterface} from '../infra/interface';
import {USER} from '../types';


@injectable()
class Company implements CompanyInterface {
    public employee: UserInterface

    constructor(
        @inject(USER) employee: UserInterface
    ) {
        this.employee = employee
    }

    public getEmployee(): UserInterface {
        console.log(this.employee.getName('John') + ' ' + this.employee.getAge(25))
        return this.employee
    }

    public toString() : string{
        return
    }
}

export {Company}
