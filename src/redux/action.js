const Types = {
    SET_MATCHES: 'SET_MATCHES',
};

const setMatches = quizResponses => ({
    type: Types.SET_MATCHES,
    payload: quizResponses,
});

export default { Types, setMatches }
