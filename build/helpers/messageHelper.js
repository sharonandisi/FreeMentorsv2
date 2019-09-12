"use strict";

var messages = {
  users: {
    auth: {
      emailUnavailable: 'This email is already in use',
      userSignup: 'User has been successfully signed up',
      userSignin: 'User has been successfully signed in',
      changeMentor: 'User has successfully be changed to a mentor',
      notUSer: 'User does not exist',
      invalidPassword: 'Please enter a valid password',
      tokenFailure: 'Failed to fetch token.Please try again',
      access: 'Access denied',
      mentorStatus: 'Mentor status not activated',
      selfChangementor: 'You cannot change yourself to a mentor'
    },
    mentors: {
      mentor: 'Success. Mentor found',
      mentors: 'Success. All mentors found',
      noMentor: 'No mentors have been found',
      changeMentor: 'User successfully changed to Mentor',
      mentorToMentoError: 'A mentor cannot request sessions',
      mentorChangeConflict: 'You cannot change a mentor twice'
    },
    failed: {
      failed: 'Bad request',
      catchError: 'Internal sever error',
      signinFail: 'Please sign up to access this service'
    }
  },
  sessions: {
    sessions: {
      session: 'Session successfully created',
      notSession: 'Session does not exist',
      pendingSession: 'Cannot request a session with one pending',
      acceptConflict: 'Conflict. Session already accepted',
      rejectConflict: 'Conflict.Session already rejected',
      accept: 'Session request accepted',
      decline: 'Session request rejected',
      mentorSessionRequest: 'Mentors cannot request sessions'
    }
  }
};
module.exports = messages;