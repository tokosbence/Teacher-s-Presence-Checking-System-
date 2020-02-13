import { Class } from '../Model/Class';
import { Subject } from '../Model/Subject';
import { Room} from '../Model/Room';
import { Employer } from '../Model/Employer';
import { Timetable } from '../Model/Timetable';

export class Report {
      timetable: Timetable;
      room: Room;
      subject: Subject;
      classObj: Class;
      employer: Employer;
}