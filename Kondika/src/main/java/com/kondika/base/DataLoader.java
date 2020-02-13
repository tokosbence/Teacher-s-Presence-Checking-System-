package com.kondika.base;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.kondika.base.model.EmployeUser;
import com.kondika.base.model.Employer;
import com.kondika.base.model.Lessonplan;
import com.kondika.base.model.Room;
import com.kondika.base.model.Schedule;
import com.kondika.base.model.Subject;
import com.kondika.base.model.TimeRoomSubjectClass;
import com.kondika.base.model.Class;
import com.kondika.base.model.Timetable;
import com.kondika.base.services.ClassServices;
import com.kondika.base.services.EmployerServices;
import com.kondika.base.services.EmployerUserServices;
import com.kondika.base.services.LessonplanServices;
import com.kondika.base.services.LogEntryServices;
import com.kondika.base.services.RoomServices;
import com.kondika.base.services.ScheduleServices;
import com.kondika.base.services.SubjectServices;
import com.kondika.base.services.TimeRoomSubjectClassServices;
import com.kondika.base.services.TimetableServices;


@Component
public class DataLoader implements ApplicationRunner {

	private SubjectServices subjectServices;
	private TimetableServices timetableServices;
	private EmployerUserServices employerUserServices;
	private EmployerServices employerServices;
	private RoomServices roomServices;
	private ClassServices classServices;
	private ScheduleServices scheduleServices;
	private LessonplanServices lessonplanServices;
	private TimeRoomSubjectClassServices timeRoomSubjectClassServices ;
	private LogEntryServices logService;
	
    @Autowired
    public DataLoader(
    		SubjectServices subjectServices,
    		TimetableServices timetableServices,
    		EmployerUserServices employerUserServices,
    		EmployerServices employerServices,
    		RoomServices roomServices,
    		ClassServices classServices,
    		ScheduleServices scheduleServices,
    		LessonplanServices lessonplanServices,
    		TimeRoomSubjectClassServices timeRoomSubjectClassServices,
    		LogEntryServices logService
    		)

    {
        this.subjectServices = subjectServices;
		this.timetableServices = timetableServices;
		this.employerUserServices = employerUserServices;
		this.employerServices = employerServices;
		this.roomServices = roomServices;
		this.classServices = classServices;
		this.scheduleServices = scheduleServices;
		this.lessonplanServices = lessonplanServices;
		this.timeRoomSubjectClassServices =timeRoomSubjectClassServices;
		this.classServices = classServices;
		this.roomServices = roomServices;
		this.subjectServices = subjectServices;
		this.timetableServices = timetableServices;
		this.timeRoomSubjectClassServices = timeRoomSubjectClassServices;
		this.logService = logService;
    }

    private void CleanDatabase() {
    	logService.deleteAllLogEntry();
    	timeRoomSubjectClassServices.deleteAllTimeRoomSubjectClass();
    	timetableServices.deleteAllTimetable();
    	classServices.deleteAll();
    	lessonplanServices.deleteAllLessonplan();
    	subjectServices.deleteAllSubject();
    	employerServices.deleteAllEmployer();
    	employerUserServices.deleteAllUser();
    }
    
