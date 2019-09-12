"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("../../../config");

var User = {
  user001: {
    firstname: 'sharon',
    lastname: 'andisi',
    email: 'thomas@gmail.com',
    password: 'shayert',
    address: 'nairobi',
    bio: 'mama simi',
    occupation: 'developer',
    expertise: 'software'
  },
  user002: {
    firstname: '',
    lastname: 'andisi',
    email: 'sharonandi@gmail.com',
    password: 'shay123',
    address: 'nairobi',
    occupation: 'mama',
    bio: 'I am a dev mama',
    expertise: 'motherhood'
  },
  user003: {
    firstname: 'sharon',
    lastname: '',
    email: 'sharonandi@gmail.com',
    password: 'shay123',
    address: 'nairobi',
    occupation: 'mama',
    bio: 'I am a dev mama'
  },
  user004: {
    firstname: 'sharon',
    lastname: 'andisi',
    email: '',
    password: 'shay123',
    address: 'nairobi',
    occupation: 'mama',
    bio: 'I am a dev mama',
    expertise: 'motherhood'
  },
  user005: {
    firstname: 'sharon',
    lastname: 'andisi',
    email: 'sharonisi@gmail.com',
    password: '',
    address: 'nairobi',
    occupation: 'mama',
    bio: 'I am a dev mama',
    expertise: 'motherhood'
  },
  user006: {
    firstname: 'sharon',
    lastname: 'andisi',
    email: 'sharoisi@gmail.com',
    password: 'shay123',
    address: '',
    occupation: 'mama',
    bio: 'I am a dev mama',
    expertise: 'motherhood'
  },
  user007: {
    firstname: 'sharon',
    lastname: 'andisi',
    email: 'snandisi@gmail.com',
    password: 'shay123',
    address: 'nairobi',
    occupation: '',
    bio: 'I am a dev mama',
    expertise: 'motherhood'
  },
  user008: {
    firstname: 'sharon',
    lastname: 'andisi',
    email: 'aronandisi@gmail.com',
    password: 'shay123',
    address: 'nairobi',
    occupation: 'mama',
    bio: '',
    expertise: 'motherhood'
  },
  user009: {
    firstname: 'sharon',
    lastname: 'andisi',
    email: 'sha@gmail.com',
    password: 'shay123',
    address: 'nairobi',
    occupation: 'mama',
    bio: 'I am a dev mama',
    expertise: ''
  },
  user010: {
    email: 'thomas@gmail.com',
    password: 'shayert'
  },
  user011: {
    email: '',
    password: 'shay123'
  },
  user012: {
    email: 'shay@gmail.com',
    password: ''
  },
  user13: {
    email: 'qwertyui@gmail.com',
    password: 'qwerty12345'
  },
  admin: {
    firstname: 'admin',
    lastname: 'admin',
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD,
    address: 'adminville',
    occupation: 'Administrator',
    bio: 'I am admin',
    expertise: 'administration',
    isAdmin: true
  },
  admin001: {
    email: process.env.ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD
  },
  user014: {
    firstname: 'iyke',
    lastname: 'cadeau',
    email: 'baba@gmail.com',
    password: 'shayert',
    address: 'nairobi',
    bio: 'mama simi',
    occupation: 'developer',
    expertise: 'software'
  },
  user015: {
    email: 'thomas@gmail.com',
    password: 'dgewhgdgewgkcg'
  },
  session001: {
    mentorid: 329329,
    questions: 'How to do you create cat videos?'
  },
  session002: {
    questions: 'How to do you create cat videos?'
  }
};
var _default = User;
exports["default"] = _default;