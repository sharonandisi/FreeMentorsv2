const messages = {
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
            mentorStatus: 'Mentor status not activated'
        },

        mentors: {
            mentor: 'Success. Mentor found',
            mentors: 'Success. All mentors found',
            noMentor: 'No mentors have been found',
            changeMentor: 'User successfully changed to Mentor'
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
            acceptConflict: 'Conflict. Session already accepted',
            rejectConflict: 'Conflict.Session already rejected',
            accept: 'Session request accepted',
            decline: 'Session request rejected'
        }
    }
}

module.exports = messages;