    private void CreateDatabase1() {
    	
    	
    	java.util.Date date = new java.util.Date();
    	int currentHour=date.getHours();
    	
    	employerUserServices.addUser(new EmployeUser(100, "admin", "$2a$10$FvotHQwamV2ScKFq3kDiJeDZYVhngPPCXiykqGbVSdLg7Fm5V2khy", "1"));
    	employerUserServices.addUser( new EmployeUser(1, "bere", "$2a$10$n1m9bfTFx4DQDLFBMBMhReStp9mjnkZCXu4t3jmtH8WSz/.ONy8Vq", "0"));
    	employerUserServices.addUser( new EmployeUser(2, "simon", "$2a$10$n1m9bfTFx4DQDLFBMBMhReStp9mjnkZCXu4t3jmtH8WSz/.ONy8Vq", "0"));
    	employerUserServices.addUser( new EmployeUser(3, "berde", "$2a$10$n1m9bfTFx4DQDLFBMBMhReStp9mjnkZCXu4t3jmtH8WSz/.ONy8Vq", "0"));
    	employerUserServices.addUser( new EmployeUser(4, "ferencz", "$2a$10$n1m9bfTFx4DQDLFBMBMhReStp9mjnkZCXu4t3jmtH8WSz/.ONy8Vq", "0"));
    	employerUserServices.addUser(new EmployeUser(5,"adminom","$2a$10$1aCzSEHCNSpqsnsOsU8CbO2sbt3WOxRlkBL0tz4OS2NtTJQC5YMPa","1"));
    	employerUserServices.addUser(new EmployeUser(6,"Katica","$2a$10$9NCsomqdiODaHQen5V/8.eMqeKNdAMmjlmExp4eIGg6e/yhMHMFkC","0"));
    	

    	employerServices.addEmployer(new Employer(1,employerUserServices.getUser("bere"),"Bere","Norbert","bere@yahoo.com","0451236410",24,"2880225261306","Lacko utca","F", "111",
    			new ArrayList<Subject>(),
    			new ArrayList<Lessonplan>()));
    	employerServices.addEmployer(new Employer(2,employerUserServices.getUser("simon"),"Simon","Katica","simon@yahoo.com","0451236410",24,"2880225261306","Lacko utca","F", "222",
    			new ArrayList<Subject>(),
    			new ArrayList<Lessonplan>()));
    	employerServices.addEmployer(new Employer(3,employerUserServices.getUser("berde"),"Berde","Sándor","berde@yahoo.com","0451236410",24,"2880225261306","Lacko utca","F", "333",
    			new ArrayList<Subject>(),
    			new ArrayList<Lessonplan>()));
    	employerServices.addEmployer(new Employer(4,employerUserServices.getUser("ferencz"),"Ferencz","Ildikó","ferencz@yahoo.com","0451236410",24,"2880225261306","Lacko utca","F", "444",
    			new ArrayList<Subject>(),
    			new ArrayList<Lessonplan>()));

    	
        subjectServices.addSubject(new Subject(1,"Angol",3, "van"));
        subjectServices.addSubject(new Subject(2,"Matematika",4, "nincs"));  
        subjectServices.addSubject(new Subject(3,"Nemet",5, "nincs"));  
        subjectServices.addSubject(new Subject(4,"Magyar",6, "van"));  
    	
    	
    	timetableServices.addTimetable(new Timetable(1, Timetable.Day.MONDAY, new Time(currentHour, 0, 0), new Time(currentHour+1, 0, 0) ));
    	timetableServices.addTimetable(new Timetable(2, Timetable.Day.TUESDAY, new Time(currentHour, 0, 0),  new Time(currentHour+1, 0, 0) ));
    	timetableServices.addTimetable(new Timetable(3, Timetable.Day.WEDNESDAY, new Time(currentHour, 0, 0), new Time(currentHour+1, 0, 0)));
    	timetableServices.addTimetable(new Timetable(4, Timetable.Day.THURSDAY, new Time(currentHour, 0, 0),  new Time(currentHour+1, 0, 0)));
    	timetableServices.addTimetable(new Timetable(5, Timetable.Day.FRIDAY, new Time(currentHour, 0, 0),  new Time(currentHour+1, 0, 0)));
    	timetableServices.addTimetable(new Timetable(6, Timetable.Day.SATURDAY, new Time(currentHour, 0, 0),  new Time(currentHour+1, 0, 0)));
    	
    	
   	
        roomServices.addRoom(new Room(1, "Nagy Lajos", "Nagy Janos", 1, "111"));
        roomServices.addRoom(new Room(2, "Janosi Zsolt", "Nagy Janos", 2, "222"));
        roomServices.addRoom(new Room(3, "Petofi Sandor", "Nagy Janos", 2, "333"));
        roomServices.addRoom(new Room(4, "Margaret Isac", "Nagy Janos", 3, "444"));

        
        classServices.addClass(new Class(1, "IX.A", "Matematika-Informatika", "Bere Norbert", 20));
        classServices.addClass(new Class(2, "IX.B", "Filológia", "Simon Katica", 20));
        classServices.addClass(new Class(3, "X.A", "Matematika-Informatika", "Berde Sándor", 20));
        classServices.addClass(new Class(4, "X.B", "Matematika-Informatika", "Ferencz Ildikó", 20));

        
        timeRoomSubjectClassServices.addTimeRoomSubjectClass(
        		new TimeRoomSubjectClass(
        				classServices.getClass("IX.A"),
        				subjectServices.getSubject("Angol"),
        				roomServices.getRoom("Nagy Lajos"),
        				timetableServices.getTimetable(Timetable.Day.MONDAY, new Time(currentHour, 0, 0), new Time(currentHour+1, 0, 0))
        				)
        		);
      
        timeRoomSubjectClassServices.addTimeRoomSubjectClass(
        		new TimeRoomSubjectClass(
        				classServices.getClass("IX.B"),
        				subjectServices.getSubject("Matematika"),
        				roomServices.getRoom("Janosi Zsolt"),
        				timetableServices.getTimetable(Timetable.Day.TUESDAY, new Time(currentHour, 0, 0), new Time(currentHour+1, 0, 0))
        				)
        		);

        timeRoomSubjectClassServices.addTimeRoomSubjectClass(
        		new TimeRoomSubjectClass(
        				classServices.getClass("X.A"),
        				subjectServices.getSubject("Nemet"),
        				roomServices.getRoom("Petofi Sandor"),
        				timetableServices.getTimetable(Timetable.Day.WEDNESDAY, new Time(currentHour, 0, 0), new Time(currentHour+1, 0, 0))
        				)
        		);

        timeRoomSubjectClassServices.addTimeRoomSubjectClass(
        		new TimeRoomSubjectClass(
        				classServices.getClass("X.B"),
        				subjectServices.getSubject("Magyar"),
        				roomServices.getRoom("Margaret Isac"),
        				timetableServices.getTimetable(Timetable.Day.THURSDAY, new Time(currentHour, 0, 0), new Time(currentHour+1, 0, 0))
        				)
        		);
        		
        timeRoomSubjectClassServices.addTimeRoomSubjectClass(
        		new TimeRoomSubjectClass(
        				classServices.getClass("X.B"),
        				subjectServices.getSubject("Magyar"),
        				roomServices.getRoom("Margaret Isac"),
        				timetableServices.getTimetable(Timetable.Day.FRIDAY, new Time(currentHour, 0, 0), new Time(currentHour+1, 0, 0))
        				)
        		);
        
        timeRoomSubjectClassServices.addTimeRoomSubjectClass(
        		new TimeRoomSubjectClass(
        				classServices.getClass("X.A"),
        				subjectServices.getSubject("Nemet"),
        				roomServices.getRoom("Petofi Sandor"),
        				timetableServices.getTimetable(Timetable.Day.FRIDAY, new Time(currentHour, 0, 0), new Time(currentHour+1, 0, 0))
        				)
        		);
        
        timeRoomSubjectClassServices.addTimeRoomSubjectClass(
        		new TimeRoomSubjectClass(
        				classServices.getClass("X.A"),
        				subjectServices.getSubject("Nemet"),
        				roomServices.getRoom("Petofi Sandor"),
        				timetableServices.getTimetable(Timetable.Day.SATURDAY, new Time(currentHour, 0, 0), new Time(currentHour+1, 0, 0))
        				)
        		);
        
        timeRoomSubjectClassServices.addTimeRoomSubjectClass(
        		new TimeRoomSubjectClass(
        				classServices.getClass("X.B"),
        				subjectServices.getSubject("Magyar"),
        				roomServices.getRoom("Margaret Isac"),
        				timetableServices.getTimetable(Timetable.Day.SATURDAY, new Time(currentHour, 0, 0), new Time(currentHour+1, 0, 0))
        				)
        		);

        
        scheduleServices.addSchedule(new Schedule(1, new Date(7,17,2017), new Date(9,22,2017), 10 ));
        scheduleServices.addSchedule(new Schedule(2, new Date(7,11,2017), new Date(1,26,2018), 22 ));
        scheduleServices.addSchedule(new Schedule(3, new Date(2,11,2018), new Date(6,22,2018), 19 ));
        
        lessonplanServices.addLessonplan(new Lessonplan(1, "Ismetles", 2, "Adott tulajdonságú elemek halmazba rendezése.  ", 2 , employerServices.getEmployer("111")));
        lessonplanServices.addLessonplan(new Lessonplan(2, "Logaritmus", 2, "A logaritmus két szám között értelmezett matematikai művelet, amely közeli kapcsolatban van a hatványozással.", 2,employerServices.getEmployer("111")));
        lessonplanServices.addLessonplan(new Lessonplan(3,"Osztalyfonoki", 1, "kommunikációs készség fejlesztése", 1,employerServices.getEmployer("111")));
        lessonplanServices.addLessonplan(new Lessonplan(4,"Osztalyfonoki", 1, "Koncentráció és szociális készség fejlesztése", 2,employerServices.getEmployer("111")));
        lessonplanServices.addLessonplan(new Lessonplan(5,"Irodalom fogalma", 1, "Irodalomnak nevezzük azokat az írott műveket, szövegeket tágabb értelemben, amelyeket többnyire nagyobb nyilvánosság elé szánnak.  ", 1,employerServices.getEmployer("111")));
        lessonplanServices.addLessonplan(new Lessonplan(6,"Rugalmasság", 2, "A fizikában a rugalmasság szó, amit a vezethető szóból, számos modern nyelvhez hasonlóan elasztikus tulajdonságnak is nevezhetünk. ", 2,employerServices.getEmployer("111")));
        lessonplanServices.addLessonplan(new Lessonplan(7,"Romania domborzata", 1, "A Kárpátok hegyláncai Románia területének nagy részét uralják, legmagasabb csúcsai 2500 métert is elérik.", 2,employerServices.getEmployer("111")));
    }
    
    public void run(ApplicationArguments args) {
    	CleanDatabase();
    	CreateDatabase1();
    }    	
}