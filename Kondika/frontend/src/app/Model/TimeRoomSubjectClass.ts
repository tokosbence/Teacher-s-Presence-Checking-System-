import { Timetable } from '../Model/Timetable';
import { Class } from '../Model/Class';
import { Subject } from '../Model/Subject';
import { Room} from '../Model/Room';
export class TimeRoomSubjectClass {
    timetable: Timetable;
    class: Class;
    subject: Subject;
    room: Room;
}