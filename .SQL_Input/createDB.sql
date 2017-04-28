
create table chargebands
(
	chargeband_id int not null
		primary key,
	type char(11) null,
	name char(50) null,
	cost decimal(15,2) null,
	rate decimal(15,2) null,
	markup int(20) null
);
create table clientNames
(
	clientEmployeeID int not null
		primary key,
	firstName text null,
	lastName text null
);
create table clients
(
	clientID int not null
		primary key,
	clientName text null
);
create table employees
(
	pk_userID int not null
		primary key,
	active tinyint(1) not null,
	firstName char(30) null,
	lastName char(30) null,
	emailAddress varchar(45) null,
	costPerHour decimal(15,2) null,
	hoursWorked int null,
	hoursBillable int(4) null
);
create table entries
(
	entrieId int not null
		primary key,
	dateCreated date null,
	minutes decimal(15,2) default '0.00' null,
	timeEntryCost decimal(15,2) default '0.00' not null,
	fk_trafficEmployeeID int default '0' not null
);
create index fk_trafficEmployeeID
	on entries (fk_trafficEmployeeID);
alter table employees
	add constraint fkemp
		foreign key (pk_userID) references tl.entries (fk_trafficEmployeeID);
create table job_detail
(
	jobDetailId int not null
		primary key,
	dateCreated date null,
	jobDescription text null,
	jobName text null,
	fk_jobTypeListItemId int not null,
	fk_jobOwnerID int not null,
	fk_jobContactId int not null,
	fk_projectId int not null
);
create index fk_jobContactId
	on job_detail (fk_jobContactId);
create index fk_projectId
	on job_detail (fk_projectId);
create index fk_jobOwnerID
	on job_detail (fk_jobOwnerID);
alter table clientNames
	add constraint clijob
		foreign key (clientEmployeeID) references tl.job_detail (fk_jobContactId);
alter table employees
	add constraint emp_job_detail
		foreign key (pk_userID) references tl.job_detail (fk_jobOwnerID);
create table jobs
(
	jobID int(20) not null
		primary key,
	jobNumber varchar(25) null,
	jobStateType date null,
	internalDeadline date null,
	internalDeadline varchar(25) null,
	jobBillingStateType varchar(25) null,
	potentialValue decimal(15,2) null,
	estimatedSellValue decimal(15,2) null,
	billedNet decimal(15,2) default '0.00' null,
	fk_jobDetailId int not null
);
create index fk_jobDetailId
	on jobs (fk_jobDetailId);
alter table job_detail
	add constraint jobdet
		foreign key (jobDetailId) references tl.jobs (fk_jobDetailId);
create table projects
(
	projectID int not null
		primary key,
	projectDescription char(50) null,
	fk_clientID int not null,
	constraint prjjobdet
		foreign key (projectID) references tl.job_detail (jobDetailId)
);
create index fk_clientID
	on projects (fk_clientID);
alter table clients
	add constraint cnt_prj
		foreign key (clientID) references tl.projects (fk_clientID);
create table tasks
(
	taskId int not null
		primary key,
	qty int null,
	estMins int null,
	loggedMins int null,
	loggedBillableMins int null,
	estCost decimal(15,2) null,
	estRate decimal(15,2) null,
	complete tinyint(1) not null,
	fk_jobId int(20) not null
);
create index fk_jobId
	on tasks (fk_jobId);
alter table jobs
	add constraint fkjobtsk
		foreign key (jobID) references tl.tasks (fk_jobId);
SELECT CONCAT_WS('', firstName, " ", lastName) AS "Full Name", sum(minutes) as "Worked",(hoursWorked) AS "Expected Hours" FROM entries JOIN employees on fk_trafficEmployeeID = employees.pk_userID GROUP BY fk_trafficEmployeeID, firstName, lastName