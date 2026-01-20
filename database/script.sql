create database flip;
use flip;

create table aulas(
    id int auto_increment,
    numero int not null,
    ativo bit default 1,
    primary key(id)
);

create table cards(
    id int auto_increment,
    id_aula int,
    palavra_en varchar(125) not null,
    palavra_pt varchar(125) not null,
    audio varchar(20) not null,
    primary key(id),
    foreign key(id_aula) references aulas(id)
);

create table notas(
    id_card int, 
    nota int, 
    nota_maxima int not null default 12,
    foreign key(id_card) references cards(id)
    );

insert aulas value(0, 1, default);

insert cards values(0, 1, 'Do you want water ?', 'Você quer agua ?', '../audio/0001.mp3');
insert cards values(0, 1, 'Do you could help me ?', 'Você poderia me ajudar ?', '../audio/0002.mp3');
insert cards values(0, 1, 'What is your name ?', 'Qual é o seu nome ?', '../audio/0003.mp3');
insert cards values(0, 1, 'Nice to meet you', 'Prazer em conhecer você', '../audio/0004.mp3');
insert cards values(0, 1, 'My house is small.', 'Minha casa é pequena.', '../audio/0005.mp3');
insert cards values(0, 1, 'I drink water.', 'Eu bebo água.', '../audio/0006.mp3');
insert cards values(0, 1, 'I work every day.', 'Eu trabalho todo dia.', '../audio/0007.mp3');
insert cards values(0, 1, 'Have a good day!', 'Tenha um bom dia!', '../audio/0008.mp3');
insert cards values(0, 1, 'This is a bad idea.', 'Isso é uma ideia ruim.', '../audio/0009.mp3');
insert cards values(0, 1, 'Today is Monday.', 'Hoje é segunda-feira.', '../audio/0010.mp3');
insert cards values(0, 1, 'I always study.', 'Eu estudo sempre.', '../audio/0011.mp3');
insert cards values(0, 1, 'I need to sleep.', 'Eu preciso dormir.', '../audio/0012.mp3');



select * from cards;