import {injectable} from "inversify";
import {UserInterface} from "../infra/interface";

@injectable()
class Employee implements UserInterface {

    public getName(name: string): string {
        return name;
    }

    public getAge(age: number): number {
        return age;
    }
}
export {Employee}
