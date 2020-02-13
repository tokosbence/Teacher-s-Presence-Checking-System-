import { Class } from '../Model/Class';
import { Subject } from '../Model/Subject';
import { Room} from '../Model/Room';
import { Employer } from '../Model/Employer';
export class LogEntry {
    class: Class;
    subject: Subject;
    room: Room;
    employer: Employer;
}